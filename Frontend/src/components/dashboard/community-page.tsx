"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  Search,
  TrendingUp,
  Clock,
  MapPin,
  Users,
  Camera,
  FileText,
  Mic,
  Star,
  Eye,
  Grid,
  List,
  Tag,
  Globe,
  Play,
  Volume2,
} from "lucide-react"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("recent")
  const [filterBy, setFilterBy] = useState("all")
  const [selectedProvince, setSelectedProvince] = useState("all")

  // Mock data for community posts
  const communityPosts = [
    {
      id: 1,
      type: "cultural_image",
      author: {
        name: "Sari Dewi",
        avatar: "/placeholder.svg?height=40&width=40",
        level: "Cultural Explorer",
        location: "Yogyakarta",
      },
      title: "Traditional Batik Making Process in Yogyakarta",
      content:
        "Witnessed the incredible artistry of batik making at Taman Sari. The patience and skill required for each piece is truly remarkable. This particular pattern represents the philosophy of life in Javanese culture.",
      image: "/placeholder.svg?height=400&width=600&text=Batik+Making",
      category: "Traditional Arts",
      province: "Yogyakarta",
      tags: ["batik", "traditional-arts", "yogyakarta", "javanese-culture"],
      timestamp: "2 hours ago",
      likes: 124,
      comments: 18,
      shares: 7,
      bookmarks: 23,
      isLiked: false,
      isBookmarked: true,
    },
    {
      id: 2,
      type: "cultural_story",
      author: {
        name: "Ahmad Rizki",
        avatar: "/placeholder.svg?height=40&width=40",
        level: "Heritage Guardian",
        location: "Bali",
      },
      title: "My Experience at Nyepi Day in Bali",
      content:
        "Yesterday was Nyepi, the Balinese Day of Silence. The entire island comes to a complete standstill - no lights, no noise, no activities. It's a profound experience of reflection and spiritual cleansing. The night before, we witnessed the Ogoh-Ogoh parade with giant demon statues representing negative spirits being driven away.",
      category: "Cultural Experience",
      province: "Bali",
      tags: ["nyepi", "bali", "hindu-culture", "spiritual", "tradition"],
      timestamp: "5 hours ago",
      likes: 89,
      comments: 12,
      shares: 15,
      bookmarks: 31,
      isLiked: true,
      isBookmarked: false,
    },
    {
      id: 3,
      type: "local_language",
      author: {
        name: "Maria Simbolon",
        avatar: "/placeholder.svg?height=40&width=40",
        level: "Language Keeper",
        location: "North Sumatra",
      },
      title: "Batak Toba Greeting: 'Horas!'",
      content:
        "Teaching everyone the traditional Batak greeting 'Horas!' which means 'may you live long and prosper'. It's more than just a greeting - it's a blessing and expression of goodwill.",
      audioUrl: "/placeholder-audio.mp3",
      transcript: "Horas! Aha kabar mu? Horas ma tu ho!",
      translation: "Hello! How are you? Blessings to you!",
      category: "Local Language",
      province: "North Sumatra",
      tags: ["batak", "greeting", "north-sumatra", "language-learning"],
      timestamp: "1 day ago",
      likes: 67,
      comments: 8,
      shares: 12,
      bookmarks: 19,
      isLiked: false,
      isBookmarked: true,
    },
    {
      id: 4,
      type: "cultural_image",
      author: {
        name: "Putu Ayu",
        avatar: "/placeholder.svg?height=40&width=40",
        level: "Temple Explorer",
        location: "Bali",
      },
      title: "Sunrise at Pura Lempuyang Temple",
      content:
        "Captured this magical moment at the Gates of Heaven. The temple's architecture perfectly frames Mount Agung in the background. This sacred place has been a pilgrimage site for over 1000 years.",
      image: "/placeholder.svg?height=400&width=600&text=Temple+Sunrise",
      category: "Sacred Places",
      province: "Bali",
      tags: ["temple", "sunrise", "bali", "sacred", "architecture"],
      timestamp: "2 days ago",
      likes: 203,
      comments: 25,
      shares: 18,
      bookmarks: 45,
      isLiked: true,
      isBookmarked: true,
    },
    {
      id: 5,
      type: "cultural_story",
      author: {
        name: "Joko Widodo",
        avatar: "/placeholder.svg?height=40&width=40",
        level: "Cultural Ambassador",
        location: "Central Java",
      },
      title: "The Legend of Roro Jonggrang",
      content:
        "Sharing the beautiful legend behind Prambanan Temple. The story of Roro Jonggrang and Bandung Bondowoso explains why there are 999 temples instead of 1000. This tale has been passed down through generations and represents the triumph of wit over brute force.",
      category: "Folklore",
      province: "Central Java",
      tags: ["prambanan", "legend", "folklore", "central-java", "temple"],
      timestamp: "3 days ago",
      likes: 156,
      comments: 22,
      shares: 28,
      bookmarks: 38,
      isLiked: false,
      isBookmarked: false,
    },
    {
      id: 6,
      type: "local_language",
      author: {
        name: "Kadek Surya",
        avatar: "/placeholder.svg?height=40&width=40",
        level: "Language Keeper",
        location: "Bali",
      },
      title: "Balinese Numbers 1-10",
      content:
        "Learning basic Balinese numbers! These are essential for daily interactions in Bali. The pronunciation is quite different from Indonesian.",
      audioUrl: "/placeholder-audio.mp3",
      transcript: "Siki, kalih, telu, papat, lima, nem, pitu, kutus, sanga, dasa",
      translation: "One, two, three, four, five, six, seven, eight, nine, ten",
      category: "Local Language",
      province: "Bali",
      tags: ["balinese", "numbers", "language-learning", "bali"],
      timestamp: "4 days ago",
      likes: 92,
      comments: 15,
      shares: 9,
      bookmarks: 27,
      isLiked: true,
      isBookmarked: false,
    },
  ]

  const filteredPosts = communityPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesTab = activeTab === "all" || post.type === activeTab
    const matchesFilter = filterBy === "all" || post.category.toLowerCase().includes(filterBy.toLowerCase())
    const matchesProvince = selectedProvince === "all" || post.province === selectedProvince
    return matchesSearch && matchesTab && matchesFilter && matchesProvince
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.likes + b.comments + b.shares - (a.likes + a.comments + a.shares)
      case "recent":
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      case "most_liked":
        return b.likes - a.likes
      case "most_commented":
        return b.comments - a.comments
      default:
        return 0
    }
  })

  const handleLike = (postId: number) => {
    // Handle like functionality
    console.log("Liked post:", postId)
  }

  const handleBookmark = (postId: number) => {
    // Handle bookmark functionality
    console.log("Bookmarked post:", postId)
  }

  const getPostIcon = (type: string) => {
    switch (type) {
      case "cultural_image":
        return <Camera className="h-4 w-4" />
      case "cultural_story":
        return <FileText className="h-4 w-4" />
      case "local_language":
        return <Mic className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getPostTypeLabel = (type: string) => {
    switch (type) {
      case "cultural_image":
        return "Cultural Image"
      case "cultural_story":
        return "Cultural Story"
      case "local_language":
        return "Local Language"
      default:
        return "Post"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        className="bg-gradient-to-r from-red-500 via-red-500 to-red-600 text-white rounded-2xl p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Users className="h-10 w-10" />
              Cultural Community
            </h1>
            <p className="text-red-100 text-lg mb-4">
              Share your cultural experiences, stories, and discoveries with fellow explorers
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>12,847 Members</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>3,256 Posts</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>45,892 Interactions</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">Community Leader</div>
            <div className="text-red-200 text-sm">Your Status</div>
            <div className="flex items-center gap-2 mt-2">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm">2,150 Community Points</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: "Your Posts",
            value: "18",
            icon: FileText,
            color: "from-red-500 to-red-600",
            change: "+3 this week",
          },
          {
            title: "Total Likes",
            value: "342",
            icon: Heart,
            color: "from-red-500 to-red-500",
            change: "+28 this week",
          },
          {
            title: "Comments",
            value: "89",
            icon: MessageCircle,
            color: "from-red-600 to-orange-500",
            change: "+12 this week",
          },
          {
            title: "Followers",
            value: "156",
            icon: Users,
            color: "from-orange-500 to-red-600",
            change: "+7 this week",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="h-8 w-8 text-red-600" />
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 mb-2">{stat.title}</div>
                  <div className="text-xs text-green-600 font-medium">{stat.change}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <Card className="border-0 shadow-xl">
        <CardContent className="p-0">
          <div className="p-6 border-b border-gray-200">
            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-2xl grid-cols-4 bg-red-50 mb-6">
                <TabsTrigger value="all" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                  <Globe className="h-4 w-4 mr-2" />
                  All Posts
                </TabsTrigger>
                <TabsTrigger
                  value="cultural_image"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Images
                </TabsTrigger>
                <TabsTrigger
                  value="cultural_story"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Stories
                </TabsTrigger>
                <TabsTrigger
                  value="local_language"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <Mic className="h-4 w-4 mr-2" />
                  Languages
                </TabsTrigger>
              </TabsList>

              {/* Filters and Search */}
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search posts, tags, or content..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="most_liked">Most Liked</SelectItem>
                      <SelectItem value="most_commented">Most Commented</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={filterBy} onValueChange={setFilterBy}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="traditional">Traditional Arts</SelectItem>
                      <SelectItem value="cultural">Cultural Experience</SelectItem>
                      <SelectItem value="language">Local Language</SelectItem>
                      <SelectItem value="sacred">Sacred Places</SelectItem>
                      <SelectItem value="folklore">Folklore</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Province" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Provinces</SelectItem>
                      <SelectItem value="Bali">Bali</SelectItem>
                      <SelectItem value="Yogyakarta">Yogyakarta</SelectItem>
                      <SelectItem value="Central Java">Central Java</SelectItem>
                      <SelectItem value="North Sumatra">North Sumatra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <div className="text-sm text-gray-600 ml-2">{sortedPosts.length} posts</div>
                </div>
              </div>
            </Tabs>
          </div>

          {/* Posts Content */}
          <div className="p-6">
            <div className={viewMode === "grid" ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : "space-y-6"}>
              {sortedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                    {/* Post Header */}
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12 border-2 border-red-200">
                            <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                            <AvatarFallback className="bg-red-500 text-white font-bold">
                              {post.author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold text-gray-900">{post.author.name}</div>
                            <div className="text-sm text-gray-600 flex items-center gap-2">
                              <Badge variant="secondary" className="text-xs">
                                {post.author.level}
                              </Badge>
                              <span>•</span>
                              <MapPin className="h-3 w-3" />
                              <span>{post.author.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-red-100 text-red-800">
                            {getPostIcon(post.type)}
                            <span className="ml-1">{getPostTypeLabel(post.type)}</span>
                          </Badge>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <Bookmark className="h-4 w-4 mr-2" />
                                Save Post
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Share2 className="h-4 w-4 mr-2" />
                                Share
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View Profile
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Post Title */}
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {post.title}
                      </h3>

                      {/* Post Content */}
                      <p className="text-gray-700 leading-relaxed">{post.content}</p>

                      {/* Media Content */}
                      {post.image && (
                        <div className="rounded-lg overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      {post.type === "local_language" && (
                        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                          <div className="flex items-center gap-3">
                            <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                              <Play className="h-4 w-4" />
                              Play Audio
                            </Button>
                            <div className="text-sm text-gray-600">
                              <Volume2 className="h-4 w-4 inline mr-1" />
                              Listen to pronunciation
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <div className="text-sm font-medium text-gray-700">Original:</div>
                              <div className="text-gray-900 italic">"{post.transcript}"</div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-700">Translation:</div>
                              <div className="text-gray-900">"{post.translation}"</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Post Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.timestamp}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{post.province}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>

                      {/* Post Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-6">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLike(post.id)}
                            className={`flex items-center gap-2 ${post.isLiked ? "text-red-600" : "text-gray-600"} hover:text-red-600`}
                          >
                            <Heart className={`h-4 w-4 ${post.isLiked ? "fill-current" : ""}`} />
                            <span>{post.likes}</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                          >
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-2 text-gray-600 hover:text-green-600"
                          >
                            <Share2 className="h-4 w-4" />
                            <span>{post.shares}</span>
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleBookmark(post.id)}
                          className={`${post.isBookmarked ? "text-yellow-600" : "text-gray-600"} hover:text-yellow-600`}
                        >
                          <Bookmark className={`h-4 w-4 ${post.isBookmarked ? "fill-current" : ""}`} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            {sortedPosts.length > 0 && (
              <div className="text-center mt-8">
                <Button variant="outline" className="px-8 bg-transparent">
                  Load More Posts
                </Button>
              </div>
            )}

            {/* Empty State */}
            {sortedPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setFilterBy("all")
                    setSelectedProvince("all")
                    setActiveTab("all")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
