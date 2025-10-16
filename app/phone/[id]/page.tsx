"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getPhoneById, phoneDatabase } from "@/lib/phone-data"

export default function PhoneDetailPage() {
  const params = useParams()
  const phoneId = Number.parseInt(params.id as string)
  const phone = getPhoneById(phoneId)

  if (!phone) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Phone not found</h1>
          <Link href="/" className="text-primary hover:underline">
            Back to home
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8">
            ← Back to Offers
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Image Section */}
            <div className="flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 min-h-96">
              <img
                src={phone.image || "/placeholder.svg"}
                alt={phone.name}
                className="max-w-full h-auto max-h-96 object-contain"
              />
            </div>

            {/* Details Section */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{phone.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{phone.specs}</p>

              <div className="bg-accent/10 border border-accent rounded-xl p-6 mb-8">
                <p className="text-4xl font-bold text-primary mb-2">{phone.price}</p>
                <p className="text-accent font-semibold">✨ + Free Cycle Included</p>
              </div>

              {/* Quick Specs */}
              <div className="space-y-3 mb-8">
                <h3 className="text-xl font-bold text-foreground">Quick Specs</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">Memory</p>
                    <p className="font-semibold text-foreground">{phone.specs}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">Weight</p>
                    <p className="font-semibold text-foreground">{phone.weight}</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors mb-4">
                Buy Now
              </button>
              <button className="w-full bg-secondary text-secondary-foreground py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-colors">
                Add to Wishlist
              </button>
            </div>
          </div>

          {/* Full Specifications */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Full Specifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">📱 Display</h3>
                <p className="text-foreground">{phone.display}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">⚙️ Processor</h3>
                <p className="text-foreground">{phone.processor}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">📷 Camera</h3>
                <p className="text-foreground">{phone.camera}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">🔋 Battery</h3>
                <p className="text-foreground">{phone.battery}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">🖥️ Operating System</h3>
                <p className="text-foreground">{phone.os}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">🎨 Available Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {phone.colors.map((color) => (
                    <span key={color} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Other Offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {phoneDatabase
                .filter((p) => p.id !== phoneId)
                .slice(0, 4)
                .map((relatedPhone) => (
                  <Link key={relatedPhone.id} href={`/phone/${relatedPhone.id}`}>
                    <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border cursor-pointer">
                      <div className="relative h-48 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden flex items-center justify-center">
                        <img
                          src={relatedPhone.image || "/placeholder.svg"}
                          alt={relatedPhone.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-foreground mb-2">{relatedPhone.name}</h3>
                        <p className="text-primary font-bold">{relatedPhone.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
