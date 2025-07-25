"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Trophy, Star, Edit, Share2 } from "lucide-react"

export default function UserProfileCard() {
  const userBadges = [
    { name: "Temple Explorer", color: "bg-red-100 text-red-700", icon: "🏛️" },
    { name: "Artifact Hunter", color: "bg-yellow-100 text-yellow-700", icon: "🏺" },
    { name: "Cultural Scholar", color: "bg-blue-100 text-blue-700", icon: "📚" },
    { name: "Photo Master", color: "bg-green-100 text-green-700", icon: "📸" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="border-red-100 overflow-hidden">
        {/* Cover Image */}
        <div className="h-32 bg-gradient-to-r from-red-500 via-red-600 to-red-700 relative">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=128&width=400')] bg-cover bg-center opacity-30" />
          <motion.div className="absolute top-4 right-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </motion.div>
        </div>

        <CardContent className="p-6 -mt-16 relative">
          {/* Profile Avatar */}
          <div className="flex items-end justify-between mb-6">
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Stanley Wijaya" />
                <AvatarFallback className="bg-red-500 text-white text-2xl font-bold">AJ</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                variant="outline"
                className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Profile
              </Button>
            </motion.div>
          </div>

          {/* User Info */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold text-gray-800">Stanley Wijaya</h2>
              <Badge className="bg-red-100 text-red-700">
                <Star className="h-3 w-3 mr-1 fill-current" />
                Level 12
              </Badge>
            </div>
            <p className="text-gray-600 mb-3">Cultural Explorer & Heritage Enthusiast</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Jakarta, Indonesia
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Joined March 2024
              </div>
              <div className="flex items-center gap-1">
                <Trophy className="h-4 w-4" />
                89 Achievements
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-red-50 rounded-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">1,247</div>
              <div className="text-xs text-gray-600">Discoveries</div>
            </div>
            <div className="text-center border-x border-red-200">
              <div className="text-2xl font-bold text-red-600">89</div>
              <div className="text-xs text-gray-600">Artifacts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">156</div>
              <div className="text-xs text-gray-600">Days Active</div>
            </div>
          </div>

          {/* Badges */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Recent Badges</h3>
            <div className="flex flex-wrap gap-2">
              {userBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge className={`${badge.color} cursor-pointer hover:shadow-md transition-all duration-300`}>
                    <span className="mr-1">{badge.icon}</span>
                    {badge.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
