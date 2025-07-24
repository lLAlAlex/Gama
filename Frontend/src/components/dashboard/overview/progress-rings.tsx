"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProgressRings() {
  const progressData = [
    {
      label: "Java Exploration",
      percentage: 85,
      color: "stroke-red-500",
      bgColor: "stroke-red-100",
      value: "17/20",
      description: "Provinces explored",
    },
    {
      label: "Cultural Knowledge",
      percentage: 72,
      color: "stroke-red-600",
      bgColor: "stroke-red-100",
      value: "360/500",
      description: "Stories learned",
    },
    {
      label: "Artifact Mastery",
      percentage: 64,
      color: "stroke-red-700",
      bgColor: "stroke-red-100",
      value: "32/50",
      description: "Crafts completed",
    },
  ]

  const CircularProgress = ({ percentage, color, bgColor }: { percentage: number; color: string; bgColor: string }) => {
    const radius = 45
    const circumference = 2 * Math.PI * radius
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} className={`${bgColor} fill-none`} strokeWidth="8" />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            className={`${color} fill-none`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-gray-800">{percentage}%</span>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Card className="border-red-100">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-800">Progress Overview</CardTitle>
          <p className="text-sm text-gray-600">Your journey through Indonesian culture</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {progressData.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <CircularProgress percentage={item.percentage} color={item.color} bgColor={item.bgColor} />
                <h3 className="font-semibold text-gray-800 mt-3 mb-1">{item.label}</h3>
                <p className="text-sm text-red-600 font-medium">{item.value}</p>
                <p className="text-xs text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
