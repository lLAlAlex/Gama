"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Camera, Palette, Users } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Real-World Exploration",
      description: "Visit actual Indonesian landmarks and historical sites using AR technology",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Cultural Discovery",
      description: "Learn about Indonesia's rich heritage through interactive storytelling",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Artifact Crafting",
      description: "Collect resources and craft traditional Indonesian artifacts",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Driven",
      description: "Connect with fellow explorers and share your discoveries",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-red-50 to-white">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">About Gama</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gama transforms the way you experience Indonesia's cultural heritage. Using cutting-edge augmented reality
            technology, we bring the nation's rich history and traditions to life in an engaging, interactive adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-red-100 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience Indonesia Like Never Before</h3>
            <p className="text-lg opacity-90 mb-6">
              From the ancient temples of Borobudur to the vibrant markets of Jakarta, discover the stories, traditions,
              and craftsmanship that make Indonesia unique.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">17,000+</div>
                <div className="text-sm opacity-80">Islands to Explore</div>
              </div>
              <div>
                <div className="text-3xl font-bold">300+</div>
                <div className="text-sm opacity-80">Ethnic Groups</div>
              </div>
              <div>
                <div className="text-3xl font-bold">700+</div>
                <div className="text-sm opacity-80">Languages</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
