"use client"

import { motion } from "framer-motion"

export default function MarqueeSection() {
  const landmarks = [
    "🏛️ Borobudur Temple",
    "🕌 Istiqlal Mosque",
    "🏰 Prambanan Temple",
    "🌋 Mount Bromo",
    "🏖️ Raja Ampat",
    "🦎 Komodo Island",
    "🏛️ Yogyakarta Palace",
    "🌿 Taman Mini Indonesia",
    "🏔️ Lake Toba",
    "🏛️ Gedung Sate",
    "🌊 Tanah Lot",
    "🏛️ Lawang Sewu",
  ]

  const artifacts = [
    "🏺 Traditional Pottery",
    "🎭 Wayang Puppets",
    "👘 Batik Patterns",
    "⚔️ Keris Daggers",
    "🎵 Gamelan Instruments",
    "🏠 Traditional Houses",
    "💍 Royal Jewelry",
    "📜 Ancient Scripts",
    "🎨 Wood Carvings",
    "🧵 Traditional Textiles",
    "🍽️ Ceremonial Items",
    "🎪 Festival Masks",
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 via-red-700 to-red-600 overflow-hidden">
      <div className="mb-12">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Indonesia's Treasures</h2>
          <p className="text-red-100 text-lg max-w-2xl mx-auto">
            Discover iconic landmarks and collect authentic cultural artifacts from across the archipelago
          </p>
        </motion.div>

        {/* Landmarks Marquee */}
        <div className="relative mb-8">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {[...landmarks, ...landmarks].map((landmark, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-medium border border-white/30 hover:bg-white/30 transition-colors cursor-pointer"
                >
                  {landmark}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Artifacts Marquee (Reverse Direction) */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{ x: ["-100%", "0%"] }}
              transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {[...artifacts, ...artifacts].map((artifact, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-medium border border-white/30 hover:bg-white/30 transition-colors cursor-pointer"
                >
                  {artifact}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="container px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="text-white">
            <motion.div
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              1000+
            </motion.div>
            <div className="text-red-100 text-sm md:text-base">Landmarks</div>
          </div>
          <div className="text-white">
            <motion.div
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              500+
            </motion.div>
            <div className="text-red-100 text-sm md:text-base">Artifacts</div>
          </div>
          <div className="text-white">
            <motion.div
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              34
            </motion.div>
            <div className="text-red-100 text-sm md:text-base">Provinces</div>
          </div>
          <div className="text-white">
            <motion.div
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              50K+
            </motion.div>
            <div className="text-red-100 text-sm md:text-base">Players</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
