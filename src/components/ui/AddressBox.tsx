'use client'

import { useState } from 'react'
import { Copy, Check, ExternalLink } from 'lucide-react'

interface AddressBoxProps {
  address: string | null
  label?: string
}

function truncate(addr: string): string {
  return `${addr.slice(0, 10)}...${addr.slice(-6)}`
}

export default function AddressBox({ address, label }: AddressBoxProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!address) return
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const el = document.createElement('textarea')
      el.value = address
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="glass rounded-[12px] p-4">
      {label && (
        <p className="text-[#9AA3B2] text-xs uppercase tracking-widest mb-3">{label}</p>
      )}
      {address ? (
        <div className="flex items-center gap-3">
          <span
            className="font-mono text-[#F5F7FA] text-sm flex-1 break-all"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <span className="hidden md:inline">{address}</span>
            <span className="md:hidden">{truncate(address)}</span>
          </span>
          <button
            onClick={handleCopy}
            className="flex-shrink-0 p-2 rounded-[8px] hover:bg-white/10 transition-colors duration-150 text-[#9AA3B2] hover:text-[#F5F7FA]"
            aria-label={copied ? 'Copied' : 'Copy address'}
          >
            {copied ? (
              <Check size={16} className="text-[#22D3EE]" />
            ) : (
              <Copy size={16} />
            )}
          </button>
          <a
            href={`https://etherscan.io/address/${address}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 rounded-[8px] hover:bg-white/10 transition-colors duration-150 text-[#9AA3B2] hover:text-[#F5F7FA]"
            aria-label="View on Etherscan"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      ) : (
        <p
          className="text-[#9AA3B2] italic text-sm"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          To be published
        </p>
      )}
    </div>
  )
}
