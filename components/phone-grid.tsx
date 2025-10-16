"use client"

import PhoneCard from "./phone-card"
import { phoneDatabase } from "@/lib/phone-data"

export default function PhoneGrid() {
  return (
    <section className="py-16 md:py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Featured Phones</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {phoneDatabase.map((phone) => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      </div>
    </section>
  )
}
