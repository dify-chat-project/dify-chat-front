# Next.js 構築手順書

## 1. プロジェクト環境について

- ✅ Gitリポジトリは既に初期化済み
- プロジェクト名: dify-chat-front
- 現在のディレクトリ: `/home/k-nakatsuji/workspace/dify-chat/front`

## 2. Next.jsプロジェクトの初期化

### 2.1 Next.jsアプリケーションの作成

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

#### オプションの説明

- `--typescript`: TypeScriptを使用
- `--tailwind`: Tailwind CSSを使用
- `--eslint`: ESLintを設定
- `--app`: App Routerを使用（Next.js 13+の推奨方式）
- `--src-dir`: srcディレクトリを使用
- `--import-alias "@/*"`: パスエイリアスを設定

### 2.2 依存関係のインストール確認

```bash
npm install
```

## 3. 初期設定とカスタマイズ

### 3.1 開発サーバーの起動確認

```bash
npm run dev
```

→ <http://localhost:3000> でアクセス可能

### 3.2 必須・推奨パッケージのインストール

#### 🚀 必須パッケージ（Prettier設定）

```bash
# コードフォーマッター（超重要！）
npm install -D prettier prettier-plugin-tailwindcss

# 基本ユーティリティ（クラス名結合用）
npm install clsx tailwind-merge
```

#### 🎨 デザイン関連（推奨）

```bash
# アイコンライブラリ（軽量で使いやすい）
npm install lucide-react

# より高度なUIが必要になったら追加
# npm install @headlessui/react
# npm install @radix-ui/react-slot
```

#### 📦 状態管理（複雑なアプリになったら追加）

```bash
# シンプルで学習コストが低い
# npm install zustand

# サーバー状態管理（API通信が多い場合）
# npm install @tanstack/react-query
```

### 3.3 Prettierの詳細設定手順

#### Step 1: prettier.config.js の作成

```bash
touch prettier.config.js
```

```javascript
/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 80,
  plugins: ['prettier-plugin-tailwindcss'],
}
```

#### Step 2: .prettierignore の作成

```bash
touch .prettierignore
```

.prettierignoreの内容：

```
# ビルド出力
.next/
out/
dist/
build/

# 依存関係
node_modules/

# ログファイル
*.log

# 環境変数
.env*

# その他
.DS_Store
*.tsbuildinfo
```

#### Step 3: package.jsonにフォーマットスクリプト追加

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

### 3.4 VS Code設定（推奨）

#### .vscode/settings.json の作成

```bash
mkdir -p .vscode
touch .vscode/settings.json
```

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  }
}
```

#### VS Code推奨拡張機能

```json
// .vscode/extensions.json も作成すると便利
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

## 4. プロジェクト構造の整理

### 4.1 推奨ディレクトリ構造

```
src/
├── app/                 # App Router（Next.js 13+）
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/          # 再利用可能なコンポーネント
│   ├── ui/             # 基本UIコンポーネント
│   └── forms/          # フォーム関連コンポーネント
├── lib/                # ユーティリティ関数
├── hooks/              # カスタムフック
├── types/              # TypeScript型定義
└── styles/             # グローバルスタイル
```

### 4.2 基本的なユーティリティファイルの作成

#### src/lib/utils.ts（必須）

```bash
mkdir -p src/lib
touch src/lib/utils.ts
```

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind CSSのクラス名を効率的に結合するユーティリティ関数
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 使用例:
// cn('px-4 py-2', 'bg-blue-500', isActive && 'bg-blue-700')
// cn('text-sm text-gray-500', className) // propsのclassNameと結合
```

## 4.3 🎨 デザイン系ツールについて

### Tailwind CSS（既に含まれる）✅

- **役割**: ユーティリティファーストのCSSフレームワーク
- **初心者への利点**:
  - CSSを書かずにスタイリング可能
  - レスポンシブデザインが簡単
  - 一貫したデザインシステム

### アイコンライブラリ：lucide-react 🎯

```bash
# 軽量で美しいアイコンセット
npm install lucide-react
```

**使用例**:

```tsx
import { Heart, User, Settings } from 'lucide-react'

export function IconExample() {
  return (
    <div className="flex gap-4">
      <Heart className="h-6 w-6 text-red-500" />
      <User className="h-6 w-6 text-blue-500" />
      <Settings className="h-6 w-6 text-gray-500" />
    </div>
  )
}
```

### より高度なUIライブラリ（後から必要に応じて）

#### Headless UI（Tailwindとの相性◎）

```bash
# アクセシブルなUIコンポーネント
npm install @headlessui/react
```

#### Radix UI（より高機能）

```bash
# 高品質なプリミティブコンポーネント
npm install @radix-ui/react-slot
```

### 🚫 最初は避けるべきもの

- **Material-UI/Ant Design**: 学習コストが高い
- **Styled-components**: Tailwindと競合
- **複数のアイコンライブラリ**: 統一性が失われる

### 📋 結論：最小デザインスタック

```bash
# これだけで十分美しいアプリが作れます
✅ Tailwind CSS（標準搭載）
✅ lucide-react（アイコン）
✅ clsx + tailwind-merge（ユーティリティ）
```

## 5. 開発環境設定

### 5.1 環境変数の設定

```bash
# .env.local ファイルを作成
touch .env.local
```

### 5.2 .gitignore の確認・更新

Next.jsの作成時に自動で設定されますが、追加で以下を確認：

```
# 環境変数
.env*.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

## 6. 実行コマンド一覧

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクション起動
npm start

# リンター実行
npm run lint

# TypeScriptチェック
npx tsc --noEmit
```

## 7. 初期セットアップ後の確認事項

- [ ] 開発サーバーが正常に起動する
- [ ] TypeScriptエラーがない
- [ ] ESLintエラーがない
- [ ] Tailwind CSSが正常に動作する
- [ ] Hot Reloadが動作する

## 8. 📋 実行チェックリスト（推奨順序）

### Phase 1: 基本セットアップ

- [ ] `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
- [ ] `npm install clsx tailwind-merge`
- [ ] `npm install -D prettier prettier-plugin-tailwindcss`
- [ ] `npm install lucide-react`

### Phase 2: 設定ファイル作成

- [ ] `prettier.config.js` 作成
- [ ] `.prettierignore` 作成
- [ ] `src/lib/utils.ts` 作成
- [ ] `.vscode/settings.json` 作成（VS Code使用時）
- [ ] `package.json` にフォーマットスクリプト追加

### Phase 3: 動作確認

- [ ] `npm run dev` で開発サーバー起動
- [ ] <http://localhost:3000> でアクセス確認
- [ ] `npm run format` でフォーマット動作確認
- [ ] VS Codeでファイル保存時の自動フォーマット確認

## 9. 🎯 実際の開発フロー例

```bash
# 1. コンポーネント作成
touch src/components/Button.tsx

# 2. 自動フォーマット適用
npm run format

# 3. 開発サーバーで確認
npm run dev
```

## 10. ❓ よくある質問

### Q: なぜこんなに設定が必要なの？

**A**: 最初に設定しておくことで、後の開発が劇的に楽になります。特にPrettierは「考えなくて良い」環境を作ってくれます。

### Q: デザイン系ツールはもっと必要では？

**A**: **Tailwind CSS + lucide-react で十分**です。React初心者の場合、まずはこの組み合わせで慣れることが重要です。

### Q: 他のツールはいつ追加すべき？

**A**:

- **状態管理（Zustand）**: データが複雑になったら
- **UI ライブラリ（Headless UI）**: より高度なコンポーネントが必要になったら
- **フォーム管理（React Hook Form）**: 複雑なフォームを作るとき

### Q: package.jsonが複雑になるのでは？

**A**: この最小構成なら依存関係は10個程度。管理しやすい範囲です。

## 11. 次のステップ

1. 基本的なコンポーネント作成の練習
2. Tailwind CSSでのスタイリング練習
3. 簡単なページ遷移の実装
4. API連携（必要に応じて）

---

**🚀 準備完了です！この構成でモダンで保守性の高いNext.jsアプリケーションを開発できます。**
