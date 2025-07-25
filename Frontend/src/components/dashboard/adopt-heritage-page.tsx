/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Upload,
  Camera,
  FileText,
  Search,
  Heart,
  Users,
  Star,
  Award,
  BookOpen,
  Zap,
  Download,
  Share2,
  CheckCircle,
  AlertCircle,
  Loader2,
  ImageIcon,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react"

export default function AdoptHeritagePage() {
  const [activeTab, setActiveTab] = useState("contribute")
  const [, setSelectedArtifact] = useState<any>(null)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProvince, setSelectedProvince] = useState("all")
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Mock data for artifacts
  const artifacts = [
    {
      id: 1,
      title: "Prasasti Kedukan Bukit",
      category: "Inscription",
      province: "South Sumatra",
      period: "7th Century",
      difficulty: "Advanced",
      contributors: 12,
      progress: 75,
      image: "/Images/Item/AdoptHeritage/Prasasti_Kedukan_Bukit.jpg",
      description: "Ancient Srivijaya inscription found in Palembang",
      status: "In Progress",
      reward: 500,
      language: "Old Malay",
      material: "Stone",
    },
    {
      id: 2,
      title: "Lontar Manuscript Bali",
      category: "Manuscript",
      province: "Bali",
      period: "15th Century",
      difficulty: "Expert",
      contributors: 8,
      progress: 45,
      image: "/Images/Item/AdoptHeritage/Lontar.jpg",
      description: "Traditional Balinese palm leaf manuscript with religious texts",
      status: "Available",
      reward: 750,
      language: "Old Javanese",
      material: "Palm Leaf",
    },
    {
      id: 3,
      title: "Candi Borobudur Relief",
      category: "Relief",
      province: "Central Java",
      period: "8th Century",
      difficulty: "Intermediate",
      contributors: 25,
      progress: 90,
      image: "/Images/Item/AdoptHeritage/ReliefCandiBorobudur.jpeg",
      description: "Buddhist relief depicting Jataka stories",
      status: "Nearly Complete",
      reward: 400,
      language: "Sanskrit",
      material: "Stone",
    },
    {
      id: 4,
      title: "Aksara Kawi Document",
      category: "Document",
      province: "East Java",
      period: "12th Century",
      difficulty: "Advanced",
      contributors: 6,
      progress: 30,
      image: "/Images/Item/AdoptHeritage/AksaraKawi.jpg",
      description: "Royal decree written in ancient Kawi script",
      status: "Available",
      reward: 600,
      language: "Old Javanese",
      material: "Copper",
    },
    {
      id: 5,
      title: "Batak Pustaha",
      category: "Book",
      province: "North Sumatra",
      period: "19th Century",
      difficulty: "Intermediate",
      contributors: 15,
      progress: 60,
      image: "/Images/Item/AdoptHeritage/BatakPustaha.jpg",
      description: "Traditional Batak divination book",
      status: "In Progress",
      reward: 450,
      language: "Batak",
      material: "Tree Bark",
    },
    {
      id: 6,
      title: "Sundanese Carita",
      category: "Literature",
      province: "West Java",
      period: "16th Century",
      difficulty: "Advanced",
      contributors: 10,
      progress: 20,
      image: "/Images/Item/AdoptHeritage/Carita.jpg",
      description: "Epic story written in ancient Sundanese script",
      status: "Available",
      reward: 550,
      language: "Old Sundanese",
      material: "Paper",
    },
  ]

  const filteredArtifacts = artifacts.filter((artifact) => {
    const matchesSearch =
      artifact.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artifact.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || artifact.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchesProvince = selectedProvince === "all" || artifact.province === selectedProvince
    return matchesSearch && matchesCategory && matchesProvince
  })

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyzeScript = async () => {
    if (!uploadedImage) return

    setIsAnalyzing(true)

    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult({
        script: "Aksara Jawa Kuno (Old Javanese Script)",
        period: "12th-14th Century",
        confidence: 92,
        translation: "Sang Hyang Widhi Wasa, dewata ning sarwa jagat",
        meaning: "The Supreme God, deity of all the universe",
        context:
          "This appears to be a religious invocation commonly found in ancient Javanese manuscripts and temple inscriptions.",
        historical_significance:
          "This type of invocation was typically used at the beginning of important documents or carved into temple walls as a blessing.",
        language: "Old Javanese (Kawi)",
        region: "Central/East Java",
        similar_artifacts: ["Borobudur Temple Inscriptions", "Prambanan Temple Scripts", "Majapahit Royal Decrees"],
      })
      setIsAnalyzing(false)
    }, 3000)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-orange-100 text-orange-800"
      case "Expert":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-blue-100 text-blue-800"
      case "In Progress":
        return "bg-yellow-100 text-yellow-800"
      case "Nearly Complete":
        return "bg-green-100 text-green-800"
      case "Completed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
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
              <BookOpen className="h-10 w-10" />
              Adopt Heritage Program
            </h1>
            <p className="text-red-100 text-lg mb-4">
              Help preserve Indonesia's cultural heritage through collaborative translation and AI-powered script
              analysis
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>2,847 Contributors</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>156 Artifacts</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>89% Completion Rate</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">Heritage Guardian</div>
            <div className="text-red-200 text-sm">Your Contribution Level</div>
            <div className="flex items-center gap-2 mt-2">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm">1,250 Heritage Points</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: "Your Contributions",
            value: "23",
            icon: Target,
            color: "from-red-500 to-red-600",
            change: "+5 this week",
          },
          {
            title: "Artifacts Adopted",
            value: "8",
            icon: Heart,
            color: "from-red-500 to-red-500",
            change: "+2 this month",
          },
          {
            title: "Scripts Analyzed",
            value: "15",
            icon: Zap,
            color: "from-red-600 to-orange-500",
            change: "+3 this week",
          },
          {
            title: "Heritage Points",
            value: "1,250",
            icon: Sparkles,
            color: "from-orange-500 to-red-600",
            change: "+180 this week",
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
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b border-gray-200 px-6 pt-6">
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-red-50">
                <TabsTrigger
                  value="contribute"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Contribute to Artifacts
                </TabsTrigger>
                <TabsTrigger value="analyze" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                  <Camera className="h-4 w-4 mr-2" />
                  Analyze Ancient Scripts
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="contribute" className="p-6 space-y-6">
              {/* Filters */}
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search artifacts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="inscription">Inscription</SelectItem>
                      <SelectItem value="manuscript">Manuscript</SelectItem>
                      <SelectItem value="relief">Relief</SelectItem>
                      <SelectItem value="document">Document</SelectItem>
                      <SelectItem value="book">Book</SelectItem>
                      <SelectItem value="literature">Literature</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Province" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Provinces</SelectItem>
                      <SelectItem value="South Sumatra">South Sumatra</SelectItem>
                      <SelectItem value="Bali">Bali</SelectItem>
                      <SelectItem value="Central Java">Central Java</SelectItem>
                      <SelectItem value="East Java">East Java</SelectItem>
                      <SelectItem value="North Sumatra">North Sumatra</SelectItem>
                      <SelectItem value="West Java">West Java</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="text-sm text-gray-600">{filteredArtifacts.length} artifacts found</div>
              </div>

              {/* Artifacts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArtifacts.map((artifact, index) => (
                  <motion.div
                    key={artifact.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg overflow-hidden">
                      <div className="relative">
                        <img
                          src={artifact.image || "/placeholder.svg"}
                          alt={artifact.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className={getDifficultyColor(artifact.difficulty)}>{artifact.difficulty}</Badge>
                          <Badge className={getStatusColor(artifact.status)}>{artifact.status}</Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-red-600">
                            +{artifact.reward} pts
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                              {artifact.title}
                            </h3>
                            <p className="text-gray-600 text-sm line-clamp-2">{artifact.description}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-500">Period</div>
                              <div className="font-medium">{artifact.period}</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Language</div>
                              <div className="font-medium">{artifact.language}</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Province</div>
                              <div className="font-medium">{artifact.province}</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Material</div>
                              <div className="font-medium">{artifact.material}</div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Translation Progress</span>
                              <span className="font-medium">{artifact.progress}%</span>
                            </div>
                            <Progress value={artifact.progress} className="h-2" />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Users className="h-4 w-4" />
                              <span>{artifact.contributors} contributors</span>
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  size="sm"
                                  className="bg-red-600 hover:bg-red-700"
                                  onClick={() => setSelectedArtifact(artifact)}
                                >
                                  Contribute
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle className="text-2xl">{artifact.title}</DialogTitle>
                                  <DialogDescription>
                                    Help translate and document this cultural artifact
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                                  <div>
                                    <img
                                      src={artifact.image || "/placeholder.svg"}
                                      alt={artifact.title}
                                      className="w-full rounded-lg shadow-lg"
                                    />
                                    <div className="mt-4 space-y-3">
                                      <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                          <Label className="text-gray-500">Category</Label>
                                          <div className="font-medium">{artifact.category}</div>
                                        </div>
                                        <div>
                                          <Label className="text-gray-500">Period</Label>
                                          <div className="font-medium">{artifact.period}</div>
                                        </div>
                                        <div>
                                          <Label className="text-gray-500">Language</Label>
                                          <div className="font-medium">{artifact.language}</div>
                                        </div>
                                        <div>
                                          <Label className="text-gray-500">Material</Label>
                                          <div className="font-medium">{artifact.material}</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="space-y-6">
                                    <div>
                                      <Label htmlFor="translation">Your Translation</Label>
                                      <Textarea
                                        id="translation"
                                        placeholder="Provide your translation of the text..."
                                        className="mt-2 min-h-32"
                                      />
                                    </div>
                                    <div>
                                      <Label htmlFor="meaning">Cultural Meaning</Label>
                                      <Textarea
                                        id="meaning"
                                        placeholder="Explain the cultural significance and context..."
                                        className="mt-2 min-h-24"
                                      />
                                    </div>
                                    <div>
                                      <Label htmlFor="historical-context">Historical Context</Label>
                                      <Textarea
                                        id="historical-context"
                                        placeholder="Provide historical background and context..."
                                        className="mt-2 min-h-24"
                                      />
                                    </div>
                                    <div>
                                      <Label htmlFor="sources">Sources & References</Label>
                                      <Textarea
                                        id="sources"
                                        placeholder="List your sources and references..."
                                        className="mt-2 min-h-20"
                                      />
                                    </div>
                                    <Button className="w-full bg-red-600 hover:bg-red-700">
                                      Submit Contribution (+{artifact.reward} points)
                                    </Button>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analyze" className="p-6 space-y-6">
              <div className="max-w-4xl mx-auto">
                {/* Upload Section */}
                <Card className="border-2 border-dashed border-red-200 hover:border-red-400 transition-colors">
                  <CardContent className="p-8">
                    <div className="text-center space-y-4">
                      <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                        <Camera className="h-8 w-8 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Ancient Script Image</h3>
                        <p className="text-gray-600">
                          Upload a photo of inscriptions, manuscripts, or wall writings for AI analysis
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={() => fileInputRef.current?.click()} className="bg-red-600 hover:bg-red-700">
                          <Upload className="h-4 w-4 mr-2" />
                          Choose Image
                        </Button>
                        <Button variant="outline">
                          <Camera className="h-4 w-4 mr-2" />
                          Take Photo
                        </Button>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <p className="text-sm text-gray-500">Supported formats: JPG, PNG, WEBP (Max 10MB)</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Uploaded Image Preview */}
                {uploadedImage && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <ImageIcon className="h-5 w-5" />
                          Uploaded Image
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <img
                              src={uploadedImage || "/placeholder.svg"}
                              alt="Uploaded script"
                              className="w-full rounded-lg shadow-lg"
                            />
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Analysis Options</h4>
                              <div className="space-y-2">
                                <label className="flex items-center gap-2">
                                  <input type="checkbox" defaultChecked className="rounded" />
                                  <span className="text-sm">Script Recognition</span>
                                </label>
                                <label className="flex items-center gap-2">
                                  <input type="checkbox" defaultChecked className="rounded" />
                                  <span className="text-sm">Translation</span>
                                </label>
                                <label className="flex items-center gap-2">
                                  <input type="checkbox" defaultChecked className="rounded" />
                                  <span className="text-sm">Historical Context</span>
                                </label>
                                <label className="flex items-center gap-2">
                                  <input type="checkbox" defaultChecked className="rounded" />
                                  <span className="text-sm">Cultural Significance</span>
                                </label>
                              </div>
                            </div>
                            <Button
                              onClick={handleAnalyzeScript}
                              disabled={isAnalyzing}
                              className="w-full bg-red-600 hover:bg-red-700"
                            >
                              {isAnalyzing ? (
                                <>
                                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                  Analyzing Script...
                                </>
                              ) : (
                                <>
                                  <Zap className="h-4 w-4 mr-2" />
                                  Analyze Ancient Script
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Analysis Progress */}
                    {isAnalyzing && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Card>
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <Loader2 className="h-5 w-5 animate-spin text-red-600" />
                                <span className="font-medium">AI Analysis in Progress</span>
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Processing image...</span>
                                  <span>100%</span>
                                </div>
                                <Progress value={100} className="h-2" />
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Recognizing script...</span>
                                  <span>85%</span>
                                </div>
                                <Progress value={85} className="h-2" />
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Generating translation...</span>
                                  <span>60%</span>
                                </div>
                                <Progress value={60} className="h-2" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}

                    {/* Analysis Results */}
                    {analysisResult && (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <Card className="border-green-200 bg-green-50">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-green-800">
                              <CheckCircle className="h-5 w-5" />
                              Analysis Complete
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <div>
                                  <Label className="text-sm font-medium text-gray-700">Script Type</Label>
                                  <div className="mt-1 p-3 bg-white rounded-lg border">
                                    <div className="font-semibold">{analysisResult.script}</div>
                                    <div className="text-sm text-gray-600">
                                      Confidence: {analysisResult.confidence}%
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium text-gray-700">Historical Period</Label>
                                  <div className="mt-1 p-3 bg-white rounded-lg border">{analysisResult.period}</div>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium text-gray-700">Language</Label>
                                  <div className="mt-1 p-3 bg-white rounded-lg border">{analysisResult.language}</div>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium text-gray-700">Region</Label>
                                  <div className="mt-1 p-3 bg-white rounded-lg border">{analysisResult.region}</div>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <Label className="text-sm font-medium text-gray-700">Translation</Label>
                                  <div className="mt-1 p-3 bg-white rounded-lg border">
                                    <div className="font-medium mb-2">{analysisResult.translation}</div>
                                    <div className="text-sm text-gray-600 italic">"{analysisResult.meaning}"</div>
                                  </div>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium text-gray-700">Cultural Context</Label>
                                  <div className="mt-1 p-3 bg-white rounded-lg border text-sm">
                                    {analysisResult.context}
                                  </div>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium text-gray-700">Historical Significance</Label>
                                  <div className="mt-1 p-3 bg-white rounded-lg border text-sm">
                                    {analysisResult.historical_significance}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 pt-6 border-t">
                              <Label className="text-sm font-medium text-gray-700 mb-3 block">Similar Artifacts</Label>
                              <div className="flex flex-wrap gap-2">
                                {analysisResult.similar_artifacts.map((artifact: string, index: number) => (
                                  <Badge key={index} variant="secondary" className="bg-red-100 text-red-800">
                                    {artifact}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                              <Button className="flex-1 bg-red-600 hover:bg-red-700">
                                <Download className="h-4 w-4 mr-2" />
                                Download Report
                              </Button>
                              <Button variant="outline" className="flex-1 bg-transparent">
                                <Share2 className="h-4 w-4 mr-2" />
                                Share Analysis
                              </Button>
                              <Button variant="outline" className="flex-1 bg-transparent">
                                <BookOpen className="h-4 w-4 mr-2" />
                                Learn More
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Tips Section */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <AlertCircle className="h-5 w-5" />
                      Tips for Better Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Ensure good lighting and clear visibility of the script</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Take photos straight-on to avoid distortion</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Include context like surrounding decorations or structures</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Higher resolution images provide better analysis results</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Multiple angles can help with complex scripts</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Note the location and context for better historical analysis</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
