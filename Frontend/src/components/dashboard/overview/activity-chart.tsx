"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ActivityChart() {
  const weeklyData = [
    { day: "Mon", discoveries: 12, artifacts: 3, height: 60 },
    { day: "Tue", discoveries: 8, artifacts: 2, height: 40 },
    { day: "Wed", discoveries: 15, artifacts: 5, height: 75 },
    { day: "Thu", discoveries: 20, artifacts: 7, height: 100 },
    { day: "Fri", discoveries: 18, artifacts: 4, height: 90 },
    { day: "Sat", discoveries: 25, artifacts: 8, height: 125 },
    { day: "Sun", discoveries: 22, artifacts: 6, height: 110 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="border-red-100">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-800">Weekly Activity</CardTitle>
          <p className="text-sm text-gray-600">Your exploration activity over the past week</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between h-48 gap-4">
            {weeklyData.map((data, index) => (
              <div key={data.day} className="flex-1 flex flex-col items-center">
                <div className="relative w-full mb-2">
                  {/* Discoveries Bar */}
                  <motion.div
                    className="w-full bg-gradient-to-t from-red-500 to-red-400 rounded-t-lg relative"
                    initial={{ height: 0 }}
                    animate={{ height: `${data.height}px` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                  {/* Artifacts Bar */}
                  <motion.div
                    className="w-full bg-gradient-to-t from-red-700 to-red-600 rounded-t-lg mt-1"
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.artifacts / 8) * 40}px` }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  />
                </div>
                <div className="text-xs font-medium text-gray-600">{data.day}</div>
                <div className="text-xs text-gray-500 mt-1">
                  <div>{data.discoveries} discoveries</div>
                  <div>{data.artifacts} artifacts</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-red-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
              <span className="text-sm text-gray-600">Discoveries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-red-700 to-red-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Artifacts</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
