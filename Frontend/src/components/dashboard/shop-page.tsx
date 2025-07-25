/* eslint-disable no-case-declarations */
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Search,
  ShoppingCart,
  Coins,
  Star,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  List,
  SortAsc,
  SortDesc,
} from "lucide-react"

interface ShopItem {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  rarity: "Common" | "Uncommon" | "Rare" | "Legendary"
  image: string
  inStock: number
  sold: number
  isNew?: boolean
  isOnSale?: boolean
  isFeatured?: boolean
  tags: string[]
  benefits: string[]
}

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null)
  const [userCoins] = useState(2450)
  const itemsPerPage = 12

  const categories = [
    { id: "all", name: "All Items", count: 156 },
    { id: "resources", name: "Resources", count: 45 },
    { id: "tools", name: "Tools", count: 32 },
    { id: "boosts", name: "Boosts", count: 28 },
    { id: "cosmetics", name: "Cosmetics", count: 24 },
    { id: "premium", name: "Premium", count: 18 },
    { id: "bundles", name: "Bundles", count: 9 },
  ]

  const shopItems: ShopItem[] = [
    {
      id: "bamboo-bundle",
      name: "Bamboo Resource Bundle",
      description: "Essential bamboo materials for traditional crafting projects",
      price: 150,
      originalPrice: 200,
      category: "resources",
      rarity: "Common",
      image: "/Images/Item/Resources/bamboo.png",
      inStock: 99,
      sold: 1247,
      isOnSale: true,
      tags: ["crafting", "natural", "sustainable"],
      benefits: ["50x Bamboo Sticks", "25x Bamboo Leaves", "10x Bamboo Shoots"],
    },
    {
      id: "golden-chisel",
      name: "Master Craftsman's Golden Chisel",
      description: "Legendary tool that increases crafting success rate by 50%",
      price: 800,
      category: "tools",
      rarity: "Legendary",
      image: "/Images/Item/Shop/golden_chisel.jpg",
      inStock: 5,
      sold: 89,
      isFeatured: true,
      tags: ["legendary", "crafting", "boost"],
      benefits: ["+50% Crafting Success", "+25% XP from Crafting", "Permanent Tool"],
    },
    {
      id: "energy-potion",
      name: "Traditional Energy Potion",
      description: "Restore your energy instantly and continue exploring",
      price: 50,
      category: "boosts",
      rarity: "Common",
      image: "/Images/Item/Shop/potion.png",
      inStock: 999,
      sold: 5432,
      tags: ["consumable", "energy", "instant"],
      benefits: ["Full Energy Restore", "Instant Effect", "Stackable"],
    },
    {
      id: "batik-outfit",
      name: "Royal Batik Explorer Outfit",
      description: "Exclusive traditional outfit with cultural authenticity bonus",
      price: 450,
      category: "cosmetics",
      rarity: "Rare",
      image: "/Images/Item/Shop/batik.png",
      inStock: 25,
      sold: 234,
      isNew: true,
      tags: ["cosmetic", "traditional", "exclusive"],
      benefits: ["+10% Cultural Knowledge", "Unique Appearance", "Photo Mode Bonus"],
    },
    {
      id: "premium-pass",
      name: "Heritage Explorer Premium Pass",
      description: "30-day premium access with exclusive benefits and rewards",
      price: 999,
      category: "premium",
      rarity: "Legendary",
      image: "/Images/Item/Shop/premium_pass.png",
      inStock: 999,
      sold: 1567,
      isFeatured: true,
      tags: ["premium", "subscription", "exclusive"],
      benefits: ["2x XP Gain", "Exclusive Content", "Priority Support", "Special Rewards"],
    },
    {
      id: "kebaya-outfit",
      name: "Royal Kebaya Explorer Outfit",
      description: "Exclusive traditional outfit with cultural authenticity bonus",
      price: 450,
      category: "cosmetics",
      rarity: "Rare",
      image: "/Images/Item/Shop/kebaya.png",
      inStock: 25,
      sold: 234,
      isNew: true,
      tags: ["cosmetic", "traditional", "exclusive"],
      benefits: ["+10% Cultural Knowledge", "Unique Appearance", "Photo Mode Bonus"],
    },
    {
      id: "starter-bundle",
      name: "Cultural Explorer Starter Bundle",
      description: "Perfect bundle for new explorers with essential items",
      price: 299,
      originalPrice: 450,
      category: "bundles",
      rarity: "Uncommon",
      image: "/Images/Item/Shop/starter.png",
      inStock: 75,
      sold: 678,
      isOnSale: true,
      isNew: true,
      tags: ["bundle", "beginner", "value"],
      benefits: ["5x Energy Potions", "Basic Tools Set", "Resource Pack", "Guide Book"],
    },
    {
      id: "jade-amulet",
      name: "Protective Jade Amulet",
      description: "Mystical amulet that provides protection during dangerous quests",
      price: 350,
      category: "tools",
      rarity: "Rare",
      image: "/Images/Item/Shop/Pendants_Jade_Amulet.webp",
      inStock: 12,
      sold: 156,
      tags: ["protection", "mystical", "permanent"],
      benefits: ["-25% Damage Taken", "Curse Resistance", "Permanent Effect"],
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

  const filteredItems = shopItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    let comparison = 0
    switch (sortBy) {
      case "price":
        comparison = a.price - b.price
        break
      case "name":
        comparison = a.name.localeCompare(b.name)
        break
      case "popularity":
        comparison = b.sold - a.sold
        break
      case "rarity":
        const rarityOrder = { Common: 1, Uncommon: 2, Rare: 3, Legendary: 4 }
        comparison = rarityOrder[a.rarity] - rarityOrder[b.rarity]
        break
      case "featured":
      default:
        comparison = (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)
        break
    }
    return sortOrder === "desc" ? -comparison : comparison
  })

  const totalPages = Math.ceil(sortedItems.length / itemsPerPage)
  const paginatedItems = sortedItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handlePurchase = (item: ShopItem) => {
    if (userCoins >= item.price) {
      // Handle purchase logic here
      console.log(`Purchasing ${item.name} for ${item.price} coins`)
      setSelectedItem(null)
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
              <ShoppingCart className="h-8 w-8" />
              Gama Shop
            </h1>
            <p className="text-red-100 text-lg">Enhance your cultural exploration with premium items and resources</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Coins className="h-6 w-6" />
              {userCoins.toLocaleString()}
            </div>
            <div className="text-red-200 text-sm">Your Coins</div>
          </div>
        </div>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search items, categories, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-red-200 focus:border-red-500"
            />
          </div>
          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 border-red-200">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 border-red-200">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="rarity">Rarity</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="border-red-200 hover:bg-red-50"
            >
              {sortOrder === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="border-red-200 hover:bg-red-50"
            >
              {viewMode === "grid" ? <List className="h-4 w-4" /> : <Grid3X3 className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
              }
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Items Grid/List */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <div
          className={
            viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"
          }
        >
          <AnimatePresence>
            {paginatedItems.map((item, index) => (
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
                  className="cursor-pointer border-red-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-2 right-2 flex flex-col gap-1">
                      <Badge className={`${getRarityColor(item.rarity)} border`}>
                        {getRarityIcon(item.rarity)} {item.rarity}
                      </Badge>
                      {item.isNew && <Badge className="bg-green-100 text-green-700 border-green-200">NEW</Badge>}
                      {item.isOnSale && <Badge className="bg-orange-100 text-orange-700 border-orange-200">SALE</Badge>}
                      {item.isFeatured && (
                        <Badge className="bg-purple-100 text-purple-700 border-purple-200">FEATURED</Badge>
                      )}
                    </div>
                    {item.inStock < 10 && (
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-red-100 text-red-700 border-red-200">Only {item.inStock} left!</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 truncate">{item.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Coins className="h-4 w-4 text-yellow-500" />
                        <span className="font-bold text-lg text-gray-800">{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">{item.sold} sold</div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs border-red-200 text-red-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-red-500 hover:bg-red-600 text-white"
                      disabled={userCoins < item.price || item.inStock === 0}
                    >
                      {item.inStock === 0 ? "Out of Stock" : userCoins < item.price ? "Insufficient Coins" : "Buy Now"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="border-red-200 hover:bg-red-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className={
                currentPage === page
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
              }
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="border-red-200 hover:bg-red-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </motion.div>
      )}

      {/* Item Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedItem && (
            <div>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">{selectedItem.name}</span>
                  <Badge className={`${getRarityColor(selectedItem.rarity)} border`}>
                    {getRarityIcon(selectedItem.rarity)} {selectedItem.rarity}
                  </Badge>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Image and Price */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-xl overflow-hidden">
                    <img
                      src={selectedItem.image || "/placeholder.svg"}
                      alt={selectedItem.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700 leading-relaxed">{selectedItem.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Coins className="h-5 w-5 text-yellow-500" />
                        <span className="font-bold text-2xl text-gray-800">{selectedItem.price}</span>
                        {selectedItem.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">{selectedItem.originalPrice}</span>
                        )}
                      </div>
                      {selectedItem.isOnSale && (
                        <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                          {Math.round(
                            ((selectedItem.originalPrice! - selectedItem.price) / selectedItem.originalPrice!) * 100,
                          )}
                          % OFF
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>In Stock: {selectedItem.inStock}</span>
                      <span>Sold: {selectedItem.sold}</span>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Star className="h-4 w-4 text-red-500" />
                    Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedItem.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-red-200 text-red-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Purchase Button */}
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                    disabled={userCoins < selectedItem.price || selectedItem.inStock === 0}
                    onClick={() => handlePurchase(selectedItem)}
                  >
                    {selectedItem.inStock === 0
                      ? "Out of Stock"
                      : userCoins < selectedItem.price
                        ? "Insufficient Coins"
                        : `Buy for ${selectedItem.price} coins`}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
