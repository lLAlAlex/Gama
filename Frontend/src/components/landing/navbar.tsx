"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Download, MapPin } from "lucide-react"
import { useNavigate } from "react-router"

export default function Navbar() {

    const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Community", href: "#community" },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-red-100" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <MapPin className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Gama
          </span>
        </a>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">

          <Button 
                variant="outline"
                className="hidden md:flex items-center gap-2 border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-700 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate("/dashboard")}
            >
            <Download className="h-4 w-4" />
            Dashboard
          </Button>

            <Button 
                variant="outline"
                className="hidden md:flex items-center gap-2 border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-700 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate("/login")}
            >
            <Download className="h-4 w-4" />
            Login
          </Button>

          <Button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => navigate("/register")}>
            <Download className="h-4 w-4" />
            Register
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-red-200 hover:bg-red-50 bg-transparent">
                <Menu className="h-5 w-5 text-red-600" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                <Button 
                variant="outline"
                className="items-center gap-2 border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-700 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate("/dashboard")}
                  >
                  <Download className="h-4 w-4" />
                  Dashboard
                </Button>

                <Button 
                variant="outline"
                className="items-center gap-2 border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-700 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate("/login")}
                  >
                  <Download className="h-4 w-4" />
                  Login
                </Button>

                <Button className="items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => navigate("/register")}>
                  <Download className="h-4 w-4" />
                  Register
                </Button>

              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
