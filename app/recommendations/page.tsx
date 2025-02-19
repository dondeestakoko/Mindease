"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Simulons des données récentes de l'utilisateur
const userLatestData = {
  stress: 8,
  anxiety: 7,
  sleep: 4,
  workHours: 10,
  workloadSatisfaction: 3,
  supervisorSupport: 4,
  workLifeBalance: 3,
}

const getRecommendations = (data) => {
  const recommendations = []

  if (data.stress > 7 || data.anxiety > 7) {
    recommendations.push({
      title: "Exercice de respiration",
      description: "Respirez profondément pendant 5 minutes en suivant le rythme 4-7-8",
      action: "Commencer",
      type: "relaxation",
    })
  }

  if (data.sleep < 5) {
    recommendations.push({
      title: "Améliorer votre sommeil",
      description: "Essayez d'établir une routine de sommeil régulière et évitez les écrans avant le coucher",
      action: "En savoir plus",
      type: "sleep",
    })
  }

  if (data.workHours > 8) {
    recommendations.push({
      title: "Pause active",
      description: "Faites une courte marche de 10 minutes pour vous aérer l'esprit",
      action: "Rappel dans 1h",
      type: "break",
    })
  }

  if (data.workloadSatisfaction < 5) {
    recommendations.push({
      title: "Gestion du temps",
      description:
        "Apprenez des techniques de priorisation et de gestion du temps pour mieux gérer votre charge de travail",
      action: "Voir les astuces",
      type: "productivity",
    })
  }

  if (data.supervisorSupport < 5) {
    recommendations.push({
      title: "Communication avec votre superviseur",
      description: "Préparez une discussion constructive avec votre superviseur pour exprimer vos besoins",
      action: "Préparer la discussion",
      type: "communication",
    })
  }

  if (data.workLifeBalance < 5) {
    recommendations.push({
      title: "Équilibre travail-vie personnelle",
      description: "Apprenez à établir des limites claires entre votre travail et votre vie personnelle",
      action: "Lire les conseils",
      type: "balance",
    })
  }

  if (recommendations.length === 0) {
    recommendations.push({
      title: "Continuez comme ça !",
      description: "Vos indicateurs sont bons. Continuez à prendre soin de vous et à maintenir vos bonnes habitudes.",
      action: "Voir plus de conseils",
      type: "general",
    })
  }

  return recommendations
}

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    // Dans une vraie application, vous récupéreriez ces données depuis une API ou un état global
    const userRecommendations = getRecommendations(userLatestData)
    setRecommendations(userRecommendations)
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Recommandations personnalisées</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((rec, index) => (
          <Card key={index} className={`${getCardColor(rec.type)}`}>
            <CardHeader>
              <CardTitle>{rec.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{rec.description}</CardDescription>
              <Button variant="secondary">{rec.action}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function getCardColor(type) {
  switch (type) {
    case "relaxation":
      return "bg-blue-50"
    case "sleep":
      return "bg-indigo-50"
    case "break":
      return "bg-green-50"
    case "productivity":
      return "bg-yellow-50"
    case "communication":
      return "bg-purple-50"
    case "balance":
      return "bg-pink-50"
    default:
      return "bg-gray-50"
  }
}

