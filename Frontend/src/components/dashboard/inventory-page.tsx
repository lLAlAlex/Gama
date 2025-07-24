/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Package,
  Scroll,
  Crown,
  TreePine,
  Hammer,
  Coins,
  Clock,
  Star,
  CheckCircle,
  XCircle,
  BookOpen,
  Calendar,
  MapPin,
} from "lucide-react"

// User's Resources
const userResources = [
  {
    id: 1,
    name: "Bamboo",
    type: "Wood",
    quantity: 45,
    rarity: "common",
    description: "Flexible and strong bamboo stalks, perfect for traditional crafting.",
    source: "Harvested from bamboo forests in Java",
    uses: ["Building materials", "Musical instruments", "Crafting tools"],
    image: "/placeholder.svg?height=100&width=100&text=Bamboo",
  },
  {
    id: 2,
    name: "Teak Wood",
    type: "Wood",
    quantity: 23,
    rarity: "uncommon",
    description: "Premium hardwood known for its durability and beautiful grain.",
    source: "Ancient teak forests of Central Java",
    uses: ["Furniture", "Ship building", "Traditional architecture"],
    image: "/placeholder.svg?height=100&width=100&text=Teak",
  },
  {
    id: 3,
    name: "Volcanic Stone",
    type: "Stone",
    quantity: 18,
    rarity: "rare",
    description: "Sacred stones from Indonesian volcanoes, used in temple construction.",
    source: "Mount Merapi volcanic region",
    uses: ["Temple building", "Sculptures", "Sacred artifacts"],
    image: "/placeholder.svg?height=100&width=100&text=Stone",
  },
  {
    id: 4,
    name: "Silk Cloth",
    type: "Textile",
    quantity: 12,
    rarity: "uncommon",
    description: "Fine silk fabric traditionally used for royal garments.",
    source: "Silk worms from Yogyakarta",
    uses: ["Royal clothing", "Ceremonial items", "Traditional textiles"],
    image: "/placeholder.svg?height=100&width=100&text=Silk",
  },
  {
    id: 5,
    name: "Bronze Ingot",
    type: "Metal",
    quantity: 8,
    rarity: "rare",
    description: "High-quality bronze alloy for creating gamelan instruments.",
    source: "Traditional bronze smiths of Java",
    uses: ["Musical instruments", "Ceremonial objects", "Decorative items"],
    image: "/placeholder.svg?height=100&width=100&text=Bronze",
  },
  {
    id: 6,
    name: "Jade Stone",
    type: "Gem",
    quantity: 3,
    rarity: "legendary",
    description: "Precious jade believed to have spiritual properties.",
    source: "Ancient jade mines of Sumatra",
    uses: ["Jewelry", "Sacred objects", "Royal accessories"],
    image: "/placeholder.svg?height=100&width=100&text=Jade",
  },
  {
    id: 7,
    name: "Gold Leaf",
    type: "Metal",
    quantity: 1,
    rarity: "legendary",
    description: "Pure gold sheets for decorating sacred artifacts.",
    source: "Gold mines of Kalimantan",
    uses: ["Religious decorations", "Royal items", "Sacred art"],
    image: "/placeholder.svg?height=100&width=100&text=Gold",
  },
  {
    id: 8,
    name: "Palm Leaves",
    type: "Plant",
    quantity: 35,
    rarity: "common",
    description: "Traditional writing material and roofing material.",
    source: "Palm trees across Indonesia",
    uses: ["Writing manuscripts", "Roofing", "Traditional crafts"],
    image: "/placeholder.svg?height=100&width=100&text=Palm",
  },
]

// User's Recipes
const userRecipes = [
  {
    id: 1,
    name: "Traditional Keris",
    category: "Weapons",
    difficulty: "legendary",
    unlocked: true,
    completedCount: 2,
    description: "Sacred ceremonial dagger with mystical powers",
    culturalContext:
      "The Keris is a spiritual weapon in Javanese culture, believed to possess its own soul and protect its owner.",
    requirements: {
      "Bronze Ingot": 3,
      "Teak Wood": 2,
      "Jade Stone": 1,
      "Gold Leaf": 1,
    },
    craftTime: 120,
    rewards: {
      xp: 500,
      coins: 300,
      culturalPoints: 50,
    },
    image: "/placeholder.svg?height=150&width=150&text=Keris",
    discoveredAt: "Borobudur Temple",
    discoveryDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Gamelan Gong",
    category: "Instruments",
    difficulty: "advanced",
    unlocked: true,
    completedCount: 1,
    description: "Sacred bronze gong for traditional orchestras",
    culturalContext:
      "The gong is the heart of gamelan music, representing the voice of ancestors and spiritual connection.",
    requirements: {
      "Bronze Ingot": 5,
      "Teak Wood": 3,
    },
    craftTime: 90,
    rewards: {
      xp: 350,
      coins: 250,
      culturalPoints: 40,
    },
    image: "/placeholder.svg?height=150&width=150&text=Gong",
    discoveredAt: "Yogyakarta Palace",
    discoveryDate: "2024-02-03",
  },
  {
    id: 3,
    name: "Batik Fabric",
    category: "Textiles",
    difficulty: "intermediate",
    unlocked: true,
    completedCount: 5,
    description: "Traditional wax-resist dyed fabric with intricate patterns",
    culturalContext:
      "Batik is a UNESCO World Heritage art form, with each pattern carrying deep philosophical meanings.",
    requirements: {
      "Silk Cloth": 4,
      "Palm Leaves": 8,
    },
    craftTime: 60,
    rewards: {
      xp: 200,
      coins: 150,
      culturalPoints: 30,
    },
    image: "/placeholder.svg?height=150&width=150&text=Batik",
    discoveredAt: "Solo Palace",
    discoveryDate: "2024-01-28",
  },
  {
    id: 4,
    name: "Wayang Puppet",
    category: "Art",
    difficulty: "advanced",
    unlocked: false,
    completedCount: 0,
    description: "Traditional shadow puppet for storytelling",
    culturalContext: "Wayang represents the eternal struggle between good and evil through ancient epic stories.",
    requirements: {
      "Teak Wood": 2,
      Bamboo: 6,
      "Gold Leaf": 1,
    },
    craftTime: 75,
    rewards: {
      xp: 300,
      coins: 200,
      culturalPoints: 45,
    },
    image: "/placeholder.svg?height=150&width=150&text=Wayang",
    discoveredAt: "Not discovered yet",
    discoveryDate: null,
  },
  {
    id: 5,
    name: "Angklung Instrument",
    category: "Instruments",
    difficulty: "beginner",
    unlocked: true,
    completedCount: 8,
    description: "Traditional bamboo musical instrument",
    culturalContext:
      "Angklung promotes cooperation and harmony, as each person plays only one or two notes in an ensemble.",
    requirements: {
      Bamboo: 12,
      "Teak Wood": 1,
    },
    craftTime: 30,
    rewards: {
      xp: 100,
      coins: 80,
      culturalPoints: 20,
    },
    image: "/placeholder.svg?height=150&width=150&text=Angklung",
    discoveredAt: "Bandung Cultural Center",
    discoveryDate: "2024-01-10",
  },
]

// User's Crafted Items
const userItems = [
  {
    id: 1,
    name: "Keris Majapahit",
    category: "Weapons",
    rarity: "legendary",
    craftedDate: "2024-01-20",
    description: "A masterfully crafted ceremonial dagger with intricate damascus patterns",
    history:
      "This Keris was crafted following the ancient traditions of the Majapahit Kingdom. The wavy blade represents the body of a dragon, symbolizing strength and protection.",
    culturalSignificance:
      "In Javanese culture, the Keris is believed to have its own spirit and serves as a protector of its owner. It's passed down through generations as a family heirloom.",
    image: "/placeholder.svg?height=200&width=200&text=Keris+Majapahit",
    materials: ["Bronze Ingot", "Teak Wood", "Jade Stone", "Gold Leaf"],
    craftingLevel: 15,
    condition: "Excellent",
  },
  {
    id: 2,
    name: "Gamelan Gong Ageng",
    category: "Instruments",
    rarity: "rare",
    craftedDate: "2024-02-05",
    description: "A large bronze gong that produces deep, resonant tones",
    history:
      "This gong was crafted using traditional bronze-working techniques that have been preserved for over 1,000 years in Java.",
    culturalSignificance:
      "The Gong Ageng is considered the most sacred instrument in a gamelan ensemble, often believed to house ancestral spirits.",
    image: "/placeholder.svg?height=200&width=200&text=Gong+Ageng",
    materials: ["Bronze Ingot", "Teak Wood"],
    craftingLevel: 12,
    condition: "Excellent",
  },
  {
    id: 3,
    name: "Batik Parang Rusak",
    category: "Textiles",
    rarity: "rare",
    craftedDate: "2024-01-30",
    description: "Royal batik pattern with diagonal knife-like motifs",
    history:
      "The Parang Rusak pattern was exclusively worn by Javanese royalty and symbolizes the continuous struggle against evil.",
    culturalSignificance:
      "This sacred pattern represents strength, bravery, and the eternal fight between good and evil forces.",
    image: "/placeholder.svg?height=200&width=200&text=Batik+Parang",
    materials: ["Silk Cloth", "Palm Leaves"],
    craftingLevel: 8,
    condition: "Good",
  },
  {
    id: 4,
    name: "Angklung Ensemble Set",
    category: "Instruments",
    rarity: "uncommon",
    craftedDate: "2024-01-12",
    description: "A complete set of bamboo instruments for traditional music",
    history: "These Angklung were crafted following the UNESCO-recognized traditions of West Java.",
    culturalSignificance:
      "Angklung music promotes cooperation and harmony, teaching the importance of working together to create beautiful melodies.",
    image: "/placeholder.svg?height=200&width=200&text=Angklung+Set",
    materials: ["Bamboo", "Teak Wood"],
    craftingLevel: 3,
    condition: "Excellent",
  },
  {
    id: 5,
    name: "Traditional Songket",
    category: "Textiles",
    rarity: "rare",
    craftedDate: "2024-02-10",
    description: "Luxurious hand-woven fabric with gold thread patterns",
    history:
      "This Songket was woven using traditional techniques from Palembang, incorporating intricate geometric patterns.",
    culturalSignificance:
      "Songket represents the pinnacle of Indonesian textile art, with each pattern carrying deep meaning related to nature and philosophy.",
    image: "/placeholder.svg?height=200&width=200&text=Songket",
    materials: ["Silk Cloth", "Gold Leaf"],
    craftingLevel: 10,
    condition: "Excellent",
  },
]

export default function InventoryPage() {
  const [activeTab, setActiveTab] = useState("resources")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedResource, setSelectedResource] = useState<any>(null)
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-100 text-gray-700 border-gray-300"
      case "uncommon":
        return "bg-green-100 text-green-700 border-green-300"
      case "rare":
        return "bg-blue-100 text-blue-700 border-blue-300"
      case "legendary":
        return "bg-purple-100 text-purple-700 border-purple-300"
      default:
        return "bg-gray-100 text-gray-700 border-gray-300"
    }
  }

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

  const canCraftRecipe = (recipe: any) => {
    return Object.entries(recipe.requirements).every(([resourceName, required]) => {
      const resource = userResources.find((r) => r.name === resourceName)
      return resource && resource.quantity >= (required as number)
    })
  }

  const filteredResources = userResources.filter(
    (resource) =>
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredRecipes = userRecipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredItems = userItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
              <Package className="h-8 w-8" />
              Cultural Inventory
            </h1>
            <p className="text-red-100 text-lg">Manage your resources, recipes, and crafted cultural artifacts</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">Master Collector</div>
            <div className="text-red-200 text-sm">Level 15 • 156 Items Total</div>
          </div>
        </div>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        className="relative max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search inventory..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 border-red-200 focus:border-red-500"
        />
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-red-50 p-1">
            <TabsTrigger
              value="resources"
              className="data-[state=active]:bg-red-500 data-[state=active]:text-white flex items-center gap-2"
            >
              <TreePine className="h-4 w-4" />
              Resources ({userResources.length})
            </TabsTrigger>
            <TabsTrigger
              value="recipes"
              className="data-[state=active]:bg-red-500 data-[state=active]:text-white flex items-center gap-2"
            >
              <Scroll className="h-4 w-4" />
              Recipes ({userRecipes.length})
            </TabsTrigger>
            <TabsTrigger
              value="items"
              className="data-[state=active]:bg-red-500 data-[state=active]:text-white flex items-center gap-2"
            >
              <Crown className="h-4 w-4" />
              Items ({userItems.length})
            </TabsTrigger>
          </TabsList>

          {/* Resources Tab */}
          <TabsContent value="resources" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-red-100 hover:border-red-300"
                    onClick={() => setSelectedResource(resource)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={`text-xs border ${getRarityColor(resource.rarity)}`}>{resource.rarity}</Badge>
                        <div className="text-2xl font-bold text-red-600">{resource.quantity}</div>
                      </div>

                      <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-lg mb-3 flex items-center justify-center">
                        <img
                          src={resource.image || "/placeholder.svg"}
                          alt={resource.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </div>

                      <h3 className="font-semibold text-lg mb-1">{resource.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{resource.type}</p>
                      <p className="text-xs text-gray-500 line-clamp-2">{resource.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Recipes Tab */}
          <TabsContent value="recipes" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe, index) => (
                <motion.div
                  key={recipe.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    className={`group hover:shadow-lg transition-all duration-300 cursor-pointer border-red-100 hover:border-red-300 ${
                      !recipe.unlocked ? "opacity-60" : ""
                    }`}
                    onClick={() => setSelectedRecipe(recipe)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={`text-xs border ${getDifficultyColor(recipe.difficulty)}`}>
                          {recipe.difficulty}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Clock className="h-3 w-3" />
                          {recipe.craftTime}min
                        </div>
                      </div>

                      <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-lg mb-3 flex items-center justify-center relative">
                        <img
                          src={recipe.image || "/placeholder.svg"}
                          alt={recipe.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        {!recipe.unlocked && (
                          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs font-medium">LOCKED</span>
                          </div>
                        )}
                      </div>

                      <h3 className="font-semibold text-lg mb-1">{recipe.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{recipe.category}</p>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-3">{recipe.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">Crafted: {recipe.completedCount}x</div>
                        <div className="flex items-center gap-1">
                          {canCraftRecipe(recipe) && recipe.unlocked ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Items Tab */}
          <TabsContent value="items" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-red-100 hover:border-red-300"
                    onClick={() => setSelectedItem(item)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={`text-xs border ${getRarityColor(item.rarity)}`}>{item.rarity}</Badge>
                        <div className="text-xs text-gray-500">Level {item.craftingLevel}</div>
                      </div>

                      <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-lg mb-3 flex items-center justify-center">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                      </div>

                      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-3">{item.description}</p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Crafted: {item.craftedDate}</span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {item.condition}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Resource Detail Modal */}
      <Dialog open={!!selectedResource} onOpenChange={() => setSelectedResource(null)}>
        <DialogContent className="max-w-2xl">
          {selectedResource && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{selectedResource.name}</span>
                  <Badge className={`${getRarityColor(selectedResource.rarity)} border`}>
                    {selectedResource.rarity}
                  </Badge>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center">
                    <img
                      src={selectedResource.image || "/placeholder.svg"}
                      alt={selectedResource.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Resource Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium">Type:</span>
                          <span>{selectedResource.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Quantity:</span>
                          <span className="font-bold text-red-600">{selectedResource.quantity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Rarity:</span>
                          <span className="capitalize">{selectedResource.rarity}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Source</h4>
                      <p className="text-sm text-gray-600">{selectedResource.source}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-gray-700">{selectedResource.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Common Uses</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedResource.uses.map((use: string, index: number) => (
                      <Badge key={index} variant="outline" className="border-red-200 text-red-700">
                        {use}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Recipe Detail Modal */}
      <Dialog open={!!selectedRecipe} onOpenChange={() => setSelectedRecipe(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedRecipe && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{selectedRecipe.name}</span>
                  <div className="flex items-center gap-2">
                    <Badge className={`${getDifficultyColor(selectedRecipe.difficulty)} border`}>
                      {selectedRecipe.difficulty}
                    </Badge>
                    {!selectedRecipe.unlocked && (
                      <Badge variant="outline" className="border-gray-300 text-gray-600">
                        LOCKED
                      </Badge>
                    )}
                  </div>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center">
                    <img
                      src={selectedRecipe.image || "/placeholder.svg"}
                      alt={selectedRecipe.name}
                      className="w-48 h-48 object-cover rounded-lg"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Recipe Information</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium">Category:</span>
                          <span>{selectedRecipe.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Difficulty:</span>
                          <span className="capitalize">{selectedRecipe.difficulty}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Craft Time:</span>
                          <span>{selectedRecipe.craftTime} minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Completed:</span>
                          <span>{selectedRecipe.completedCount} times</span>
                        </div>
                      </div>
                    </div>

                    {selectedRecipe.discoveredAt && (
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Discovery Location
                        </h4>
                        <p className="text-sm text-gray-600">{selectedRecipe.discoveredAt}</p>
                        {selectedRecipe.discoveryDate && (
                          <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                            <Calendar className="h-3 w-3" />
                            {selectedRecipe.discoveryDate}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-gray-700">{selectedRecipe.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Cultural Context</h4>
                  <p className="text-gray-700">{selectedRecipe.culturalContext}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Required Materials</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(selectedRecipe.requirements).map(([material, required]) => {
                      const resource = userResources.find((r) => r.name === material)
                      const available = resource ? resource.quantity : 0
                      const hasEnough = available >= (required as number)

                      return (
                        <div
                          key={material}
                          className={`flex items-center justify-between p-3 rounded-lg border ${
                            hasEnough ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                          }`}
                        >
                          <span className="font-medium">{material}</span>
                          <span className={`font-bold ${hasEnough ? "text-green-700" : "text-red-700"}`}>
                            {available}/{required}
                            {hasEnough ? (
                              <CheckCircle className="h-4 w-4 inline ml-1" />
                            ) : (
                              <XCircle className="h-4 w-4 inline ml-1" />
                            )}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Rewards</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="font-bold text-blue-700">{selectedRecipe.rewards.xp}</div>
                      <div className="text-xs text-blue-600">Experience</div>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                      <div className="font-bold text-yellow-700 flex items-center justify-center gap-1">
                        <Coins className="h-4 w-4" />
                        {selectedRecipe.rewards.coins}
                      </div>
                      <div className="text-xs text-yellow-600">Coins</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="font-bold text-purple-700">{selectedRecipe.rewards.culturalPoints}</div>
                      <div className="text-xs text-purple-600">Cultural Points</div>
                    </div>
                  </div>
                </div>

                {selectedRecipe.unlocked && (
                  <div className="flex justify-center">
                    <Button
                      className="bg-red-500 hover:bg-red-600 text-white"
                      disabled={!canCraftRecipe(selectedRecipe)}
                    >
                      <Hammer className="h-4 w-4 mr-2" />
                      {canCraftRecipe(selectedRecipe) ? "Start Crafting" : "Missing Materials"}
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Item Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{selectedItem.name}</span>
                  <Badge className={`${getRarityColor(selectedItem.rarity)} border`}>{selectedItem.rarity}</Badge>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center">
                    <img
                      src={selectedItem.image || "/placeholder.svg"}
                      alt={selectedItem.name}
                      className="w-48 h-48 object-cover rounded-lg"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Item Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium">Category:</span>
                          <span>{selectedItem.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Rarity:</span>
                          <span className="capitalize">{selectedItem.rarity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Crafted Date:</span>
                          <span>{selectedItem.craftedDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Crafting Level:</span>
                          <span>Level {selectedItem.craftingLevel}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Condition:</span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            {selectedItem.condition}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Materials Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.materials.map((material: string, index: number) => (
                          <Badge key={index} variant="outline" className="border-red-200 text-red-700">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-gray-700">{selectedItem.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Historical Context
                  </h4>
                  <p className="text-gray-700">{selectedItem.history}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Cultural Significance</h4>
                  <p className="text-gray-700">{selectedItem.culturalSignificance}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
