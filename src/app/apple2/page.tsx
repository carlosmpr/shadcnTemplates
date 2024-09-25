import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div>
      <header className="bg-white border-b border-gray-200">
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

      <main>
        <section className="bg-blue-600 text-white p-16 ">
          <div className="container mx-auto px-4">
            <div className="bg-blue-500 rounded-lg p-8 relative overflow-hidden">
              <div className="absolute right-4 top-4">
                <ArrowRight className="h-6 w-6" />
                <ArrowRight className="h-6 w-6 rotate-90" />
              </div>
              <h1 className="text-6xl font-bold mb-4">Hello</h1>
              <p className="text-xl">
                Learn how to design great apps and games that integrate seamlessly with Apple platforms.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-center mb-4">
              Want the highlights? <a href="#" className="text-blue-600 hover:underline">Download the design one-sheet</a> <Download className="inline-block h-4 w-4" />
            </p>

            <h2 className="text-3xl font-bold mb-8">Human Interface Guidelines</h2>
            <p className="mb-8">Get in-depth information and UI resources for designing great apps that integrate seamlessly with Apple platforms. The HIG offers guidance and resources for designing exceptional user experiences across all Apple platforms.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-green-400 text-white">
                <CardContent className="p-6">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Designing for games</h3>
                  <p>June 5, 2023</p>
                </CardContent>
              </Card>
              <Card className="bg-orange-400 text-white">
                <CardContent className="p-6">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Controls</h3>
                  <p>June 5, 2023</p>
                </CardContent>
              </Card>
              <Card className="bg-yellow-400 text-white">
                <CardContent className="p-6">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
                  </svg>
                  <h3 className="text-xl font-bold mb-2">App icons</h3>
                  <p>June 5, 2023</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Design sessions</h2>
            <p className="mb-8 text-blue-600">
              Learn about designing great app and game experiences from Apple experts <ArrowRight className="inline-block h-4 w-4" />
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-0">
                  <img src="/placeholder.svg?height=200&width=400" alt="Design great visionOS apps" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Design great visionOS apps</h3>
                    <p>Discover how to create truly extraordinary spatial experiences for visionOS. We'll explore key design principles that can help you reimagine your app for this exciting new platform.</p>
                    <p className="text-sm text-gray-500 mt-2">23 minutes</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <img src="/placeholder.svg?height=200&width=400" alt="Add personality to your app through UI writing" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Add personality to your app through UI writing</h3>
                    <p>Discover how great UI writing can help your app stand out. We'll explore how you can use language to express your app's unique personality and brand voice.</p>
                    <p className="text-sm text-gray-500 mt-2">10 minutes</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Design news</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-0">
                  <img src="/placeholder.svg?height=200&width=400" alt="Creating the make-believe magic of Lost in Play" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Creating the make-believe magic of Lost in Play</h3>
                    <p>Behind the scenes of Snapbreak's whimsical point-and-click adventure game.</p>
                    <p className="text-sm text-gray-500 mt-2">January 9, 2024</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <img src="/placeholder.svg?height=200&width=400" alt="The Apple Design Awards recognize creativity, ingenuity, and technical achievement in app and game design." className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">The Apple Design Awards recognize creativity, ingenuity, and technical achievement in app and game design.</h3>
                    <p className="text-sm text-gray-500 mt-2">June 5, 2023</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <img src="/placeholder.svg?height=200&width=400" alt="How Gentler Streak approaches fitness with " className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">How Gentler Streak approaches fitness with "heartwork"</h3>
                    <p className="text-sm text-gray-500 mt-2">July 5, 2023</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Apple Design Resources</h2>
            <p className="mb-8">
              Design apps quickly and accurately by using Sketch, Photoshop, and XD templates, guides, and other resources.
            </p>
            <Button variant="link" className="text-blue-600">
              View Apple Design Resources <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="mt-8">
              <img src="/placeholder.svg?height=300&width=800" alt="Apple Design Resources" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
