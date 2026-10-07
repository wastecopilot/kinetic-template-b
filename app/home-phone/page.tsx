import type { Metadata } from "next";
import Image from "next/image";
import { CheckIcon } from "@/components/Icons";
import { PhoneLink } from "@/components/PhoneLink";
import { Price } from "@/components/Price";
import { PageHeroB } from "@/components/PageHeroB";
import { imgB } from "@/components/images";
import { homePhone } from "@/data/plans";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Add Kinetic Home Phone to your fiber plan",
  description: `Kinetic Home Phone is $${homePhone.price}/month with a Kinetic Internet plan, with Caller ID, Voicemail, Spam Call Alert and more. Order through ${site.legalName}, an Authorized Kinetic Agent.`,
};

export default function TemplateBHomePhone() {
  const half = Math.ceil(homePhone.features.length / 2);
  return (
    <>
      <PageHeroB
        eyebrow="Kinetic Home Phone"
        title="keep a home line that just works"
        intro={`Clear calling over Kinetic's fiber network, with ${homePhone.featureCount} calling features built in.`}
      >
        <div className="mt-8 inline-flex rounded-3xl bg-navy px-8 py-5 text-left text-white">
          <Price amount={homePhone.price} size="lg" qualifier={homePhone.qualifier} />
        </div>
      </PageHeroB>

      <section aria-labelledby="b-ph-1" className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src={imgB.phone.src} alt={imgB.phone.alt} fill sizes="(min-width: 768px) 50vw, 100vw" placeholder="blur" className="object-cover" />
          </div>
          <div>
            <h2 id="b-ph-1" className="text-4xl sm:text-5xl">know who&apos;s calling</h2>
            <p className="mt-3 text-lg">The features that screen, route and save your calls:</p>
            <ul className="mt-6 space-y-3">
              {homePhone.features.slice(0, half).map((f) => (
                <li key={f} className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm">
                  <CheckIcon className="h-5 w-5 text-purple" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="b-ph-2" className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="md:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image src={imgB.family.src} alt={imgB.family.alt} fill sizes="(min-width: 768px) 50vw, 100vw" placeholder="blur" className="object-cover" />
            </div>
          </div>
          <div className="md:order-1">
            <h2 id="b-ph-2" className="text-4xl sm:text-5xl">stay connected with family</h2>
            <p className="mt-3 text-lg">More ways to handle everyday calls:</p>
            <ul className="mt-6 space-y-3">
              {homePhone.features.slice(half).map((f) => (
                <li key={f} className="flex items-center gap-3 rounded-full bg-gray-50 px-5 py-3">
                  <CheckIcon className="h-5 w-5 text-purple" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="b-ph-portal" className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-purple p-8 text-center text-white sm:p-12">
          <h2 id="b-ph-portal" className="text-4xl sm:text-5xl">{homePhone.portalName}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg">
            Customize your calling features anytime in Kinetic&apos;s easy-to-use online portal.
          </p>
          <PhoneLink className="mt-6 min-h-12 rounded-full bg-white px-6 font-black text-navy hover:bg-yellow-light" label="Call now" />
        </div>
      </section>
    </>
  );
}
