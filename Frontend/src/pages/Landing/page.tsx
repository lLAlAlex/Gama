"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Users,
  Trophy,
  Star,
  Download,
  Play,
  Plus,
  Minus,
  Quote,
  Palette,
  Map,
  Gift,
  Smartphone,
  Camera,
  Compass,
  ArrowRight,
  Sparkles,
  Globe,
  Heart,
} from "lucide-react"

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

const scaleOnHover = {
  whileHover: { scale: 1.05, y: -5 },
  whileTap: { scale: 0.95 },
}

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stats = [
    { number: "500+", label: "Cultural Landmarks", icon: MapPin, color: "from-emerald-500 to-teal-600" },
    { number: "50K+", label: "Active Players", icon: Users, color: "from-blue-500 to-indigo-600" },
    { number: "1000+", label: "Artifacts Collected", icon: Trophy, color: "from-amber-500 to-orange-600" },
    { number: "4.8", label: "App Store Rating", icon: Star, color: "from-purple-500 to-pink-600" },
  ]

  const features = [
    {
      icon: Map,
      title: "Explore Real Landmarks",
      description: "Discover authentic Indonesian cultural sites using cutting-edge AR technology and GPS navigation.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Palette,
      title: "Craft Traditional Items",
      description: "Collect resources and follow authentic recipes to create beautiful cultural artifacts.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Camera,
      title: "Capture Memories",
      description: "Document your cultural journey with in-app photography and share with the community.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Gift,
      title: "Earn Rewards",
      description: "Complete challenges and unlock exclusive cultural content and virtual rewards.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Users,
      title: "Community Events",
      description: "Join cultural festivals and community gatherings in your area.",
      color: "from-rose-500 to-red-600",
    },
    {
      icon: Compass,
      title: "Cultural Learning",
      description: "Learn about Indonesian heritage through interactive storytelling and quests.",
      color: "from-cyan-500 to-blue-600",
    },
  ]

  const testimonials = [
    {
      name: "Rizki Ananda",
      role: "Cultural Enthusiast",
      content:
        "Gama has completely transformed how I explore my own country. I've discovered so many hidden cultural gems that I never knew existed!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Putri Maharani",
      role: "University Student",
      content:
        "Learning about Indonesian culture has never been this engaging and interactive. It's like having a personal cultural guide in my pocket!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Agus Setiawan",
      role: "History Teacher",
      content:
        "I use Gama to teach my students about our rich cultural heritage. It's an incredible educational tool that brings history to life.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const faqs = [
    {
      question: "What is Gama and how does it work?",
      answer:
        "Gama is an innovative augmented reality mobile app that lets you explore Indonesian cultural landmarks, collect virtual resources, and craft traditional artifacts. Simply download the app, create an account, and start exploring cultural sites near you using your smartphone's camera and GPS!",
    },
    {
      question: "Is Gama free to play?",
      answer:
        "Yes! Gama is completely free to download and play. We offer optional in-app purchases for premium content and cosmetic items, but the core cultural exploration experience is entirely free for everyone.",
    },
    {
      question: "Which Indonesian landmarks are available in the app?",
      answer:
        "We feature over 500 carefully curated cultural landmarks across Indonesia, including ancient temples, traditional houses, museums, historical sites, and cultural centers from Sabang to Merauke, covering all 34 provinces.",
    },
    {
      question: "Can I play Gama without an internet connection?",
      answer:
        "Some features require an internet connection for the full AR experience and real-time updates, but you can access your collected items, crafting recipes, and cultural information offline once downloaded.",
    },
    {
      question: "How accurate is the cultural information provided?",
      answer:
        "All cultural content is thoroughly researched and verified by Indonesian cultural experts, historians, and local communities to ensure authenticity, accuracy, and educational value.",
    },
  ]

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 text-slate-800 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-14">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-pink-600/10" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-6xl mx-auto"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200 hover:from-indigo-200 hover:to-purple-200 mb-6 px-6 py-2 text-lg">
                  <Globe className="w-4 h-4 mr-2" />
                  🇮🇩 Explore Indonesian Culture
                </Badge>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Discover
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Indonesia
                  </span>
                </h1>
                <p className="text-xl md:text-3xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto">
                  Embark on an extraordinary journey through Indonesia's rich cultural heritage with immersive AR
                  experiences, authentic storytelling, and community-driven exploration.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl"
                  >
                    <Download className="mr-3 h-6 w-6" />
                    Start Exploring
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </motion.div>
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-12 py-6 text-xl rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl"
                  >
                    <Play className="mr-3 h-6 w-6" />
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp} {...floatingAnimation}>
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=700&width=1000"
                    alt="Gama App Interface"
                    width={1000}
                    height={700}
                    className="mx-auto rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={fadeInUp} {...scaleOnHover}>
                  <Card className="text-center p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div
                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}
                      >
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">{stat.number}</h3>
                      <p className="text-slate-600 font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-20"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Amazing Features
              </h2>
              <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Discover what makes Gama the ultimate cultural exploration experience
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp} {...scaleOnHover}>
                  <Card className="p-8 h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm group">
                    <CardContent className="p-0">
                      <div
                        className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-20"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                What Players Say
              </h2>
              <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
                Join thousands of satisfied users exploring Indonesian culture
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={fadeInUp} {...scaleOnHover}>
                  <Card className="p-8 h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <Quote className="h-10 w-10 text-indigo-500 mb-6" />
                      <p className="text-slate-700 mb-8 leading-relaxed text-lg">"{testimonial.content}"</p>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-bold text-slate-800 text-lg">{testimonial.name}</h4>
                          <p className="text-slate-600">{testimonial.role}</p>
                          <div className="flex gap-1 mt-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
                <p className="text-2xl text-slate-600">Everything you need to know about Gama</p>
              </motion.div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <button
                          className="w-full p-8 text-left flex items-center justify-between hover:bg-indigo-50/50 transition-colors rounded-lg"
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        >
                          <h3 className="font-bold text-slate-800 text-xl pr-4">{faq.question}</h3>
                          <motion.div animate={{ rotate: openFaq === index ? 45 : 0 }} transition={{ duration: 0.2 }}>
                            {openFaq === index ? (
                              <Minus className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                            ) : (
                              <Plus className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                            )}
                          </motion.div>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{
                            height: openFaq === index ? "auto" : 0,
                            opacity: openFaq === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8">
                            <p className="text-slate-600 leading-relaxed text-lg">{faq.answer}</p>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-5xl mx-auto text-white"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Start Your Cultural Journey Today</h2>
                <p className="text-xl md:text-3xl mb-12 opacity-90 leading-relaxed">
                  Join thousands of Indonesians discovering their heritage through Gama. Download now and begin
                  exploring!
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    className="bg-white text-indigo-600 hover:bg-gray-100 px-12 py-6 text-xl rounded-2xl shadow-2xl"
                  >
                    <Download className="mr-3 h-6 w-6" />
                    Download for iOS
                  </Button>
                </motion.div>
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-12 py-6 text-xl rounded-2xl bg-transparent backdrop-blur-sm"
                  >
                    <Smartphone className="mr-3 h-6 w-6" />
                    Download for Android
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-400" />
                  <span>Free to download</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.8 rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-400" />
                  <span>50K+ users</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
  )
}
