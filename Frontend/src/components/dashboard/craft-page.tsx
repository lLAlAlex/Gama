/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Hammer,
  Package,
  CheckCircle,
  XCircle,
  Clock,
  Star,
  Volume2,
  VolumeX,
  Sparkles,
  BookOpen,
  Award,
  Coins,
  Info,
  Target,
} from "lucide-react"

// User's current resources
const userResources = {
  bamboo: 45,
  wood: 23,
  stone: 18,
  cloth: 12,
  metal: 8,
  jade: 3,
  gold: 1,
  silk: 15,
  leather: 9,
  gems: 5,
}

// Craftable items with recipes
const craftableItems = [
  {
    id: 1,
    name: "Traditional Keris Dagger",
    category: "weapons",
    difficulty: "legendary",
    craftTime: 120, // minutes
    description: "Sacred ceremonial dagger with mystical powers",
    longDescription:
      "The Keris is more than just a weapon - it's a spiritual artifact that embodies the soul of Javanese culture. Each Keris is believed to possess its own spirit and brings protection to its owner.",
    culturalInsight:
      "The Keris originated in Java around the 9th century and is considered one of the masterpieces of Indonesian metalworking. The wavy blade, called 'luk', is believed to represent the body of a dragon or serpent, symbolizing strength and protection. In Javanese tradition, a Keris is passed down through generations and is thought to have supernatural powers.",
    image: "/Images/Craft/keris.png?height=200&width=200&text=Keris+Dagger",
    recipe: {
      metal: 5,
      wood: 3,
      gems: 2,
      gold: 1,
    },
    rewards: {
      xp: 500,
      coins: 300,
      culturalPoints: 50,
    },
    unlockLevel: 15,
    rarity: "legendary",
    tags: ["weapon", "ceremonial", "javanese"],
    isNew: false,
    completedCount: 2,
  },
  {
    id: 2,
    name: "Batik Fabric Art",
    category: "textiles",
    difficulty: "intermediate",
    craftTime: 45,
    description: "Beautiful traditional Indonesian textile art",
    longDescription:
      "Batik is a traditional Indonesian art form that uses wax-resist dyeing to create intricate patterns on fabric. Each region has its own distinctive patterns and meanings.",
    culturalInsight:
      "Batik was recognized by UNESCO as a Masterpiece of Oral and Intangible Heritage of Humanity in 2009. The word 'batik' comes from the Javanese word 'amba' (to write) and 'titik' (dot). Traditional batik patterns often carry deep philosophical meanings and are used in important ceremonies and royal courts.",
    image: "/Images/Craft/batik.png?height=200&width=200&text=Batik+Fabric",
    recipe: {
      cloth: 8,
      silk: 5,
      gems: 1,
    },
    rewards: {
      xp: 200,
      coins: 150,
      culturalPoints: 30,
    },
    unlockLevel: 8,
    rarity: "rare",
    tags: ["textile", "art", "traditional"],
    isNew: true,
    completedCount: 5,
  },
  {
    id: 3,
    name: "Gamelan Gong",
    category: "instruments",
    difficulty: "advanced",
    craftTime: 90,
    description: "Traditional bronze percussion instrument",
    longDescription:
      "The gong is a central instrument in the Gamelan orchestra, producing deep, resonant tones that form the foundation of Indonesian traditional music.",
    culturalInsight:
      "Gamelan orchestras have been part of Indonesian culture for over 1,000 years. The gong represents the voice of the ancestors and is believed to have spiritual significance. In Balinese and Javanese traditions, gamelan music accompanies religious ceremonies, shadow puppet shows, and royal court events.",
    image: "/Images/Craft/gamelan.png?height=200&width=200&text=Gamelan+Gong",
    recipe: {
      metal: 10,
      gold: 2,
      wood: 4,
    },
    rewards: {
      xp: 350,
      coins: 250,
      culturalPoints: 40,
    },
    unlockLevel: 12,
    rarity: "rare",
    tags: ["instrument", "music", "bronze"],
    isNew: false,
    completedCount: 1,
  },
  {
    id: 4,
    name: "Wayang Puppet",
    category: "art",
    difficulty: "advanced",
    craftTime: 75,
    description: "Traditional shadow puppet for storytelling",
    longDescription:
      "Wayang puppets are used in traditional Indonesian shadow puppet theater to tell epic stories from Hindu mythology and local folklore.",
    culturalInsight:
      "Wayang is one of the oldest forms of storytelling in the world, dating back over 1,000 years. UNESCO recognized Wayang as a Masterpiece of Oral and Intangible Heritage of Humanity. The puppeteer, called a 'dalang', controls multiple puppets while providing voices and narration, often performing for 8-9 hours straight.",
    image: "/Images/Craft/wayang.png?height=200&width=200&text=Wayang+Puppet",
    recipe: {
      leather: 6,
      wood: 4,
      bamboo: 8,
      gold: 1,
    },
    rewards: {
      xp: 300,
      coins: 200,
      culturalPoints: 45,
    },
    unlockLevel: 10,
    rarity: "rare",
    tags: ["puppet", "storytelling", "theater"],
    isNew: false,
    completedCount: 3,
  },
  {
    id: 5,
    name: "Bamboo Angklung",
    category: "instruments",
    difficulty: "beginner",
    craftTime: 30,
    description: "Traditional bamboo musical instrument",
    longDescription:
      "Angklung is a traditional Indonesian musical instrument made from bamboo tubes that produce sound when shaken.",
    culturalInsight:
      "The Angklung originated from West Java and has been played for centuries in Sundanese culture. UNESCO inscribed the Angklung as a Masterpiece of Oral and Intangible Heritage of Humanity in 2010. Traditionally, Angklung is played in large ensembles where each person plays one or two notes, requiring cooperation and harmony.",
    image: "/Images/Craft/bamboo.png?height=200&width=200&text=Bamboo+Angklung",
    recipe: {
      bamboo: 12,
      wood: 2,
    },
    rewards: {
      xp: 100,
      coins: 80,
      culturalPoints: 20,
    },
    unlockLevel: 3,
    rarity: "common",
    tags: ["instrument", "bamboo", "sundanese"],
    isNew: false,
    completedCount: 8,
  },
  {
    id: 6,
    name: "Songket Headpiece",
    category: "accessories",
    difficulty: "intermediate",
    craftTime: 60,
    description: "Royal golden headpiece with intricate patterns",
    longDescription:
      "Songket is a traditional fabric woven with gold or silver threads, often used for ceremonial clothing and royal accessories.",
    culturalInsight:
      "Songket weaving is a centuries-old tradition found across the Malay world, including Indonesia, Malaysia, and Brunei. The word 'songket' comes from 'sungkit', meaning 'to hook' or 'to gouge'. The intricate patterns often represent flora, fauna, and geometric designs that carry cultural and spiritual meanings.",
    image: "/Images/Craft/songket.png?height=200&width=200&text=Songket+Headpiece",
    recipe: {
      silk: 10,
      gold: 3,
      gems: 2,
    },
    rewards: {
      xp: 250,
      coins: 180,
      culturalPoints: 35,
    },
    unlockLevel: 7,
    rarity: "uncommon",
    tags: ["accessory", "royal", "golden"],
    isNew: true,
    completedCount: 0,
  },
]

const categories = [
  { id: "all", name: "All Items", icon: Package },
  { id: "weapons", name: "Weapons", icon: Target },
  { id: "textiles", name: "Textiles", icon: Sparkles },
  { id: "instruments", name: "Instruments", icon: Volume2 },
  { id: "art", name: "Art", icon: BookOpen },
  { id: "accessories", name: "Accessories", icon: Award },
]

export default function CraftPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("difficulty")
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [craftingItem, setCraftingItem] = useState<any>(null)
  const [craftingProgress, setCraftingProgress] = useState(0)
  const [showCulturalInsight, setShowCulturalInsight] = useState(false)
  const [completedCraft, setCompletedCraft] = useState<any>(null)
//   const [ttsLanguage, setTtsLanguage] = useState<"en" | "id">("en")
  const [isSpeaking, setIsSpeaking] = useState(false)

  const filteredItems = useMemo(() => {
    let filtered = craftableItems

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Sort items
    switch (sortBy) {
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "craftTime":
        filtered.sort((a, b) => a.craftTime - b.craftTime)
        break
      case "level":
        filtered.sort((a, b) => a.unlockLevel - b.unlockLevel)
        break
      default: // difficulty
        const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3, legendary: 4 }
        filtered.sort(
          (a, b) =>
            difficultyOrder[a.difficulty as keyof typeof difficultyOrder] -
            difficultyOrder[b.difficulty as keyof typeof difficultyOrder],
        )
    }

    return filtered
  }, [selectedCategory, searchQuery, sortBy])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 border-green-300"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case "advanced":
        return "bg-orange-100 text-orange-800 border-orange-300"
      case "legendary":
        return "bg-purple-100 text-purple-800 border-purple-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "text-gray-600"
      case "uncommon":
        return "text-green-600"
      case "rare":
        return "text-blue-600"
      case "legendary":
        return "text-purple-600"
      default:
        return "text-gray-600"
    }
  }

  const canCraft = (recipe: any) => {
    return Object.entries(recipe).every(
      ([resource, required]) => userResources[resource as keyof typeof userResources] >= (required as number),
    )
  }

  const getMissingResources = (recipe: any) => {
    const missing: string[] = []
    Object.entries(recipe).forEach(([resource, required]) => {
      const available = userResources[resource as keyof typeof userResources] || 0
      if (available < (required as number)) {
        missing.push(`${resource}: need ${required}, have ${available}`)
      }
    })
    return missing
  }

  const startCrafting = (item: any) => {
    if (!canCraft(item.recipe)) return

    setCraftingItem(item)
    setCraftingProgress(0)

    // Simulate crafting progress
    const interval = setInterval(() => {
      setCraftingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setCraftingItem(null)
          setCompletedCraft(item)
          setShowCulturalInsight(true)
          return 100
        }
        return prev + 100 / (item.craftTime * 0.1) // Faster for demo
      })
    }, 100)
  }

  const speakText = (text: string, language: "en" | "id") => {
    if ("speechSynthesis" in window) {
      setIsSpeaking(true)
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = language === "en" ? "en-US" : "id-ID"
      utterance.onend = () => setIsSpeaking(false)
      speechSynthesis.speak(utterance)
    }
  }

  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel()
      setIsSpeaking(false)
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
              <Hammer className="h-8 w-8" />
              Cultural Crafting Workshop
            </h1>
            <p className="text-red-100 text-lg">
              Create traditional Indonesian artifacts and learn their cultural significance!
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">Master Craftsman</div>
            <div className="text-red-200 text-sm">Level 15 • 24 Items Crafted</div>
          </div>
        </div>
      </motion.div>

      {/* Current Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Your Resources Inventory
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {Object.entries(userResources).map(([resource, amount]) => (
              <div key={resource} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-gray-600" />
                </div>
                <div className="text-xs font-medium capitalize">{resource}</div>
                <div className="text-sm text-gray-600">{amount}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search craftable items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      <div className="flex items-center gap-2">
                        <category.icon className="h-4 w-4" />
                        {category.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="difficulty">Difficulty</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="craftTime">Craft Time</SelectItem>
                  <SelectItem value="level">Required Level</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Crafting Progress */}
      <AnimatePresence>
        {craftingItem && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Hammer className="h-8 w-8 text-orange-600 animate-bounce" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Crafting: {craftingItem.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Progress value={craftingProgress} className="flex-1" />
                      <span className="text-sm font-medium">{Math.round(craftingProgress)}%</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Estimated time: {craftingItem.craftTime} minutes</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Craftable Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image || "/Images/Craft/bamboo.png"}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    {item.isNew && <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs">NEW</Badge>}
                    <Badge className={`text-xs border ${getDifficultyColor(item.difficulty)}`}>{item.difficulty}</Badge>
                  </div>

                  {/* Completion Count */}
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    Crafted: {item.completedCount}
                  </div>

                  {/* Rarity Indicator */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${getRarityColor(item.rarity).replace("text-", "bg-")}`}
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg line-clamp-1 flex-1">{item.name}</h3>
                    <Badge variant="outline" className={`ml-2 text-xs ${getRarityColor(item.rarity)}`}>
                      {item.rarity}
                    </Badge>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

                  {/* Recipe Requirements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Required Materials:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(item.recipe).map(([resource, required]) => {
                        const available = userResources[resource as keyof typeof userResources] || 0
                        const hasEnough = available >= (required as number)

                        return (
                          <div
                            key={resource}
                            className={`flex items-center justify-between text-xs p-2 rounded ${hasEnough ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                          >
                            <span className="capitalize">{resource}</span>
                            <span className="font-medium">
                              {available}/{required}
                              {hasEnough ? (
                                <CheckCircle className="h-3 w-3 inline ml-1" />
                              ) : (
                                <XCircle className="h-3 w-3 inline ml-1" />
                              )}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{item.craftTime}min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      <span>Level {item.unlockLevel}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Coins className="h-3 w-3 text-yellow-600" />
                      <span>{item.rewards.coins}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => setSelectedItem(item)}
                    >
                      <Info className="h-3 w-3 mr-1" />
                      Details
                    </Button>

                    <Button
                      size="sm"
                      className="flex-1"
                      disabled={!canCraft(item.recipe) || craftingItem !== null}
                      onClick={() => startCrafting(item)}
                    >
                      <Hammer className="h-3 w-3 mr-1" />
                      {canCraft(item.recipe) ? "Craft" : "Missing Materials"}
                    </Button>
                  </div>

                  {/* Missing Resources Warning */}
                  {!canCraft(item.recipe) && (
                    <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-xs">
                      <div className="font-medium text-red-800 mb-1">Missing Resources:</div>
                      {getMissingResources(item.recipe).map((missing, idx) => (
                        <div key={idx} className="text-red-600">
                          {missing}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Item Details Modal */}
      <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedItem.name}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedItem.image || "/Images/Craft/bamboo.png"}
                    alt={selectedItem.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Recipe Requirements:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(selectedItem.recipe).map(([resource, required]) => {
                          const available = userResources[resource as keyof typeof userResources] || 0
                          const hasEnough = available >= (required as number)

                          return (
                            <div
                              key={resource}
                              className={`flex items-center justify-between p-3 rounded ${hasEnough ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                            >
                              <span className="capitalize font-medium">{resource}</span>
                              <span className={`font-bold ${hasEnough ? "text-green-700" : "text-red-700"}`}>
                                {(available as number)}/{(required as number)}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Rewards:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Experience Points</span>
                          <span className="font-medium">{selectedItem.rewards.xp} XP</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Coins</span>
                          <span className="font-medium flex items-center gap-1">
                            <Coins className="h-4 w-4 text-yellow-600" />
                            {selectedItem.rewards.coins}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Cultural Points</span>
                          <span className="font-medium">{selectedItem.rewards.culturalPoints} CP</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-gray-600">{selectedItem.longDescription}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <Badge className={getDifficultyColor(selectedItem.difficulty)}>{selectedItem.difficulty}</Badge>
                    <span>Craft Time: {selectedItem.craftTime} minutes</span>
                    <span>Required Level: {selectedItem.unlockLevel}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      className="flex-1"
                      disabled={!canCraft(selectedItem.recipe) || craftingItem !== null}
                      onClick={() => {
                        startCrafting(selectedItem)
                        setSelectedItem(null)
                      }}
                    >
                      <Hammer className="h-4 w-4 mr-2" />
                      {canCraft(selectedItem.recipe) ? "Start Crafting" : "Missing Materials"}
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Cultural Insight Modal */}
      <Dialog open={showCulturalInsight} onOpenChange={setShowCulturalInsight}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {completedCraft && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-yellow-500" />
                  Crafting Complete! Cultural Insight
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Success Message */}
                <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-4xl mb-2">🎉</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    You've successfully crafted: {completedCraft.name}!
                  </h3>
                  <div className="flex items-center justify-center gap-4 text-sm text-green-700">
                    <span>+{completedCraft.rewards.xp} XP</span>
                    <span>+{completedCraft.rewards.coins} Coins</span>
                    <span>+{completedCraft.rewards.culturalPoints} Cultural Points</span>
                  </div>
                </div>

                {/* Cultural Insight */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Cultural Insight: {completedCraft.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => speakText(completedCraft.culturalInsight, "en")}
                        disabled={isSpeaking}
                      >
                        {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                        English
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => speakText(completedCraft.culturalInsight, "id")}
                        disabled={isSpeaking}
                      >
                        {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                        Indonesian
                      </Button>
                      {isSpeaking && (
                        <Button variant="outline" size="sm" onClick={stopSpeaking}>
                          <VolumeX className="h-4 w-4" />
                          Stop
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-gray-700 leading-relaxed text-lg">{completedCraft.culturalInsight}</p>
                  </div>
                </div>

                {/* Item Image */}
                <div className="text-center">
                  <img
                    src={completedCraft.image || "/Images/Craft/bamboo.png"}
                    alt={completedCraft.name}
                    className="w-48 h-48 object-cover rounded-lg mx-auto shadow-lg"
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    onClick={() => {
                      setShowCulturalInsight(false)
                      setCompletedCraft(null)
                    }}
                  >
                    Continue Exploring
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
