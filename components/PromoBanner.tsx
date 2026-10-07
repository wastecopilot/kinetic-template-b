import Image, { type StaticImageData } from "next/image";
import { fiberMax } from "@/data/plans";
import { Price } from "./Price";
import { PhoneLink } from "./PhoneLink";
import { CheckIcon, GiftIcon } from "./Icons";

type PromoBannerProps = {
  image: { src: string | StaticImageData; alt: string };
};

const guarantee = `${fiberMax.priceGuaranteeYears}-year price guarantee`;

/**
 * Fiber Max lead-offer card: wide rounded card with a yellow strip, text left and photo right.
 * All facts come from /data/plans.ts.
 * The reward card is mentioned in text only: no card image or Mastercard logo.
 * The AutoPay note is shown with the plan list that follows on the same page.
 */
export function PromoBanner({ image }: PromoBannerProps) {
  return (
    <section aria-labelledby="fiber-max-card" className="px-4 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-white text-navy shadow-2xl ring-1 ring-gray-100">
        <p className="bg-yellow px-6 py-2 text-center text-sm font-black">Fiber Max · the all-in-one home internet package</p>
        <div className="grid md:grid-cols-[1.2fr_1fr]">
          <div className="p-6 sm:p-10">
            <h2 id="fiber-max-card" className="text-4xl leading-tight sm:text-5xl">
              one plan. whole-home Wi-Fi. zero guesswork.
            </h2>
            <p className="mt-4 text-lg">
              Fiber Max 2 Gig pairs top-tier fiber speed with the gear, security and help to make it work everywhere
              in your home.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-8">
              <Price amount={fiberMax.price} size="xl" above="everyday price" below={guarantee} />
              <p className="flex items-center gap-2 text-lg font-bold">
                <GiftIcon className="h-6 w-6 text-purple" /> {fiberMax.prepaidCard}
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              {[`${fiberMax.gateway} with ${fiberMax.gatewayTech}`, ...fiberMax.features.slice(1), fiberMax.attWirelessLine].map((f) => (
                <li key={f} className="flex gap-2">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-purple" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PhoneLink className="min-h-12 rounded-full bg-navy px-6 font-black text-white hover:bg-purple" label="Call now" />
              <a href="#offer-conditions" className="underline underline-offset-4">
                See offer details
              </a>
            </div>
            <p className="mt-4 text-xs font-medium">{fiberMax.attFootnote}</p>
          </div>
          <div className="relative min-h-64">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
