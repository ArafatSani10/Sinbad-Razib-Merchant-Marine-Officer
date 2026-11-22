"use client";

import { useState } from "react";
import { GraduationCap, MapPin, Ship } from "lucide-react";
import { RoleGlyph } from "@/components/role-icons";
import { career, dryDock, education, roles, skills } from "@/lib/site";

const tabs = [
  { id: "education", label: "Education" },
  { id: "sea", label: "At sea" },
  { id: "beyond", label: "Beyond the sea" },
] as const;

export default function Journey() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("sea");

  return (
    <div>
      <div role="tablist" aria-label="Career and background" className="inline-flex max-w-full overflow-x-auto rounded-xl bg-fog-200 p-1">
        {tabs.map((t) => (
          <button key={t.id} role="tab" id={`tab-${t.id}`} aria-selected={tab === t.id} aria-controls={`panel-${t.id}`}
            onClick={() => setTab(t.id)}
            className={`whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${tab === t.id ? "bg-navy-900 text-fog-50 shadow" : "text-navy-800 hover:text-navy-950"}`}>
            {t.label}
          </button>
        ))}
      </div>

      <div key={tab} role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} className="hero-rise mt-8">
        {tab === "education" && (
          <ol className="relative space-y-5 border-l-2 border-brass-400/50 pl-8">
            {education.map((e) => (
              <li key={e.year} className="relative rounded-xl border border-fog-200 bg-white p-6 transition-all hover:border-brass-400 hover:shadow-lg">
                <span className="absolute -left-[2.9rem] top-7 grid h-9 w-9 place-items-center rounded-full bg-navy-900 text-brass-400"><GraduationCap size={18} /></span>
                <p className="text-sm font-semibold text-sea-700">{e.year}</p>
                <p className="text-xl font-bold text-navy-950">{e.title}</p>
                <p className="text-navy-800">{e.place}</p>
              </li>
            ))}
          </ol>
        )}

        {tab === "sea" && (
          <div className="space-y-8">
            <div className="grid gap-5 md:grid-cols-3">
              {career.map((c) => (
                <div key={c.rank} className="rounded-xl bg-navy-900 p-6 text-fog-50 transition-transform hover:-translate-y-1">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy-800 text-brass-400"><Ship size={20} /></span>
                  <h3 className="mt-4 text-xl font-bold">{c.rank}</h3>
                  <ul className="mt-4 space-y-4">
                    {c.entries.map((e) => (
                      <li key={e.vessel} className="border-l-2 border-brass-400/60 pl-4">
                        <p className="font-semibold">{e.vessel}</p>
                        {(e.detail || e.company) && <p className="text-sm text-navy-300">{[e.detail, e.company].filter(Boolean).join(", ")}</p>}
                        {e.period && <p className="text-sm text-navy-300">{e.period}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-fog-200 bg-white p-6">
                <h3 className="text-lg font-bold text-navy-950">Dry-docking experience</h3>
                <ul className="mt-4 space-y-2">
                  {dryDock.vessels.map((v) => <li key={v.type} className="flex justify-between border-b border-fog-100 pb-2 text-navy-900"><span>{v.type}</span><span className="font-semibold">{v.times}</span></li>)}
                </ul>
                <p className="mt-4 flex items-center gap-2 text-navy-800"><MapPin size={18} className="text-sea-700" /> {dryDock.places.join(" and ")}</p>
              </div>
              <div className="rounded-xl border border-fog-200 bg-white p-6">
                <h3 className="text-lg font-bold text-navy-950">Skills</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {skills.map((s) => <li key={s} className="rounded-full bg-fog-100 px-4 py-1.5 text-sm font-medium text-navy-800">{s}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}

        {tab === "beyond" && (
          <div className="grid gap-5 sm:grid-cols-2">
            {roles.filter((r) => r.icon !== "anchor").map((r) => (
              <div key={r.title + r.org} className="flex gap-5 rounded-xl border border-fog-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brass-400 hover:shadow-lg">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-navy-900 text-brass-400"><RoleGlyph icon={r.icon} /></span>
                <div>
                  <p className="text-sm text-navy-600">{r.group}</p>
                  <p className="text-lg font-bold text-navy-950">{r.title}</p>
                  {r.titleBn && <p className="text-navy-800">{r.titleBn}</p>}
                  <p className="mt-2 text-navy-900">{r.org}</p>
                  {r.orgBn && <p className="text-sm text-navy-600">{r.orgBn}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}