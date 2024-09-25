import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  Github,
  Search,
  MessageSquare,
  Youtube,
} from "lucide-react";
import StorybookTutorialContent from "./(components)/Part2";

export default function StorybookClone() {
  return (
    <>
      <div className="min-h-screen bg-blue-600 text-white p-16">
        <header className="border-b border-blue-500">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="text-2xl font-bold flex items-center">
                  <span className="bg-pink-500 text-white p-1 rounded mr-2">
                    S
                  </span>
                  Storybook
                </div>
                <a href="#" className="hover:text-blue-200">
                  Docs
                </a>
                <a href="#" className="hover:text-blue-200">
                  Addons
                </a>
                <a href="#" className="hover:text-blue-200">
                  Showcase
                </a>
                <a href="#" className="hover:text-blue-200">
                  Blog
                </a>
                <a href="#" className="hover:text-blue-200">
                  Visual Test ↗
                </a>
                <a href="#" className="hover:text-blue-200">
                  Enterprise ↗
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-blue-700 rounded-full px-3 py-1">
                  <Github className="h-5 w-5 mr-2" />
                  <span>83,547</span>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 h-5 w-5" />
                  <Input
                    type="search"
                    placeholder="Search docs"
                    className="pl-10 pr-4 py-2 bg-blue-700 text-white placeholder-blue-300 border-blue-500 rounded-full w-64"
                  />
                </div>
              </div>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <div className="flex items-center mb-8">
            <ArrowLeft className="h-6 w-6 mr-2" />
            <span>Back to tutorials</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <h1 className="text-6xl font-bold mb-6">
                Design Systems for Developers
              </h1>
              <p className="text-xl mb-8">
                A guide that teaches professional developers how to transform
                component libraries into design systems and set up the
                production infrastructure used by leading frontend teams.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-100 mb-6">
                Get started
              </Button>
              <p className="mb-6">
                Languages: 日本語, English, 한국어, Português, 简体中文
              </p>
              <div className="flex space-x-8">
                <div>
                  <span className="text-4xl font-bold">38+</span>
                  <p>Contributors</p>
                </div>
                <div>
                  <span className="text-4xl font-bold">9</span>
                  <p>Chapters</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                <rect
                  x="50"
                  y="50"
                  width="100"
                  height="100"
                  fill="white"
                  opacity="0.1"
                />
                <rect
                  x="250"
                  y="50"
                  width="100"
                  height="100"
                  fill="white"
                  opacity="0.1"
                />
                <rect
                  x="50"
                  y="200"
                  width="300"
                  height="50"
                  fill="white"
                  opacity="0.1"
                />
                <path
                  d="M100 100 L200 100 L150 50 Z"
                  fill="white"
                  opacity="0.2"
                />
                <circle cx="300" cy="100" r="40" fill="white" opacity="0.2" />
                <line
                  x1="50"
                  y1="225"
                  x2="350"
                  y2="225"
                  stroke="white"
                  strokeWidth="2"
                  opacity="0.3"
                />
                <line
                  x1="50"
                  y1="240"
                  x2="250"
                  y2="240"
                  stroke="white"
                  strokeWidth="2"
                  opacity="0.3"
                />
                <circle cx="300" cy="235" r="10" fill="white" opacity="0.3" />
                <text
                  x="70"
                  y="150"
                  fontSize="120"
                  fontWeight="bold"
                  fill="white"
                  opacity="0.2"
                >
                  Aa
                </text>
              </svg>
            </div>
          </div>
        </main>
      </div>
      <StorybookTutorialContent />
      <footer className="absolute bottom-4 right-4">
        <div className="flex items-center space-x-4">
          <span>Get support:</span>
          <Github className="h-6 w-6" />
          <MessageSquare className="h-6 w-6" />
          <Youtube className="h-6 w-6" />
        </div>
      </footer>
    </>
  );
}
