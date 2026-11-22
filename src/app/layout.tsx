import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.title}`, template: `%s | ${site.name}` },
  description: `${site.name} (${site.legalName}) is a merchant marine officer, journalist and founder of Marine Animal Care, based in ${site.location}.`,
  icons: { icon: "/assests/logo.png", apple: "/assests/logo.png" },
  openGraph: { type: "website", siteName: site.name, images: ["/assests/pic.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
