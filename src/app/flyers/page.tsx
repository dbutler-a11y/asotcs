"use client";

import { useState } from "react";
import Image from "next/image";

const flyers = [
  {
    id: 1,
    src: "/images/flyers/flyer-2.png",
    name: "Variation 1",
  },
  {
    id: 2,
    src: "/images/flyers/flyer-1.png",
    name: "Variation 2",
  },
];

export default function FlyersPage() {
  const [selectedFlyer, setSelectedFlyer] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-stone-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            A Seat on the Counselor&apos;s Sofa
          </h1>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Founding Members Lunch — Flyer Designs
          </p>
        </div>

        {/* Purpose & Goal Explanation */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-semibold text-amber-400 mb-4">
            The Vision
          </h2>
          <p className="text-stone-300 leading-relaxed mb-6">
            The <strong className="text-white">Founding Members Lunch</strong> is an intimate launch event designed to build the initial community of supporters for ASOTCS while creating real impact from day one.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-stone-800/50 rounded-xl p-5">
              <h3 className="text-amber-300 font-medium mb-2">The Community Play</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Founding members get exclusive lifetime benefits and recognition for being early believers. They become ambassadors who help spread the mission and invite others into the community.
              </p>
            </div>
            <div className="bg-stone-800/50 rounded-xl p-5">
              <h3 className="text-amber-300 font-medium mb-2">The Impact Model</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                100% of event proceeds fund group therapy sessions for young girls who can&apos;t afford access. Every seat purchased at the lunch = a seat given to a young woman in need.
              </p>
            </div>
          </div>

          <div className="bg-stone-800/50 rounded-xl p-5 mb-6">
            <h3 className="text-amber-300 font-medium mb-2">Sponsorship Tiers</h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-3">
              Beyond individual tickets, sponsors (individuals or brands) can donate at higher levels to fund even more young women. This creates a sustainable &quot;Seat a Sister&quot; scholarship program where:
            </p>
            <ul className="text-stone-400 text-sm space-y-1">
              <li>• <strong className="text-stone-300">Seat Sponsor ($47/mo)</strong> — Funds 1 young woman monthly</li>
              <li>• <strong className="text-stone-300">Sofa Sponsor ($147/mo)</strong> — Funds 3 young women monthly</li>
              <li>• <strong className="text-stone-300">Living Room Sponsor ($497/mo)</strong> — Funds 10 young women monthly</li>
              <li>• <strong className="text-stone-300">Corporate Partners ($5K+/yr)</strong> — Fund 100+ young women with brand recognition</li>
            </ul>
          </div>

          <div className="border-t border-stone-700 pt-5">
            <p className="text-stone-500 text-sm italic">
              These flyers are designed for promoting the Founding Members Lunch across Instagram, email, and the Skool community. Each variation targets a slightly different emotional tone while maintaining brand consistency.
            </p>
          </div>
        </div>

        {/* Flyers - Large 16:9 Display */}
        <div className="space-y-8">
          {flyers.map((flyer) => (
            <div key={flyer.id} className="flex flex-col">
              <button
                onClick={() => setSelectedFlyer(flyer.id)}
                className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-stone-800 transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-4 focus:ring-offset-stone-950"
              >
                <Image
                  src={flyer.src}
                  alt={flyer.name}
                  fill
                  className="object-cover"
                  priority
                />
              </button>
              <div className="mt-4 text-center">
                <span className="inline-block px-4 py-2 bg-stone-900 text-stone-300 text-sm font-medium rounded-full border border-stone-800">
                  {flyer.name}
                </span>
              </div>
            </div>
          ))}
        </div>


        {/* Modal for enlarged view */}
        {selectedFlyer !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedFlyer(null)}
          >
            <div className="max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
                <Image
                  src={flyers.find(f => f.id === selectedFlyer)?.src || ""}
                  alt="Enlarged flyer"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setSelectedFlyer(null)}
                className="mt-6 w-full py-3 bg-white text-stone-900 rounded-xl font-medium hover:bg-stone-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
