"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Sidebar from "@/components/dashboard/sidebar"
import OverviewStats from "@/components/dashboard/overview/overview-stats"
import ActivityChart from "@/components/dashboard/overview/activity-chart"
import ProgressRings from "@/components/dashboard/overview/progress-rings"
import RecentActivity from "@/components/dashboard/overview/recent-activity"
import UserProfileCard from "@/components/dashboard/overview/user-profile-card"
import SettingsPage from "@/components/dashboard/settings"
import HeritageBooksPage from "@/components/dashboard/heritage-books-page"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            {/* Welcome Header */}
            <motion.div
              className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Welcome back, Ahmad! 👋</h1>
                  <p className="text-red-100 text-lg">You've discovered 3 new landmarks this week. Keep exploring!</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">Level 12</div>
                  <div className="text-red-200 text-sm">Explorer</div>
                </div>
              </div>
            </motion.div>

            {/* Stats Overview */}
            <OverviewStats />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                <ActivityChart />
                <ProgressRings />
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <UserProfileCard />
                <RecentActivity />
              </div>
            </div>
          </div>
        )
      case "settings":
        return <SettingsPage />
      case "heritage":
        return <HeritageBooksPage />
      case "play":
        return (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Play Mode</h2>
            <p className="text-gray-600">Start your cultural exploration adventure!</p>
          </motion.div>
        )
      case "inventory":
        return (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Inventory</h2>
            <p className="text-gray-600">Manage your collected artifacts and resources.</p>
          </motion.div>
        )
      case "crafts":
        return (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Crafts</h2>
            <p className="text-gray-600">Create traditional Indonesian artifacts.</p>
          </motion.div>
        )
      case "shop":
        return (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Shop</h2>
            <p className="text-gray-600">Purchase premium items and upgrades.</p>
          </motion.div>
        )
      case "achievements":
        return (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Achievements</h2>
            <p className="text-gray-600">View your exploration milestones and badges.</p>
          </motion.div>
        )
      case "community":
        return (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Community</h2>
            <p className="text-gray-600">Connect with fellow cultural explorers.</p>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isCollapsed={sidebarCollapsed}
        setIsCollapsed={setSidebarCollapsed}
      />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? "lg:ml-20" : "lg:ml-72"}`}>
        <main className="p-6 lg:p-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
