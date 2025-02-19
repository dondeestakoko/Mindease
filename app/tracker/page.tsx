"use client"

import type React from "react"

import { useState } from "react"

export default function StressTracker() {
  const [stressLevel, setStressLevel] = useState(5)

  const handleStressLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStressLevel(Number(e.target.value))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous implémenteriez la logique pour enregistrer le niveau de stress
    // Par exemple, en l'envoyant à une API ou en le stockant localement
    alert(`Niveau de stress enregistré : ${stressLevel}`)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Suivi du Stress</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="stressLevel" className="block mb-2">
            Votre niveau de stress aujourd'hui (1-10) :
          </label>
          <input
            type="range"
            id="stressLevel"
            min="1"
            max="10"
            value={stressLevel}
            onChange={handleStressLevelChange}
            className="w-full"
          />
          <p className="text-center mt-2">{stressLevel}</p>
        </div>
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Enregistrer
        </button>
      </form>
    </div>
  )
}

