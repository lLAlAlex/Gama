"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Filter,
  BookOpen,
  Star,
  MapPin,
  Calendar,
  Crown,
  Sword,
  Shirt,
  Home,
  Music,
  Utensils,
  Lock,
  Eye,
} from "lucide-react"

interface HeritageItem {
  id: string
  name: string
  category: string
  region: string
  rarity: "common" | "uncommon" | "rare" | "legendary"
  discovered: boolean
  image: string
  description: string
  history: string
  culturalSignificance: string
  materials: string[]
  period: string
  relatedItems: string[]
  discoveryLocation?: string
  discoveryDate?: string
}

export default function HeritageBooksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<HeritageItem | null>(null)

  const categories = [
    { id: "all", name: "All Items", icon: <BookOpen className="h-4 w-4" />, count: 156 },
    { id: "weapons", name: "Traditional Weapons", icon: <Sword className="h-4 w-4" />, count: 24 },
    { id: "clothing", name: "Traditional Clothing", icon: <Shirt className="h-4 w-4" />, count: 32 },
    { id: "architecture", name: "Architecture", icon: <Home className="h-4 w-4" />, count: 18 },
    { id: "instruments", name: "Musical Instruments", icon: <Music className="h-4 w-4" />, count: 15 },
    { id: "crafts", name: "Handicrafts", icon: <Crown className="h-4 w-4" />, count: 28 },
    { id: "culinary", name: "Culinary Tools", icon: <Utensils className="h-4 w-4" />, count: 21 },
    { id: "jewelry", name: "Traditional Jewelry", icon: <Star className="h-4 w-4" />, count: 18 },
  ]

  const heritageItems: HeritageItem[] = [
    {
      id: "keris-001",
      name: "Keris Majapahit",
      category: "weapons",
      region: "East Java",
      rarity: "legendary",
      discovered: true,
      image: "/placeholder.svg?height=200&width=200&text=Keris",
      description: "A sacred ceremonial dagger with intricate patterns and spiritual significance.",
      history:
        "The Keris originated in the Majapahit Kingdom during the 13th century. This particular piece features the distinctive wavy blade known as 'luk' and was crafted by master smiths using traditional techniques passed down through generations.",
      culturalSignificance:
        "In Javanese culture, the Keris is more than just a weapon - it's a spiritual object believed to possess mystical powers. It represents the owner's status, spiritual strength, and connection to ancestors.",
      materials: ["Damascus steel", "Gold inlay", "Sacred wood handle", "Precious stones"],
      period: "13th-15th Century",
      relatedItems: ["keris-002", "javanese-crown"],
      discoveryLocation: "Trowulan Archaeological Site",
      discoveryDate: "2024-01-15",
    },
    {
      id: "batik-001",
      name: "Batik Parang Rusak",
      category: "clothing",
      region: "Central Java",
      rarity: "rare",
      discovered: true,
      image: "/placeholder.svg?height=200&width=200&text=Batik",
      description: "Traditional batik pattern reserved for Javanese royalty, featuring diagonal knife-like motifs.",
      history:
        "The Parang Rusak pattern was exclusively worn by the Sultan and his family in the Yogyakarta and Surakarta palaces. The pattern symbolizes strength, bravery, and the continuous struggle against evil.",
      culturalSignificance:
        "This sacred pattern represents the eternal struggle between good and evil, with the diagonal lines symbolizing the flow of life and the knife-like shapes representing strength in adversity.",
      materials: ["Hand-woven cotton", "Natural indigo dye", "Sogan brown dye", "Wax resist"],
      period: "17th-19th Century",
      relatedItems: ["batik-002", "javanese-crown"],
    },
    {
      id: "gamelan-001",
      name: "Gamelan Gong Ageng",
      category: "instruments",
      region: "Central Java",
      rarity: "uncommon",
      discovered: false,
      image: "/placeholder.svg?height=200&width=200&text=Gamelan",
      description: "The largest gong in a traditional Gamelan orchestra, producing deep, resonant tones.",
      history:
        "Gamelan orchestras have been part of Javanese culture for over 1,000 years. The Gong Ageng serves as the foundation of the ensemble, marking important structural points in the music.",
      culturalSignificance:
        "The Gong Ageng is considered the most sacred instrument in the Gamelan ensemble, often believed to house spirits and requiring special ceremonies before being played.",
      materials: ["Bronze alloy", "Brass", "Traditional wood frame", "Rope bindings"],
      period: "8th Century - Present",
      relatedItems: ["gamelan-002", "gamelan-003"],
    },
    {
      id: "rumah-gadang",
      name: "Rumah Gadang Miniature",
      category: "architecture",
      region: "West Sumatra",
      rarity: "rare",
      discovered: true,
      image: "/placeholder.svg?height=200&width=200&text=Rumah+Gadang",
      description: "Traditional Minangkabau house with distinctive curved roof resembling buffalo horns.",
      history:
        "Rumah Gadang has been the traditional house of the Minangkabau people for centuries. The distinctive roof design is inspired by the horns of the water buffalo, which holds special significance in Minangkabau culture.",
      culturalSignificance:
        "The house represents the matrilineal society of the Minangkabau people, where property and family names are passed down through the female line. The curved roof symbolizes the horns of the victorious buffalo in their legendary battle.",
      materials: ["Tropical hardwood", "Palm fiber roof", "Bamboo", "Natural pigments"],
      period: "16th Century - Present",
      relatedItems: ["minang-textile", "buffalo-horn"],
      discoveryLocation: "Bukittinggi Cultural Center",
      discoveryDate: "2024-02-20",
    },
    {
      id: "wayang-kulit",
      name: "Wayang Kulit Arjuna",
      category: "crafts",
      region: "Central Java",
      rarity: "uncommon",
      discovered: true,
      image: "/placeholder.svg?height=200&width=200&text=Wayang",
      description: "Traditional shadow puppet representing the hero Arjuna from the Mahabharata epic.",
      history:
        "Wayang Kulit has been performed in Java for over 1,000 years, combining Hindu-Buddhist mythology with Islamic and Javanese philosophy. This Arjuna puppet represents one of the most beloved characters in Javanese culture.",
      culturalSignificance:
        "Wayang performances serve as both entertainment and moral education, teaching values through ancient stories. Arjuna represents the ideal knight - brave, handsome, and spiritually pure.",
      materials: ["Buffalo hide", "Natural pigments", "Gold leaf", "Bamboo handle"],
      period: "10th Century - Present",
      relatedItems: ["wayang-002", "gamelan-001"],
      discoveryLocation: "Yogyakarta Palace",
      discoveryDate: "2024-01-28",
    },
    {
      id: "songket-001",
      name: "Songket Palembang",
      category: "clothing",
      region: "South Sumatra",
      rarity: "rare",
      discovered: false,
      image: "/placeholder.svg?height=200&width=200&text=Songket",
      description: "Luxurious hand-woven fabric with gold and silver threads, worn by Palembang royalty.",
      history:
        "Songket weaving in Palembang dates back to the 16th century during the Sultanate era. The intricate patterns and use of precious metals made it a symbol of wealth and status.",
      culturalSignificance:
        "Songket represents the pinnacle of Indonesian textile art, with each pattern carrying deep meaning related to nature, philosophy, and social status. It's essential for traditional ceremonies and royal occasions.",
      materials: ["Silk threads", "Gold threads", "Silver threads", "Natural dyes"],
      period: "16th Century - Present",
      relatedItems: ["palembang-crown", "traditional-jewelry"],
    },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-100 text-gray-700 border-gray-200"
      case "uncommon":
        return "bg-green-100 text-green-700 border-green-200"
      case "rare":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "legendary":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "⚪"
      case "uncommon":
        return "🟢"
      case "rare":
        return "🔵"
      case "legendary":
        return "🔴"
      default:
        return "⚪"
    }
  }

  const filteredItems = heritageItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.region.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const discoveredCount = heritageItems.filter((item) => item.discovered).length
  const totalCount = heritageItems.length
  const discoveryPercentage = (discoveredCount / totalCount) * 100

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
            <h1 className="text-3xl font-bold mb-2">Heritage Books 📚</h1>
            <p className="text-red-100 text-lg">Discover Indonesia's cultural treasures</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">
              {discoveredCount}/{totalCount}
            </div>
            <div className="text-red-200 text-sm">Items Discovered</div>
            <Progress value={discoveryPercentage} className="w-32 mt-2" />
          </div>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        className="flex flex-col lg:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search heritage items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-red-200 focus:border-red-500"
          />
        </div>
        <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </motion.div>

      {/* Categories */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
              selectedCategory === category.id
                ? "border-red-500 bg-red-50 text-red-700"
                : "border-red-100 hover:border-red-300 hover:bg-red-50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="flex flex-col items-center gap-2">
              {category.icon}
              <span className="text-sm font-medium">{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Items Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Card
                className={`cursor-pointer border-red-100 hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  !item.discovered ? "opacity-75" : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                    {item.discovered ? (
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-6xl text-red-300">
                        <Lock className="h-16 w-16" />
                      </div>
                    )}
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className={`${getRarityColor(item.rarity)} border`}>
                      {getRarityIcon(item.rarity)} {item.rarity}
                    </Badge>
                  </div>
                  {item.discovered && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        <Eye className="h-3 w-3 mr-1" />
                        Discovered
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2 truncate">{item.discovered ? item.name : "???"}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPin className="h-3 w-3" />
                    {item.discovered ? item.region : "Unknown Region"}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.discovered
                      ? item.description
                      : "Discover this item to learn more about its history and significance."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Item Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedItem && (
            <div>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">
                    {selectedItem.discovered ? selectedItem.name : "Undiscovered Item"}
                  </span>
                  <Badge className={`${getRarityColor(selectedItem.rarity)} border`}>
                    {getRarityIcon(selectedItem.rarity)} {selectedItem.rarity}
                  </Badge>
                </DialogTitle>
              </DialogHeader>

              {selectedItem.discovered ? (
                <div className="space-y-6">
                  {/* Image and Basic Info */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-xl overflow-hidden">
                      <img
                        src={selectedItem.image || "/placeholder.svg"}
                        alt={selectedItem.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Basic Information</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-red-500" />
                            <span className="font-medium">Region:</span> {selectedItem.region}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-red-500" />
                            <span className="font-medium">Period:</span> {selectedItem.period}
                          </div>
                          {selectedItem.discoveryLocation && (
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-red-500" />
                              <span className="font-medium">Discovered at:</span> {selectedItem.discoveryLocation}
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Materials</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.materials.map((material, index) => (
                            <Badge key={index} variant="outline" className="border-red-200 text-red-700">
                              {material}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Information */}
                  <Tabs defaultValue="description" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-red-50">
                      <TabsTrigger
                        value="description"
                        className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
                      >
                        Description
                      </TabsTrigger>
                      <TabsTrigger
                        value="history"
                        className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
                      >
                        History
                      </TabsTrigger>
                      <TabsTrigger
                        value="significance"
                        className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
                      >
                        Cultural Significance
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="description" className="mt-4">
                      <p className="text-gray-700 leading-relaxed">{selectedItem.description}</p>
                    </TabsContent>
                    <TabsContent value="history" className="mt-4">
                      <p className="text-gray-700 leading-relaxed">{selectedItem.history}</p>
                    </TabsContent>
                    <TabsContent value="significance" className="mt-4">
                      <p className="text-gray-700 leading-relaxed">{selectedItem.culturalSignificance}</p>
                    </TabsContent>
                  </Tabs>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Lock className="h-24 w-24 text-red-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Item Not Yet Discovered</h3>
                  <p className="text-gray-600 mb-4">
                    Explore Indonesian landmarks to discover this cultural treasure and unlock its detailed information.
                  </p>
                  <Button className="bg-red-500 hover:bg-red-600 text-white">Start Exploring</Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
