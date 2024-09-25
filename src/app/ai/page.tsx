import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Video, Lightbulb, Image as ImageIcon, Layout, Grid, Crown, Headphones, Moon, Wand2 } from 'lucide-react'

export default function ImagineArtPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 flex flex-col">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-lg mr-2"></div>
          <span className="text-xl font-semibold">ImagineArt</span>
        </div>
        
        <nav className="flex-1">
          <Button variant="ghost" className="w-full justify-start mb-2">
            <Home className="mr-2 h-4 w-4" /> Home
          </Button>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">AI Tools</h3>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <Wand2 className="mr-2 h-4 w-4" /> Text to Image V2
              <span className="ml-auto text-xs bg-black text-white px-1 rounded">NEW</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <Video className="mr-2 h-4 w-4" /> AI Video
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <Lightbulb className="mr-2 h-4 w-4" /> Ideate
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <ImageIcon className="mr-2 h-4 w-4" /> Image Remix
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <Layout className="mr-2 h-4 w-4" /> Canvas
            </Button>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-2">Others</h3>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <Grid className="mr-2 h-4 w-4" /> Mini Apps
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <Crown className="mr-2 h-4 w-4" /> Manage Subscription
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <Headphones className="mr-2 h-4 w-4" /> Customer Support
            </Button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <Tabs defaultValue="explore">
            <TabsList>
              <TabsTrigger value="explore">Explore</TabsTrigger>
              <TabsTrigger value="library">My Library</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center space-x-4">
            <span className="font-semibold">50 +</span>
            <Button className="bg-purple-600 text-white">
              <Crown className="mr-2 h-4 w-4" /> Upgrade
            </Button>
            <Button variant="ghost" size="icon">
              <Moon className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-2 gap-4">
          <Card className="overflow-hidden">
            <CardContent className="p-0 relative">
              <img src="/placeholder.svg?height=400&width=600" alt="Woman with glitter" className="w-full h-64 object-cover" />
              <Button variant="secondary" size="icon" className="absolute top-2 right-2">
                <Wand2 className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardContent className="p-0 relative">
              <img src="/placeholder.svg?height=400&width=600" alt="Spaceship over Earth" className="w-full h-64 object-cover" />
              <Button variant="secondary" size="icon" className="absolute top-2 right-2">
                <Wand2 className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-4">
          <CardContent className="p-4">
            <Tabs defaultValue="describe">
              <TabsList>
                <TabsTrigger value="describe">Describe Video</TabsTrigger>
                <TabsTrigger value="animate">Animate Image</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="mt-4">
              <Input 
                placeholder='Try something like "A cat flying in the sky wearing superman suit"'
                className="w-full"
              />
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline">Add Face</Button>
              <div className="flex items-center space-x-2">
                <span>16:9</span>
                <Button>Generate</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}