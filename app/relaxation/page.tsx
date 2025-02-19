export default function Relaxation() {
  const tips = [
    "Pratiquez la respiration profonde pendant 5 minutes",
    "Faites une courte marche de 10 minutes",
    "Écoutez votre musique préférée",
    "Faites des étirements doux",
    "Pratiquez la méditation de pleine conscience",
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Conseils de Relaxation</h1>
      <ul className="space-y-4">
        {tips.map((tip, index) => (
          <li key={index} className="bg-blue-50 p-4 rounded-lg">
            {tip}
          </li>
        ))}
      </ul>
    </div>
  )
}

