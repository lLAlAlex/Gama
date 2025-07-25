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
  Volume2,
  VolumeX,
} from "lucide-react"

interface HeritageItem {
  id: string
  name: {
    en: string
    id: string
  }
  category: string
  region: {
    en: string
    id: string
  }
  rarity: "Common" | "Uncommon" | "Rare" | "Legendary"
  discovered: boolean
  image: string
  description: {
    en: string
    id: string
  }
  history: {
    en: string
    id: string
  }
  culturalSignificance: {
    en: string
    id: string
  }
  materials: {
    en: string[]
    id: string[]
  }
  period: {
    en: string
    id: string
  }
  relatedItems: string[]
  discoveryLocation?: {
    en: string
    id: string
  }
  discoveryDate?: string
}

export default function HeritageBooksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<HeritageItem | null>(null)
  // const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "id">("en")
  const [isSpeaking, setIsSpeaking] = useState(false)

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
      name: {
        en: "Keris Majapahit",
        id: "Keris Majapahit",
      },
      category: "weapons",
      region: {
        en: "East Java",
        id: "Jawa Timur",
      },
      rarity: "Legendary",
      discovered: true,
      image: "/Images/Item/keris-majapahit.png?height=200&width=200&text=Keris",
      description: {
        en: "A sacred ceremonial dagger with intricate patterns and spiritual significance.",
        id: "Belati upacara suci dengan pola rumit dan makna spiritual yang mendalam.",
      },
      history: {
        en: "The Keris originated in the Majapahit Kingdom during the 13th century. This particular piece features the distinctive wavy blade known as 'luk' and was crafted by master smiths using traditional techniques passed down through generations.",
        id: "Keris berasal dari Kerajaan Majapahit pada abad ke-13. Karya khusus ini menampilkan bilah bergelombang khas yang dikenal sebagai 'luk' dan dibuat oleh pandai besi ahli menggunakan teknik tradisional yang diwariskan turun-temurun.",
      },
      culturalSignificance: {
        en: "In Javanese culture, the Keris is more than just a weapon - it's a spiritual object believed to possess mystical powers. It represents the owner's status, spiritual strength, and connection to ancestors.",
        id: "Dalam budaya Jawa, Keris lebih dari sekadar senjata - ini adalah objek spiritual yang dipercaya memiliki kekuatan mistis. Keris melambangkan status pemilik, kekuatan spiritual, dan hubungan dengan leluhur.",
      },
      materials: {
        en: ["Damascus steel", "Gold inlay", "Sacred wood handle", "Precious stones"],
        id: ["Baja Damascus", "Tatahan emas", "Gagang kayu suci", "Batu mulia"],
      },
      period: {
        en: "13th-15th Century",
        id: "Abad ke-13 hingga ke-15",
      },
      relatedItems: ["keris-002", "javanese-crown"],
      discoveryLocation: {
        en: "Trowulan Archaeological Site",
        id: "Situs Arkeologi Trowulan",
      },
      discoveryDate: "2024-01-15",
    },
    {
      id: "batik-001",
      name: {
        en: "Batik Parang Rusak",
        id: "Batik Parang Rusak",
      },
      category: "clothing",
      region: {
        en: "Central Java",
        id: "Jawa Tengah",
      },
      rarity: "Rare",
      discovered: true,
      image: "/Images/Item/batik-parang-rusak.png?height=200&width=200&text=Batik",
      description: {
        en: "Traditional batik pattern reserved for Javanese royalty, featuring diagonal knife-like motifs.",
        id: "Pola batik tradisional yang dikhususkan untuk bangsawan Jawa, menampilkan motif diagonal seperti pisau.",
      },
      history: {
        en: "The Parang Rusak pattern was exclusively worn by the Sultan and his family in the Yogyakarta and Surakarta palaces. The pattern symbolizes strength, bravery, and the continuous struggle against evil.",
        id: "Pola Parang Rusak secara eksklusif dikenakan oleh Sultan dan keluarganya di istana Yogyakarta dan Surakarta. Pola ini melambangkan kekuatan, keberanian, dan perjuangan berkelanjutan melawan kejahatan.",
      },
      culturalSignificance: {
        en: "This sacred pattern represents the eternal struggle between good and evil, with the diagonal lines symbolizing the flow of life and the knife-like shapes representing strength in adversity.",
        id: "Pola suci ini mewakili perjuangan abadi antara kebaikan dan kejahatan, dengan garis diagonal melambangkan aliran kehidupan dan bentuk seperti pisau mewakili kekuatan dalam kesulitan.",
      },
      materials: {
        en: ["Hand-woven cotton", "Natural indigo dye", "Sogan brown dye", "Wax resist"],
        id: ["Katun tenun tangan", "Pewarna indigo alami", "Pewarna coklat sogan", "Lilin penahan"],
      },
      period: {
        en: "17th-19th Century",
        id: "Abad ke-17 hingga ke-19",
      },
      relatedItems: ["batik-002", "javanese-crown"],
    },
    {
      id: "gamelan-001",
      name: {
        en: "Gamelan Gong Ageng",
        id: "Gamelan Gong Ageng",
      },
      category: "instruments",
      region: {
        en: "Central Java",
        id: "Jawa Tengah",
      },
      rarity: "Uncommon",
      discovered: false,
      image: "/Images/Item/iron.png?height=200&width=200&text=Gamelan",
      description: {
        en: "The largest gong in a traditional Gamelan orchestra, producing deep, resonant tones.",
        id: "Gong terbesar dalam orkestra Gamelan tradisional, menghasilkan nada yang dalam dan bergema.",
      },
      history: {
        en: "Gamelan orchestras have been part of Javanese culture for over 1,000 years. The Gong Ageng serves as the foundation of the ensemble, marking important structural points in the music.",
        id: "Orkestra Gamelan telah menjadi bagian dari budaya Jawa selama lebih dari 1.000 tahun. Gong Ageng berfungsi sebagai fondasi ansambel, menandai titik-titik struktural penting dalam musik.",
      },
      culturalSignificance: {
        en: "The Gong Ageng is considered the most sacred instrument in the Gamelan ensemble, often believed to house spirits and requiring special ceremonies before being played.",
        id: "Gong Ageng dianggap sebagai instrumen paling suci dalam ansambel Gamelan, sering dipercaya sebagai tempat tinggal roh dan memerlukan upacara khusus sebelum dimainkan.",
      },
      materials: {
        en: ["Bronze alloy", "Brass", "Traditional wood frame", "Rope bindings"],
        id: ["Paduan perunggu", "Kuningan", "Rangka kayu tradisional", "Ikatan tali"],
      },
      period: {
        en: "8th Century - Present",
        id: "Abad ke-8 - Sekarang",
      },
      relatedItems: ["gamelan-002", "gamelan-003"],
    },
    {
      id: "rumah-gadang",
      name: {
        en: "Rumah Gadang Miniature",
        id: "Miniatur Rumah Gadang",
      },
      category: "architecture",
      region: {
        en: "West Sumatra",
        id: "Sumatera Barat",
      },
      rarity: "Rare",
      discovered: true,
      image: "/Images/Item/rumah-minangkabau.png?height=200&width=200&text=Rumah+Gadang",
      description: {
        en: "Traditional Minangkabau house with distinctive curved roof resembling buffalo horns.",
        id: "Rumah tradisional Minangkabau dengan atap melengkung khas yang menyerupai tanduk kerbau.",
      },
      history: {
        en: "Rumah Gadang has been the traditional house of the Minangkabau people for centuries. The distinctive roof design is inspired by the horns of the water buffalo, which holds special significance in Minangkabau culture.",
        id: "Rumah Gadang telah menjadi rumah tradisional masyarakat Minangkabau selama berabad-abad. Desain atap yang khas terinspirasi dari tanduk kerbau air, yang memiliki makna khusus dalam budaya Minangkabau.",
      },
      culturalSignificance: {
        en: "The house represents the matrilineal society of the Minangkabau people, where property and family names are passed down through the female line. The curved roof symbolizes the horns of the victorious buffalo in their legendary battle.",
        id: "Rumah ini mewakili masyarakat matrilineal suku Minangkabau, di mana harta dan nama keluarga diwariskan melalui garis keturunan perempuan. Atap melengkung melambangkan tanduk kerbau yang menang dalam pertempuran legendaris mereka.",
      },
      materials: {
        en: ["Tropical hardwood", "Palm fiber roof", "Bamboo", "Natural pigments"],
        id: ["Kayu keras tropis", "Atap serat kelapa", "Bambu", "Pigmen alami"],
      },
      period: {
        en: "16th Century - Present",
        id: "Abad ke-16 - Sekarang",
      },
      relatedItems: ["minang-textile", "buffalo-horn"],
      discoveryLocation: {
        en: "Bukittinggi Cultural Center",
        id: "Pusat Budaya Bukittinggi",
      },
      discoveryDate: "2024-02-20",
    },
    {
      id: "wayang-kulit",
      name: {
        en: "Wayang Kulit Arjuna",
        id: "Wayang Kulit Arjuna",
      },
      category: "crafts",
      region: {
        en: "Central Java",
        id: "Jawa Tengah",
      },
      rarity: "Uncommon",
      discovered: true,
      image: "/Images/Item/wayang-kulit.png?height=200&width=200&text=Wayang",
      description: {
        en: "Traditional shadow puppet representing the hero Arjuna from the Mahabharata epic.",
        id: "Boneka bayangan tradisional yang mewakili pahlawan Arjuna dari epos Mahabharata.",
      },
      history: {
        en: "Wayang Kulit has been performed in Java for over 1,000 years, combining Hindu-Buddhist mythology with Islamic and Javanese philosophy. This Arjuna puppet represents one of the most beloved characters in Javanese culture.",
        id: "Wayang Kulit telah dipentaskan di Jawa selama lebih dari 1.000 tahun, menggabungkan mitologi Hindu-Buddha dengan filosofi Islam dan Jawa. Boneka Arjuna ini mewakili salah satu karakter yang paling dicintai dalam budaya Jawa.",
      },
      culturalSignificance: {
        en: "Wayang performances serve as both entertainment and moral education, teaching values through ancient stories. Arjuna represents the ideal knight - brave, handsome, and spiritually pure.",
        id: "Pertunjukan Wayang berfungsi sebagai hiburan dan pendidikan moral, mengajarkan nilai-nilai melalui cerita kuno. Arjuna mewakili ksatria ideal - berani, tampan, dan suci secara spiritual.",
      },
      materials: {
        en: ["Buffalo hide", "Natural pigments", "Gold leaf", "Bamboo handle"],
        id: ["Kulit kerbau", "Pigmen alami", "Daun emas", "Gagang bambu"],
      },
      period: {
        en: "10th Century - Present",
        id: "Abad ke-10 - Sekarang",
      },
      relatedItems: ["wayang-002", "gamelan-001"],
      discoveryLocation: {
        en: "Yogyakarta Palace",
        id: "Keraton Yogyakarta",
      },
      discoveryDate: "2024-01-28",
    },
    {
      id: "songket-001",
      name: {
        en: "Songket Palembang",
        id: "Songket Palembang",
      },
      category: "clothing",
      region: {
        en: "South Sumatra",
        id: "Sumatera Selatan",
      },
      rarity: "Rare",
      discovered: false,
      image: "/Images/Item/wood.png?height=200&width=200&text=Songket",
      description: {
        en: "Luxurious hand-woven fabric with gold and silver threads, worn by Palembang royalty.",
        id: "Kain tenun mewah dengan benang emas dan perak, dikenakan oleh bangsawan Palembang.",
      },
      history: {
        en: "Songket weaving in Palembang dates back to the 16th century during the Sultanate era. The intricate patterns and use of precious metals made it a symbol of wealth and status.",
        id: "Tenun Songket di Palembang berasal dari abad ke-16 pada era Kesultanan. Pola rumit dan penggunaan logam mulia menjadikannya simbol kekayaan dan status.",
      },
      culturalSignificance: {
        en: "Songket represents the pinnacle of Indonesian textile art, with each pattern carrying deep meaning related to nature, philosophy, and social status. It's essential for traditional ceremonies and royal occasions.",
        id: "Songket mewakili puncak seni tekstil Indonesia, dengan setiap pola membawa makna mendalam yang berkaitan dengan alam, filosofi, dan status sosial. Ini penting untuk upacara tradisional dan acara kerajaan.",
      },
      materials: {
        en: ["Silk threads", "Gold threads", "Silver threads", "Natural dyes"],
        id: ["Benang sutra", "Benang emas", "Benang perak", "Pewarna alami"],
      },
      period: {
        en: "16th Century - Present",
        id: "Abad ke-16 - Sekarang",
      },
      relatedItems: ["palembang-crown", "traditional-jewelry"],
    },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-100 text-gray-700 border-gray-200"
      case "Uncommon":
        return "bg-green-100 text-green-700 border-green-200"
      case "Rare":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "Legendary":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "⚪"
      case "Uncommon":
        return "🟢"
      case "Rare":
        return "🔵"
      case "Legendary":
        return "🔴"
      default:
        return "⚪"
    }
  }

  const filteredItems = heritageItems.filter((item) => {
    const matchesSearch =
      item.name[currentLanguage].toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.region[currentLanguage].toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const discoveredCount = heritageItems.filter((item) => item.discovered).length
  const totalCount = heritageItems.length
  const discoveryPercentage = (discoveredCount / totalCount) * 100

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

  const getItemText = (
    item: HeritageItem,
    field: keyof Pick<HeritageItem, "description" | "history" | "culturalSignificance">,
    language: "en" | "id",
  ) => {
    return item[field][language]
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

      {/* Language Toggle */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="bg-white rounded-lg p-1 border border-red-200 shadow-sm">
          <Button
            variant={currentLanguage === "en" ? "default" : "ghost"}
            size="sm"
            onClick={() => setCurrentLanguage("en")}
            className={currentLanguage === "en" ? "bg-red-500 hover:bg-red-600" : "hover:bg-red-50"}
          >
            English
          </Button>
          <Button
            variant={currentLanguage === "id" ? "default" : "ghost"}
            size="sm"
            onClick={() => setCurrentLanguage("id")}
            className={currentLanguage === "id" ? "bg-red-500 hover:bg-red-600" : "hover:bg-red-50"}
          >
            Bahasa Indonesia
          </Button>
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
                        src={item.image || "/Images/Item/"}
                        alt={item.name[currentLanguage]}
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
                  <h3 className="font-bold text-gray-800 mb-2 truncate">
                    {item.discovered ? item.name[currentLanguage] : "???"}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPin className="h-3 w-3" />
                    {item.discovered ? item.region[currentLanguage] : "Unknown Region"}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.discovered
                      ? item.description[currentLanguage]
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
                    {selectedItem.discovered ? selectedItem.name[currentLanguage] : "Undiscovered Item"}
                  </span>
                  <div className="flex items-center gap-2">
                    <Badge className={`${getRarityColor(selectedItem.rarity)} border`}>
                      {getRarityIcon(selectedItem.rarity)} {selectedItem.rarity}
                    </Badge>
                  </div>
                </DialogTitle>
              </DialogHeader>

              {selectedItem.discovered ? (
                <div className="space-y-6">
                  {/* Language Toggle for Modal */}
                  <div className="flex justify-center">
                    <div className="bg-gray-100 rounded-lg p-1">
                      <Button
                        variant={currentLanguage === "en" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setCurrentLanguage("en")}
                        className={currentLanguage === "en" ? "bg-red-500 hover:bg-red-600" : "hover:bg-red-50"}
                      >
                        English
                      </Button>
                      <Button
                        variant={currentLanguage === "id" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setCurrentLanguage("id")}
                        className={currentLanguage === "id" ? "bg-red-500 hover:bg-red-600" : "hover:bg-red-50"}
                      >
                        Bahasa Indonesia
                      </Button>
                    </div>
                  </div>

                  {/* Image and Basic Info */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-xl overflow-hidden">
                      <img
                        src={selectedItem.image || "/Images/Item/"}
                        alt={selectedItem.name[currentLanguage]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Basic Information</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-red-500" />
                            <span className="font-medium">Region:</span> {selectedItem.region[currentLanguage]}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-red-500" />
                            <span className="font-medium">Period:</span> {selectedItem.period[currentLanguage]}
                          </div>
                          {selectedItem.discoveryLocation && (
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-red-500" />
                              <span className="font-medium">Discovered at:</span>{" "}
                              {selectedItem.discoveryLocation[currentLanguage]}
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Materials</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.materials[currentLanguage].map((material, index) => (
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
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">Description</h4>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => speakText(getItemText(selectedItem, "description", "en"), "en")}
                              disabled={isSpeaking}
                              className="border-red-200 text-red-600 hover:bg-red-50"
                            >
                              {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                              English TTS
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => speakText(getItemText(selectedItem, "description", "id"), "id")}
                              disabled={isSpeaking}
                              className="border-red-200 text-red-600 hover:bg-red-50"
                            >
                              {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                              Indonesian TTS
                            </Button>
                            {isSpeaking && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={stopSpeaking}
                                className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                              >
                                <VolumeX className="h-4 w-4" />
                                Stop
                              </Button>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{selectedItem.description[currentLanguage]}</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="history" className="mt-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">History</h4>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => speakText(getItemText(selectedItem, "history", "en"), "en")}
                              disabled={isSpeaking}
                              className="border-red-200 text-red-600 hover:bg-red-50"
                            >
                              {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                              English TTS
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => speakText(getItemText(selectedItem, "history", "id"), "id")}
                              disabled={isSpeaking}
                              className="border-red-200 text-red-600 hover:bg-red-50"
                            >
                              {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                              Indonesian TTS
                            </Button>
                            {isSpeaking && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={stopSpeaking}
                                className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                              >
                                <VolumeX className="h-4 w-4" />
                                Stop
                              </Button>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{selectedItem.history[currentLanguage]}</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="significance" className="mt-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">Cultural Significance</h4>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => speakText(getItemText(selectedItem, "culturalSignificance", "en"), "en")}
                              disabled={isSpeaking}
                              className="border-red-200 text-red-600 hover:bg-red-50"
                            >
                              {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                              English TTS
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => speakText(getItemText(selectedItem, "culturalSignificance", "id"), "id")}
                              disabled={isSpeaking}
                              className="border-red-200 text-red-600 hover:bg-red-50"
                            >
                              {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                              Indonesian TTS
                            </Button>
                            {isSpeaking && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={stopSpeaking}
                                className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                              >
                                <VolumeX className="h-4 w-4" />
                                Stop
                              </Button>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {selectedItem.culturalSignificance[currentLanguage]}
                        </p>
                      </div>
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
