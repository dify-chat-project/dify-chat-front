'use client'

import { CacheProvider, type EmotionCache } from '@emotion/react'
import createCache from '@emotion/cache'
import React from 'react'

let clientSideEmotionCache: EmotionCache | null = null

function getOrCreateCache() {
  if (typeof window === 'undefined') {
    return createCache({ key: 'mui', prepend: true })
  }
  if (!clientSideEmotionCache) {
    clientSideEmotionCache = createCache({ key: 'mui', prepend: true })
  }
  return clientSideEmotionCache
}

export function AppRouterCacheProvider({ children }: { children: React.ReactNode }) {
  const cache = React.useMemo(() => getOrCreateCache(), [])
  return <CacheProvider value={cache}>{children}</CacheProvider>
}


