"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  Play,
  BookOpen,
  Package,
  Hammer,
  ShoppingBag,
  Settings,
  Home,
  Trophy,
  Users,
  Bell,
  X,
  ChevronRight,
  MapPin,
  Star,
} from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Sidebar({ isOpen, setIsOpen, activeTab, setActiveTab }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const navigationItems = [
    {
      id: "overview",
      label: "Overview",
      icon: <LayoutDashboard className="h-5 w-5" />,
      color: "from-red-500 to-red-600",
      badge: null,
    },
    {
      id: "play",
      label: "Play",
      icon: <Play className="h-5 w-5" />,
      color: "from-red-600 to-red-700",
      badge: "New",
    },
    {
      id: "heritage",
      label: "Heritage Books",
      icon: <BookOpen className="h-5 w-5" />,
      color: "from-red-700 to-red-800",
      badge: "3",
    },
    {
      id: "inventory",
      label: "Inventory",
      icon: <Package className="h-5 w-5" />,
      color: "from-red-500 to-pink-500",
      badge: "24",
    },
    {
      id: "crafts",
      label: "Crafts",
      icon: <Hammer className="h-5 w-5" />,
      color: "from-pink-500 to-red-500",
      badge: null,
    },
    {
      id: "shop",
      label: "Shop",
      icon: <ShoppingBag className="h-5 w-5" />,
      color: "from-red-600 to-orange-500",
      badge: "Sale",
    },
    {
      id: "achievements",
      label: "Achievements",
      icon: <Trophy className="h-5 w-5" />,
      color: "from-orange-500 to-red-600",
      badge: "5",
    },
    {
      id: "community",
      label: "Community",
      icon: <Users className="h-5 w-5" />,
      color: "from-red-500 to-red-700",
      badge: null,
    },
  ]

  const bottomItems = [
    {
      id: "settings",
      label: "Settings",
      icon: <Settings className="h-5 w-5" />,
      color: "from-gray-500 to-gray-600",
    },
    {
      id: "home",
      label: "Back to Home",
      icon: <Home className="h-5 w-5" />,
      color: "from-red-600 to-red-700",
    },
  ]

  const handleItemClick = (itemId: string) => {
    if (itemId === "home") {
      window.location.href = "/"
      return
    }
    setActiveTab(itemId)
    if (window.innerWidth < 1024) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed lg:relative top-0 left-0 h-screen bg-white border-r border-red-100 shadow-xl z-50 w-72 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } transition-transform duration-300 ease-in-out`}
        initial={false}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-red-100">
            <div className="flex items-center justify-between mb-6">
              <a href="/" className="flex items-center space-x-2">
                <div className="relative">
                  <MapPin className="h-8 w-8 text-red-600" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  Gama
                </span>
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="lg:hidden hover:bg-red-50"
              >
                <X className="h-5 w-5 text-red-600" />
              </Button>
            </div>

            {/* User Profile */}
            <motion.div
              className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-150 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Avatar className="h-12 w-12 border-2 border-red-200">
                <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
                <AvatarFallback className="bg-red-500 text-white font-bold">AJ</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-800 truncate">Ahmad Joko</div>
                <div className="text-sm text-red-600 flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  Level 12 Explorer
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-red-400 group-hover:text-red-600 transition-colors" />
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-4 space-y-2">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group relative overflow-hidden ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-red-50 hover:text-red-700"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {hoveredItem === item.id && activeTab !== item.id && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 rounded-xl`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  <div
                    className={`relative z-10 ${
                      activeTab === item.id ? "text-white" : "text-red-600 group-hover:text-red-700"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span className="font-medium relative z-10">{item.label}</span>
                  {item.badge && (
                    <span
                      className={`ml-auto px-2 py-1 text-xs font-bold rounded-full relative z-10 ${
                        activeTab === item.id
                          ? "bg-white/20 text-white"
                          : "bg-red-100 text-red-600 group-hover:bg-red-200"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Bottom Navigation */}
          <div className="p-4 border-t border-red-100">
            <div className="space-y-2">
              {bottomItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-gray-500 group-hover:text-gray-700">{item.icon}</div>
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Notifications */}
            <motion.div
              className="mt-4 p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl text-white cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Bell className="h-4 w-4" />
                <span className="text-sm font-medium">New Achievement!</span>
              </div>
              <p className="text-xs opacity-90">You've unlocked "Temple Explorer" badge!</p>
            </motion.div>
          </div>
        </div>
      </motion.aside>
    </>
  )
}