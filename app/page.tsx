"use client";
import type React from "react";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [stress, setStress] = useState(5);
  const [anxiety, setAnxiety] = useState(5);
  const [sleep, setSleep] = useState(5);
  const [workHours, setWorkHours] = useState("");
  const [workEnvironment, setWorkEnvironment] = useState("");
  const [workloadSatisfaction, setWorkloadSatisfaction] = useState(5);
  const [supervisorSupport, setSupervisorSupport] = useState(5);
  const [workLifeBalance, setWorkLifeBalance] = useState(5);
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to save the data
    console.log({
      stress,
      anxiety,
      sleep,
      workHours,
      workEnvironment,
      workloadSatisfaction,
      supervisorSupport,
      workLifeBalance,
      notes,
    });
    alert("Données enregistrées avec succès!");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Comment allez-vous aujourd'hui ?</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Stress */}
        <div>
          <Label className="block mb-2">Niveau de stress</Label>
          <Slider value={[stress]} onValueChange={(value) => setStress(value[0])} max={10} step={1} />
        </div>

        {/* Anxiety */}
        <div>
          <Label className="block mb-2">Niveau d'anxiété</Label>
          <Slider value={[anxiety]} onValueChange={(value) => setAnxiety(value[0])} max={10} step={1} />
        </div>

        {/* Sleep Quality */}
        <div>
          <Label className="block mb-2">Qualité du sommeil</Label>
          <Slider value={[sleep]} onValueChange={(value) => setSleep(value[0])} max={10} step={1} />
        </div>

        {/* Work Hours */}
        <div>
          <Label htmlFor="workHours">Nombre d'heures travaillées aujourd'hui</Label>
          <Input
            id="workHours"
            type="number"
            value={workHours}
            onChange={(e) => setWorkHours(e.target.value)}
            placeholder="Ex: 8"
          />
        </div>

        {/* Work Environment */}
        <div>
          <Label htmlFor="workEnvironment">Environnement de travail</Label>
          <Select onValueChange={setWorkEnvironment}>
            <SelectTrigger id="workEnvironment">
              <SelectValue placeholder="Sélectionnez votre environnement de travail" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bureau">Bureau</SelectItem>
              <SelectItem value="domicile">Domicile</SelectItem>
              <SelectItem value="hybride">Hybride</SelectItem>
              <SelectItem value="terrain">Sur le terrain</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Workload Satisfaction */}
        <div>
          <Label className="block mb-2">Satisfaction par rapport à la charge de travail</Label>
          <Slider
            value={[workloadSatisfaction]}
            onValueChange={(value) => setWorkloadSatisfaction(value[0])}
            max={10}
            step={1}
          />
        </div>

        {/* Supervisor Support */}
        <div>
          <Label className="block mb-2">Soutien de votre superviseur/manager</Label>
          <Slider
            value={[supervisorSupport]}
            onValueChange={(value) => setSupervisorSupport(value[0])}
            max={10}
            step={1}
          />
        </div>

        {/* Work-Life Balance */}
        <div>
          <Label className="block mb-2">Équilibre travail-vie personnelle</Label>
          <Slider value={[workLifeBalance]} onValueChange={(value) => setWorkLifeBalance(value[0])} max={10} step={1} />
        </div>

        {/* Notes */}
        <div>
          <Label htmlFor="notes" className="block mb-2">
            Notes (optionnel)
          </Label>
          <Textarea
            id="notes"
            placeholder="Comment vous sentez-vous ? Qu'est-ce qui influence votre humeur aujourd'hui ? Y a-t-il des aspects spécifiques de votre travail qui vous préoccupent ?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Enregistrer
        </Button>
      </form>
    </div>
  );
}