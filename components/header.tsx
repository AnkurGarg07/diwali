export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary via-secondary to-accent shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between max-sm:flex-col gap-2">
        <div className="flex items-center gap-2 ">
          <span className="text-3xl">🪔</span>
          <h1 className="text-2xl font-bold text-primary-foreground diwali-glow text-center
          ">
            DONERIA KORE MOBILE
          </h1>
        </div>
        <div className="text-primary-foreground font-semibold text-sm md:text-base">
          Contact-7017218742, 8899747403
        </div>
      </div>
    </header>
  );
}
