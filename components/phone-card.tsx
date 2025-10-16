"use client"

import Link from "next/link"

export default function PhoneCard({ phone }: { phone: any }) {
  return (
    <Link href={`/phone/${phone.id}`}>
      <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border cursor-pointer">
        {/* Image Container */}
        <div className="relative h-64 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden flex items-center justify-center">
          <img
            src={phone.image || "/placeholder.svg"}
            alt={phone.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
            Sale
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-card-foreground mb-1">{phone.name}</h3>
          <div className="text-xs text-muted-foreground mb-2 space-y-1">
            <p>📱 {phone.display}</p>
            <p>⚡ {phone.processor}</p>
            <p>📷 {phone.camera}</p>
          </div>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-primary">{phone.price}</span>
          </div>

          <div className="text-xs text-accent font-semibold mb-4">✨ + Free Cycle Included</div>

          <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </Link>
  )
}
