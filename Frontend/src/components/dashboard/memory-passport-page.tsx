"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Search,
  MapPin,
  Calendar,
  Download,
  Camera,
  Star,
  Mountain,
  Building,
  TreePine,
  Waves,
  Heart,
  Award,
  Info,
  Compass,
  Globe,
} from "lucide-react"
import html2canvas from "html2canvas"

interface Monument {
  id: string
  name: string
  location: string
  province: string
  type: "Temple" | "Palace" | "Village" | "Museum" | "Natural Site" | "Monument"
  visitDate: string
  rating: number
  photos: number
  description: string
  funFacts: string[]
  historicalPeriod: string
  significance: string
  coordinates: string
  elevation?: string
  established?: string
  image: string
  backgroundImage: string
  visited: boolean
  favorite: boolean
}

const monuments: Monument[] = [
  {
    id: "1",
    name: "Borobudur Temple",
    location: "Magelang",
    province: "Central Java",
    type: "Temple",
    visitDate: "2024-01-15",
    rating: 5,
    photos: 47,
    description: "The world's largest Buddhist temple and UNESCO World Heritage Site",
    funFacts: [
      "Built in the 8th-9th centuries during the Sailendra dynasty",
      "Contains 2,672 relief panels and 504 Buddha statues",
      "Represents the Buddhist cosmology and path to enlightenment",
      "Was abandoned for centuries and rediscovered in 1814",
    ],
    historicalPeriod: "8th-9th Century CE",
    significance: "Largest Buddhist temple in the world, UNESCO World Heritage Site",
    coordinates: "7°36'29\"S 110°12'14\"E",
    elevation: "265 meters above sea level",
    image: "/Images/Wallpaper/borobudur.png?height=300&width=400&text=Borobudur+Temple",
    backgroundImage: "/Images/Wallpaper/borobudur.png?height=600&width=400&text=Borobudur+Background",
    visited: true,
    favorite: true,
  },
  {
    id: "2",
    name: "Prambanan Temple",
    location: "Yogyakarta",
    province: "Special Region of Yogyakarta",
    type: "Temple",
    visitDate: "2024-01-22",
    rating: 5,
    photos: 32,
    description: "Magnificent Hindu temple complex dedicated to the Trimurti",
    funFacts: [
      "Built in the 9th century during the Mataram Kingdom",
      "Dedicated to Brahma, Vishnu, and Shiva",
      "Features 240 temples in the complex",
      "Known for its towering spires reaching 47 meters high",
    ],
    historicalPeriod: "9th Century CE",
    significance: "Largest Hindu temple complex in Indonesia, UNESCO World Heritage Site",
    coordinates: "7°45'8\"S 110°29'30\"E",
    elevation: "154 meters above sea level",
    image: "/Images/Wallpaper/borobudur.png?height=300&width=400&text=Prambanan+Temple",
    backgroundImage: "/Images/Wallpaper/borobudur.png?height=600&width=400&text=Prambanan+Background",
    visited: true,
    favorite: true,
  },
  {
    id: "3",
    name: "Yogyakarta Palace",
    location: "Yogyakarta",
    province: "Special Region of Yogyakarta",
    type: "Palace",
    visitDate: "2024-02-03",
    rating: 4,
    photos: 28,
    description: "The royal palace of the Sultanate of Yogyakarta",
    funFacts: [
      "Built in 1755 by Sultan Hamengkubuwono I",
      "Still serves as the residence of the Sultan",
      "Contains a museum with royal artifacts",
      "Designed according to Javanese philosophy and cosmology",
    ],
    historicalPeriod: "18th Century CE",
    significance: "Active royal palace and cultural center of Javanese tradition",
    coordinates: "7°48'28\"S 110°21'56\"E",
    established: "1755",
    image: "/Images/Wallpaper/borobudur.png?height=300&width=400&text=Yogyakarta+Palace",
    backgroundImage: "/Images/Wallpaper/borobudur.png?height=600&width=400&text=Palace+Background",
    visited: true,
    favorite: false,
  },
  {
    id: "4",
    name: "Tana Toraja",
    location: "Toraja",
    province: "South Sulawesi",
    type: "Village",
    visitDate: "2024-02-18",
    rating: 5,
    photos: 65,
    description: "Traditional highland village known for unique funeral ceremonies",
    funFacts: [
      "Famous for elaborate funeral ceremonies called Rambu Solo",
      "Traditional houses called Tongkonan have distinctive boat-shaped roofs",
      "The Torajan people practice ancestor worship",
      "Coffee cultivation is a major economic activity",
    ],
    historicalPeriod: "Ancient - Present",
    significance: "Unique cultural traditions and architectural heritage",
    coordinates: "2°59'60\"S 119°52'60\"E",
    elevation: "700-1,200 meters above sea level",
    image: "/Images/Wallpaper/borobudur.png?height=300&width=400&text=Tana+Toraja",
    backgroundImage: "/Images/Wallpaper/borobudur.png?height=600&width=400&text=Toraja+Background",
    visited: true,
    favorite: true,
  },
  {
    id: "5",
    name: "Komodo National Park",
    location: "Komodo Island",
    province: "East Nusa Tenggara",
    type: "Natural Site",
    visitDate: "2024-03-05",
    rating: 5,
    photos: 89,
    description: "Home to the legendary Komodo dragons and pristine marine life",
    funFacts: [
      "Home to the world's largest lizard, the Komodo dragon",
      "Established in 1980 to protect the Komodo dragon",
      "Contains three major islands: Komodo, Rinca, and Padar",
      "Marine biodiversity includes manta rays and whale sharks",
    ],
    historicalPeriod: "Established 1980",
    significance: "UNESCO World Heritage Site, unique ecosystem preservation",
    coordinates: "8°32'0\"S 119°29'0\"E",
    established: "1980",
    image: "/Images/Wallpaper/borobudur.png?height=300&width=400&text=Komodo+National+Park",
    backgroundImage: "/Images/Wallpaper/borobudur.png?height=600&width=400&text=Komodo+Background",
    visited: true,
    favorite: true,
  },
  {
    id: "6",
    name: "Ubud Traditional Village",
    location: "Ubud",
    province: "Bali",
    type: "Village",
    visitDate: "2024-03-12",
    rating: 4,
    photos: 41,
    description: "Cultural heart of Bali with traditional arts and rice terraces",
    funFacts: [
      "Known as the cultural capital of Bali",
      "Famous for traditional Balinese arts and crafts",
      "Surrounded by lush rice terraces and tropical forests",
      "Home to numerous art galleries and traditional markets",
    ],
    historicalPeriod: "Ancient - Present",
    significance: "Center of Balinese culture and traditional arts",
    coordinates: "8°30'31\"S 115°15'50\"E",
    elevation: "200-600 meters above sea level",
    image: "/Images/Wallpaper/borobudur.png?height=300&width=400&text=Ubud+Village",
    backgroundImage: "/Images/Wallpaper/borobudur.png?height=600&width=400&text=Ubud+Background",
    visited: true,
    favorite: false,
  },
  {
    id: "7",
    name: "Batik Museum Pekalongan",
    location: "Pekalongan",
    province: "Central Java",
    type: "Museum",
    visitDate: "2024-03-20",
    rating: 4,
    photos: 23,
    description: "Dedicated to preserving Indonesia's batik heritage",
    funFacts: [
      "Pekalongan is known as the 'Batik City' of Indonesia",
      "Houses the largest collection of batik in Indonesia",
      "Features batik from different regions and periods",
      "Offers batik-making workshops for visitors",
    ],
    historicalPeriod: "Traditional - Present",
    significance: "Preservation of UNESCO-recognized batik art form",
    coordinates: "6°53'13\"S 109°40'32\"E",
    established: "2006",
    image: "/Images/Wallpaper/borobudur.png?height=300&width=400&text=Batik+Museum",
    backgroundImage: "/Images/Wallpaper/borobudur.png?height=600&width=400&text=Batik+Background",
    visited: true,
    favorite: false,
  },
  {
    id: "8",
    name: "Mount Bromo",
    location: "Probolinggo",
    province: "East Java",
    type: "Natural Site",
    visitDate: "2024-04-02",
    rating: 5,
    photos: 76,
    description: "Active volcano famous for its dramatic sunrise views",
    funFacts: [
      "Part of the Tengger massif in East Java",
      "Sacred to the Tenggerese people who hold annual ceremonies",
      "The crater is 800 meters in diameter",
      "Best known for spectacular sunrise views from Mount Penanjakan",
    ],
    historicalPeriod: "Geological - Ancient",
    significance: "Sacred site and natural wonder, important for Tenggerese culture",
    coordinates: "7°56'31\"S 112°57'8\"E",
    elevation: "2,329 meters above sea level",
    image: "/Images/Wallpaper/borobudur.png?height=300&width=400&text=Mount+Bromo",
    backgroundImage: "/Images/Wallpaper/borobudur.png?height=600&width=400&text=Bromo+Background",
    visited: true,
    favorite: true,
  },
]

export default function MemoryPassportPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(null)
  const [passportCard, setPassportCard] = useState<Monument | null>(null)
  const passportRef = useRef<HTMLDivElement>(null)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Temple":
        return <Mountain className="h-5 w-5" />
      case "Palace":
        return <Building className="h-5 w-5" />
      case "Village":
        return <TreePine className="h-5 w-5" />
      case "Museum":
        return <Building className="h-5 w-5" />
      case "Natural Site":
        return <Waves className="h-5 w-5" />
      case "Monument":
        return <Award className="h-5 w-5" />
      default:
        return <MapPin className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Temple":
        return "bg-purple-100 text-purple-800 border-purple-300"
      case "Palace":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case "Village":
        return "bg-green-100 text-green-800 border-green-300"
      case "Museum":
        return "bg-blue-100 text-blue-800 border-blue-300"
      case "Natural Site":
        return "bg-teal-100 text-teal-800 border-teal-300"
      case "Monument":
        return "bg-red-100 text-red-800 border-red-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const filteredMonuments = monuments.filter(
    (monument) =>
      monument.visited &&
      (monument.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        monument.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        monument.province.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const handleMonumentClick = (monument: Monument) => {
    setSelectedMonument(monument)
    setPassportCard(monument)
  }

  const handleDownloadPassport = async () => {
    if (passportRef.current) {
      try {
        const canvas = await html2canvas(passportRef.current, {
          backgroundColor: null,
          scale: 2,
          width: 430,
          height: 650,
        })

        const link = document.createElement("a")
        link.download = `gama-memory-passport-${passportCard?.name.replace(/\s+/g, "-").toLowerCase()}.png`
        link.href = canvas.toDataURL()
        link.click()
      } catch (error) {
        console.error("Error generating passport:", error)
      }
    }
  }

  // Gama Watermark Component for Passport
  const GamaPassportWatermark = () => (
    <div className="absolute bottom-4 right-4 z-20">
      <div className="flex items-center gap-2 bg-black bg-opacity-40 backdrop-blur-sm rounded-full px-3 py-1.5">
        <div className="relative">
          <MapPin className="h-4 w-4 text-white" />
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        </div>
        <span className="text-white text-sm font-bold tracking-wide">GAMA</span>
      </div>
    </div>
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
              <Compass className="h-8 w-8" />
              Memory Passport
            </h1>
            <p className="text-red-100 text-lg">Create beautiful memory cards from your visited monuments</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{monuments.filter((m) => m.visited).length}</div>
            <div className="text-red-200 text-sm">Places Visited</div>
          </div>
        </div>
      </motion.div>

      {/* Search */}
      <motion.div
        className="relative max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search visited monuments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-red-200 focus:border-red-500"
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monument List */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Visited Monuments</h2>
          <div className="grid grid-cols-1 gap-4">
            {filteredMonuments.map((monument, index) => (
              <motion.div
                key={monument.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Card
                  className={`cursor-pointer hover:shadow-lg transition-all duration-300 border-2 ${
                    passportCard?.id === monument.id
                      ? "border-red-300 bg-red-50"
                      : "border-gray-200 hover:border-red-200"
                  }`}
                  onClick={() => handleMonumentClick(monument)}
                >
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <img
                          src={monument.image || "/Images/Wallpaper/borobudur.png"}
                          alt={monument.name}
                          className="w-full h-full object-cover rounded-l-lg"
                        />
                        {monument.favorite && (
                          <div className="absolute top-2 right-2 bg-red-500 rounded-full p-1">
                            <Heart className="h-3 w-3 text-white fill-current" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{monument.name}</h3>
                          <Badge className={`text-xs ${getTypeColor(monument.type)}`}>{monument.type}</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>
                              {monument.location}, {monument.province}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>Visited: {new Date(monument.visitDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < monument.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Camera className="h-4 w-4" />
                              <span>{monument.photos}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Memory Passport Card */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Memory Passport Card</h2>
            {passportCard && (
              <Button
                onClick={handleDownloadPassport}
                className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
            )}
          </div>

          {passportCard ? (
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div
                  ref={passportRef}
                  className="aspect-[2/3] w-full max-w-md mx-auto bg-white relative overflow-hidden"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${passportCard.backgroundImage})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                    {/* Header */}
                    <div className="text-center">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 inline-block mb-4">
                        <span className="text-sm font-bold tracking-wider">MEMORY PASSPORT</span>
                      </div>
                      <h1 className="text-2xl font-bold mb-2 leading-tight">{passportCard.name}</h1>
                      <div className="flex items-center justify-center gap-2 text-sm opacity-90">
                        <MapPin className="h-4 w-4" />
                        <span>
                          {passportCard.location}, {passportCard.province}
                        </span>
                      </div>
                    </div>

                    {/* Monument Image */}
                    <div className="flex justify-center my-6">
                      <div className="w-32 h-32 rounded-full border-4 border-white bg-white p-2 shadow-lg">
                        <img
                          src={passportCard.image || "/Images/Wallpaper/borobudur.png"}
                          alt={passportCard.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                      {/* Visit Date */}
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">Visit Date</span>
                          </div>
                          <span className="text-sm font-bold">
                            {new Date(passportCard.visitDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Fun Fact */}
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-sm font-medium block mb-1">Fun Fact</span>
                            <p className="text-xs opacity-90 leading-relaxed">{passportCard.funFacts[0]}</p>
                          </div>
                        </div>
                      </div>

                      {/* Rating & Photos */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < passportCard.rating ? "text-yellow-400 fill-current" : "text-white opacity-50"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-medium">My Rating</span>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Camera className="h-4 w-4" />
                            <span className="text-sm font-bold">{passportCard.photos}</span>
                          </div>
                          <span className="text-xs font-medium">Photos Taken</span>
                        </div>
                      </div>

                      {/* Coordinates */}
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            <span className="text-sm font-medium">Coordinates</span>
                          </div>
                          <span className="text-xs font-mono">{passportCard.coordinates}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gama Watermark */}
                  <GamaPassportWatermark />
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="aspect-[2/3] w-full max-w-md mx-auto">
              <CardContent className="h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Compass className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-medium mb-2">Select a Monument</h3>
                  <p className="text-sm">Choose a visited monument to generate your memory passport card</p>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>

      {/* Monument Detail Modal */}
      <Dialog open={!!selectedMonument} onOpenChange={() => setSelectedMonument(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedMonument && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  {getTypeIcon(selectedMonument.type)}
                  {selectedMonument.name}
                  <Badge className={getTypeColor(selectedMonument.type)}>{selectedMonument.type}</Badge>
                  {selectedMonument.favorite && <Heart className="h-5 w-5 text-red-500 fill-current" />}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img
                    src={selectedMonument.image || "/Images/Wallpaper/borobudur.png"}
                    alt={selectedMonument.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                      <p className="text-gray-600">{selectedMonument.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-800">Location</h5>
                        <p className="text-gray-600">{selectedMonument.location}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">Province</h5>
                        <p className="text-gray-600">{selectedMonument.province}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">Visit Date</h5>
                        <p className="text-gray-600">{new Date(selectedMonument.visitDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">Photos Taken</h5>
                        <p className="text-gray-600 flex items-center gap-1">
                          <Camera className="h-4 w-4" />
                          {selectedMonument.photos}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Historical Context</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h5 className="font-medium text-blue-800 mb-2">Historical Period</h5>
                      <p className="text-blue-700">{selectedMonument.historicalPeriod}</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h5 className="font-medium text-purple-800 mb-2">Cultural Significance</h5>
                      <p className="text-purple-700">{selectedMonument.significance}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Fun Facts</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedMonument.funFacts.map((fact, index) => (
                      <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <p className="text-green-700 text-sm leading-relaxed">{fact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Location Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-gray-700">Coordinates</h5>
                      <p className="text-gray-600 font-mono">{selectedMonument.coordinates}</p>
                    </div>
                    {selectedMonument.elevation && (
                      <div>
                        <h5 className="font-medium text-gray-700">Elevation</h5>
                        <p className="text-gray-600">{selectedMonument.elevation}</p>
                      </div>
                    )}
                    {selectedMonument.established && (
                      <div>
                        <h5 className="font-medium text-gray-700">Established</h5>
                        <p className="text-gray-600">{selectedMonument.established}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    onClick={() => {
                      setPassportCard(selectedMonument)
                      setSelectedMonument(null)
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl flex items-center gap-2"
                  >
                    <Compass className="h-5 w-5" />
                    Generate Memory Passport
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
