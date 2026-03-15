import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const valueSans = localFont({
  src: "../../public/fonts/ValueSansPro-Regular.woff",
  variable: "--font-value-sans",
});

export const metadata: Metadata = {
  title: "Sinbad Razib | Merchant Marine Officer",
  description: "Official Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${valueSans.variable} font-sans bg-[#000C1D] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}