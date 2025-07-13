declare module 'react-intersection-observer' {
  import * as React from 'react'

  export interface InViewOptions {
    threshold?: number | number[]
    root?: Element | null
    rootMargin?: string
    triggerOnce?: boolean
    skip?: boolean
    initialInView?: boolean
    fallbackInView?: boolean
    delay?: number
    trackVisibility?: boolean
  }

  export interface InViewHookResponse {
    ref: (node?: Element | null) => void
    inView: boolean
    entry?: IntersectionObserverEntry
  }

  export function useInView(options?: InViewOptions): InViewHookResponse
}
