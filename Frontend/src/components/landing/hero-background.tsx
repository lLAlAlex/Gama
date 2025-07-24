"use client"

import { useEffect, useRef } from "react"

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Floating particles representing Indonesian cultural elements
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
      shape: "circle" | "triangle" | "diamond"
    }[] = []

    const colors = [
      "rgba(220, 38, 38, 0.6)", // Red
      "rgba(254, 242, 242, 0.8)", // Light red/white
      "rgba(185, 28, 28, 0.5)", // Dark red
      "rgba(255, 255, 255, 0.7)", // White
    ]

    const createParticles = () => {
      const particleCount = Math.min(window.innerWidth / 15, 80)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: ["circle", "triangle", "diamond"][Math.floor(Math.random() * 3)] as "circle" | "triangle" | "diamond",
        })
      }
    }

    createParticles()

    const drawShape = (particle: (typeof particles)[0]) => {
      ctx.save()
      ctx.globalAlpha = particle.opacity
      ctx.fillStyle = particle.color

      switch (particle.shape) {
        case "circle":
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          break
        case "triangle":
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y - particle.size)
          ctx.lineTo(particle.x - particle.size, particle.y + particle.size)
          ctx.lineTo(particle.x + particle.size, particle.y + particle.size)
          ctx.closePath()
          ctx.fill()
          break
        case "diamond":
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y - particle.size)
          ctx.lineTo(particle.x + particle.size, particle.y)
          ctx.lineTo(particle.x, particle.y + particle.size)
          ctx.lineTo(particle.x - particle.size, particle.y)
          ctx.closePath()
          ctx.fill()
          break
      }
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size

        drawShape(particle)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/80 via-white/60 to-red-100/80 -z-5" />
    </>
  )
}
