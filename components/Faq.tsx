import { ChevronIcon } from "./Icons";

export type FaqItem = { q: string; a: React.ReactNode };

/** Accessible accordion built on <details>, no client JS. Rounded cards; the open one gets a navy ring. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.q} className="group rounded-2xl bg-gray-50 px-5 open:bg-white open:ring-2 open:ring-navy">
          <summary className="flex min-h-14 items-center justify-between gap-4 py-4 text-lg font-black">
            {item.q}
            <ChevronIcon className="h-6 w-6 shrink-0 transition-transform group-open:rotate-180 text-navy" />
          </summary>
          <div className="pb-5 leading-relaxed">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
