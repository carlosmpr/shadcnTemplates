import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, ChevronDown, Github, Sun } from 'lucide-react'

export default function TailwindDocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.114 2.134 4.593 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/>
            </svg>
            <span className="text-xl font-semibold">tailwindcss</span>
            <Button variant="ghost" className="text-gray-500">
              v3.4.10
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="ghost" className="text-blue-500">
              Introducing Catalyst • A modern application UI kit for React
            </Button>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Docs</Button>
            <Button variant="ghost">Components</Button>
            <Button variant="ghost">Blog</Button>
            <Button variant="ghost">Showcase</Button>
            <Button variant="ghost" size="icon">
              <Sun className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex">
        <aside className="w-64 pr-8">
          <div className="mb-4">
            <Input
              type="search"
              placeholder="Quick search..."
              className="w-full"
              startIcon={<Search className="h-4 w-4 text-gray-400" />}
            />
          </div>
          <nav>
            <h3 className="font-semibold mb-2">Getting Started</h3>
            <ul className="space-y-2 mb-4">
              {['Installation', 'Editor Setup', 'Using with Preprocessors', 'Optimizing for Production', 'Browser Support', 'Upgrade Guide'].map((item) => (
                <li key={item}>
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold mb-2">Core Concepts</h3>
            <ul className="space-y-2">
              {['Utility-First Fundamentals', 'Hover, Focus, and Other States', 'Responsive Design', 'Dark Mode', 'Reusing Styles', 'Adding Custom Styles', 'Functions & Directives'].map((item) => (
                <li key={item}>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start ${item === 'Reusing Styles' ? 'text-blue-500 bg-blue-50' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="flex-1">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold text-blue-500 mb-2">Core Concepts</h2>
            <h1 className="text-3xl font-bold mb-4">Reusing Styles</h1>
            <p className="text-xl text-gray-600 mb-8">
              Managing duplication and creating reusable abstractions.
            </p>
            <p className="mb-4">
              Tailwind encourages a <strong>utility-first</strong> workflow, where designs are implemented using
              only low-level utility classes. This is a powerful way to avoid premature abstraction
              and the pain points that come with it.
            </p>
            <p className="mb-4">
              But of course as a project grows, you'll inevitably find yourself repeating common
              utility combinations to recreate the same design in many different places.
            </p>
            <p className="mb-4">
              For example, in the template below you can see the utility classes for each avatar
              image are repeated five separate times:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold mb-2">Contributors</h3>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Avatar key={i} className="border-2 border-white">
                    <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${i}`} />
                    <AvatarFallback>{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <p className="text-sm text-blue-500 mt-2">+ 198 others</p>
            </div>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
              <pre><code>{`<div>
  {/* Avatar code here */}
</div>`}</code></pre>
            </div>
          </div>
        </div>

        <aside className="w-64 pl-8">
          <h3 className="font-semibold mb-4">On this page</h3>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-500 hover:underline">Using editor and language features</a>
                <ul className="ml-4 mt-2 space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Multi-cursor editing</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Loops</a></li>
                </ul>
              </li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Extracting components and partials</a></li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Extracting classes with @apply</a>
                <ul className="ml-4 mt-2 space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Avoiding premature abstraction</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>
      </main>
    </div>
  )
}