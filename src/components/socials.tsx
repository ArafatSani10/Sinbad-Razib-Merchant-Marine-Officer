import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { site } from "@/lib/site";

export function socialLinks() {
  const s = site.socials;
  return [
    { label: "Facebook profile", href: s.facebookProfile, Icon: FaFacebookF },
    { label: "Facebook page", href: s.facebookPage, Icon: FaFacebookF },
    { label: "WhatsApp", href: site.whatsapp, Icon: FaWhatsapp },
    { label: "Instagram", href: s.instagram, Icon: FaInstagram },
    { label: "YouTube", href: s.youtube, Icon: FaYoutube },
    { label: "LinkedIn", href: s.linkedin, Icon: FaLinkedinIn },
    { label: "X", href: s.x, Icon: FaXTwitter },
    { label: "Email", href: `mailto:${site.emailPersonal}`, Icon: MdOutlineEmail },
  ].filter((l) => l.href);
}

export function SocialRow({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const base = tone === "dark"
    ? "border-navy-600 text-navy-300 hover:border-brass-400 hover:text-brass-300"
    : "border-fog-200 text-navy-600 hover:border-navy-900 hover:text-navy-900";
  return (
    <ul className="flex flex-wrap gap-2">
      {socialLinks().map(({ label, href, Icon }) => (
        <li key={label}>
          <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
            aria-label={label} title={label}
            className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${base}`}>
            <Icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
