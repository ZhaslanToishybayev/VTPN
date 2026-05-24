interface StatCardProps {
  value: string
  label: string
  sublabel?: string
  className?: string
}

export default function StatCard({ value, label, sublabel, className = '' }: StatCardProps) {
  return (
    <div
      className={`relative glass card-hover gradient-border rounded-[16px] p-6 md:p-8 text-center overflow-hidden ${className}`}
    >
      <div
        aria-hidden
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(124,92,250,0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div className="relative">
        <div className="gradient-text text-4xl md:text-5xl font-bold font-mono mb-2 tracking-tight">
          {value}
        </div>
        <div className="text-[#F5F7FA] font-semibold text-lg mb-1">{label}</div>
        {sublabel && <div className="text-[#9AA3B2] text-sm">{sublabel}</div>}
      </div>
    </div>
  )
}
