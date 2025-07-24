"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

export default function TestimonySection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Cultural Enthusiast",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Gama has completely transformed how I explore Indonesia! I've discovered so many hidden cultural gems in my own city that I never knew existed. The AR experience is absolutely magical.",
      location: "Jakarta",
    },
    {
      name: "Ahmad Rizki",
      role: "History Teacher",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "As an educator, I love how Gama makes learning about Indonesian culture interactive and fun. My students are now excited about visiting historical sites and learning our heritage.",
      location: "Yogyakarta",
    },
    {
      name: "Maria Santos",
      role: "Travel Blogger",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "This app is a game-changer for cultural tourism in Indonesia. The detailed stories behind each landmark and the artifact collection system keep me coming back for more adventures.",
      location: "Bali",
    },
    {
      name: "Budi Santoso",
      role: "Local Guide",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Gama helps me share the beauty of Indonesian culture with visitors in a whole new way. The app's accuracy and respect for our traditions is impressive.",
      location: "Bandung",
    },
    {
      name: "Lisa Chen",
      role: "Student",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "I'm not Indonesian, but Gama has helped me understand and appreciate the incredible diversity of Indonesian culture. It's like having a personal cultural guide!",
      location: "Surabaya",
    },
    {
      name: "Pak Joko",
      role: "Retired Archaeologist",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Finally, an app that treats Indonesian cultural heritage with the respect it deserves. The historical accuracy and educational value are outstanding.",
      location: "Solo",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-red-50 to-white">
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
              What Our Explorers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of cultural enthusiasts who are already discovering Indonesia's rich heritage through Gama's
            immersive experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border-red-100 hover:shadow-xl transition-all duration-300 group hover:scale-105 overflow-hidden relative">
                <div className="absolute top-4 right-4 text-red-200 opacity-50">
                  <Quote className="h-8 w-8" />
                </div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-red-500 text-red-500" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-red-100">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-red-100 text-red-700">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-red-600 font-medium">{testimonial.location}</div>
                    </div>
                  </div>
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
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Community</h3>
            <p className="text-lg opacity-90 mb-6">
              Be part of a passionate community of cultural explorers who are preserving and celebrating Indonesia's
              incredible heritage.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-sm opacity-80">App Store Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm opacity-80">Happy Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1M+</div>
                <div className="text-sm opacity-80">Discoveries Made</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
