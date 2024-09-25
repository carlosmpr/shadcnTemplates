"use client"

import React from 'react'
import { BarChart, Bar } from 'recharts'
import { ChevronDown, Database, Key, HardDrive, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const StatCard = ({ title, icon, requests, count, data }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{count}</div>
      <p className="text-xs text-muted-foreground">{requests}</p>
      <div className="h-[80px] mt-4">
        <BarChart width={270} height={80} data={data}>
          <Bar dataKey="value" fill="#22c55e" />
        </BarChart>
      </div>
    </CardContent>
  </Card>
)

export default function Dashboard() {
  const generateRandomData = (count) => {
    return Array.from({ length: count }, () => ({ value: Math.floor(Math.random() * 50) + 1 }))
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">globodebate</h1>
            <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">NANO</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="text-destructive">
              <span className="w-2 h-2 rounded-full bg-destructive mr-2"></span>
              Security Issues
            </Button>
            <Button variant="outline" className="text-primary">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              Project Status
            </Button>
            <Button>Connect</Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-6">
          <Select defaultValue="24hours">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24hours">24 hours</SelectItem>
              <SelectItem value="7days">7 days</SelectItem>
              <SelectItem value="30days">30 days</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">Statistics for past 24 hours</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Database"
            icon={<Database className="h-4 w-4 text-muted-foreground" />}
            requests="REST Requests"
            count="166"
            data={generateRandomData(24)}
          />
          <StatCard
            title="Auth"
            icon={<Key className="h-4 w-4 text-muted-foreground" />}
            requests="Auth Requests"
            count="1"
            data={generateRandomData(24)}
          />
          <StatCard
            title="Storage"
            icon={<HardDrive className="h-4 w-4 text-muted-foreground" />}
            requests="Storage Requests"
            count="70"
            data={generateRandomData(24)}
          />
          <StatCard
            title="Realtime"
            icon={<Zap className="h-4 w-4 text-muted-foreground" />}
            requests="Realtime Requests"
            count="0"
            data={generateRandomData(24)}
          />
        </div>
        <h2 className="text-xl font-semibold mt-8 mb-4">Client libraries</h2>
      </main>
    </div>
  )
}