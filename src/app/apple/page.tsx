import React from 'react'
import { Button } from "@/components/ui/button"

export default function LostInPlayArticle() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-semibold">Developer</div>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost">News</Button>
            <Button variant="ghost">Discover</Button>
            <Button variant="ghost">Design</Button>
            <Button variant="ghost">Develop</Button>
            <Button variant="ghost">Distribute</Button>
            <Button variant="ghost">Support</Button>
            <Button variant="ghost">Account</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <article>
          <h1 className="text-4xl font-bold mb-4">Behind the Design: Lost in Play</h1>
          <p className="text-gray-500 mb-6">January 9, 2024</p>

          <img 
            src="/placeholder.svg?height=400&width=800" 
            alt="Lost in Play characters" 
            className="w-full rounded-lg mb-6"
          />

          <p className="mb-4">
            Lost in Play is a point-and-click puzzle adventure game from the indie developer Snapbreak. 
            The game follows a brother and sister as they journey through whimsical worlds filled with 
            charming characters, magical creatures, and mind-bending puzzles.
          </p>

          <p className="mb-4">
            We spoke with Snapbreak's lead artist and creative director Alon Gabel about the studio's 
            creative process, building their art direction from the ground up, and how they used 
            Apple technologies to bring their vision to life.
          </p>

          <img 
            src="/placeholder.svg?height=400&width=800" 
            alt="Lost in Play scene" 
            className="w-full rounded-lg my-6"
          />

          <h2 className="text-2xl font-bold mb-4">Lost in Play</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Developer:</strong> Snapbreak</li>
            <li><strong>Team:</strong> Alon Gabel, Yuval Markovich, Nir Mironi</li>
            <li><strong>Available on:</strong> iPhone, iPad</li>
            <li><strong>Standout feature:</strong> Handcrafted art style</li>
            <li><strong>Previous accolades:</strong> App Store Best of Year 2022</li>
          </ul>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-6">
            "Lost in Play is the kind of magic that happens when a small team pours their heart and soul into a project."
          </blockquote>

          <p className="mb-4">
            Lost in Play is the brainchild of Snapbreak, which Gabel, a small Israel-based team whose three 
            members had previously worked together on escape room games. "After years of making 
            realistic-looking hidden object and room escape games, I really wanted to do something different," 
            says Gabel. "I love cartoons, and I wanted to make a game that looks like a cartoon — to create a 
            world that ignites the imagination, and allows us to be kids."
          </p>

          <img 
            src="/placeholder.svg?height=400&width=800" 
            alt="Lost in Play concept art" 
            className="w-full rounded-lg my-6"
          />

          <p className="mb-4">
            The team's dedication to their craft is apparent in every frame of the game. "We put a lot of 
            effort into making everything perfect," Gabel says. "Every animation, every background. We 
            really wanted to make it special."
          </p>

          <img 
            src="/placeholder.svg?height=200&width=800" 
            alt="Lost in Play character designs" 
            className="w-full rounded-lg my-6"
          />

          <p className="mb-4">
            This attention to detail extends to the game's sound design as well. "We worked with a 
            composer to create a unique score, and we really love it," Gabel enthuses. "The story becomes a 
            kind of silent movie, and the music tells the story."
          </p>

          <img 
            src="/placeholder.svg?height=400&width=800" 
            alt="Lost in Play underwater scene" 
            className="w-full rounded-lg my-6"
          />

          <p className="mb-4">
            For the team, the hardest part was creating an experience that felt truly magical. "We wanted 
            to make something that would surprise people," Gabel says. "Something where you don't know 
            what's going to happen next."
          </p>
        </article>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Platforms</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-sm text-gray-600 hover:underline">iOS</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:underline">iPadOS</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:underline">macOS</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:underline">tvOS</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:underline">watchOS</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tools</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-sm text-gray-600 hover:underline">Xcode</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:underline">SwiftUI</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:underline">Swift</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:underline">TestFlight</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-sm text-gray-600 hover:underline">Documentation</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:underline">Videos</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:underline">Downloads</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-sm text-gray-600 hover:underline">Articles</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:underline">Developer Forums</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:underline">Feedback</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Account</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-sm text-gray-600 hover:underline">Certificates</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:underline">Identifiers</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:underline">Profiles</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}