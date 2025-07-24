"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Users, MessageCircle, Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export default function CommunityCTASection() {
  const socialLinks = [
    { icon: <Instagram className="h-6 w-6" />, name: "Instagram", followers: "25K", color: "from-pink-500 to-red-500" },
    { icon: <Twitter className="h-6 w-6" />, name: "Twitter", followers: "18K", color: "from-blue-500 to-red-500" },
    { icon: <Facebook className="h-6 w-6" />, name: "Facebook", followers: "32K", color: "from-blue-600 to-red-600" },
    { icon: <Youtube className="h-6 w-6" />, name: "YouTube", followers: "15K", color: "from-red-500 to-red-700" },
  ]

  const communityStats = [
    { number: "50K+", label: "Active Explorers", icon: "👥" },
    { number: "1M+", label: "Discoveries Made", icon: "🏛️" },
    { number: "500K+", label: "Artifacts Collected", icon: "🏺" },
    { number: "1K+", label: "Cultural Stories", icon: "📚" },
  ]

  return (
    <section
      id="community"
      className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Gama Community</h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Connect with fellow cultural explorers, share your discoveries, and be part of Indonesia's largest digital
            heritage preservation community.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {communityStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-red-100 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Community Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Why Join Our Community?</h3>

            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Connect with Explorers</h4>
                    <p className="text-red-100">
                      Meet like-minded people who share your passion for Indonesian culture and heritage.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Share Your Discoveries</h4>
                    <p className="text-red-100">
                      Show off your artifact collections and share stories from your cultural adventures.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    🏆
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Exclusive Events</h4>
                    <p className="text-red-100">
                      Participate in community challenges, cultural festivals, and special exploration events.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Right Side - CTA and Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Your Adventure?</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Download Gama now and join thousands of cultural explorers discovering Indonesia's incredible heritage.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 mb-8 text-lg px-8 py-4"
                >
                  <Download className="h-6 w-6 mr-3" />
                  Download Gama Now
                </Button>
              </motion.div>

              <div className="border-t border-gray-200 pt-8">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.button
                      key={index}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${social.color} text-white hover:scale-105 transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                      <div className="text-left">
                        <div className="font-medium text-sm">{social.name}</div>
                        <div className="text-xs opacity-90">{social.followers}</div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">🇮🇩 Preserve Indonesian Heritage Together</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Every discovery you make, every artifact you collect, and every story you share helps preserve Indonesia's
              rich cultural heritage for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300 bg-transparent"
              >
                Learn More About Our Mission
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300 bg-transparent"
              >
                Become a Cultural Ambassador
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
