interface StatCardProps {
  value: string
  label: string
  sublabel?: string
  className?: string
}

export default function StatCard({ value, label, sublabel, className = '' }: StatCardProps) {
  return (
    <div className={`glass rounded-[16px] p-6 md:p-8 text-center ${className}`}>
      <div className="gradient-text text-4xl md:text-5xl font-bold font-mono mb-2">
        {value}
      </div>
      <div className="text-[#F5F7FA] font-semibold text-lg mb-1">{label}</div>
      {sublabel && <div className="text-[#9AA3B2] text-sm">{sublabel}</div>}
    </div>
  )
}
