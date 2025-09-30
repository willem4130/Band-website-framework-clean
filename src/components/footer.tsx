'use client'

import { useBandContent } from '@/hooks/useConfig'

export function Footer() {
  const content = useBandContent()

  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">{content.bandName}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}