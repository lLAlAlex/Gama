"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Globe, Award, Heart, Zap, Shield } from "lucide-react"

export default function WhyGamaSection() {
  const reasons = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Cutting-Edge AR Technology",
      description: "Experience Indonesian culture through immersive augmented reality that brings history to life",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Authentic Cultural Content",
      description: "Curated by Indonesian cultural experts and historians for accuracy and authenticity",
      color: "from-red-600 to-orange-500",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Gamified Learning",
      description: "Learn about Indonesian heritage through engaging quests, challenges, and achievements",
      color: "from-red-700 to-red-500",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Cultural Preservation",
      description: "Help preserve Indonesian traditions for future generations through digital documentation",
      color: "from-pink-600 to-red-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-Time Updates",
      description: "Discover new content, events, and cultural celebrations as they happen across Indonesia",
      color: "from-red-500 to-red-700",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe & Educational",
      description: "Family-friendly content that promotes cultural understanding and respect",
      color: "from-red-600 to-red-800",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Why Choose Gama?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gama isn't just another mobile game – it's a revolutionary platform that connects you with Indonesia's soul
            through technology, education, and adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border-red-100 hover:shadow-2xl transition-all duration-500 group hover:scale-105 overflow-hidden relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                <CardContent className="p-8 relative z-10">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${reason.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    {reason.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-700 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-red-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Join the Cultural Revolution</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Be part of a movement that's transforming how people connect with Indonesian culture. Every artifact
                  you collect, every landmark you visit, and every story you uncover contributes to preserving
                  Indonesia's rich heritage for future generations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                    🏛️ Historical Accuracy
                  </div>
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                    🎨 Artistic Excellence
                  </div>
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                    🌍 Global Community
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-8 text-white text-center">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  >
                    🇮🇩
                  </motion.div>
                  <h4 className="text-2xl font-bold mb-2">Proudly Indonesian</h4>
                  <p className="opacity-90">Developed with love for Indonesia's incredible cultural diversity</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
