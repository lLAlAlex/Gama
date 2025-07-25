"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Smartphone,
  Map,
  Camera,
  Users,
  Trophy,
  BookOpen,
  Compass,
  Star,
  Zap,
  Shield,
  Globe,
  Heart,
} from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Augmented Reality",
      description: "Experience Indonesian culture through cutting-edge AR technology",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: "Interactive Maps",
      description: "Navigate through Indonesia's landmarks with detailed cultural maps",
      gradient: "from-red-600 to-orange-500",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Photo Challenges",
      description: "Complete photography missions at historical and cultural sites",
      gradient: "from-red-700 to-red-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Features",
      description: "Connect with fellow explorers and share your discoveries",
      gradient: "from-pink-600 to-red-600",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Achievement System",
      description: "Unlock badges and rewards for your cultural exploration journey",
      gradient: "from-red-500 to-red-700",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Cultural Stories",
      description: "Learn fascinating stories behind each landmark and artifact",
      gradient: "from-red-600 to-red-800",
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Quest System",
      description: "Embark on guided adventures to discover hidden cultural gems",
      gradient: "from-red-800 to-red-900",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Artifact Collection",
      description: "Build your personal museum of Indonesian cultural artifacts",
      gradient: "from-red-600 to-pink-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Events",
      description: "Participate in live cultural events and festivals",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe Exploration",
      description: "Family-friendly content with safety features for all ages",
      gradient: "from-red-700 to-pink-700",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "AI Cultural Guide",
      description: "Personalized recommendations based on your interests",
      gradient: "from-pink-500 to-red-700",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Cultural Preservation",
      description: "Help preserve Indonesian heritage for future generations",
      gradient: "from-red-500 to-red-800",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100">
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
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive features that make Gama the ultimate platform for exploring and preserving
            Indonesian cultural heritage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border-red-100 hover:shadow-xl transition-all duration-300 group hover:scale-105 overflow-hidden relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                <CardContent className="p-6 text-center relative z-10">
                  <motion.div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.gradient} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-red-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-red-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon: Advanced Features</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're constantly working to bring you new and exciting ways to explore Indonesian culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  🤖
                </div>
                <h4 className="font-bold text-gray-800 mb-2">AI Cultural Guide</h4>
                <p className="text-gray-600 text-sm">Personalized recommendations based on your interests</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  🎮
                </div>
                <h4 className="font-bold text-gray-800 mb-2">VR Experiences</h4>
                <p className="text-gray-600 text-sm">Immersive virtual reality cultural experiences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-700 to-red-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  🌐
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Global Expansion</h4>
                <p className="text-gray-600 text-sm">Explore Indonesian culture worldwide</p>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
