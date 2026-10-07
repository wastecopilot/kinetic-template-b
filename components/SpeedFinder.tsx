"use client";

import { useState } from "react";
import { fiberPlans } from "@/data/plans";
import { Price } from "@/components/Price";

/** Recommendations follow the plan descriptions in the UR646 marked-up PDFs. Fastest → slowest. */
const options = [
  { id: "fiber-max-2-gig", label: "Whole home, worry-free", detail: "Premium Wi-Fi in every room, security and top-tier support" },
  { id: "fiber-2-gig", label: "Large smart home", detail: "30+ devices, big file transfers, 4K/8K on many screens" },
  { id: "fiber-1-gig", label: "Work-from-home & gaming", detail: "Video meetings, competitive gaming, 4K streaming" },
  { id: "fiber-300", label: "Everyday essentials", detail: "Browsing, video calls, HD streaming" },
] as const;

export function SpeedFinder() {
  const [selected, setSelected] = useState<(typeof options)[number]["id"]>("fiber-max-2-gig");
  const plan = fiberPlans.find((p) => p.id === selected)!;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      <fieldset>
        <legend className="text-2xl font-black">what does your household do online most?</legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {options.map((o) => (
            <label
              key={o.id}
              className={`flex min-h-24 cursor-pointer flex-col justify-center rounded-2xl p-4 ring-2 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-purple ${
                selected === o.id ? "bg-navy text-white ring-navy" : "bg-white text-navy ring-gray-300 hover:ring-navy"
              }`}
            >
              <input
                type="radio"
                name="speed-finder"
                value={o.id}
                checked={selected === o.id}
                onChange={() => setSelected(o.id)}
                className="sr-only"
              />
              <span className="font-black">{o.label}</span>
              <span className="mt-1 text-sm">{o.detail}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div aria-live="polite" className="flex flex-col justify-center rounded-3xl bg-yellow p-6 text-navy sm:p-8">
        <p className="text-base font-black">we&apos;d suggest</p>
        <p className="mt-2 text-3xl font-black">{plan.name}</p>
        <p className="mt-2 text-lg">{plan.tagline}</p>
        <Price amount={plan.price} size="md" below={`${plan.priceGuaranteeYears}-year price guarantee`} className="mt-4" />
        <a href={`#${plan.id}`} className="mt-4 underline underline-offset-4">
          See plan details
        </a>
      </div>
    </div>
  );
}
