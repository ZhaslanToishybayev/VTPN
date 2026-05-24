'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  className?: string
}

export default function CodeBlock({
  code,
  language = 'ts',
  filename,
  className = '',
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // ignore
    }
  }

  return (
    <div className={`glass gradient-border rounded-[14px] overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]/40" />
          </div>
          {filename && (
            <span
              className="font-mono text-[11px] text-[#9AA3B2] truncate"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {filename}
            </span>
          )}
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B7280] ml-auto md:ml-0">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] text-[11px] font-medium text-[#9AA3B2] hover:text-[#F5F7FA] hover:bg-white/[0.06] transition-colors"
          aria-label={copied ? 'Copied' : 'Copy code'}
        >
          {copied ? (
            <>
              <Check size={12} className="text-[#22D3EE]" />
              <span className="text-[#22D3EE]">Copied</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              Copy
            </>
          )}
        </button>
      </div>
      <pre
        className="px-5 py-5 text-[13px] leading-relaxed text-[#C7C9D1] overflow-x-auto"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        <code>{code}</code>
      </pre>
    </div>
  )
}
