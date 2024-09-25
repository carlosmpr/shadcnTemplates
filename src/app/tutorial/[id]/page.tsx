import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Github, MessageSquare, Youtube, ChevronDown } from 'lucide-react'

const chapters = [
  "Introduction",
  "Architecture",
  "Build",
  "Review",
  "Test",
  "Document",
  "Distribute",
  "Workflow",
  "Conclusion"
]

export default function IntroductionChapter() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Design Systems for Developers
            </Button>
            <span className="text-gray-400">|</span>
            <span className="font-medium">React</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-blue-500">
              English
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
            <span className="text-gray-400">Get support:</span>
            <Github className="h-5 w-5 text-gray-600" />
            <MessageSquare className="h-5 w-5 text-gray-600" />
            <Youtube className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex">
        <aside className="w-1/4 pr-8">
          <h2 className="text-sm font-semibold text-gray-400 mb-4">CHAPTERS</h2>
          <nav>
            <ul className="space-y-2">
              {chapters.map((chapter, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      index === 0 ? 'text-blue-500 bg-blue-50' : 'text-gray-600'
                    }`}
                  >
                    {chapter}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="w-3/4">
          <h1 className="text-4xl font-bold mb-4">Introduction to design systems</h1>
          <p className="text-xl text-gray-600 mb-8">
            A guide to the latest production-ready tools for design systems
          </p>

          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <p className="text-blue-700">
                This community translation has not been updated to the latest version of Storybook yet. Help us update it
                by applying the changes in the English guide to this translation. Pull requests are welcome.
              </p>
            </CardContent>
          </Card>

          <p className="mb-4">
            This guide is made for <strong>professional developers</strong> learning how to build design systems. Intermediate
            experience in JavaScript, Git, and continuous integration is recommended. You should also know
            Storybook basics, such as writing a story and editing config files (<a href="#" className="text-blue-500 hover:underline">Intro to Storybook</a> teaches basics).
          </p>

          <p className="mb-4">
            Design systems are exploding in popularity. From tech heavyweights like Airbnb to nimble startups,
            organizations of every shape are reusing UI patterns to save time and money. But there's a chasm between the
            design systems created by BBC, Airbnb, IBM, or Microsoft and the design systems created by most developers.
          </p>

          <p className="mb-4">
            Why do leading design systems teams use the tools and techniques they use? My co-author Tom and I
            researched the traits of successful design systems from the Storybook community to identify best practices.
          </p>

          <p className="mb-4">
            This step-by-step guide reveals the automated tooling and careful workflows used in scaled production design
            systems. We'll walk through assembling a design system from existing component libraries, then set up core
            services, libraries, and workflows.
          </p>
        </div>
      </main>
    </div>
  )
}