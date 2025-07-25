"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import {
  User,
  Palette,
  Shirt,
  Crown,
  Camera,
  Download,
  ZoomIn,
  RotateCw,
  Sparkles,
  MapPin,
  Package,
  Star,
  Eye,
  Save,
  Share2,
  RefreshCw,
  ImageIcon,
  Settings,
  Globe,
} from "lucide-react"

export default function AvatarBuilderPage() {
  const [selectedCategory, setSelectedCategory] = useState("clothing")
  const [selectedBackground, setSelectedBackground] = useState("borobudur")
  const [avatarRotation, setAvatarRotation] = useState([0])
  const [avatarZoom, setAvatarZoom] = useState([100])
  const [skinTone, setSkinTone] = useState("medium")
  const [selectedItems, setSelectedItems] = useState({
    clothing: "batik-shirt",
    headwear: "peci",
    accessories: "traditional-necklace",
    footwear: "traditional-sandals",
  })

  // Mock data for avatar items
  const avatarItems = {
    clothing: [
      {
        id: "batik-shirt",
        name: "Traditional Batik Shirt",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Epic",
        origin: "Yogyakarta",
        unlocked: true,
        description: "Elegant batik shirt with Parang pattern",
      },
      {
        id: "kebaya",
        name: "Kebaya Encim",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Legendary",
        origin: "Jakarta",
        unlocked: true,
        description: "Traditional Peranakan kebaya with intricate embroidery",
      },
      {
        id: "ulos-shirt",
        name: "Ulos Traditional Shirt",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Rare",
        origin: "North Sumatra",
        unlocked: false,
        description: "Sacred Batak textile shirt",
      },
      {
        id: "songket-dress",
        name: "Songket Royal Dress",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Legendary",
        origin: "West Sumatra",
        unlocked: true,
        description: "Luxurious songket dress with gold threads",
      },
      {
        id: "ikat-shirt",
        name: "Ikat Woven Shirt",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Epic",
        origin: "East Nusa Tenggara",
        unlocked: false,
        description: "Handwoven ikat shirt with geometric patterns",
      },
      {
        id: "tenun-dress",
        name: "Tenun Traditional Dress",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Rare",
        origin: "Flores",
        unlocked: true,
        description: "Beautiful tenun dress with tribal motifs",
      },
    ],
    headwear: [
      {
        id: "peci",
        name: "Traditional Peci",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Common",
        origin: "Java",
        unlocked: true,
        description: "Classic Indonesian black cap",
      },
      {
        id: "udeng",
        name: "Balinese Udeng",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Epic",
        origin: "Bali",
        unlocked: true,
        description: "Traditional Balinese head wrap",
      },
      {
        id: "destar",
        name: "Javanese Destar",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Rare",
        origin: "Central Java",
        unlocked: false,
        description: "Royal Javanese head cloth",
      },
      {
        id: "tengkulok",
        name: "Malay Tengkulok",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Epic",
        origin: "Riau",
        unlocked: true,
        description: "Traditional Malay royal headwear",
      },
    ],
    accessories: [
      {
        id: "traditional-necklace",
        name: "Kalung Tradisional",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Rare",
        origin: "Bali",
        unlocked: true,
        description: "Ornate traditional necklace with cultural motifs",
      },
      {
        id: "keris",
        name: "Keris Pusaka",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Legendary",
        origin: "Java",
        unlocked: false,
        description: "Sacred Javanese ceremonial dagger",
      },
      {
        id: "gelang",
        name: "Traditional Bracelet",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Common",
        origin: "Sumatra",
        unlocked: true,
        description: "Handcrafted traditional bracelet",
      },
    ],
    footwear: [
      {
        id: "traditional-sandals",
        name: "Sandal Tradisional",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Common",
        origin: "Java",
        unlocked: true,
        description: "Comfortable traditional sandals",
      },
      {
        id: "selop",
        name: "Selop Peranakan",
        image: "/Images/logo.png?height=100&width=100",
        rarity: "Epic",
        origin: "Jakarta",
        unlocked: true,
        description: "Elegant Peranakan traditional shoes",
      },
    ],
  }

  // Mock data for monument backgrounds
  const monumentBackgrounds = [
    {
      id: "borobudur",
      name: "Borobudur Temple",
      image: "/Images/logo.png?height=300&width=400",
      location: "Central Java",
      unlocked: true,
      description: "Majestic Buddhist temple at sunrise",
    },
    {
      id: "prambanan",
      name: "Prambanan Temple",
      image: "/Images/logo.png?height=300&width=400",
      location: "Yogyakarta",
      unlocked: true,
      description: "Hindu temple complex at golden hour",
    },
    {
      id: "tanah-lot",
      name: "Tanah Lot Temple",
      image: "/Images/logo.png?height=300&width=400",
      location: "Bali",
      unlocked: false,
      description: "Iconic sea temple on rocky outcrop",
    },
    {
      id: "lake-toba",
      name: "Lake Toba",
      image: "/Images/logo.png?height=300&width=400",
      location: "North Sumatra",
      unlocked: true,
      description: "Volcanic lake with Samosir Island",
    },
    {
      id: "raja-ampat",
      name: "Raja Ampat",
      image: "/Images/logo.png?height=300&width=400",
      location: "West Papua",
      unlocked: false,
      description: "Pristine marine paradise with karst islands",
    },
    {
      id: "bromo",
      name: "Mount Bromo",
      image: "/Images/logo.png?height=300&width=400",
      location: "East Java",
      unlocked: true,
      description: "Active volcano crater at sunrise",
    },
  ]

  const skinTones = [
    { id: "light", name: "Light", color: "#F5DEB3" },
    { id: "medium", name: "Medium", color: "#DEB887" },
    { id: "tan", name: "Tan", color: "#D2B48C" },
    { id: "dark", name: "Dark", color: "#8B4513" },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-100 text-gray-800"
      case "Rare":
        return "bg-blue-100 text-blue-800"
      case "Epic":
        return "bg-purple-100 text-purple-800"
      case "Legendary":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const selectItem = (category: string, itemId: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [category]: itemId,
    }))
  }

  const resetAvatar = () => {
    setAvatarRotation([0])
    setAvatarZoom([100])
    setSkinTone("medium")
    setSelectedItems({
      clothing: "batik-shirt",
      headwear: "peci",
      accessories: "traditional-necklace",
      footwear: "traditional-sandals",
    })
  }

  const downloadAvatar = () => {
    // Handle avatar download
    console.log("Downloading avatar...")
  }

  const takeScreenshot = () => {
    // Handle screenshot
    console.log("Taking screenshot...")
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <User className="h-8 w-8" />
              Avatar Builder
            </h1>
            <p className="text-red-100 text-lg">
              Create your unique Indonesian cultural avatar with collected items and monuments
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">47</div>
            <div className="text-red-200 text-sm">Items Collected</div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Avatar Preview */}
        <div className="xl:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-red-600" />
                  Avatar Preview
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={resetAvatar}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                  <Button variant="outline" size="sm" onClick={takeScreenshot}>
                    <Camera className="h-4 w-4 mr-2" />
                    Screenshot
                  </Button>
                  <Button
                    size="sm"
                    onClick={downloadAvatar}
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 3D Avatar Display */}
              <div
                className="relative bg-gradient-to-b from-blue-100 to-blue-200 rounded-xl overflow-hidden"
                style={{ height: "500px" }}
              >
                {/* Background Monument */}
                <div className="absolute inset-0">
                  <img
                    src={monumentBackgrounds.find((bg) => bg.id === selectedBackground)?.image || "/Images/logo.png"}
                    alt="Background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* 3D Avatar Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    animate={{
                      rotateY: avatarRotation[0],
                      scale: avatarZoom[0] / 100,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Avatar Body */}
                    <div className="relative w-48 h-64 mx-auto">
                      {/* Head */}
                      <div
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-20 rounded-full border-4 border-white shadow-lg"
                        style={{ backgroundColor: skinTones.find((tone) => tone.id === skinTone)?.color }}
                      />

                      {/* Headwear */}
                      {selectedItems.headwear && (
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-12">
                          <img
                            src={
                              avatarItems.headwear.find((item) => item.id === selectedItems.headwear)?.image ||
                              "/Images/logo.png"
                            }
                            alt="Headwear"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}

                      {/* Body */}
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-gray-200 rounded-lg border-4 border-white shadow-lg">
                        {/* Clothing */}
                        {selectedItems.clothing && (
                          <img
                            src={
                              avatarItems.clothing.find((item) => item.id === selectedItems.clothing)?.image ||
                              "/Images/logo.png"
                            }
                            alt="Clothing"
                            className="w-full h-full object-cover rounded"
                          />
                        )}
                      </div>

                      {/* Arms */}
                      <div
                        className="absolute top-20 left-2 w-6 h-20 rounded-full border-2 border-white shadow-lg"
                        style={{ backgroundColor: skinTones.find((tone) => tone.id === skinTone)?.color }}
                      />
                      <div
                        className="absolute top-20 right-2 w-6 h-20 rounded-full border-2 border-white shadow-lg"
                        style={{ backgroundColor: skinTones.find((tone) => tone.id === skinTone)?.color }}
                      />

                      {/* Accessories */}
                      {selectedItems.accessories && (
                        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-16 h-8">
                          <img
                            src={
                              avatarItems.accessories.find((item) => item.id === selectedItems.accessories)?.image ||
                              "/Images/logo.png"
                            }
                            alt="Accessories"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}

                      {/* Legs */}
                      <div
                        className="absolute top-44 left-6 w-6 h-20 rounded-full border-2 border-white shadow-lg"
                        style={{ backgroundColor: skinTones.find((tone) => tone.id === skinTone)?.color }}
                      />
                      <div
                        className="absolute top-44 right-6 w-6 h-20 rounded-full border-2 border-white shadow-lg"
                        style={{ backgroundColor: skinTones.find((tone) => tone.id === skinTone)?.color }}
                      />

                      {/* Footwear */}
                      {selectedItems.footwear && (
                        <>
                          <div className="absolute bottom-0 left-4 w-8 h-6">
                            <img
                              src={
                                avatarItems.footwear.find((item) => item.id === selectedItems.footwear)?.image ||
                                "/Images/logo.png"
                              }
                              alt="Footwear"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="absolute bottom-0 right-4 w-8 h-6">
                            <img
                              src={
                                avatarItems.footwear.find((item) => item.id === selectedItems.footwear)?.image ||
                                "/Images/logo.png"
                              }
                              alt="Footwear"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Background Info */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-600" />
                    <div>
                      <div className="font-semibold text-sm">
                        {monumentBackgrounds.find((bg) => bg.id === selectedBackground)?.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {monumentBackgrounds.find((bg) => bg.id === selectedBackground)?.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avatar Controls */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <RotateCw className="h-4 w-4" />
                    Rotation
                  </label>
                  <Slider
                    value={avatarRotation}
                    onValueChange={setAvatarRotation}
                    max={360}
                    min={0}
                    step={10}
                    className="w-full"
                  />
                  <div className="text-xs text-gray-500 text-center">{avatarRotation[0]}°</div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <ZoomIn className="h-4 w-4" />
                    Zoom
                  </label>
                  <Slider
                    value={avatarZoom}
                    onValueChange={setAvatarZoom}
                    max={150}
                    min={50}
                    step={5}
                    className="w-full"
                  />
                  <div className="text-xs text-gray-500 text-center">{avatarZoom[0]}%</div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    Skin Tone
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {skinTones.map((tone) => (
                      <button
                        key={tone.id}
                        onClick={() => setSkinTone(tone.id)}
                        className={`w-full h-8 rounded-lg border-2 transition-all ${
                          skinTone === tone.id ? "border-red-500 scale-110" : "border-gray-300"
                        }`}
                        style={{ backgroundColor: tone.color }}
                        title={tone.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customization Panel */}
        <div className="space-y-6">
          {/* Background Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-red-600" />
                Monument Backgrounds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {monumentBackgrounds.map((bg) => (
                  <motion.button
                    key={bg.id}
                    onClick={() => setSelectedBackground(bg.id)}
                    disabled={!bg.unlocked}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                      selectedBackground === bg.id
                        ? "border-red-500 ring-2 ring-red-200"
                        : "border-gray-200 hover:border-red-300"
                    } ${!bg.unlocked ? "opacity-50 cursor-not-allowed" : ""}`}
                    whileHover={{ scale: bg.unlocked ? 1.05 : 1 }}
                    whileTap={{ scale: bg.unlocked ? 0.95 : 1 }}
                  >
                    <img src={bg.image || "/Images/logo.png"} alt={bg.name} className="w-full h-20 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-1 left-1 right-1">
                      <div className="text-white text-xs font-medium truncate">{bg.name}</div>
                      <div className="text-white/80 text-xs truncate">{bg.location}</div>
                    </div>
                    {!bg.unlocked && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <div className="text-white text-xs font-medium">🔒 Locked</div>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Item Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-red-600" />
                Avatar Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="grid w-full grid-cols-4 bg-red-50 p-1 rounded-lg">
                  <TabsTrigger
                    value="clothing"
                    className="data-[state=active]:bg-white data-[state=active]:text-red-600 text-xs"
                  >
                    <Shirt className="h-3 w-3 mr-1" />
                    Clothing
                  </TabsTrigger>
                  <TabsTrigger
                    value="headwear"
                    className="data-[state=active]:bg-white data-[state=active]:text-red-600 text-xs"
                  >
                    <Crown className="h-3 w-3 mr-1" />
                    Headwear
                  </TabsTrigger>
                  <TabsTrigger
                    value="accessories"
                    className="data-[state=active]:bg-white data-[state=active]:text-red-600 text-xs"
                  >
                    <Star className="h-3 w-3 mr-1" />
                    Accessories
                  </TabsTrigger>
                  <TabsTrigger
                    value="footwear"
                    className="data-[state=active]:bg-white data-[state=active]:text-red-600 text-xs"
                  >
                    <Settings className="h-3 w-3 mr-1" />
                    Footwear
                  </TabsTrigger>
                </TabsList>

                {Object.entries(avatarItems).map(([category, items]) => (
                  <TabsContent key={category} value={category} className="mt-4">
                    <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                      {items.map((item) => (
                        <motion.button
                          key={item.id}
                          onClick={() => item.unlocked && selectItem(category, item.id)}
                          disabled={!item.unlocked}
                          className={`relative p-3 rounded-lg border-2 transition-all text-left ${
                            selectedItems[category as keyof typeof selectedItems] === item.id
                              ? "border-red-500 bg-red-50"
                              : "border-gray-200 hover:border-red-300"
                          } ${!item.unlocked ? "opacity-50 cursor-not-allowed" : ""}`}
                          whileHover={{ scale: item.unlocked ? 1.02 : 1 }}
                          whileTap={{ scale: item.unlocked ? 0.98 : 1 }}
                        >
                          <div className="flex items-start gap-3">
                            <img
                              src={item.image || "/Images/logo.png"}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm text-gray-800 truncate">{item.name}</div>
                              <div className="text-xs text-gray-600 mb-1">{item.origin}</div>
                              <Badge className={`${getRarityColor(item.rarity)} text-xs`}>{item.rarity}</Badge>
                            </div>
                          </div>
                          {!item.unlocked && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-lg">
                              <div className="text-gray-500 text-xs font-medium">🔒 Locked</div>
                            </div>
                          )}
                          {selectedItems[category as keyof typeof selectedItems] === item.id && (
                            <div className="absolute top-2 right-2">
                              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                              </div>
                            </div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-red-600" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                onClick={() => {
                  // Random outfit
                  const categories = Object.keys(avatarItems) as Array<keyof typeof avatarItems>
                  const newItems = { ...selectedItems }

                  categories.forEach((category) => {
                    const availableItems = avatarItems[category].filter((item) => item.unlocked)
                    if (availableItems.length > 0) {
                      const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)]
                      newItems[category] = randomItem.id
                    }
                  })

                  setSelectedItems(newItems)
                }}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Random Outfit
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                onClick={() => {
                  // Random background
                  const unlockedBgs = monumentBackgrounds.filter((bg) => bg.unlocked)
                  if (unlockedBgs.length > 0) {
                    const randomBg = unlockedBgs[Math.floor(Math.random() * unlockedBgs.length)]
                    setSelectedBackground(randomBg.id)
                  }
                }}
              >
                <Globe className="h-4 w-4 mr-2" />
                Random Background
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Preset
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Avatar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
