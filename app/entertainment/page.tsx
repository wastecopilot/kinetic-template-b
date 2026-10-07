import type { Metadata } from "next";
import Image from "next/image";
import { BoltIcon, PlayIcon, UsersIcon, WifiIcon } from "@/components/Icons";
import { PageHeroB } from "@/components/PageHeroB";
import { imgB } from "@/components/images";
import { site } from "@/data/site";
import { streamingServices } from "@/data/streaming";

export const metadata: Metadata = {
  title: "Stream better with Kinetic Fiber",
  description:
    "Kinetic doesn't sell a TV product. Use Kinetic Fiber internet to stream YouTube TV, Netflix and your other favorite services smoothly.",
};

const reasons = [
  { icon: BoltIcon, title: "speed to spare", body: "Fiber plans up to 2 Gig give 4K and 8K streams plenty of room." },
  { icon: UsersIcon, title: "everyone at once", body: "Multiple people can stream, game and video-chat on the same connection." },
  { icon: WifiIcon, title: "whole-home Wi-Fi", body: "Fiber Max adds the eero Pro 7 gateway and extenders as needed for every room." },
];

export default function TemplateBEntertainment() {
  return (
    <>
      <PageHeroB
        eyebrow="streaming and entertainment"
        title="your shows. your services. fiber speed."
        intro="Kinetic doesn't sell a TV product. Instead, Kinetic Fiber gives you a great streaming experience for the services you choose, from YouTube TV to Netflix."
      />

      {/* Photo collage */}
      <section aria-label="Streaming at home" className="px-4 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3 md:grid-rows-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] md:col-span-2 md:row-span-2 md:aspect-auto">
            <Image src={imgB.streaming.src} alt={imgB.streaming.alt} fill sizes="(min-width: 768px) 66vw, 100vw" placeholder="blur" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src={imgB.sports.src} alt={imgB.sports.alt} fill sizes="(min-width: 768px) 33vw, 100vw" placeholder="blur" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src={imgB.internet.src} alt={imgB.internet.alt} fill sizes="(min-width: 768px) 33vw, 100vw" placeholder="blur" className="object-cover" />
          </div>
        </div>
      </section>

      <section aria-labelledby="b-services" className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 id="b-services" className="text-4xl sm:text-5xl">stream on your terms</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg">Sign up directly with the services you like. Popular picks include:</p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {streamingServices.map((s) => (
              <li key={s} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-black ring-2 ring-navy">
                <PlayIcon className="h-5 w-5 text-purple" /> {s}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-3xl text-sm">
            Streaming services are sold separately by their own providers. Kinetic and {site.legalName} do not sell,
            bundle or bill for TV or streaming services. Names are trademarks of their respective owners.
          </p>
        </div>
      </section>

      <section aria-labelledby="b-why-fiber" className="bg-navy px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 id="b-why-fiber" className="text-4xl sm:text-5xl">why fiber helps stop buffering</h2>
          <p className="mt-3 max-w-3xl text-lg">
            Streaming quality depends on your internet connection. Fiber carries data over light, so there&apos;s more
            room for every screen in the house.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/30">
                <Icon className="h-10 w-10 text-green" />
                <h3 className="mt-4 text-2xl">{title}</h3>
                <p className="mt-2">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
