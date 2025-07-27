import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Docker用のstandalone output
  output: 'standalone',

  // 開発時のTurbopack有効化（既にpackage.jsonで設定済み）
  experimental: {
    turbo: {
      // Turbopackの設定
    }
  },

  // 画像最適化
  images: {
    unoptimized: false,
  },

  // 本番環境での最適化
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
}

export default nextConfig
