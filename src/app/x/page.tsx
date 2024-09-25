import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, Search, Bell, Mail, FileText, Users, Star, User, MoreHorizontal, Image, ListPlus, Smile, Calendar, MapPin } from 'lucide-react'

export default function TwitterClone() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-gray-200 p-4">
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-blue-400 mb-4" fill="currentColor">
          <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
        </svg>
        
        <nav className="space-y-4">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-5 w-5" /> Home
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Search className="mr-2 h-5 w-5" /> Explore
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="mr-2 h-5 w-5" /> Notifications
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Mail className="mr-2 h-5 w-5" /> Messages
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 h-5 w-5" /> Grok
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-5 w-5" /> Communities
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Star className="mr-2 h-5 w-5" /> Premium
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <User className="mr-2 h-5 w-5" /> Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <MoreHorizontal className="mr-2 h-5 w-5" /> More
          </Button>
        </nav>

        <Button className="w-full mt-4">Post</Button>

        <div className="mt-4 flex items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Carlos Polanco" />
            <AvatarFallback>CP</AvatarFallback>
          </Avatar>
          <div className="ml-2">
            <p className="text-sm font-semibold">Carlos Polanco</p>
            <p className="text-sm text-gray-500">@carlospdev</p>
          </div>
          <Button variant="ghost" size="sm" className="ml-auto">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 border-r border-gray-200">
        <Tabs defaultValue="for-you" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="for-you" className="flex-1">For you</TabsTrigger>
            <TabsTrigger value="following" className="flex-1">Following</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center mb-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Input placeholder="What is happening?!" className="ml-4 flex-1 border-none text-xl" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm"><Image className="h-5 w-5 text-blue-400" /></Button>
              <Button variant="ghost" size="sm"></Button>
              <Button variant="ghost" size="sm"><ListPlus className="h-5 w-5 text-blue-400" /></Button>
              <Button variant="ghost" size="sm"><Smile className="h-5 w-5 text-blue-400" /></Button>
              <Button variant="ghost" size="sm"><Calendar className="h-5 w-5 text-blue-400" /></Button>
              <Button variant="ghost" size="sm"><MapPin className="h-5 w-5 text-blue-400" /></Button>
            </div>
            <Button className="bg-blue-500 text-white">Post</Button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-start mb-4">
            <Avatar className="h-10 w-10 mr-4">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="kesku" />
              <AvatarFallback>K</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center">
                <p className="font-semibold">kesku</p>
                <svg viewBox="0 0 22 22" className="h-5 w-5 text-blue-400 ml-1">
                  <g><path fill="currentColor" d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g>
                </svg>
                <p className="text-gray-500 ml-1">@yoimnotkesku · 22h</p>
              </div>
              <p>added controller support to nvim</p>
              <p className="text-gray-700">god should have never given me free time</p>
              <img src="/placeholder.svg?height=300&width=500" alt="Code on screen" className="mt-2 rounded-2xl w-full" />
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 p-4">
        <Input
          type="search"
          placeholder="Search"
          className="w-full mb-4"
        
        />

        <Card className="mb-4">
          <CardContent className="p-4">
            <h2 className="font-bold text-xl mb-2">Subscribe to Premium</h2>
            <p className="text-sm mb-4">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
            <Button className="w-full bg-black text-white">Subscribe</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="font-bold text-xl mb-4">What's happening</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">WNBA · 43 minutes ago</p>
                <p className="font-semibold">Fever at Wings</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Trending in United States</p>
                <p className="font-semibold">Highland Falls</p>
                <p className="text-sm text-gray-500">Sports · Trending</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Trending in United States</p>
                <p className="font-semibold">Boone</p>
                <p className="text-sm text-gray-500">3,954 posts</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Politics · Trending</p>
                <p className="font-semibold">Hamas</p>
                <p className="text-sm text-gray-500">807K posts</p>
              </div>
              <Button variant="link" className="text-blue-500 p-0">Show more</Button>
            </div>
          </CardContent>
        </Card>
      </aside>
    </div>
  )
}