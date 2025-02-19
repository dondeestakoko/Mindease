"use client"

import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  {
    date: "19/02",
    stress: 7,
    anxiety: 5,
    sleep: 6,
    workHours: 6,
    workloadSatisfaction: 6,
    supervisorSupport: 7,
    workLifeBalance: 5,
  },
  {
    date: "20/02",
    stress: 6,
    anxiety: 4,
    sleep: 7,
    workHours: 8,
    workloadSatisfaction: 5,
    supervisorSupport: 6,
    workLifeBalance: 6,
  },
  {
    date: "21/02",
    stress: 8,
    anxiety: 6,
    sleep: 5,
    workHours: 9,
    workloadSatisfaction: 4,
    supervisorSupport: 5,
    workLifeBalance: 4,
  },
  {
    date: "22/02",
    stress: 5,
    anxiety: 3,
    sleep: 8,
    workHours: 7,
    workloadSatisfaction: 7,
    supervisorSupport: 8,
    workLifeBalance: 7,
  },
  {
    date: "23/02",
    stress: 7,
    anxiety: 5,
    sleep: 6,
    workHours: 8,
    workloadSatisfaction: 5,
    supervisorSupport: 6,
    workLifeBalance: 5,
  },
  {
    date: "24/02",
    stress: 6,
    anxiety: 4,
    sleep: 7,
    workHours: 6,
    workloadSatisfaction: 6,
    supervisorSupport: 7,
    workLifeBalance: 6,
  },
  {
    date: "25/02",
    stress: 9,
    anxiety: 7,
    sleep: 4,
    workHours: 10,
    workloadSatisfaction: 3,
    supervisorSupport: 4,
    workLifeBalance: 3,
  },
]

const metrics = [
  { key: "stress", name: "Stress", color: "#8884d8" },
  { key: "anxiety", name: "Anxiété", color: "#82ca9d" },
  { key: "sleep", name: "Sommeil", color: "#ffc658" },
  { key: "workHours", name: "Heures travaillées", color: "#ff7300" },
  { key: "workloadSatisfaction", name: "Satisfaction charge de travail", color: "#0088fe" },
  { key: "supervisorSupport", name: "Soutien du superviseur", color: "#00C49F" },
  { key: "workLifeBalance", name: "Équilibre travail-vie", color: "#FFBB28" },
]

export default function Trends() {
  const [selectedMetrics, setSelectedMetrics] = useState(["stress", "anxiety", "sleep"])

  const averages = metrics.reduce((acc, metric) => {
    acc[metric.key] = (data.reduce((sum, day) => sum + day[metric.key], 0) / data.length).toFixed(1)
    return acc
  }, {})

  const handleMetricChange = (value: string) => {
    setSelectedMetrics(value.split(","))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Tendances</h1>
      <div className="mb-4">
        <Select onValueChange={handleMetricChange} value={selectedMetrics.join(",")} multiple>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez les métriques à afficher" />
          </SelectTrigger>
          <SelectContent>
            {metrics.map((metric) => (
              <SelectItem key={metric.key} value={metric.key}>
                {metric.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mb-8">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            {selectedMetrics.map((metricKey) => {
              const metric = metrics.find((m) => m.key === metricKey)
              return (
                <Line key={metric.key} type="monotone" dataKey={metric.key} stroke={metric.color} name={metric.name} />
              )
            })}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.key}>
            <CardHeader>
              <CardTitle className="text-lg">{metric.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold" style={{ color: metric.color }}>
                {averages[metric.key]}
              </p>
              <CardDescription>Moyenne sur 7 jours</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

