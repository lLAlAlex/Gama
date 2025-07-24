"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Trophy, Star, Camera, Hammer } from "lucide-react"

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "discovery",
      title: "Discovered Borobudur Temple",
      description: "Explored the ancient Buddhist monument",
      time: "2 hours ago",
      icon: <MapPin className="h-4 w-4" />,
      color: "from-red-500 to-red-600",
      badge: "New Location",
      badgeColor: "bg-green-100 text-green-700",
    },
    {
      id: 2,
      type: "achievement",
      title: "Unlocked Temple Explorer Badge",
      description: "Visited 10 different temples",
      time: "4 hours ago",
      icon: <Trophy className="h-4 w-4" />,
      color: "from-red-600 to-red-700",
      badge: "Achievement",
      badgeColor: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 3,
      type: "craft",
      title: "Crafted Traditional Batik Pattern",
      description: "Used materials from Central Java",
      time: "1 day ago",
      icon: <Hammer className="h-4 w-4" />,
      color: "from-red-700 to-red-800",
      badge: "Craft",
      badgeColor: "bg-purple-100 text-purple-700",
    },
    {
      id: 4,
      type: "photo",
      title: "Captured Prambanan Sunset",
      description: "Perfect timing for the golden hour",
      time: "2 days ago",
      icon: <Camera className="h-4 w-4" />,
      color: "from-pink-500 to-red-500",
      badge: "Photo",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 5,
      type: "level",
      title: "Reached Explorer Level 12",
      description: "Gained 500 XP from recent activities",
      time: "3 days ago",
      icon: <Star className="h-4 w-4" />,
      color: "from-red-500 to-red-700",
      badge: "Level Up",
      badgeColor: "bg-red-100 text-red-700",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <Card className="border-red-100">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-800">Recent Activity</CardTitle>
          <p className="text-sm text-gray-600">Your latest exploration achievements</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-red-50 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`p-2 rounded-lg bg-gradient-to-br ${activity.color} text-white flex-shrink-0`}>
                  {activity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-800 truncate">{activity.title}</h4>
                    <Badge className={`${activity.badgeColor} text-xs`}>{activity.badge}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{activity.description}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <div className="flex-shrink-0">
                  <Avatar className="h-8 w-8 border border-red-200">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback className="bg-red-100 text-red-600 text-xs">AJ</AvatarFallback>
                  </Avatar>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.button
            className="w-full mt-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Activities
          </motion.button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
