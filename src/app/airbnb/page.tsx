import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Globe, Menu, User, Heart, Star } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: "Cozy Cabin in the Woods",
    location: "Portland, Oregon",
    price: 120,
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Beachfront Paradise",
    location: "Maui, Hawaii",
    price: 350,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "City Center Loft",
    location: "New York City, New York",
    price: 200,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Mountain View Chalet",
    location: "Aspen, Colorado",
    price: 280,
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function AirbnbClone() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-rose-500 text-2xl font-bold">airbnb</div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Become a Host</Button>
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Menu className="h-5 w-5" />
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search destinations"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-white hover:text-rose-500"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{property.title}</h3>
                    <p className="text-sm text-gray-500">{property.location}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm">{property.rating}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-4 py-3 border-t">
                <p className="text-lg font-semibold">${property.price} <span className="text-sm font-normal">/ night</span></p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}