"use client"

import { MapPin, Mail, Phone, Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footeras = {
    product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Download", href: "#download" },
      { label: "System Requirements", href: "#requirements" },
    ],
    community: [
      { label: "Join Community", href: "#community" },
      { label: "Cultural Events", href: "#events" },
      { label: "Explorer Stories", href: "#stories" },
      { label: "Become Ambassador", href: "#ambassador" },
    ],
    support: [
      { label: "Help Center", href: "#help" },
      { label: "Contact Us", href: "#contact" },
      { label: "Bug Reports", href: "#bugs" },
      { label: "Feature Requests", href: "#requests" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Cultural Guidelines", href: "#guidelines" },
    ],
  }

  const socialas = [
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white">
      <div className="container px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <MapPin className="h-8 w-8 text-red-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
                Gama
              </span>
            </a>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover Indonesia's rich cultural heritage through immersive augmented reality. Explore landmarks,
              collect artifacts, and preserve traditions for future generations.
            </p>
            <div className="flex gap-4">
              {socialas.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product as */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-red-400">Product</h3>
            <ul className="space-y-3">
              {footeras.product.map((a, index) => (
                <li key={index}>
                  <a
                    href={a.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community as */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-red-400">Community</h3>
            <ul className="space-y-3">
              {footeras.community.map((a, index) => (
                <li key={index}>
                  <a
                    href={a.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support as */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-red-400">Support</h3>
            <ul className="space-y-3">
              {footeras.support.map((a, index) => (
                <li key={index}>
                  <a
                    href={a.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal as */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-red-400">Legal</h3>
            <ul className="space-y-3">
              {footeras.legal.map((a, index) => (
                <li key={index}>
                  <a
                    href={a.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-red-400" />
              <div>
                <div className="font-medium">Email Us</div>
                <div className="text-gray-300 text-sm">hello@gama-app.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-red-400" />
              <div>
                <div className="font-medium">Call Us</div>
                <div className="text-gray-300 text-sm">+62 21 1234 5678</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-red-400" />
              <div>
                <div className="font-medium">Visit Us</div>
                <div className="text-gray-300 text-sm">Jakarta, Indonesia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-300 text-sm">
            © {currentYear} Gama. All rights reserved. Made with ❤️ for Indonesian culture.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-300">
            <span>🇮🇩 Proudly Indonesian</span>
            <span>•</span>
            <span>Preserving Heritage Since 2025</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
