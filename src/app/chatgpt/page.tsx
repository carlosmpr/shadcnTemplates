"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, Edit, MoreHorizontal, PlusCircle } from 'lucide-react'

const NavItem = ({ icon, label }) => (
  <div className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
    {icon}
    <span>{label}</span>
  </div>
)

const ActionCard = ({ icon, title }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
    <div className="text-2xl mb-2">{icon}</div>
    <h3 className="text-sm font-medium">{title}</h3>
  </div>
)

export default function ChatGPTPage() {
  const [message, setMessage] = useState('')

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 flex items-center justify-between">
          <Button variant="outline" className="w-full justify-start">
            ChatGPT 4o
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="flex-grow">
          <div className="p-2 space-y-2">
            <NavItem icon={<span className="text-xl">🧠</span>} label="ChatGPT" />
            <NavItem icon={<span className="text-xl">📊</span>} label="Periodismo de Datos" />
            <NavItem icon={<span className="text-xl">📰</span>} label="Síntesis de Noticias" />
            <NavItem icon={<span className="text-xl">🎬</span>} label="Episode Planner" />
            <NavItem icon={<span className="text-xl">📝</span>} label="Script Navigator" />
          </div>
          <Separator className="my-2" />
          <div className="p-2">
            <NavItem icon={<MoreHorizontal className="h-4 w-4" />} label="9 más" />
            <NavItem icon={<span className="text-xl">🔍</span>} label="Explorar GPT" />
          </div>
          <Separator className="my-2" />
          <div className="p-2 space-y-2">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase">Hoy</h3>
            <NavItem icon={<span className="text-xl">📌</span>} label="Titulares de noticias" />
          </div>
          <div className="p-2 space-y-2">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase">Ayer</h3>
            <NavItem icon={<span className="text-xl">📘</span>} label="Friendly TailwindCSS Guide" />
            <NavItem icon={<span className="text-xl">📜</span>} label="Constitución y Referendo Domini..." />
          </div>
          <div className="p-2 space-y-2">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase">7 días anteriores</h3>
            <NavItem icon={<PlusCircle className="h-4 w-4" />} label="Añadir un área de trabajo de Team" />
            <p className="px-3 text-xs text-gray-500">Colabora en un plan Team</p>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="p-4 flex justify-end">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
            C
          </div>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="mb-8">
            <svg viewBox="0 0 32 32" className="w-12 h-12 text-gray-800">
              <path fill="currentColor" d="M29.7 14.4C29.7 9 25.3 4.6 20 4.6c-3.5 0-6.7 2-8.3 5.2c-2.4-1.3-5.4-1-7.6 0.8c-2.2 1.8-3.4 4.7-3 7.6c0.3 2.9 2.2 5.5 4.9 6.6C9.4 27.4 14.4 29 19.5 29c7.4 0 13.5-6 13.5-13.5c0-0.4 0-0.8-0.1-1.1H29.7z"/>
            </svg>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl w-full">
            <ActionCard icon="🎓" title="Examen de civilizaciones antiguas" />
            <ActionCard icon="💡" title="Reciclaje de dibujos de los niños" />
            <ActionCard icon="📅" title="Planifica un día de relax" />
            <ActionCard icon="🏛️" title="Curiosidad sobre el Imperio romano" />
          </div>
        </main>
        <footer className="p-4 border-t border-gray-200">
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="Envía un mensaje a ChatGPT"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="pr-10"
            />
            <Button 
              size="icon"
              variant="ghost" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                <path d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            ChatGPT puede cometer errores. Considera verificar la información importante.
          </p>
        </footer>
      </div>
    </div>
  )
}