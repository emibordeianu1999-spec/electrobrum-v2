"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Zap,
  ArrowRight,
  Info,
  Home,
  Building2,
  Sun,
  Battery,
  CheckCircle2,
  Calculator,
  LayoutGrid,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";

export default function CalculatorPage() {
  // Configuration State
  const [clientType, setClientType] = useState("fizica"); // fizica, juridica
  const [calcMethod, setCalcMethod] = useState("consum"); // consum, putere
  const [monthlyConsum, setMonthlyConsum] = useState(400);
  const [targetPower, setTargetPower] = useState(6);
  const [phaseType, setPhaseType] = useState("monofazic"); // monofazic, trifazic
  const [systemType, setSystemType] = useState("hibrid"); // on-grid, hibrid, off-grid
  const [roofType, setRoofType] = useState("tigla"); // tigla, tabla, sol
  const [orientation, setOrientation] = useState("sud"); // sud, est, vest

  // Results State
  const [results, setResults] = useState({
    power: 0,
    panels: 0,
    annualProduction: 0,
    estimatedPrice: 0,
    roiYears: 0,
  });

  // Calculate results whenever inputs change
  useEffect(() => {
    let power =
      calcMethod === "consum" ? (monthlyConsum / 100) * 1.5 : targetPower;

    // Constraints
    if (phaseType === "monofazic") power = Math.min(power, 10);

    const panels = Math.ceil((power * 1000) / 450); // Using 450W panels as standard
    const annualProduction = power * 1200; // 1200 kWh per kWp installed

    // Price estimation logic
    let pricePerKW = clientType === "fizica" ? 3500 : 4000; // Simplified price base
    if (systemType === "hibrid") pricePerKW += 1500;
    if (systemType === "off-grid") pricePerKW += 2500;

    const estimatedPrice = power * pricePerKW;
    const annualSavings = annualProduction * 0.8; // 0.8 RON per kWh average
    const roiYears = estimatedPrice / annualSavings;

    setResults({
      power: parseFloat(power.toFixed(1)),
      panels,
      annualProduction: Math.round(annualProduction),
      estimatedPrice: Math.round(estimatedPrice),
      roiYears: parseFloat(roiYears.toFixed(1)),
    });
  }, [
    clientType,
    calcMethod,
    monthlyConsum,
    targetPower,
    phaseType,
    systemType,
    roofType,
    orientation,
  ]);

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber-50/50 to-white dark:from-gray-950 dark:to-gray-900" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
            Calculator <span className="text-amber-500">Fotovoltaic</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Estimează costurile și economiile pentru viitorul tău sistem
            fotovoltaic în mai puțin de 1 minut.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column: Configuration */}
            <div className="lg:w-2/3 space-y-10">
              {/* Client Type & Method */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label className="text-lg font-bold">Tip Client</Label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setClientType("fizica")}
                      className={`flex-1 flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${clientType === "fizica" ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20" : "border-gray-100 dark:border-gray-800"}`}
                    >
                      <Home
                        className={`h-6 w-6 mb-2 ${clientType === "fizica" ? "text-amber-500" : "text-gray-400"}`}
                      />
                      <span className="font-bold">Persoană Fizică</span>
                    </button>
                    <button
                      onClick={() => setClientType("juridica")}
                      className={`flex-1 flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${clientType === "juridica" ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20" : "border-gray-100 dark:border-gray-800"}`}
                    >
                      <Building2
                        className={`h-6 w-6 mb-2 ${clientType === "juridica" ? "text-amber-500" : "text-gray-400"}`}
                      />
                      <span className="font-bold">Persoană Juridică</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-lg font-bold">Metodă Calcul</Label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setCalcMethod("consum")}
                      className={`flex-1 p-4 rounded-2xl border-2 transition-all font-bold ${calcMethod === "consum" ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20" : "border-gray-100 dark:border-gray-800"}`}
                    >
                      După Consum
                    </button>
                    <button
                      onClick={() => setCalcMethod("putere")}
                      className={`flex-1 p-4 rounded-2xl border-2 transition-all font-bold ${calcMethod === "putere" ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20" : "border-gray-100 dark:border-gray-800"}`}
                    >
                      După Putere
                    </button>
                  </div>
                </div>
              </div>

              {/* Slider / Input for Power/Consum */}
              <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                {calcMethod === "consum" ? (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <Label className="text-xl font-black">
                        Consum Lunar (kWh)
                      </Label>
                      <span className="text-3xl font-black text-amber-500">
                        {monthlyConsum} kWh
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="5000"
                      step="50"
                      value={monthlyConsum}
                      onChange={(e) =>
                        setMonthlyConsum(parseInt(e.target.value))
                      }
                      className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="flex items-start gap-2 text-sm text-gray-500">
                      <Info className="h-4 w-4 mt-0.5 shrink-0" />
                      <p>
                        Poți verifica consumul mediu lunar pe factura ta de
                        energie electrică.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <Label className="text-xl font-black">
                        Putere Dorită (kWp)
                      </Label>
                      <span className="text-3xl font-black text-amber-500">
                        {targetPower} kWp
                      </span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="100"
                      step="1"
                      value={targetPower}
                      onChange={(e) => setTargetPower(parseInt(e.target.value))}
                      className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                  </div>
                )}
              </div>

              {/* System Configuration Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phase Type */}
                <div className="space-y-4">
                  <Label className="text-lg font-bold">Tip Branșament</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {["monofazic", "trifazic"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setPhaseType(type)}
                        className={`p-3 rounded-xl border-2 transition-all font-bold capitalize ${phaseType === type ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20" : "border-gray-100 dark:border-gray-800"}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* System Type */}
                <div className="space-y-4">
                  <Label className="text-lg font-bold">Tip Sistem</Label>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    {["on-grid", "hibrid", "off-grid"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setSystemType(type)}
                        className={`p-3 rounded-xl border-2 transition-all font-bold uppercase ${systemType === type ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20" : "border-gray-100 dark:border-gray-800"}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Roof Type */}
                <div className="space-y-4">
                  <Label className="text-lg font-bold">Tip Acoperiș</Label>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    {["tigla", "tabla", "sol"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setRoofType(type)}
                        className={`p-3 rounded-xl border-2 transition-all font-bold capitalize ${roofType === type ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20" : "border-gray-100 dark:border-gray-800"}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Orientation */}
                <div className="space-y-4">
                  <Label className="text-lg font-bold">Orientare</Label>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    {["est", "sud", "vest"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setOrientation(type)}
                        className={`p-3 rounded-xl border-2 transition-all font-bold capitalize ${orientation === type ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20" : "border-gray-100 dark:border-gray-800"}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Results Summary */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 p-8 rounded-3xl bg-gray-900 text-white shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />

                <h3 className="text-2xl font-black mb-8 relative z-10">
                  Rezumat Configurație
                </h3>

                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-gray-400">Putere Sistem</span>
                    <span className="text-xl font-bold">
                      {results.power} kWp
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-gray-400">Număr Panouri</span>
                    <span className="text-xl font-bold">
                      {results.panels} buc
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-gray-400">Producție Anuală</span>
                    <span className="text-xl font-bold text-amber-500">
                      {results.annualProduction} kWh/an
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-gray-400">Recuperare Investiție</span>
                    <span className="text-xl font-bold">
                      {results.roiYears} ani
                    </span>
                  </div>

                  <div className="pt-6">
                    <div className="text-gray-400 text-sm mb-1 uppercase font-bold tracking-widest">
                      Preț Total Estimat
                    </div>
                    <div className="text-5xl font-black text-amber-500">
                      {results.estimatedPrice.toLocaleString()} Lei
                    </div>
                    <p className="text-[10px] text-gray-500 mt-2">
                      *TVA și instalare standard incluse. Preț informativ.
                    </p>
                  </div>

                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-black py-8 rounded-2xl text-xl shadow-xl shadow-amber-500/20 mt-8 group">
                    Obține Ofertă{" "}
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
              <Sun className="h-10 w-10 text-amber-500 mb-6" />
              <h4 className="text-xl font-bold mb-4">Garanție 25 ani</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Panourile noastre beneficiază de garanție de performanță
                extinsă, asigurând eficiența pe termen lung.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
              <Battery className="h-10 w-10 text-amber-500 mb-6" />
              <h4 className="text-xl font-bold mb-4">Independență</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sistemele hibride îți oferă siguranță chiar și în cazul penelor
                de curent prin stocarea energiei.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
              <CheckCircle2 className="h-10 w-10 text-amber-500 mb-6" />
              <h4 className="text-xl font-bold mb-4">Ofertă în 24h</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                După trimiterea cererii, echipa noastră revine cu o ofertă
                detaliată în maxim 24 de ore lucrătoare.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
