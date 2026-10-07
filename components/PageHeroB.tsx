import { AgentNotice } from "@/components/AgentNotice";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
};

/** Template B inner-page hero: centered editorial headline on white. */
export function PageHeroB({ eyebrow, title, intro, children }: Props) {
  return (
    <section className="bg-white px-4 pb-14 pt-12 text-center sm:px-6 sm:pt-16">
      <div className="mx-auto max-w-3xl">
        <AgentNotice />
        <p className="mt-8 text-base font-black text-purple">{eyebrow}</p>
        <h1 className="mt-3 text-5xl leading-[1.05] sm:text-7xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg sm:text-xl">{intro}</p>
        {children}
      </div>
    </section>
  );
}
