import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/PrivacyPolicyContent";
import { PageHeroB } from "@/components/PageHeroB";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read how ${site.legalName}, an independent Authorized Kinetic Agent, handles your personal information.`,
};

export default function TemplateBPrivacy() {
  return (
    <>
      <PageHeroB
        eyebrow={site.legalName}
        title="privacy policy"
        intro="How we collect, use and protect your information, in plain language."
      />
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 sm:p-10">
          <PrivacyPolicyContent />
        </div>
      </section>
    </>
  );
}
