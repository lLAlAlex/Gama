"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Camera,
  Upload,
  ImageIcon,
  Mic,
  MicOff,
  Play,
  Pause,
  RotateCcw,
  FileText,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Volume2,
  Eye,
  Heart,
  MessageCircle,
  Award,
  Users,
  Sparkles,
  Globe,
  BookOpen,
  Star,
  Zap,
  Target,
} from "lucide-react"

export default function SubmitContentPage() {
  const [activeTab, setActiveTab] = useState("images")
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const tabs = [
    {
      id: "images",
      label: "Cultural Images",
      icon: <ImageIcon className="h-5 w-5" />,
      color: "from-red-500 to-red-600",
      description: "Share photos of Indonesian cultural heritage",
    },
    {
      id: "language",
      label: "Local Languages",
      icon: <Mic className="h-5 w-5" />,
      color: "from-red-600 to-red-500",
      description: "Contribute traditional language recordings",
    },
    {
      id: "stories",
      label: "Cultural Stories",
      icon: <FileText className="h-5 w-5" />,
      color: "from-red-500 to-red-500",
      description: "Share your cultural experiences and stories",
    },
  ]

  const provinces = [
    "Aceh",
    "North Sumatra",
    "West Sumatra",
    "Riau",
    "Jambi",
    "South Sumatra",
    "Bengkulu",
    "Lampung",
    "Bangka Belitung",
    "Riau Islands",
    "Jakarta",
    "West Java",
    "Central Java",
    "East Java",
    "Yogyakarta",
    "Banten",
    "Bali",
    "West Nusa Tenggara",
    "East Nusa Tenggara",
    "West Kalimantan",
    "Central Kalimantan",
    "South Kalimantan",
    "East Kalimantan",
    "North Kalimantan",
    "North Sulawesi",
    "Central Sulawesi",
    "South Sulawesi",
    "Southeast Sulawesi",
    "Gorontalo",
    "West Sulawesi",
    "Maluku",
    "North Maluku",
    "Papua",
    "West Papua",
  ]

  const categories = {
    images: [
      "Architecture",
      "Traditional Clothing",
      "Food & Cuisine",
      "Arts & Crafts",
      "Ceremonies",
      "Festivals",
      "Daily Life",
      "Nature & Landscapes",
    ],
    language: [
      "Greetings",
      "Numbers",
      "Colors",
      "Family Terms",
      "Food Names",
      "Traditional Songs",
      "Prayers",
      "Storytelling",
    ],
    stories: [
      "Personal Experience",
      "Family Tradition",
      "Local Legend",
      "Festival Memory",
      "Cultural Learning",
      "Travel Story",
      "Community Event",
      "Historical Account",
    ],
  }

  // Mock user stats
  const userStats = {
    totalContributions: 47,
    imagesShared: 23,
    languagesRecorded: 12,
    storiesWritten: 12,
    communityPoints: 2840,
    rank: "Cultural Ambassador",
    level: 8,
  }

  const recentContributions = [
    { type: "image", title: "Borobudur Sunrise", likes: 234, comments: 45, status: "approved" },
    { type: "language", title: "Javanese Greetings", plays: 156, status: "approved" },
    { type: "story", title: "My First Batik Workshop", views: 89, status: "pending" },
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Simulate upload progress
      setUploadProgress(0)
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 10
        })
      }, 200)
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      const chunks: BlobPart[] = []
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/wav" })
        setAudioBlob(blob)
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)

      // Start timer
      const timer = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)

      setTimeout(() => {
        if (mediaRecorderRef.current?.state === "recording") {
          mediaRecorderRef.current.stop()
          setIsRecording(false)
          clearInterval(timer)
        }
      }, 60000) // Max 1 minute
    } catch (error) {
      console.error("Error accessing microphone:", error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      setRecordingTime(0)
    }
  }

  const playAudio = () => {
    if (audioBlob && audioRef.current) {
      const url = URL.createObjectURL(audioBlob)
      audioRef.current.src = url
      audioRef.current.play()
      setIsPlaying(true)

      audioRef.current.onended = () => {
        setIsPlaying(false)
        URL.revokeObjectURL(url)
      }
    }
  }

  const resetRecording = () => {
    setAudioBlob(null)
    setRecordingTime(0)
    setIsPlaying(false)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setTimeout(() => setSubmitSuccess(false), 3000)
    }, 2000)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        className="bg-gradient-to-r from-red-500 to-red-500 text-white rounded-2xl p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2 flex items-center gap-3">
              <Sparkles className="h-8 w-8" />
              Submit Content
            </h1>
            <p className="text-red-100 text-lg">
              Contribute to Gama's cultural database and help preserve Indonesian heritage
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">{userStats.totalContributions}</div>
              <div className="text-red-200 text-sm">Total Contributions</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">{userStats.communityPoints}</div>
              <div className="text-red-200 text-sm">Community Points</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          className="bg-white rounded-xl p-6 shadow-sm border border-red-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <ImageIcon className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{userStats.imagesShared}</div>
              <div className="text-sm text-gray-600">Images Shared</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-sm text-gray-600">2.3k total likes</span>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-6 shadow-sm border border-red-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Volume2 className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{userStats.languagesRecorded}</div>
              <div className="text-sm text-gray-600">Languages Recorded</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Play className="h-4 w-4 text-red-500" />
            <span className="text-sm text-gray-600">1.8k total plays</span>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-6 shadow-sm border border-red-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <BookOpen className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{userStats.storiesWritten}</div>
              <div className="text-sm text-gray-600">Stories Written</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-red-500" />
            <span className="text-sm text-gray-600">3.1k total views</span>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-red-500 to-red-500 text-white rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Award className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">Level {userStats.level}</div>
              <div className="text-red-200 text-sm">{userStats.rank}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-300 fill-current" />
            <span className="text-sm text-red-200">Top 5% contributor</span>
          </div>
        </motion.div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-xl p-2 shadow-sm border border-red-100">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center gap-3 px-6 py-4 rounded-lg text-left transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
                : "text-gray-700 hover:bg-red-50"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={activeTab === tab.id ? "text-white" : "text-red-600"}>{tab.icon}</div>
            <div>
              <div className="font-semibold">{tab.label}</div>
              <div className={`text-sm ${activeTab === tab.id ? "text-red-100" : "text-gray-500"}`}>
                {tab.description}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Content Forms */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "images" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Upload Form */}
              <div className="lg:col-span-2">
                <Card className="border-red-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700">
                      <Camera className="h-5 w-5" />
                      Upload Cultural Image
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Image Upload Area */}
                    <div
                      className="border-2 border-dashed border-red-200 rounded-xl p-8 text-center hover:border-red-300 transition-colors cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="h-12 w-12 text-red-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Drop your image here or click to browse
                      </h3>
                      <p className="text-gray-600 mb-4">Supported formats: JPG, PNG, WEBP (Max 10MB)</p>
                      <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent">
                        Choose File
                      </Button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </div>

                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Uploading...</span>
                          <span>{uploadProgress}%</span>
                        </div>
                        <Progress value={uploadProgress} className="h-2" />
                      </div>
                    )}

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Image Title *</label>
                        <Input placeholder="e.g., Traditional Balinese Temple" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.images.map((category) => (
                              <SelectItem key={category} value={category.toLowerCase()}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Province *</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select province" />
                          </SelectTrigger>
                          <SelectContent>
                            {provinces.map((province) => (
                              <SelectItem key={province} value={province.toLowerCase()}>
                                {province}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <Input placeholder="e.g., Ubud, Bali" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                      <Textarea
                        placeholder="Describe the cultural significance, history, or context of this image..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cultural Details</label>
                      <Textarea
                        placeholder="Share interesting facts, traditions, or stories related to this image..."
                        rows={3}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 flex-1"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Submit Image
                          </>
                        )}
                      </Button>
                      <Button variant="outline" className="border-red-200 text-red-600 bg-transparent">
                        Save as Draft
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Guidelines */}
              <div className="space-y-6">
                <Card className="border-red-100">
                  <CardHeader>
                    <CardTitle className="text-red-700 flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Submission Guidelines
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">High Quality Images</div>
                          <div className="text-sm text-gray-600">Clear, well-lit photos with good resolution</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Cultural Relevance</div>
                          <div className="text-sm text-gray-600">Focus on Indonesian cultural heritage</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Detailed Descriptions</div>
                          <div className="text-sm text-gray-600">Provide context and cultural significance</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Respect Privacy</div>
                          <div className="text-sm text-gray-600">Ensure you have permission for photos with people</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-100">
                  <CardHeader>
                    <CardTitle className="text-red-700 flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      Earn Rewards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Image Approved</span>
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          +50 points
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Featured Content</span>
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          +100 points
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Community Favorite</span>
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          +200 points
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "language" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recording Form */}
              <div className="lg:col-span-2">
                <Card className="border-red-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700">
                      <Mic className="h-5 w-5" />
                      Record Local Language
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Recording Interface */}
                    <div className="bg-gradient-to-r from-red-50 to-red-50 rounded-xl p-8 text-center">
                      <div className="mb-6">
                        <motion.div
                          className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${
                            isRecording ? "bg-red-500 text-white" : "bg-white border-4 border-red-200 text-red-500"
                          }`}
                          animate={isRecording ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                        >
                          {isRecording ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
                        </motion.div>
                      </div>

                      {isRecording && (
                        <div className="mb-4">
                          <div className="text-2xl font-bold text-red-600 mb-2">{formatTime(recordingTime)}</div>
                          <div className="text-sm text-gray-600">Recording in progress...</div>
                        </div>
                      )}

                      <div className="flex justify-center gap-4">
                        {!isRecording && !audioBlob && (
                          <Button
                            onClick={startRecording}
                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                          >
                            <Mic className="h-4 w-4 mr-2" />
                            Start Recording
                          </Button>
                        )}

                        {isRecording && (
                          <Button
                            onClick={stopRecording}
                            variant="outline"
                            className="border-red-200 text-red-600 bg-transparent"
                          >
                            <MicOff className="h-4 w-4 mr-2" />
                            Stop Recording
                          </Button>
                        )}

                        {audioBlob && (
                          <div className="flex gap-2">
                            <Button
                              onClick={playAudio}
                              disabled={isPlaying}
                              variant="outline"
                              className="border-red-200 text-red-600 bg-transparent"
                            >
                              {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                              {isPlaying ? "Playing..." : "Play"}
                            </Button>
                            <Button
                              onClick={resetRecording}
                              variant="outline"
                              className="border-red-200 text-red-600 bg-transparent"
                            >
                              <RotateCcw className="h-4 w-4 mr-2" />
                              Re-record
                            </Button>
                          </div>
                        )}
                      </div>

                      <audio ref={audioRef} className="hidden" />
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Language/Dialect *</label>
                        <Input placeholder="e.g., Javanese, Sundanese, Batak" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.language.map((category) => (
                              <SelectItem key={category} value={category.toLowerCase()}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Province/Region *</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select province" />
                          </SelectTrigger>
                          <SelectContent>
                            {provinces.map((province) => (
                              <SelectItem key={province} value={province.toLowerCase()}>
                                {province}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Specific Location</label>
                        <Input placeholder="e.g., Central Java, Yogyakarta" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Transcription (What you said) *
                      </label>
                      <Textarea placeholder="Write down exactly what you said in the recording..." rows={3} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">English Translation *</label>
                      <Textarea placeholder="Provide the English translation of your recording..." rows={3} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cultural Context</label>
                      <Textarea
                        placeholder="Explain when and how this phrase/word is used, cultural significance, etc..."
                        rows={3}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting || !audioBlob}
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 flex-1"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Submit Recording
                          </>
                        )}
                      </Button>
                      <Button variant="outline" className="border-red-200 text-red-600 bg-transparent">
                        Save as Draft
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recording Guidelines */}
              <div className="space-y-6">
                <Card className="border-red-100">
                  <CardHeader>
                    <CardTitle className="text-red-700 flex items-center gap-2">
                      <Volume2 className="h-5 w-5" />
                      Recording Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Clear Audio</div>
                          <div className="text-sm text-gray-600">Record in a quiet environment</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Natural Pace</div>
                          <div className="text-sm text-gray-600">Speak clearly and at normal speed</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Authentic Pronunciation</div>
                          <div className="text-sm text-gray-600">Use proper local pronunciation</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Max 60 seconds</div>
                          <div className="text-sm text-gray-600">Keep recordings concise and focused</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-100">
                  <CardHeader>
                    <CardTitle className="text-red-700 flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Language Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-600 mb-3">
                        Your contributions help preserve Indonesia's linguistic diversity
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Recording Approved</span>
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          +75 points
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">High Quality Audio</span>
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          +25 bonus
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Rare Language</span>
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          +150 bonus
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "stories" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Story Form */}
              <div className="lg:col-span-2">
                <Card className="border-red-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700">
                      <FileText className="h-5 w-5" />
                      Share Your Cultural Story
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Story Title *</label>
                      <Input placeholder="e.g., My First Batik Workshop Experience" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Story Category *</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.stories.map((category) => (
                              <SelectItem key={category} value={category.toLowerCase()}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Province/Region *</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select province" />
                          </SelectTrigger>
                          <SelectContent>
                            {provinces.map((province) => (
                              <SelectItem key={province} value={province.toLowerCase()}>
                                {province}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Experience</label>
                        <Input type="date" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <Input placeholder="e.g., Yogyakarta, Central Java" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Story Summary *</label>
                      <Textarea placeholder="Provide a brief summary of your cultural experience..." rows={3} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Story *</label>
                      <Textarea
                        placeholder="Share your complete cultural experience, what you learned, how it impacted you, interesting details, people you met, traditions you witnessed..."
                        rows={8}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cultural Insights</label>
                      <Textarea
                        placeholder="What cultural insights did you gain? What would you want others to know about this experience?"
                        rows={4}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tags (Optional)</label>
                      <Input placeholder="e.g., batik, traditional-art, yogyakarta, workshop" />
                      <div className="text-xs text-gray-500 mt-1">
                        Separate tags with commas to help others find your story
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 flex-1"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Submit Story
                          </>
                        )}
                      </Button>
                      <Button variant="outline" className="border-red-200 text-red-600 bg-transparent">
                        Save as Draft
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Story Guidelines */}
              <div className="space-y-6">
                <Card className="border-red-100">
                  <CardHeader>
                    <CardTitle className="text-red-700 flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Story Guidelines
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Personal Experience</div>
                          <div className="text-sm text-gray-600">Share your own authentic experiences</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Cultural Focus</div>
                          <div className="text-sm text-gray-600">Highlight Indonesian cultural elements</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Respectful Tone</div>
                          <div className="text-sm text-gray-600">Be respectful of cultures and traditions</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Appropriate Content</div>
                          <div className="text-sm text-gray-600">Keep content family-friendly and educational</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-100">
                  <CardHeader>
                    <CardTitle className="text-red-700 flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Community Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-600 mb-3">
                        Your stories inspire others to explore Indonesian culture
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Story Published</span>
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          +100 points
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Featured Story</span>
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          +250 points
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Most Liked Story</span>
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          +500 points
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Recent Contributions */}
      <Card className="border-red-100">
        <CardHeader>
          <CardTitle className="text-red-700 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Your Recent Contributions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentContributions.map((contribution, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-red-100 rounded-lg">
                    {contribution.type === "image" && <ImageIcon className="h-4 w-4 text-red-600" />}
                    {contribution.type === "language" && <Volume2 className="h-4 w-4 text-red-600" />}
                    {contribution.type === "story" && <FileText className="h-4 w-4 text-red-600" />}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{contribution.title}</div>
                    <Badge
                      variant={contribution.status === "approved" ? "default" : "secondary"}
                      className={
                        contribution.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    >
                      {contribution.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  {contribution.type === "image" && (
                    <>
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {contribution.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {contribution.comments}
                      </div>
                    </>
                  )}
                  {contribution.type === "language" && (
                    <div className="flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      {contribution.plays} plays
                    </div>
                  )}
                  {contribution.type === "story" && (
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {contribution.views} views
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Success Message */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-50"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
          >
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Content submitted successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
