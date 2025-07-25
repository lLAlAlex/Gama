"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Play, MapPin, Star } from "lucide-react"
import HeroBackground from "./hero-background"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />

      <div className="container px-20 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Star className="h-4 w-4" />
              Explore Indonesian Heritage
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                Discover
              </span>
              <br />
              <span className="text-gray-800">Indonesia's</span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                Treasures
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Embark on an epic adventure through Indonesia's rich cultural landscape. Collect traditional artifacts,
              explore historic landmarks, and craft authentic Indonesian treasures in this immersive AR experience.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 bg-transparent"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Trailer
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">50K+</div>
                <div className="text-sm text-gray-600">Active Players</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">1000+</div>
                <div className="text-sm text-gray-600">Landmarks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">500+</div>
                <div className="text-sm text-gray-600">Artifacts</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto w-80 h-96">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl">
                <div className="absolute inset-2 bg-gradient-to-br from-red-500 via-white to-red-600 rounded-2xl overflow-hidden">
                  {/* Screen Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-6">
                    <motion.div
                      className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <MapPin className="h-6 w-6 text-white" />
                    </motion.div>

                    <motion.div
                      className="text-center text-black"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <div className="text-lg font-bold mb-2">Borobudur Temple</div>
                      <div className="text-sm opacity-90">Ancient Buddhist Monument</div>
                      <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-xs">Collect: Traditional Stone Carving</div>
                      </div>
                    </motion.div>

                    {/* Floating elements */}
                    <motion.div
                      className="absolute top-20 right-6 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs"
                      animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    >
                      ⭐
                    </motion.div>

                    <motion.div
                      className="absolute bottom-20 left-6 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-xs"
                      animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                      transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    >
                      🏺
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating UI Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-red-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              >
                <div className="text-xs text-gray-600">New Discovery!</div>
                <div className="text-sm font-semibold text-red-600">Batik Pattern</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-red-100"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
              >
                <div className="text-xs text-gray-600">Achievement</div>
                <div className="text-sm font-semibold text-red-600">Explorer Level 5</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
