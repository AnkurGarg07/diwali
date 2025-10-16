export default function FreeOfferSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-30"></div>
              <img
                src="/cycle.jpg"
                alt="Free Cycle Offer"
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              🎁 Get a Free Cycle with Every Phone Purchase!
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-balance">
              This Diwali, celebrate with style and sustainability. Every smartphone purchase comes with a premium
              bicycle absolutely free!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-semibold text-foreground">Premium Quality Cycle</h3>
                  <p className="text-sm text-muted-foreground">High-quality, durable bicycle included</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-semibold text-foreground">Free Delivery</h3>
                  <p className="text-sm text-muted-foreground">Both phone and cycle delivered to your doorstep</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-semibold text-foreground">Limited Time Offer</h3>
                  <p className="text-sm text-muted-foreground">Valid while stocks last - Hurry!</p>
                </div>
              </div>
            </div>

            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg">
              Shop Now & Get Your Cycle
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
