import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { 
  Sun, 
  Moon, 
  Cloud, 
  Droplets,
  Wind,
  Music,
  Image,
  Mail,
  MessageCircle,
  Calendar,
  Settings,
  Wifi,
  Bluetooth,
  Volume2,
  Maximize2
} from 'lucide-react'

export default function IosDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8 flex items-center justify-center">
      <Card className="w-full max-w-3xl bg-white/10 backdrop-blur-md border-white/20 shadow-xl rounded-3xl overflow-hidden">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Weather Widget */}
            <Card className="col-span-2 bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">72°F</h2>
                    <p className="text-sm text-white/80">Sunny</p>
                  </div>
                  <Sun className="h-10 w-10 text-yellow-300" />
                </div>
                <div className="mt-4 flex justify-between text-white/80">
                  <div className="flex items-center">
                    <Cloud className="h-4 w-4 mr-1" />
                    <span className="text-xs">20%</span>
                  </div>
                  <div className="flex items-center">
                    <Droplets className="h-4 w-4 mr-1" />
                    <span className="text-xs">62%</span>
                  </div>
                  <div className="flex items-center">
                    <Wind className="h-4 w-4 mr-1" />
                    <span className="text-xs">5 mph</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* App Icons */}
            <Button variant="ghost" className="aspect-square bg-white/20 backdrop-blur-sm rounded-2xl p-0 flex flex-col items-center justify-center">
              <Music className="h-8 w-8 text-white mb-2" />
              <span className="text-xs text-white">Music</span>
            </Button>
            <Button variant="ghost" className="aspect-square bg-white/20 backdrop-blur-sm rounded-2xl p-0 flex flex-col items-center justify-center">
              <Image className="h-8 w-8 text-white mb-2" />
              <span className="text-xs text-white">Photos</span>
            </Button>
            <Button variant="ghost" className="aspect-square bg-white/20 backdrop-blur-sm rounded-2xl p-0 flex flex-col items-center justify-center">
              <Mail className="h-8 w-8 text-white mb-2" />
              <span className="text-xs text-white">Mail</span>
            </Button>
            <Button variant="ghost" className="aspect-square bg-white/20 backdrop-blur-sm rounded-2xl p-0 flex flex-col items-center justify-center">
              <MessageCircle className="h-8 w-8 text-white mb-2" />
              <span className="text-xs text-white">Messages</span>
            </Button>
            <Button variant="ghost" className="aspect-square bg-white/20 backdrop-blur-sm rounded-2xl p-0 flex flex-col items-center justify-center">
              <Calendar className="h-8 w-8 text-white mb-2" />
              <span className="text-xs text-white">Calendar</span>
            </Button>
            <Button variant="ghost" className="aspect-square bg-white/20 backdrop-blur-sm rounded-2xl p-0 flex flex-col items-center justify-center">
              <Settings className="h-8 w-8 text-white mb-2" />
              <span className="text-xs text-white">Settings</span>
            </Button>

            {/* Control Center */}
            <Card className="col-span-2 bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-white mb-4">Control Center</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <Wifi className="h-6 w-6 text-white" />
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <Bluetooth className="h-6 w-6 text-white" />
                    <Switch />
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center mb-2">
                      <Volume2 className="h-6 w-6 text-white mr-2" />
                      <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
                    </div>
                    <div className="flex items-center">
                      <Sun className="h-6 w-6 text-white mr-2" />
                      <Slider defaultValue={[75]} max={100} step={1} className="w-full" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dock */}
          <div className="mt-8 flex justify-center space-x-4">
            <Button variant="ghost" className="bg-white/20 backdrop-blur-sm rounded-full p-3">
              <Music className="h-6 w-6 text-white" />
            </Button>
            <Button variant="ghost" className="bg-white/20 backdrop-blur-sm rounded-full p-3">
              <Mail className="h-6 w-6 text-white" />
            </Button>
            <Button variant="ghost" className="bg-white/20 backdrop-blur-sm rounded-full p-3">
              <MessageCircle className="h-6 w-6 text-white" />
            </Button>
            <Button variant="ghost" className="bg-white/20 backdrop-blur-sm rounded-full p-3">
              <Settings className="h-6 w-6 text-white" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}