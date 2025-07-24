"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Trophy,
  Medal,
  Crown,
  Star,
  Users,
  TrendingUp,
  Calendar,
  MapPin,
  Coins,
  Zap,
  Award,
  Filter,
} from "lucide-react"

// User's current stats
const userStats = {
  rank: 15,
  totalPoints: 12450,
  weeklyPoints: 890,
  monthlyPoints: 3240,
  totalAchievements: 47,
  rareAchievements: 8,
  level: 15,
  experience: 8750,
  nextLevelExp: 10000,
}

// Leaderboard data
const leaderboardData = [
  {
    rank: 1,
    name: "Sari Dewi",
    avatar: "/Images/Placeholder/avatar.png?height=40&width=40&text=SD",
    points: 25680,
    level: 28,
    badges: ["Master Explorer", "Cultural Expert", "Legend"],
    weeklyGain: 1250,
    location: "Jakarta",
  },
  {
    rank: 2,
    name: "Budi Santoso",
    avatar: "/Images/Placeholder/avatar.png?height=40&width=40&text=BS",
    points: 23450,
    level: 26,
    badges: ["Heritage Guardian", "Monument Master"],
    weeklyGain: 980,
    location: "Yogyakarta",
  },
  {
    rank: 3,
    name: "Maya Putri",
    avatar: "/Images/Placeholder/avatar.png?height=40&width=40&text=MP",
    points: 21890,
    level: 25,
    badges: ["Craft Master", "Cultural Scholar"],
    weeklyGain: 1120,
    location: "Bandung",
  },
  {
    rank: 4,
    name: "Andi Rahman",
    avatar: "/Images/Placeholder/avatar.png?height=40&width=40&text=AR",
    points: 19750,
    level: 23,
    badges: ["Explorer", "Collector"],
    weeklyGain: 750,
    location: "Surabaya",
  },
  {
    rank: 5,
    name: "Lina Sari",
    avatar: "/Images/Placeholder/avatar.png?height=40&width=40&text=LS",
    points: 18920,
    level: 22,
    badges: ["Adventurer", "Discoverer"],
    weeklyGain: 890,
    location: "Medan",
  },
  // ... more users
  {
    rank: 15,
    name: "Ahmad (You)",
    avatar: "/Images/Placeholder/avatar.png?height=40&width=40&text=A",
    points: 12450,
    level: 15,
    badges: ["Explorer", "Craftsman"],
    weeklyGain: 890,
    location: "Bali",
    isCurrentUser: true,
  },
]

// User's achievements
const userAchievements = [
  {
    id: 1,
    name: "First Steps",
    description: "Complete your first cultural exploration",
    icon: "👶",
    rarity: "common",
    points: 100,
    unlockedAt: "2024-01-15",
    category: "exploration",
    progress: 100,
    isUnlocked: true,
  },
  {
    id: 2,
    name: "Monument Master",
    description: "Visit 10 different Indonesian monuments",
    icon: "🏛️",
    rarity: "rare",
    points: 500,
    unlockedAt: "2024-02-20",
    category: "exploration",
    progress: 100,
    isUnlocked: true,
  },
  {
    id: 3,
    name: "Craft Apprentice",
    description: "Successfully craft 5 traditional items",
    icon: "🔨",
    rarity: "uncommon",
    points: 250,
    unlockedAt: "2024-02-10",
    category: "crafting",
    progress: 100,
    isUnlocked: true,
  },
  {
    id: 4,
    name: "Cultural Scholar",
    description: "Read 50 cultural insight cards",
    icon: "📚",
    rarity: "rare",
    points: 400,
    unlockedAt: "2024-03-05",
    category: "learning",
    progress: 100,
    isUnlocked: true,
  },
  {
    id: 5,
    name: "Heritage Guardian",
    description: "Complete all Borobudur temple quests",
    icon: "🛡️",
    rarity: "legendary",
    points: 1000,
    unlockedAt: "2024-03-15",
    category: "exploration",
    progress: 100,
    isUnlocked: true,
  },
  {
    id: 6,
    name: "Master Craftsman",
    description: "Craft 25 traditional items with perfect quality",
    icon: "⚒️",
    rarity: "legendary",
    points: 800,
    unlockedAt: null,
    category: "crafting",
    progress: 68,
    isUnlocked: false,
    requirement: "17/25 items crafted",
  },
  {
    id: 7,
    name: "Island Hopper",
    description: "Explore monuments on 5 different Indonesian islands",
    icon: "🏝️",
    rarity: "rare",
    points: 600,
    unlockedAt: null,
    category: "exploration",
    progress: 80,
    isUnlocked: false,
    requirement: "4/5 islands visited",
  },
  {
    id: 8,
    name: "Community Leader",
    description: "Help 100 other players in community challenges",
    icon: "👥",
    rarity: "epic",
    points: 750,
    unlockedAt: null,
    category: "social",
    progress: 45,
    isUnlocked: false,
    requirement: "45/100 players helped",
  },
]

// Achievement categories
const achievementCategories = [
  { id: "all", name: "All Achievements", icon: Trophy },
  { id: "exploration", name: "Exploration", icon: MapPin },
  { id: "crafting", name: "Crafting", icon: Award },
  { id: "learning", name: "Learning", icon: Star },
  { id: "social", name: "Social", icon: Users },
]

export default function AchievementsPage() {
  const [activeTab, setActiveTab] = useState("leaderboard")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showOnlyUnlocked, setShowOnlyUnlocked] = useState(false)

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-100 text-gray-800 border-gray-300"
      case "uncommon":
        return "bg-green-100 text-green-800 border-green-300"
      case "rare":
        return "bg-blue-100 text-blue-800 border-blue-300"
      case "epic":
        return "bg-purple-100 text-purple-800 border-purple-300"
      case "legendary":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const filteredAchievements = userAchievements.filter((achievement) => {
    if (selectedCategory !== "all" && achievement.category !== selectedCategory) return false
    if (showOnlyUnlocked && !achievement.isUnlocked) return false
    return true
  })

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />
      case 3:
        return <Medal className="h-6 w-6 text-amber-600" />
      default:
        return <span className="text-lg font-bold text-gray-600">#{rank}</span>
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Trophy className="h-8 w-8" />
              Achievements & Leaderboard
            </h1>
            <p className="text-red-100 text-lg">Track your progress and compete with fellow cultural explorers!</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">Rank #{userStats.rank}</div>
            <div className="text-red-200 text-sm">{userStats.totalPoints.toLocaleString()} points</div>
          </div>
        </div>
      </motion.div>

      {/* User Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Current Rank</p>
                <p className="text-2xl font-bold">#{userStats.rank}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Points</p>
                <p className="text-2xl font-bold">{userStats.totalPoints.toLocaleString()}</p>
              </div>
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Achievements</p>
                <p className="text-2xl font-bold">{userStats.totalAchievements}</p>
              </div>
              <Trophy className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Current Level</p>
                <p className="text-2xl font-bold">Level {userStats.level}</p>
              </div>
              <Zap className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Level Progress */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Level Progress</h3>
            <span className="text-sm text-gray-600">
              {userStats.experience}/{userStats.nextLevelExp} XP
            </span>
          </div>
          <Progress value={(userStats.experience / userStats.nextLevelExp) * 100} className="h-3" />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Level {userStats.level}</span>
            <span>{userStats.nextLevelExp - userStats.experience} XP to next level</span>
            <span>Level {userStats.level + 1}</span>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="leaderboard" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Leaderboard
          </TabsTrigger>
          <TabsTrigger value="achievements" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            My Achievements
          </TabsTrigger>
        </TabsList>

        {/* Leaderboard Tab */}
        <TabsContent value="leaderboard" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Global Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboardData.map((user, index) => (
                  <motion.div
                    key={user.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                      user.isCurrentUser
                        ? "bg-red-50 border-red-200 shadow-md"
                        : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {/* Rank */}
                    <div className="flex items-center justify-center w-12 h-12">{getRankIcon(user.rank)}</div>

                    {/* Avatar */}
                    <img
                      src={user.avatar || "/Images/Placeholder/avatar.png"}
                      alt={user.name}
                      className="w-12 h-12 rounded-full border-2 border-gray-200"
                    />

                    {/* User Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-semibold ${user.isCurrentUser ? "text-red-700" : "text-gray-900"}`}>
                          {user.name}
                        </h3>
                        {user.isCurrentUser && (
                          <Badge className="bg-red-500 hover:bg-red-600 text-white text-xs">YOU</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {user.location}
                        </span>
                        <span>Level {user.level}</span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-green-500" />+{user.weeklyGain} this week
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {user.badges.slice(0, 3).map((badge, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Points */}
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">{user.points.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">points</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="space-y-6">
          {/* Achievement Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {achievementCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className="flex items-center gap-2"
                    >
                      <category.icon className="h-4 w-4" />
                      {category.name}
                    </Button>
                  ))}
                </div>
                <Button
                  variant={showOnlyUnlocked ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowOnlyUnlocked(!showOnlyUnlocked)}
                  className="flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  {showOnlyUnlocked ? "Show All" : "Unlocked Only"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card
                  className={`overflow-hidden transition-all duration-200 hover:shadow-lg ${
                    achievement.isUnlocked ? "border-green-200 bg-green-50" : "border-gray-200 bg-white"
                  }`}
                >
                  <CardContent className="p-6">
                    {/* Achievement Icon and Rarity */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`text-4xl p-3 rounded-lg ${
                          achievement.isUnlocked ? "bg-white" : "bg-gray-100 grayscale"
                        }`}
                      >
                        {achievement.icon}
                      </div>
                      <Badge className={`${getRarityColor(achievement.rarity)} border`}>{achievement.rarity}</Badge>
                    </div>

                    {/* Achievement Info */}
                    <div className="space-y-3">
                      <div>
                        <h3
                          className={`font-semibold text-lg ${
                            achievement.isUnlocked ? "text-gray-900" : "text-gray-500"
                          }`}
                        >
                          {achievement.name}
                        </h3>
                        <p className={`text-sm ${achievement.isUnlocked ? "text-gray-600" : "text-gray-400"}`}>
                          {achievement.description}
                        </p>
                      </div>

                      {/* Progress Bar */}
                      {!achievement.isUnlocked && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium">{achievement.progress}%</span>
                          </div>
                          <Progress value={achievement.progress} className="h-2" />
                          <p className="text-xs text-gray-500">{achievement.requirement}</p>
                        </div>
                      )}

                      {/* Points and Date */}
                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-1 text-sm">
                          <Coins className="h-4 w-4 text-yellow-600" />
                          <span className="font-medium">{achievement.points} points</span>
                        </div>
                        {achievement.isUnlocked && achievement.unlockedAt && (
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(achievement.unlockedAt).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Achievement Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Achievement Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {userAchievements.filter((a) => a.isUnlocked).length}
                  </div>
                  <div className="text-sm text-gray-600">Unlocked</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {userAchievements.filter((a) => !a.isUnlocked).length}
                  </div>
                  <div className="text-sm text-gray-600">In Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {userAchievements.filter((a) => a.rarity === "legendary" && a.isUnlocked).length}
                  </div>
                  <div className="text-sm text-gray-600">Legendary</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {userAchievements.filter((a) => a.isUnlocked).reduce((sum, a) => sum + a.points, 0)}
                  </div>
                  <div className="text-sm text-gray-600">Total Points</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
