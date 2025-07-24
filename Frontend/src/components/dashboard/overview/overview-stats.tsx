"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, MapPin, Trophy, Star, Calendar } from "lucide-react"

export default function OverviewStats() {
  const stats = [
    {
      title: "Total Discoveries",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: <MapPin className="h-5 w-5" />,
      color: "from-red-500 to-red-600",
      description: "Landmarks visited this month",
    },
    {
      title: "Artifacts Collected",
      value: "89",
      change: "+8%",
      trend: "up",
      icon: <Trophy className="h-5 w-5" />,
      color: "from-red-600 to-red-700",
      description: "New artifacts this week",
    },
    {
      title: "Explorer Level",
      value: "12",
      change: "+1",
      trend: "up",
      icon: <Star className="h-5 w-5" />,
      color: "from-red-700 to-red-800",
      description: "Level up progress: 75%",
    },
    {
      title: "Days Active",
      value: "156",
      change: "+2%",
      trend: "up",
      icon: <Calendar className="h-5 w-5" />,
      color: "from-pink-500 to-red-500",
      description: "Consecutive exploration days",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="relative overflow-hidden border-red-100 hover:shadow-lg transition-all duration-300 group">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
            />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white`}>{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  {stat.change}
                </div>
              </div>
              <p className="text-xs text-gray-500">{stat.description}</p>
              {stat.title === "Explorer Level" && (
                <div className="mt-3">
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">2,250 / 3,000 XP to next level</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
