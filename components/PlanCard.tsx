import { fiberMax, type FiberPlan } from "@/data/plans";
import { site } from "@/data/site";
import { Price } from "./Price";
import { CheckIcon, GiftIcon, WifiIcon, ArrowIcon } from "./Icons";

type PlanCardProps = {
  plan: FiberPlan;
  headingLevel?: "h2" | "h3";
};

const guarantee = (years: number) => `${years}-year price guarantee`;

/** Fiber Max extras, shown inside the navy Fiber Max row. */
function FiberMaxExtras() {
  return (
    <ul className="space-y-2 rounded-lg p-3 text-sm bg-white/10">
      <li className="flex items-center gap-2 font-bold">
        <GiftIcon className="h-5 w-5 shrink-0" /> {fiberMax.prepaidCard}
      </li>
      <li className="flex items-center gap-2">
        <WifiIcon className="h-5 w-5 shrink-0" /> Includes {fiberMax.gateway} ({fiberMax.gatewayTech})
      </li>
      <li className="flex items-center gap-2">
        <CheckIcon className="h-5 w-5 shrink-0" /> {fiberMax.attWirelessLine}
      </li>
    </ul>
  );
}

/** Horizontal plan row: name and tagline, features, then price and call button. */
export function PlanCard({ plan, headingLevel = "h3" }: PlanCardProps) {
  const H = headingLevel;
  const isMax = plan.id === "fiber-max-2-gig";

  return (
    <article
      className={`grid gap-6 rounded-3xl p-6 sm:p-8 md:grid-cols-[1.1fr_1.4fr_auto] md:items-center ${
        isMax ? "bg-navy text-white" : "bg-white text-navy ring-1 ring-gray-300"
      }`}
    >
      <div>
        <p
          className={`inline-block rounded-full px-3 py-1 text-xs font-black ${
            isMax ? "bg-yellow text-navy" : "bg-gray-50 text-navy"
          }`}
        >
          {isMax ? "all-in-one" : plan.speed}
        </p>
        <H className="mt-3 text-2xl sm:text-3xl">{plan.name}</H>
        <p className="mt-2">{plan.tagline}</p>
      </div>
      <div className="space-y-3">
        <ul className="grid gap-2 text-sm sm:grid-cols-2">
          {plan.features.map((f) => (
            <li key={f} className="flex gap-2">
              <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${isMax ? "text-green" : "text-purple"}`} /> {f}
            </li>
          ))}
        </ul>
        {isMax && <FiberMaxExtras />}
      </div>
      <div className="flex flex-col items-start gap-3 md:items-end">
        <Price amount={plan.price} size="lg" below={guarantee(plan.priceGuaranteeYears)} />
        <a
          href={site.phoneHref}
          className={`flex min-h-12 items-center gap-2 rounded-full px-6 font-black ${
            isMax ? "bg-green text-navy hover:bg-green-light" : "bg-purple text-white hover:bg-purple-dark"
          }`}
        >
          Call now <ArrowIcon />
        </a>
        {isMax && (
          <>
            <a href="#offer-conditions" className="text-sm underline underline-offset-4">
              See offer details
            </a>
            <p className="text-xs font-medium">{fiberMax.attFootnote}</p>
          </>
        )}
      </div>
    </article>
  );
}
