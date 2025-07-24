"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  Calendar,
  ArrowRight,
  Globe,
  Sparkles,
  CheckCircle,
} from "lucide-react"
import MoveLeft from "@/assets/move-left.svg"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep] = useState(1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate registration process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  const provinces = [
    "DKI Jakarta",
    "Jawa Barat",
    "Jawa Tengah",
    "Jawa Timur",
    "Yogyakarta",
    "Banten",
    "Bali",
    "Sumatera Utara",
    "Sumatera Barat",
    "Sumatera Selatan",
    "Kalimantan Barat",
    "Kalimantan Timur",
    "Sulawesi Selatan",
    "Papua",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Branding */}
        <motion.div className="hidden lg:block" initial="initial" animate="animate" variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="text-center lg:text-left">
            <a href="/" className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <img src={MoveLeft} alt="arrow"></img>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                Back to Home
              </span>
            </a>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                Join the
              </span>
              <br />
              <span className="text-slate-700">Adventure!</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Start your journey through Indonesia's rich cultural heritage. Create your account and begin exploring
              today!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <span>Explore 500+ cultural landmarks</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span>Collect and craft traditional artifacts</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span>Join a community of cultural explorers</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            <img
              src="/Images/logo.png?height=400&width=500"
              alt="Gama Cultural App"
              width={500}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Registration Form */}
        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="w-full max-w-lg mx-auto lg:mx-0">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-lg">
            <CardHeader className="text-center pb-6">
              <div className="lg:hidden flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                  Gama
                </span>
              </div>
              <CardTitle className="text-3xl font-bold text-slate-800 mb-2">Create Account</CardTitle>
              <p className="text-slate-600">Join thousands of cultural explorers</p>

              {/* Progress Indicator */}
              <div className="flex items-center justify-center space-x-2 mt-6">
                <div
                  className={`w-8 h-2 rounded-full transition-colors ${currentStep >= 1 ? "bg-red-600" : "bg-slate-200"}`}
                />
                <div
                  className={`w-8 h-2 rounded-full transition-colors ${currentStep >= 2 ? "bg-red-600" : "bg-slate-200"}`}
                />
                <div
                  className={`w-8 h-2 rounded-full transition-colors ${currentStep >= 3 ? "bg-red-600" : "bg-slate-200"}`}
                />
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-slate-700 font-medium">
                      First Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        className="pl-12 h-12 border-slate-200 focus:border-red-500 focus:ring-red-500 bg-white/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-slate-700 font-medium">
                      Last Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        className="pl-12 h-12 border-slate-200 focus:border-red-500 focus:ring-red-500 bg-white/50"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="pl-12 h-12 border-slate-200 focus:border-red-500 focus:ring-red-500 bg-white/50"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700 font-medium">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="pl-12 h-12 border-slate-200 focus:border-red-500 focus:ring-red-500 bg-white/50"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-slate-700 font-medium">
                      Date of Birth
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input
                        id="dateOfBirth"
                        type="date"
                        className="pl-12 h-12 border-slate-200 focus:border-red-500 focus:ring-red-500 bg-white/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="province" className="text-slate-700 font-medium">
                      Province
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 z-10" />
                      <Select>
                        <SelectTrigger className="pl-12 h-12 border-slate-200 focus:border-red-500 focus:ring-red-500 bg-white/50">
                          <SelectValue placeholder="Select your province" />
                        </SelectTrigger>
                        <SelectContent>
                          {provinces.map((province) => (
                            <SelectItem key={province} value={province}>
                              {province}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-700 font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="pl-12 pr-12 h-12 border-slate-200 focus:border-red-500 focus:ring-red-500 bg-white/50"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-slate-700 font-medium">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="pl-12 pr-12 h-12 border-slate-200 focus:border-red-500 focus:ring-red-500 bg-white/50"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 rounded border-slate-300 text-red-600 focus:ring-red-500"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                    I agree to the{" "}
                    <a href="/terms" className="text-red-600 hover:text-red-700 font-medium">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-red-600 hover:text-red-700 font-medium">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mt-1 rounded border-slate-300 text-red-600 focus:ring-red-500"
                  />
                  <label htmlFor="newsletter" className="text-sm text-slate-600 leading-relaxed">
                    I want to receive updates about new cultural landmarks, features, and community events
                  </label>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-red-600 to-red-600 hover:from-red-700 hover:to-red-700 text-white font-medium rounded-xl shadow-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Creating account...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Create Account</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>

              {/* <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-slate-500">Or sign up with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" className="w-full h-12 border-slate-200 hover:bg-slate-50 bg-transparent">
                    <img
                      src="/placeholder.svg?height=20&width=20"
                      alt="Google"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Google
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" className="w-full h-12 border-slate-200 hover:bg-slate-50 bg-transparent">
                    <img
                      src="/placeholder.svg?height=20&width=20"
                      alt="Facebook"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Facebook
                  </Button>
                </motion.div>
              </div> */}

              <p className="text-center text-slate-600">
                Already have an account?{" "}
                <a href="/login" className="text-red-600 hover:text-red-700 font-medium">
                  Sign in here
                </a>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
