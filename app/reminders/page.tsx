"use client"

import { useState } from "react"

export default function Reminders() {
  const [reminderInterval, setReminderInterval] = useState(60)

  const handleSetReminder = () => {
    // Ici, vous implémenteriez la logique pour définir un rappel
    // Par exemple, en utilisant l'API de notifications du navigateur
    alert(`Rappel configuré pour toutes les ${reminderInterval} minutes`)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Rappels de Pauses</h1>
      <div className="space-y-4">
        <p>Configurez des rappels pour prendre des pauses régulières.</p>
        <div>
          <label htmlFor="interval" className="block mb-2">
            Intervalle (en minutes):
          </label>
          <input
            type="number"
            id="interval"
            value={reminderInterval}
            onChange={(e) => setReminderInterval(Number(e.target.value))}
            className="border rounded p-2 w-full max-w-xs"
          />
        </div>
        <button onClick={handleSetReminder} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Configurer le rappel
        </button>
      </div>
    </div>
  )
}

