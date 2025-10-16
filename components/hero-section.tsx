export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-secondary/10 py-12 md:py-20 overflow-hidden">
      <div className="absolute top-10 left-10 text-4xl opacity-30 float">🪔</div>
      <div className="absolute bottom-10 right-10 text-4xl opacity-30 float" style={{ animationDelay: "1s" }}>
        ✨
      </div>
      <div className="absolute top-1/2 right-20 text-3xl opacity-20 float" style={{ animationDelay: "0.5s" }}>
        🎆
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Celebrate Diwali with Amazing Deals
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 text-balance">
          Get the latest smartphones at unbeatable prices this Diwali season
        </p>
        <div className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-lg">
          🎁 Free Cycle with Every Purchase!
        </div>
      </div>
    </section>
  )
}
