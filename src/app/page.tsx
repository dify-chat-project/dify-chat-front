import { Heart, Code, Coffee, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl text-center">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 sm:text-6xl">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dify Chat Front
          </span>
        </h1>

        <p className="mb-12 text-xl text-gray-600">
          Next.js + TypeScript + Tailwind CSS + Docker で構築された
          <br />
          モダンなチャットアプリケーション
        </p>

        <div className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
            <Code className="mb-3 h-8 w-8 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">Next.js</span>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
            <Zap className="mb-3 h-8 w-8 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">
              TypeScript
            </span>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
            <Heart className="mb-3 h-8 w-8 text-red-500" />
            <span className="text-sm font-medium text-gray-700">Tailwind</span>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
            <Coffee className="mb-3 h-8 w-8 text-green-500" />
            <span className="text-sm font-medium text-gray-700">Docker</span>
          </div>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            🚀 セットアップ完了！
          </h2>
          <p className="text-gray-600">
            すべての基本設定が完了しました。
            <br />
            次はDocker環境を構築して、本格的な開発を始めましょう！
          </p>
        </div>
      </div>
    </main>
  )
}
