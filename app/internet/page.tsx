import type { Metadata } from "next";
import Image from "next/image";
import { PlanCard } from "@/components/PlanCard";
import { AutoPayNote } from "@/components/AutoPayNote";
import { LockIcon } from "@/components/Icons";
import { PageHeroB } from "@/components/PageHeroB";
import { SpeedFinder } from "@/components/SpeedFinder";
import { imgB } from "@/components/images";
import { fiberPlans, startingPrice } from "@/data/plans";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Find your Kinetic Fiber speed",
  description: `Use our speed finder to choose between Kinetic Fiber Max 2 Gig, 2 Gig, 1 Gig and 300 Mbps. From $${startingPrice}/month with AutoPay through ${site.legalName}, an Authorized Kinetic Agent.`,
};

export default function TemplateBInternet() {
  return (
    <>
      <PageHeroB
        eyebrow="Kinetic Fiber Internet"
        title="find the speed that fits your household"
        intro="Answer one question and we'll point you to a plan. Then compare every option below, fastest to slowest."
      />

      <section aria-label="Speed finder" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SpeedFinder />
          <AutoPayNote className="mt-4" />
        </div>
      </section>

      <section aria-labelledby="b-int-plans" className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 id="b-int-plans" className="text-4xl sm:text-5xl">all plans</h2>
          <div className="mt-8 space-y-5">
            {fiberPlans.map((plan) => (
              <div key={plan.id} id={plan.id} className="scroll-mt-24">
                <PlanCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="b-guarantee" className="bg-yellow px-4 py-16 text-navy sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <LockIcon className="h-12 w-12" />
            <h2 id="b-guarantee" className="mt-4 text-4xl sm:text-5xl">your price, locked in</h2>
            <p className="mt-3 text-lg">Every Kinetic Fiber plan comes with a price guarantee:</p>
            <ul className="mt-4 space-y-2 text-lg">
              {fiberPlans.map((p) => (
                <li key={p.id} className="flex justify-between gap-4 border-b-2 border-navy/20 pb-2">
                  <span className="font-bold">{p.name}</span>
                  <span>
                    {p.priceGuaranteeYears} {p.priceGuaranteeYears === 1 ? "year" : "years"}
                  </span>
                </li>
              ))}
            </ul>
            <a href="#offer-conditions" className="mt-4 inline-block underline underline-offset-4">
              See offer details
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src={imgB.internet.src} alt={imgB.internet.alt} fill sizes="(min-width: 768px) 50vw, 100vw" placeholder="blur" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
