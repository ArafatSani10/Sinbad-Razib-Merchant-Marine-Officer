import { Anchor, Newspaper, ShieldCheck, Waves, Users, Wheat } from "lucide-react";
import type { RoleIcon } from "@/lib/site";

const map = { anchor: Anchor, press: Newspaper, shield: ShieldCheck, wheat: Wheat, waves: Waves, users: Users };

export function RoleGlyph({ icon, className = "h-6 w-6" }: { icon: RoleIcon; className?: string }) {
  const I = map[icon];
  return <I className={className} aria-hidden="true" />;
}