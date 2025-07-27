import globals from 'globals'
import pluginNext from '@next/eslint-plugin-next'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

// Next.js ルール（recommended + core-web-vitals）をベースに
// TypeScript は recommended を追加（型情報あり版に切替も可）
export default [
  {
    name: 'next-base',
    files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
      parser: tseslint.parser,
    },
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      // 一般的なコード品質ルール
      'no-console': 'warn',
      'prefer-const': 'error',
    },
  },

  // TypeScript 推奨（型なし版）
  ...tseslint.configs.recommended.map((c) => ({
    ...c,
    files: ['**/*.{ts,tsx}'],
  })),

  // TypeScript関連の追加ルール
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Prettierとの競合回避（最後に配置が重要）
  eslintConfigPrettier,

  // 無視パターン
  {
    ignores: ['node_modules', '.next', 'dist', 'out', 'coverage', '**/*.d.ts'],
  },
]
