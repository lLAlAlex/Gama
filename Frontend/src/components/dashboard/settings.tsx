"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Lock, Bell, Globe, Shield, Save, Eye, EyeOff, Upload, Trash2, MapPin, Calendar } from "lucide-react"

export default function SettingsPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    discoveries: true,
    achievements: true,
    community: false,
    marketing: false,
  })

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: value }))
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
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <User className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
            <p className="text-red-100 text-lg">Manage your profile and preferences</p>
          </div>
        </div>
      </motion.div>

      {/* Settings Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-red-50 p-1 rounded-xl">
            <TabsTrigger value="profile" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
              Profile
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
              Security
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
              Privacy
            </TabsTrigger>
            <TabsTrigger value="preferences" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
              Preferences
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-red-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-red-600" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24 border-4 border-red-100">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                    <AvatarFallback className="bg-red-500 text-white text-2xl font-bold">AJ</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button className="bg-red-500 hover:bg-red-600 text-white">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New Photo
                    </Button>
                    <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove Photo
                    </Button>
                    <p className="text-sm text-gray-500">JPG, PNG or GIF. Max size 2MB.</p>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Ahmad" className="border-red-200 focus:border-red-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Joko" className="border-red-200 focus:border-red-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="ahmad.joko@example.com"
                      className="border-red-200 focus:border-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      defaultValue="+62 812 3456 7890"
                      className="border-red-200 focus:border-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="location"
                        defaultValue="Jakarta, Indonesia"
                        className="pl-10 border-red-200 focus:border-red-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">Birth Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="birthdate"
                        type="date"
                        defaultValue="1990-01-15"
                        className="pl-10 border-red-200 focus:border-red-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    defaultValue="Cultural explorer passionate about Indonesian heritage and traditions."
                    className="border-red-200 focus:border-red-500"
                    rows={4}
                  />
                </div>

                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card className="border-red-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-red-600" />
                  Change Password
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showCurrentPassword ? "text" : "password"}
                      className="border-red-200 focus:border-red-500 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      className="border-red-200 focus:border-red-500 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      className="border-red-200 focus:border-red-500 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <Button className="bg-red-500 hover:bg-red-600 text-white">Update Password</Button>
              </CardContent>
            </Card>

            <Card className="border-red-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  Two-Factor Authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Add an extra layer of security to your account.</p>
                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent">
                  Enable 2FA
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="border-red-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-red-600" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">New Discoveries</h4>
                      <p className="text-sm text-gray-600">Get notified when you discover new landmarks</p>
                    </div>
                    <Switch
                      checked={notifications.discoveries}
                      onCheckedChange={(value) => handleNotificationChange("discoveries", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Achievements</h4>
                      <p className="text-sm text-gray-600">Get notified when you unlock new badges</p>
                    </div>
                    <Switch
                      checked={notifications.achievements}
                      onCheckedChange={(value) => handleNotificationChange("achievements", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Community Updates</h4>
                      <p className="text-sm text-gray-600">Get notified about community events and updates</p>
                    </div>
                    <Switch
                      checked={notifications.community}
                      onCheckedChange={(value) => handleNotificationChange("community", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Marketing Communications</h4>
                      <p className="text-sm text-gray-600">Receive promotional emails and updates</p>
                    </div>
                    <Switch
                      checked={notifications.marketing}
                      onCheckedChange={(value) => handleNotificationChange("marketing", value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="border-red-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  Privacy Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Profile Visibility</h4>
                      <p className="text-sm text-gray-600">Make your profile visible to other users</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Show Activity Status</h4>
                      <p className="text-sm text-gray-600">Let others see when you're active</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Location Sharing</h4>
                      <p className="text-sm text-gray-600">Share your location for better recommendations</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6">
            <Card className="border-red-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-red-600" />
                  App Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger className="border-red-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="id">Bahasa Indonesia</SelectItem>
                        <SelectItem value="jv">Javanese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="asia/jakarta">
                      <SelectTrigger className="border-red-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asia/jakarta">Asia/Jakarta (WIB)</SelectItem>
                        <SelectItem value="asia/makassar">Asia/Makassar (WITA)</SelectItem>
                        <SelectItem value="asia/jayapura">Asia/Jayapura (WIT)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Auto-save Progress</h4>
                      <p className="text-sm text-gray-600">Automatically save your exploration progress</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Offline Mode</h4>
                      <p className="text-sm text-gray-600">Download content for offline exploration</p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  <Save className="h-4 w-4 mr-2" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
