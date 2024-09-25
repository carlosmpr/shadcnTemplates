import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link2, Palette, FileText } from 'lucide-react'

export default function StorybookTutorialContent() {
  return (
    <div className="container mx-auto p-16">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="mb-6 text-gray-600">
            Design systems power the frontend teams of Shopify, IBM, Salesforce, Airbnb, Twitter, and many more. This guide for professional developers examines how the smartest teams engineer design systems at scale and why they use the tools they use. We'll walk through setting up core services, libraries, and workflows to develop a design system from scratch.
          </p>

          <h3 className="text-lg font-semibold mb-4 text-gray-400">TABLE OF CONTENTS</h3>
          <div className="space-y-4">
            {[
              { number: 1, title: "Introduction", description: "A guide to the latest production-ready tools for design systems" },
              { number: 2, title: "Architecture", description: "How to extract a design system from component libraries" },
              { number: 3, title: "Build", description: "Set up Storybook to build and catalog design system components" },
              { number: 4, title: "Review", description: "Collaborate with continuous integration and visual review" },
              { number: 5, title: "Test", description: "How to test design system appearance, functionality, and accessibility" },
              { number: 6, title: "Document", description: "Drive design system adoption with documentation" },
              { number: 7, title: "Distribute", description: "Learn to package and import your design system into other apps" },
              { number: 8, title: "Workflow", description: "An overview of the design system workflow for frontend developers" }
            ].map((item) => (
              <Card key={item.number} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex">
                    <span className="font-bold text-gray-300 mr-4">{item.number}</span>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">What you'll build</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {['React', 'Emotion', 'Prettier', 'GitHub Actions', 'ESLint', 'Chromatic', 'Rollup', 'npm', 'Auto'].map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-600">
                {tech}
              </Badge>
            ))}
          </div>

          <Card className="mb-6 bg-yellow-100 border-none">
            <CardContent className="p-6">
              <div className="relative">
                <img src="/placeholder.svg?height=200&width=300" alt="Design System" className="w-2/3 mx-auto mb-4 rounded-lg shadow-lg" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex justify-between w-full">
                  <img src="/placeholder.svg?height=50&width=50" alt="Web app" className="w-16 h-16 rounded-lg shadow-md" />
                  <img src="/placeholder.svg?height=50&width=50" alt="Marketing site" className="w-16 h-16 rounded-lg shadow-md" />
                  <img src="/placeholder.svg?height=50&width=50" alt="Docs site" className="w-16 h-16 rounded-lg shadow-md" />
                </div>
              </div>
              <div className="flex justify-between mt-8 text-xs text-gray-600">
                <span>Web app</span>
                <span>Marketing site</span>
                <span>Docs site</span>
              </div>
            </CardContent>
          </Card>

          <p className="mb-4">
            Follow along as we code a design system that's inspired by <a href="#" className="text-blue-500 hover:underline">Storybook's own</a>. We'll learn the developer perspective on design systems by examining three technical pieces of a design system.
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <Link2 className="mr-2 h-5 w-5 text-gray-400" />
              <span>Common reusable UI components</span>
            </li>
            <li className="flex items-center">
              <Palette className="mr-2 h-5 w-5 text-gray-400" />
              <span>Design tokens: Styling-specific variables such as brand colors and spacing</span>
            </li>
            <li className="flex items-center">
              <FileText className="mr-2 h-5 w-5 text-gray-400" />
              <span>Documentation site: Usage instructions, narrative, do's and don'ts</span>
            </li>
          </ul>

          <p className="mb-6">
            After that, we'll set up the industrial-grade infrastructure for review, testing, documentation, and distribution.
          </p>

          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-400">AUTHORS</h3>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dominic Nguyen" />
                  <AvatarFallback>DN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Dominic Nguyen</p>
                  <p className="text-sm text-gray-500">Storybook design</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Tom Coleman" />
                  <AvatarFallback>TC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Tom Coleman</p>
                  <p className="text-sm text-gray-500">Storybook core</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-400">REVIEWED BY</h3>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Fernando Carrettoni" />
                  <AvatarFallback>FC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Fernando Carrettoni</p>
                  <p className="text-sm text-gray-500">Design Systems at Auth0</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jessie Wu" />
                  <AvatarFallback>JW</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Jessie Wu</p>
                  <p className="text-sm text-gray-500">Engineer at New York Times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}