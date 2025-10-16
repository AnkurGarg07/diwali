export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🪔</span> Diwali Mega Sale
            </h3>
            <p className="text-sm opacity-90">Celebrate Diwali with the best smartphone deals and free gifts!</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:opacity-100 transition">
                Facebook
              </a>
              <a href="#" className="hover:opacity-100 transition">
                Instagram
              </a>
              <a href="#" className="hover:opacity-100 transition">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>⚡ Offer valid while stocks last | © 2025 Diwali Mega Sale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
