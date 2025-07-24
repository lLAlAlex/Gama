/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Download,
  MapPin,
  Footprints,
  Package,
  Clock,
  Trophy,
  BookOpen,
  Star,
  Award,
  Target,
  Calendar,
  Camera,
  Heart,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Mountain,
  Compass,
} from "lucide-react"
import html2canvas from "html2canvas"

interface JourneyStats {
  areasVisited: number
  totalAreas: number
  stepsWalked: number
  kmExplored: number
  artifactsCollected: number
  totalArtifacts: number
  explorationTime: number
  geoguessrWins: number
  geoguessrGames: number
  heritageBooksFound: number
  totalHeritageBooks: number
  level: number
  experiencePoints: number
  achievementsUnlocked: number
  totalAchievements: number
  favoriteLocation: string
  longestStreak: number
  perfectScores: number
  culturalKnowledge: number
}

const journeyStats: JourneyStats = {
  areasVisited: 47,
  totalAreas: 100,
  stepsWalked: 125847,
  kmExplored: 89.3,
  artifactsCollected: 156,
  totalArtifacts: 300,
  explorationTime: 2847, // minutes
  geoguessrWins: 23,
  geoguessrGames: 31,
  heritageBooksFound: 12,
  totalHeritageBooks: 25,
  level: 12,
  experiencePoints: 15420,
  achievementsUnlocked: 28,
  totalAchievements: 50,
  favoriteLocation: "Borobudur Temple",
  longestStreak: 15,
  perfectScores: 8,
  culturalKnowledge: 78,
}

const slides = [
  {
    id: 1,
    title: "Your Cultural Journey",
    subtitle: "2024 Year in Review",
    type: "intro",
    gradient: "from-red-500 to-red-600",
  },
  {
    id: 2,
    title: "Areas Explored",
    subtitle: `You've visited ${journeyStats.areasVisited} cultural sites`,
    type: "areas",
    gradient: "from-blue-500 to-blue-600",
    stat: journeyStats.areasVisited,
    total: journeyStats.totalAreas,
    description: "From ancient temples to traditional villages",
  },
  {
    id: 3,
    title: "Steps Taken",
    subtitle: `${journeyStats.stepsWalked.toLocaleString()} steps on your cultural journey`,
    type: "steps",
    gradient: "from-green-500 to-green-600",
    stat: journeyStats.stepsWalked,
    distance: journeyStats.kmExplored,
    description: "Every step brought you closer to Indonesia's heritage",
  },
  {
    id: 4,
    title: "Artifacts Collected",
    subtitle: `${journeyStats.artifactsCollected} cultural treasures discovered`,
    type: "artifacts",
    gradient: "from-purple-500 to-purple-600",
    stat: journeyStats.artifactsCollected,
    total: journeyStats.totalArtifacts,
    description: "Each artifact tells a story of Indonesia's rich past",
  },
  {
    id: 5,
    title: "Time Exploring",
    subtitle: `${Math.floor(journeyStats.explorationTime / 60)} hours immersed in culture`,
    type: "time",
    gradient: "from-orange-500 to-orange-600",
    stat: Math.floor(journeyStats.explorationTime / 60),
    minutes: journeyStats.explorationTime % 60,
    description: "Time well spent discovering Indonesia's heritage",
  },
  {
    id: 6,
    title: "GeoGuessr Champion",
    subtitle: `${journeyStats.geoguessrWins} wins out of ${journeyStats.geoguessrGames} games`,
    type: "geoguessr",
    gradient: "from-yellow-500 to-yellow-600",
    wins: journeyStats.geoguessrWins,
    games: journeyStats.geoguessrGames,
    winRate: Math.round((journeyStats.geoguessrWins / journeyStats.geoguessrGames) * 100),
    description: "Your geographical knowledge is impressive!",
  },
  {
    id: 7,
    title: "Heritage Books",
    subtitle: `${journeyStats.heritageBooksFound} of ${journeyStats.totalHeritageBooks} books discovered`,
    type: "books",
    gradient: "from-indigo-500 to-indigo-600",
    found: journeyStats.heritageBooksFound,
    total: journeyStats.totalHeritageBooks,
    percentage: Math.round((journeyStats.heritageBooksFound / journeyStats.totalHeritageBooks) * 100),
    description: "Knowledge is the greatest treasure",
  },
  {
    id: 8,
    title: "Level Achievement",
    subtitle: `Reached Level ${journeyStats.level} Cultural Explorer`,
    type: "level",
    gradient: "from-pink-500 to-pink-600",
    level: journeyStats.level,
    xp: journeyStats.experiencePoints,
    description: "Your dedication to cultural exploration shines",
  },
  {
    id: 9,
    title: "Achievements Unlocked",
    subtitle: `${journeyStats.achievementsUnlocked} out of ${journeyStats.totalAchievements} achievements`,
    type: "achievements",
    gradient: "from-teal-500 to-teal-600",
    unlocked: journeyStats.achievementsUnlocked,
    total: journeyStats.totalAchievements,
    percentage: Math.round((journeyStats.achievementsUnlocked / journeyStats.totalAchievements) * 100),
    description: "Each achievement marks a milestone in your journey",
  },
  {
    id: 10,
    title: "Your Favorite Place",
    subtitle: journeyStats.favoriteLocation,
    type: "favorite",
    gradient: "from-red-500 to-pink-500",
    location: journeyStats.favoriteLocation,
    streak: journeyStats.longestStreak,
    description: "The place that captured your heart the most",
  },
  {
    id: 11,
    title: "Perfect Scores",
    subtitle: `${journeyStats.perfectScores} perfect exploration scores`,
    type: "perfect",
    gradient: "from-emerald-500 to-emerald-600",
    scores: journeyStats.perfectScores,
    knowledge: journeyStats.culturalKnowledge,
    description: "Excellence in cultural exploration",
  },
  {
    id: 12,
    title: "Thank You",
    subtitle: "For preserving Indonesia's cultural heritage",
    type: "outro",
    gradient: "from-red-500 to-red-600",
    description: "Your journey continues...",
  },
]

export default function JourneyRecapPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const slideRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Cultural Journey 2024",
          text: `I've explored ${journeyStats.areasVisited} cultural sites and collected ${journeyStats.artifactsCollected} artifacts in my Indonesian heritage journey!`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      const text = `I've explored ${journeyStats.areasVisited} cultural sites and collected ${journeyStats.artifactsCollected} artifacts in my Indonesian heritage journey! Check out my cultural exploration stats.`
      navigator.clipboard.writeText(text)
      alert("Journey stats copied to clipboard!")
    }
  }

  const handleDownloadPoster = async () => {
    if (slideRef.current) {
      try {
        const canvas = await html2canvas(slideRef.current, {
          backgroundColor: null,
          scale: 2,
          width: 440,
          height: 780,
        })

        const link = document.createElement("a")
        link.download = `cultural-journey-2024-slide-${currentSlide + 1}.png`
        link.href = canvas.toDataURL()
        link.click()
      } catch (error) {
        console.error("Error generating poster:", error)
      }
    }
  }

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case "intro":
        return (
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <Compass className="h-16 w-16 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-4xl font-bold text-white mb-4">{slide.title}</h1>
              <p className="text-xl text-white opacity-90">{slide.subtitle}</p>
              <div className="mt-8 text-white opacity-75">
                <Calendar className="h-6 w-6 mx-auto mb-2" />
                <p>Your Indonesian Cultural Heritage Journey</p>
              </div>
            </motion.div>
          </div>
        )

      case "areas":
        return (
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <MapPin className="h-16 w-16 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl font-bold text-white mb-2">{slide.stat}</h1>
              <p className="text-xl text-white opacity-90 mb-4">{slide.subtitle}</p>
              <div className="bg-white bg-opacity-20 rounded-full p-1 mb-4">
                <Progress value={(slide.stat / slide.total) * 100} className="h-3" />
              </div>
              <p className="text-white opacity-75">{slide.description}</p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-white">
                <div className="bg-white bg-opacity-10 rounded-lg p-3">
                  <Mountain className="h-6 w-6 mx-auto mb-1" />
                  <p className="text-sm">Temples</p>
                  <p className="font-bold">12</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-3">
                  <Users className="h-6 w-6 mx-auto mb-1" />
                  <p className="text-sm">Villages</p>
                  <p className="font-bold">35</p>
                </div>
              </div>
            </motion.div>
          </div>
        )

      case "steps":
        return (
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <Footprints className="h-16 w-16 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-4xl font-bold text-white mb-2">{slide.stat.toLocaleString()}</h1>
              <p className="text-xl text-white opacity-90 mb-4">steps taken</p>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-white">{slide.distance} km</p>
                <p className="text-white opacity-75">distance explored</p>
              </div>
              <p className="text-white opacity-75">{slide.description}</p>
              <div className="mt-6 text-white opacity-90">
                <TrendingUp className="h-6 w-6 mx-auto mb-2" />
                <p className="text-sm">That's like walking from Jakarta to Bandung!</p>
              </div>
            </motion.div>
          </div>
        )

      case "artifacts":
        return (
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <Package className="h-16 w-16 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl font-bold text-white mb-2">{slide.stat}</h1>
              <p className="text-xl text-white opacity-90 mb-4">{slide.subtitle}</p>
              <div className="bg-white bg-opacity-20 rounded-full p-1 mb-4">
                <Progress value={(slide.stat / slide.total) * 100} className="h-3" />
              </div>
              <p className="text-white opacity-75">{slide.description}</p>
              <div className="mt-6 grid grid-cols-3 gap-2 text-white">
                <div className="bg-white bg-opacity-10 rounded-lg p-2">
                  <p className="text-xs">Common</p>
                  <p className="font-bold">89</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-2">
                  <p className="text-xs">Rare</p>
                  <p className="font-bold">45</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-2">
                  <p className="text-xs">Epic</p>
                  <p className="font-bold">22</p>
                </div>
              </div>
            </motion.div>
          </div>
        )

      case "time":
        return (
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <Clock className="h-16 w-16 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl font-bold text-white mb-2">{slide.stat}h</h1>
              <p className="text-xl text-white opacity-90 mb-4">{slide.subtitle}</p>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                <p className="text-lg text-white">{slide.minutes} minutes</p>
                <p className="text-white opacity-75">additional exploration</p>
              </div>
              <p className="text-white opacity-75">{slide.description}</p>
              <div className="mt-6 text-white opacity-90">
                <Heart className="h-6 w-6 mx-auto mb-2" />
                <p className="text-sm">Passion for culture shows in every minute</p>
              </div>
            </motion.div>
          </div>
        )

      case "geoguessr":
        return (
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <Trophy className="h-16 w-16 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl font-bold text-white mb-2">{slide.wins}</h1>
              <p className="text-xl text-white opacity-90 mb-4">GeoGuessr victories</p>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-white">{slide.winRate}%</p>
                <p className="text-white opacity-75">win rate</p>
              </div>
              <p className="text-white opacity-75">{slide.description}</p>
              <div className="mt-6 text-white opacity-90">
                <Target className="h-6 w-6 mx-auto mb-2" />
                <p className="text-sm">{slide.games} games played total</p>
              </div>
            </motion.div>
          </div>
        )

      case "books":
        return (
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <BookOpen className="h-16 w-16 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl font-bold text-white mb-2">{slide.found}</h1>
              <p className="text-xl text-white opacity-90 mb-4">heritage books discovered</p>
              <div className="bg-white bg-opacity-20 rounded-full p-1 mb-4">
                <Progress value={slide.percentage} className="h-3" />
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-white">{slide.percentage}%</p>
                <p className="text-white opacity-75">collection complete</p>
              </div>
              <p className="text-white opacity-75">{slide.description}</p>
            </motion.div>
          </div>
        )

      case "level":
        return (
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <Star className="h-16 w-16 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-6xl font-bold text-white mb-2">{slide.level}</h1>
              <p className="text-xl text-white opacity-90 mb-4">Cultural Explorer Level</p>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                <p className="text-lg font-bold text-white">{slide.xp.toLocaleString()}</p>
                <p className="text-white opacity-75">experience points earned</p>
              </div>
              <p className="text-white opacity-75">{slide.description}</p>
              <div className="mt-6 text-white opacity-90">
                <Zap className="h-6 w-6 mx-auto mb-2" />
                <p className="text-sm">Next level: 2,580 XP to go</p>
              </div>
            </motion.div>
          </div>
        )

      case "achievements":
        return (
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <Award className="h-16 w-16 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl font-bold text-white mb-2">{slide.unlocked}</h1>
              <p className="text-xl text-white opacity-90 mb-4">achievements unlocked</p>
              <div className="bg-white bg-opacity-20 rounded-full p-1 mb-4">
                <Progress value={slide.percentage} className="h-3" />
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-white">{slide.percentage}%</p>
                <p className="text-white opacity-75">completion rate</p>
              </div>
              <p className="text-white opacity-75">{slide.description}</p>
            </motion.div>
          </div>
        )

      case "favorite":
        return (
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <Heart className="h-16 w-16 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-3xl font-bold text-white mb-4">{slide.location}</h1>
              <p className="text-xl text-white opacity-90 mb-6">Your most visited cultural site</p>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-white">{slide.streak}</p>
                <p className="text-white opacity-75">day exploration streak</p>
              </div>
              <p className="text-white opacity-75">{slide.description}</p>
              <div className="mt-6 text-white opacity-90">
                <Camera className="h-6 w-6 mx-auto mb-2" />
                <p className="text-sm">47 photos taken here</p>
              </div>
            </motion.div>
          </div>
        )

      case "perfect":
        return (
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <Target className="h-16 w-16 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl font-bold text-white mb-2">{slide.scores}</h1>
              <p className="text-xl text-white opacity-90 mb-4">perfect exploration scores</p>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-white">{slide.knowledge}%</p>
                <p className="text-white opacity-75">cultural knowledge mastery</p>
              </div>
              <p className="text-white opacity-75">{slide.description}</p>
              <div className="mt-6 text-white opacity-90">
                <Globe className="h-6 w-6 mx-auto mb-2" />
                <p className="text-sm">Indonesian heritage expert level</p>
              </div>
            </motion.div>
          </div>
        )

      case "outro":
        return (
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <Heart className="h-16 w-16 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-4xl font-bold text-white mb-4">{slide.title}</h1>
              <p className="text-xl text-white opacity-90 mb-6">{slide.subtitle}</p>
              <p className="text-white opacity-75 mb-8">{slide.description}</p>
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <p className="text-white font-medium mb-2">Keep exploring, keep learning</p>
                <p className="text-white opacity-75 text-sm">Indonesia's cultural heritage awaits your discovery</p>
              </div>
            </motion.div>
          </div>
        )

      default:
        return null
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
              <Calendar className="h-8 w-8" />
              Your Journey Recap 2024
            </h1>
            <p className="text-red-100 text-lg">Relive your amazing cultural exploration journey</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">Level {journeyStats.level}</div>
            <div className="text-red-200 text-sm">Cultural Explorer</div>
          </div>
        </div>
      </motion.div>

      {/* Story Slideshow */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            {/* Slideshow Container */}
            <div className="relative w-full max-w-md mx-auto bg-white">
              {/* Slide Content */}
              <div 
                ref={slideRef}
                className={`aspect-[9/16] bg-gradient-to-br ${slides[currentSlide].gradient} p-8 flex items-center justify-center relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div> */}
                </div>

                {/* Slide Content */}
                <div className="relative z-10 w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      {renderSlideContent(slides[currentSlide])}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Slide Counter */}
                <div className="absolute top-4 right-4 bg-black bg-opacity-30 rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">
                    {currentSlide + 1} / {slides.length}
                  </span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSlide}
                  className="ml-2 bg-black bg-opacity-20 hover:bg-black hover:bg-opacity-40 text-white border-0"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  className="mr-2 bg-black bg-opacity-20 hover:bg-black hover:bg-opacity-40 text-white border-0"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white w-6' 
                        : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button
          onClick={handleShare}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <Share2 className="h-5 w-5" />
          Share Journey
        </Button>
        <Button
          onClick={handleDownloadPoster}
          variant="outline"
          className="border-red-200 text-red-600 hover:bg-red-50 px-6 py-3 rounded-xl flex items-center gap-2 bg-transparent"
        >
          <Download className="h-5 w-5" />
          Download Poster
        </Button>
      </motion.div>

      {/* Quick Stats Summary */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="p-4 text-center">
          <MapPin className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{journeyStats.areasVisited}</div>
          <div className="text-sm text-gray-600">Areas Visited</div>
        </Card>
        <Card className="p-4 text-center">
          <Footprints className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{journeyStats.kmExplored}km</div>
          <div className="text-sm text-gray-600">Distance Explored</div>
        </Card>
        <Card className="p-4 text-center">
          <Package className="h-8 w-8 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{journeyStats.artifactsCollected}</div>
          <div className="text-sm text-gray-600">Artifacts Found</div>
        </Card>
        <Card className="p-4 text-center">
          <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{journeyStats.geoguessrWins}</div>
          <div className="text-sm text-gray-600">GeoGuessr Wins</div>
        </Card>
      </motion.div>
    </div>
  )
}
