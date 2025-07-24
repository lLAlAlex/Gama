"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, ArrowLeft, MapPin, Compass, Globe, Sparkles, Mountain, Trees, Camera } from "lucide-react"
import { useState, useEffect } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const floatingAnimation = {
  animate: {
    y: [-20, 20, -20],
    rotate: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05, y: -5 },
  whileTap: { scale: 0.95 },
}

const pulseAnimation = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const quickLinks = [
    { name: "Explore Landmarks", href: "/explore", icon: MapPin, color: "from-emerald-500 to-teal-600" },
    { name: "Cultural Guide", href: "/guide", icon: Compass, color: "from-blue-500 to-indigo-600" },
    { name: "Community", href: "/community", icon: Globe, color: "from-purple-500 to-pink-600" },
    { name: "Gallery", href: "/gallery", icon: Camera, color: "from-amber-500 to-orange-600" },
  ]

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-pink-400/10 to-rose-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Interactive Mouse Follower */}
        <motion.div
          className="fixed w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* 404 Number with Animation */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="relative inline-block">
                <motion.h1
                  className="text-[200px] md:text-[300px] lg:text-[400px] font-black leading-none bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent select-none"
                  {...floatingAnimation}
                >
                  404
                </motion.h1>

                {/* Floating Elements Around 404 */}
                <motion.div
                  className="absolute -top-10 -left-10 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                  {...pulseAnimation}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -top-5 -right-5 w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [-15, 15, -15],
                    x: [-5, 5, -5],
                    transition: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                >
                  <Mountain className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-10 left-1/4 w-14 h-14 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                    transition: {
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Trees className="w-7 h-7 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800">Oops! Page Not Found</h2>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                It looks like you've wandered off the cultural path! The page you're looking for doesn't exist, but
                don't worry – there are plenty of amazing Indonesian landmarks waiting to be discovered.
              </p>
            </motion.div>

            {/* Interactive Search Suggestion */}
            <motion.div variants={fadeInUp} className="mb-16">
              <Card className="max-w-2xl mx-auto border-0 shadow-2xl bg-white/80 backdrop-blur-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-slate-800">Looking for something specific?</h3>
                      <p className="text-slate-600">Try searching for cultural landmarks or artifacts</p>
                    </div>
                  </div>

                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search for temples, traditional houses, artifacts..."
                      className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none bg-white/70 text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Navigation Links */}
            <motion.div variants={fadeInUp} className="mb-16">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Explore These Popular Destinations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    variants={fadeInUp}
                    {...scaleOnHover}
                    whileHover={{ y: -10 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a href={link.href}>
                      <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm group cursor-pointer">
                        <CardContent className="p-6 text-center">
                          <div
                            className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${link.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <link.icon className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                            {link.name}
                          </h4>
                        </CardContent>
                      </Card>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div {...scaleOnHover}>
                <a href="/">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl"
                  >
                    <Home className="mr-3 h-6 w-6" />
                    Back to Home
                  </Button>
                </a>
              </motion.div>

              <motion.div {...scaleOnHover}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-12 py-6 text-xl rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="mr-3 h-6 w-6" />
                  Go Back
                </Button>
              </motion.div>
            </motion.div>

            {/* Fun Fact Section */}
            <motion.div variants={fadeInUp} className="mt-20">
              <Card className="max-w-4xl mx-auto shadow-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Did You Know?</h3>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Indonesia has over <strong>17,000 islands</strong> and more than <strong>300 ethnic groups</strong>,
                    each with their own unique cultural traditions and landmarks. While you're here, why not explore
                    some of these incredible cultural treasures through Gama?
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
  )
}
