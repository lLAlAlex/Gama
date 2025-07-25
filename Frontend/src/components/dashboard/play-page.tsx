"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Clock, Users, Trophy, Star, Gamepad2, Mountain, Globe, Coins, Target, Award } from "lucide-react"
import { useNavigate } from "react-router"

interface GameMode {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  image: string
  difficulty: "Easy" | "Medium" | "Hard"
  duration: string
  players: string
  rewards: string[]
  features: string[]
  stats: {
    played: number
    completed: number
    avgScore: number
  }
  isNew?: boolean
  isPopular?: boolean
}

export default function PlayPage() {

  const navigate = useNavigate()
  const [selectedMode, setSelectedMode] = useState("3d-quest")

  const gameModes: GameMode[] = [
    {
      id: "3d-quest",
      title: "3D Monument Quest",
      subtitle: "Immersive AR Adventure",
      description: "Explore Indonesian monuments in stunning 3D augmented reality and uncover their hidden secrets.",
      longDescription:
        "Embark on an epic journey through Indonesia's most iconic monuments using cutting-edge AR technology. Walk around virtual reconstructions of ancient temples, palaces, and historical sites. Solve puzzles, discover hidden artifacts, and learn fascinating stories about Indonesia's rich cultural heritage. Each monument offers unique challenges and rewards that will test your knowledge and exploration skills.",
      image: "/Images/Game-Showcase/3d.png?height=400&width=600&text=3D+Monument+Quest",
      difficulty: "Medium",
      duration: "30-45 min",
      players: "1-4 players",
      rewards: ["50-100 coins", "Rare artifacts", "Monument badges", "XP points"],
      features: [
        "Photorealistic 3D models",
        "Interactive AR elements",
        "Historical storytelling",
        "Multiplayer co-op mode",
        "Achievement system",
        "Photo mode",
      ],
      stats: {
        played: 1247,
        completed: 892,
        avgScore: 8.4,
      },
      isNew: true,
      isPopular: true,
    },
    {
      id: "2d-hunt",
      title: "2D Resource Hunt",
      subtitle: "Strategic Collection Game",
      description:
        "Hunt for traditional crafting materials across Indonesian landscapes in this engaging 2D adventure.",
      longDescription:
        "Master the art of resource gathering in this beautifully illustrated 2D world inspired by Indonesian nature and culture. Travel through diverse environments from rice terraces to tropical forests, collecting rare materials needed for traditional crafts. Plan your routes strategically, manage your energy, and compete with other players to find the most valuable resources. Perfect for quick gaming sessions with meaningful progression.",
      image: "/Images/Game-Showcase/2d.png?height=400&width=600&text=2D+Resource+Hunt",
      difficulty: "Easy",
      duration: "15-30 min",
      players: "1 player",
      rewards: ["25-75 coins", "Crafting materials", "Resource badges", "Energy boosts"],
      features: [
        "Beautiful 2D artwork",
        "Strategic gameplay",
        "Resource management",
        "Daily challenges",
        "Leaderboards",
        "Offline mode",
      ],
      stats: {
        played: 2156,
        completed: 1834,
        avgScore: 7.8,
      },
      isPopular: true,
    },
    {
      id: "geoguessr",
      title: "Indonesia GeoGuessr",
      subtitle: "Geography Challenge",
      description: "Test your knowledge of Indonesian geography by guessing locations from street view images.",
      longDescription:
        "Challenge yourself with this exciting geography game featuring real locations across Indonesia's 17,000+ islands. From bustling Jakarta streets to remote village paths, from volcanic landscapes to pristine beaches - can you identify where you are? Use cultural clues, architecture, nature, and local signs to pinpoint your location. Compete with friends and climb the global leaderboard while learning about Indonesia's incredible diversity.",
      image: "/Images/Game-Showcase/geogussr.png?height=400&width=600&text=Indonesia+GeoGuessr",
      difficulty: "Hard",
      duration: "20-40 min",
      players: "1-8 players",
      rewards: ["30-120 coins", "Geography badges", "Location pins", "Knowledge points"],
      features: [
        "Real street view images",
        "17,000+ locations",
        "Multiplayer battles",
        "Time challenges",
        "Hint system",
        "Educational facts",
      ],
      stats: {
        played: 3421,
        completed: 2187,
        avgScore: 6.9,
      },
      isNew: false,
    },
  ]

//   const currentMode = gameModes.find((mode) => mode.id === selectedMode) || gameModes[0]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700 border-green-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "Hard":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
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
              <Gamepad2 className="h-8 w-8" />
              Play Games
            </h1>
            <p className="text-red-100 text-lg">Choose your adventure and start exploring Indonesian culture!</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Coins className="h-6 w-6" />
              2,450
            </div>
            <div className="text-red-200 text-sm">Your Coins</div>
          </div>
        </div>
      </motion.div>

      {/* Game Mode Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Tabs value={selectedMode} onValueChange={setSelectedMode} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-red-50 p-1 rounded-xl h-auto">
            {gameModes.map((mode) => (
              <TabsTrigger
                key={mode.id}
                value={mode.id}
                className="data-[state=active]:bg-red-500 data-[state=active]:text-white p-4 rounded-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    {mode.id === "3d-quest" && <Mountain className="h-5 w-5" />}
                    {mode.id === "2d-hunt" && <Target className="h-5 w-5" />}
                    {mode.id === "geoguessr" && <Globe className="h-5 w-5" />}
                    <span className="font-medium">{mode.title}</span>
                  </div>
                  <div className="flex gap-1">
                    {mode.isNew && <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0">NEW</Badge>}
                    {mode.isPopular && (
                      <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-0">POPULAR</Badge>
                    )}
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Game Mode Content */}
          {gameModes.map((mode) => (
            <TabsContent key={mode.id} value={mode.id} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Game Image and Basic Info */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden border-red-100">
                    <div className="relative">
                      <img
                        src={mode.image || "/Images/Game-Showcase/3d.png"}
                        alt={mode.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-2xl font-bold mb-1">{mode.title}</h2>
                        <p className="text-white/90">{mode.subtitle}</p>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        {mode.isNew && <Badge className="bg-green-500 text-white">NEW</Badge>}
                        {mode.isPopular && <Badge className="bg-orange-500 text-white">POPULAR</Badge>}
                      </div>
                    </div>
                  </Card>

                  {/* Game Stats */}
                  <Card className="border-red-100">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-800 mb-4">Game Statistics</h3>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-red-600">{mode.stats.played.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Times Played</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-red-600">{mode.stats.completed.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Completed</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-red-600">{mode.stats.avgScore}/10</div>
                          <div className="text-sm text-gray-600">Avg Rating</div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Completion Rate</span>
                          <span>{Math.round((mode.stats.completed / mode.stats.played) * 100)}%</span>
                        </div>
                        <Progress value={(mode.stats.completed / mode.stats.played) * 100} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Game Details */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="border-red-100">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Game Details</h3>
                        <Badge className={`${getDifficultyColor(mode.difficulty)} border`}>{mode.difficulty}</Badge>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">{mode.longDescription}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-red-500" />
                          <span className="font-medium">Duration:</span> {mode.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-red-500" />
                          <span className="font-medium">Players:</span> {mode.players}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-red-500" />
                          Rewards
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {mode.rewards.map((reward, index) => (
                            <Badge key={index} variant="outline" className="border-red-200 text-red-700">
                              {reward}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Star className="h-4 w-4 text-red-500" />
                          Features
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {mode.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => {
                            switch (selectedMode) {
                              case "3d-quest":
                                navigate("/demo");
                                break;
                              case "2d-hunt":
                                navigate("/map");
                                break;
                              case "geoguessr":
                                navigate("/map-game");
                                break;
                              default:
                                navigate("/");
                                break;
                            }
                          }}
                        >
                          <Play className="h-5 w-5 mr-2" />
                          Start Playing
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Recent Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="border-red-100">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5 text-red-500" />
                      Recent Achievements in {mode.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white">
                          🏆
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">First Victory</div>
                          <div className="text-sm text-gray-600">Complete your first game</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                          ⭐
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Perfect Score</div>
                          <div className="text-sm text-gray-600">Achieve maximum points</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                          🎯
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Speed Runner</div>
                          <div className="text-sm text-gray-600">Complete in record time</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  )
}
