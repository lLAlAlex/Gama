"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Download, MapPin, Camera, Palette, Trophy } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: <Download className="h-8 w-8" />,
      title: "Download & Setup",
      description: "Get the Gama app from your app store and create your explorer profile",
      color: "from-red-500 to-red-600",
    },
    {
      step: "02",
      icon: <MapPin className="h-8 w-8" />,
      title: "Explore Landmarks",
      description: "Visit real Indonesian landmarks and historical sites near you",
      color: "from-red-600 to-red-700",
    },
    {
      step: "03",
      icon: <Camera className="h-8 w-8" />,
      title: "Discover & Collect",
      description: "Use AR to find hidden cultural items and collect crafting materials",
      color: "from-red-700 to-red-800",
    },
    {
      step: "04",
      icon: <Palette className="h-8 w-8" />,
      title: "Craft Artifacts",
      description: "Combine materials to create authentic Indonesian traditional artifacts",
      color: "from-red-800 to-red-900",
    },
    {
      step: "05",
      icon: <Trophy className="h-8 w-8" />,
      title: "Share & Compete",
      description: "Show off your collection and compete with other cultural explorers",
      color: "from-red-600 to-pink-600",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-white via-red-50 to-white">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">How It Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Start your Indonesian cultural adventure in just five simple steps. From download to mastery, we'll guide
            you through every part of your journey.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-200 via-red-400 to-red-200 transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full bg-white/90 backdrop-blur-sm border-red-100 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                  <CardContent className="p-8 text-center relative">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg`}
                      >
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-2xl mb-6 mt-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                    >
                      {step.icon}
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <motion.div
                      className="w-8 h-8 bg-white border-2 border-red-400 rounded-full flex items-center justify-center shadow-lg"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <div className="w-0 h-0 border-l-4 border-l-red-500 border-t-2 border-t-transparent border-b-2 border-b-transparent" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Adventure?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of cultural explorers who are already discovering Indonesia's hidden treasures.
            </p>
            <motion.button
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5 mr-2 inline" />
              Download Gama Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
