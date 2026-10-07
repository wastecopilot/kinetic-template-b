import { AddressCheckForm } from "@/components/AddressCheckForm";
import { PhoneLink } from "@/components/PhoneLink";
import { site } from "@/data/site";

/** Phone CTA + address check shown on every Template B page. */
export function CallBandB() {
  return (
    <section aria-labelledby="call-band-b" className="bg-gray-50 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-green p-8 text-center text-navy sm:p-12">
        <h2 id="call-band-b" className="text-4xl sm:text-5xl">
          not sure which plan fits? let&apos;s figure it out together.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg">
          Talk to a Kinetic sales specialist, or drop in your address to start a plan check.
        </p>
        <PhoneLink className="mt-6 min-h-12 rounded-full bg-navy px-8 text-xl font-black text-white hover:bg-purple" />
        <p className="mt-2 text-sm">{site.salesHours}</p>
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white p-5 text-left">
          <AddressCheckForm layout="inline" buttonLabel="Check availability" />
        </div>
      </div>
    </section>
  );
}
