import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { SocialRow } from "@/components/socials";
import { site } from "@/lib/site";
import ContactForm from "./form";

export const metadata: Metadata = { title: "Contact", description: "Send a message to Sinbad Razib, or reach him by email, phone, WhatsApp and social media." };

export default function ContactPage() {
  const rows = [
    ["Personal email", site.emailPersonal, `mailto:${site.emailPersonal}`],
    ["Marine Animal Care email", site.emailBusiness, `mailto:${site.emailBusiness}`],
    ["Phone", site.phone, `tel:${site.phoneHref}`],
    ["WhatsApp", "Message on WhatsApp", site.whatsapp],
    ["Marine Animal Care website", site.businessSite.replace("https://", ""), site.businessSite],
  ];
  return (
    <main>
      <PageHeader title="Contact">Press, shipping, conservation or community work. Write to me here, or use any channel below.</PageHeader>
      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 lg:grid-cols-[1fr_1.1fr] lg:py-24">
        <div>
          <h2 className="text-2xl font-bold text-navy-950">Direct lines</h2>
          <dl className="mt-6 divide-y divide-fog-200 border-y border-fog-200">
            {rows.map(([k, v, h]) => (
              <div key={k} className="py-4">
                <dt className="text-sm text-navy-600">{k}</dt>
                <dd><a href={h} className="text-lg font-semibold text-navy-950 underline decoration-brass-400 decoration-2 underline-offset-4 hover:text-sea-700" {...(h.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{v}</a></dd>
              </div>
            ))}
            <div className="py-4"><dt className="text-sm text-navy-600">Location</dt><dd className="text-lg font-semibold text-navy-950">{site.location}</dd></div>
          </dl>
          <h2 className="mt-10 text-2xl font-bold text-navy-950">Find me online</h2>
          <div className="mt-4"><SocialRow tone="light" /></div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-navy-950">Send a message</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
