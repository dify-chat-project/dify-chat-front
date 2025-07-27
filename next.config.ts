import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Docker用のstandalone output
  output: 'standalone',

  // 開発時のTurbopack有効化（既にpackage.jsonで設定済み）
  experimental: {
    turbo: {
      // Turbopackの設定
    },
  },

  // 画像最適化
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },

  // セキュリティヘッダー
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // 本番環境での最適化
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: true,
}

export default nextConfig
