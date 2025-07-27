# Dify Chat Front

Next.js + TypeScript + Tailwind CSS + Docker で構築されたモダンなチャットアプリケーション

## 🚀 特徴

- **Next.js 15** - 最新のApp Router使用
- **TypeScript** - 型安全性
- **Tailwind CSS** - ユーティリティファーストCSS
- **Lucide React** - 美しいアイコンライブラリ
- **Docker** - コンテナ化された開発・本番環境
- **Prettier** - 自動コードフォーマット
- **ESLint** - コード品質チェック

## 🛠️ 開発環境セットアップ

### 方法1: ローカル環境（推奨）

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# http://localhost:3000 でアクセス
```

## 📦 利用可能なスクリプト

```bash
npm run dev          # 開発サーバー起動（Turbopack使用）
npm run build        # プロダクションビルド
npm run start        # プロダクションサーバー起動
npm run lint         # ESLintチェック
npm run format       # Prettierフォーマット
npm run format:check # フォーマットチェック
```

## 🐳 Docker コマンド

```bash
# 開発環境
docker-compose --profile dev up

# 本番環境
docker-compose up

# イメージ再ビルド
docker-compose up --build

# バックグラウンド実行
docker-compose up -d

# 停止
docker-compose down
```

## 📁 プロジェクト構造

```bash
src/
├── app/                 # App Router（Next.js 13+）
│   ├── globals.css     # グローバルスタイル
│   ├── layout.tsx      # ルートレイアウト
│   └── page.tsx        # メインページ
├── components/          # 再利用可能なコンポーネント
├── lib/                # ユーティリティ関数
│   └── utils.ts        # clsx + tailwind-merge
└── types/              # TypeScript型定義
```

## 🎨 コーディング規約

- **フォーマット**: Prettier（保存時自動実行）
- **リント**: ESLint（Next.js設定）
- **スタイル**: Tailwind CSS
- **アイコン**: Lucide React

## 🚀 本番デプロイ

```bash
# Dockerでビルド
docker-compose up --build

# または直接ビルド
npm run build
npm start
```

## 📚 技術スタック

- [Next.js](https://nextjs.org/) - Reactフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全なJavaScript
- [Tailwind CSS](https://tailwindcss.com/) - CSSフレームワーク
- [Lucide React](https://lucide.dev/) - アイコンライブラリ
- [Docker](https://www.docker.com/) - コンテナ化

## 📝 開発のヒント

1. **コンポーネント作成**: `src/components/` に配置
2. **ユーティリティ関数**: `src/lib/utils.ts` のcn()を活用
3. **アイコン使用**: lucide-reactからインポート
4. **スタイル**: Tailwind CSSクラスを使用
5. **フォーマット**: 保存時に自動実行、または `npm run format`
