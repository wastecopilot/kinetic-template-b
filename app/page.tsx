import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AddressCheckForm } from "@/components/AddressCheckForm";
import { AgentNotice } from "@/components/AgentNotice";
import { AutoPayNote } from "@/components/AutoPayNote";
import { PromoBanner } from "@/components/PromoBanner";
import { PlanCard } from "@/components/PlanCard";
import { Faq } from "@/components/Faq";
import { PhoneLink } from "@/components/PhoneLink";
import { ArrowIcon } from "@/components/Icons";
import { imgB } from "@/components/images";
import { fiberMax, fiberPlans, formatPrice, startingPrice } from "@/data/plans";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kinetic Fiber internet: get Fiber Max 2 Gig",
  description: `Get Kinetic Fiber Max 2 Gig at $${fiberMax.price}/month with AutoPay, a ${fiberMax.prepaidCard}, eero Pro 7 Wi-Fi and a 3-year price guarantee. Order with ${site.legalName}, an Authorized Kinetic Agent.`,
};

const steps = [
  { n: "1", title: "check your address", body: "Tell us where you live so we can see which Kinetic Fiber speeds reach your home." },
  { n: "2", title: "pick a plan with us", body: "A Kinetic sales specialist on our team walks through the options and answers your questions." },
  { n: "3", title: "Kinetic gets you connected", body: "We submit your order to Kinetic, and Kinetic schedules your installation." },
];

const stories = [
  { img: imgB.work, title: "the home office", body: "Back-to-back video meetings while the rest of the house stays online." },
  { img: imgB.kitchen, title: "the busy kitchen", body: "Recipes, music and messages on every device at the counter." },
  { img: imgB.family, title: "the family table", body: "Homework help, quick searches and photos shared in seconds." },
];

const services = [
  { href: "/internet", title: "Kinetic Fiber Internet", fill: "bg-green" },
  { href: "/entertainment", title: "streaming and entertainment", fill: "bg-blue" },
  { href: "/home-phone", title: "Kinetic Home Phone", fill: "bg-yellow" },
];

const faqs = [
  {
    q: "is this website Kinetic?",
    a: `No. ${site.legalName} is an independent Authorized Kinetic Agent. We help you compare plans and order Kinetic service. Kinetic delivers and bills the service.`,
  },
  {
    q: "what makes Fiber Max different?",
    a: `It's 2 Gig fiber plus the ${fiberMax.gateway} (${fiberMax.gatewayTech}), Kinetic Secure Plus, extenders as needed, free professional setup and 24/7 Premium Technical Support provided by Kinetic. It also comes with a ${fiberMax.prepaidCard} and a 3-year price guarantee.`,
  },
  {
    q: "what if I don't need 2 Gig?",
    a: `Fiber 1 Gig and Fiber 300 Mbps are great fits for smaller households. Plans start at $${startingPrice}/month with AutoPay.`,
  },
  {
    q: "can I get TV through Kinetic?",
    a: "Kinetic doesn't sell a TV product. Kinetic Fiber is a great match for streaming services you subscribe to separately, such as YouTube TV or Netflix.",
  },
];

export default function TemplateBHome() {
  return (
    <>
      {/* 1. Fiber Max lead offer — centered headline + address check, promo card directly below */}
      <section className="bg-white px-4 pb-10 pt-12 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <AgentNotice />
          <p className="mt-8 text-base font-black text-purple">featured offer · Fiber Max 2 Gig</p>
          <h1 className="mt-3 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            whole-home internet, <span className="bg-yellow px-2">all in one plan</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg sm:text-xl">
            Fiber Max 2 Gig is {formatPrice(fiberMax.price).full}/month with AutoPay and comes with a{" "}
            {fiberMax.prepaidCard}, the {fiberMax.gateway} and a {fiberMax.priceGuaranteeYears}-year price guarantee.
          </p>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-gray-50 p-5 text-left ring-1 ring-gray-300">
            <AddressCheckForm layout="inline" />
          </div>
          <p className="mt-4">
            Prefer to talk? <PhoneLink className="font-black underline underline-offset-4" />
            {" · "}
            <a href="#offer-conditions" className="underline underline-offset-4">See offer details</a>
          </p>
        </div>
      </section>

      {/* 2. Fiber Max promo card */}
      <div className="bg-white pb-16 pt-2">
        <PromoBanner image={imgB.promo} />
      </div>

      {/* 3. Vertical plan list */}
      <section aria-labelledby="b-plans" className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 id="b-plans" className="text-4xl sm:text-5xl">every Kinetic Fiber plan, fastest first</h2>
          <p className="mt-3 max-w-2xl text-lg">Price guarantees on every plan. Pick the speed that fits your household.</p>
          <AutoPayNote className="mt-2" />
          <div className="mt-10 space-y-5">
            {fiberPlans.map((plan) => (
              <div key={plan.id} id={plan.id} className="scroll-mt-24">
                <PlanCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services strip: internet / streaming and entertainment / home phone */}
      <section aria-labelledby="b-services" className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 id="b-services" className="text-4xl sm:text-5xl">what you can get with us</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className={`flex min-h-32 items-end justify-between gap-4 rounded-3xl p-6 text-navy ${s.fill} hover:ring-4 hover:ring-navy`}>
                  <h3 className="text-2xl">{s.title}</h3>
                  <ArrowIcon className="h-7 w-7 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. How ordering works */}
      <section aria-labelledby="b-steps" className="bg-navy px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_1fr]">
            <h2 id="b-steps" className="text-4xl sm:text-5xl">getting fiber is a three-step job</h2>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
              <Image src={imgB.hero.src} alt={imgB.hero.alt} fill sizes="(min-width: 768px) 50vw, 100vw" placeholder="blur" className="object-cover" />
            </div>
          </div>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="border-t-4 border-green pt-6">
                <span className="text-5xl font-black text-green">{s.n}</span>
                <h3 className="mt-3 text-2xl">{s.title}</h3>
                <p className="mt-2">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Household photo stories */}
      <section aria-labelledby="b-stories" className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 id="b-stories" className="text-4xl sm:text-5xl">built for every room in the house</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stories.map((s) => (
              <figure key={s.title} className="overflow-hidden rounded-3xl bg-white shadow-md">
                <div className="relative aspect-[4/3]">
                  <Image src={s.img.src} alt={s.img.alt} fill sizes="(min-width: 768px) 33vw, 100vw" placeholder="blur" className="object-cover" />
                </div>
                <figcaption className="p-6">
                  <p className="text-xl font-black">{s.title}</p>
                  <p className="mt-2">{s.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section aria-labelledby="b-faq" className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 id="b-faq" className="text-center text-4xl sm:text-5xl">good questions</h2>
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
