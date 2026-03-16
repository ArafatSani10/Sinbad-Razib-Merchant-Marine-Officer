import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const valueSans = localFont({
  src: "../../public/fonts/ValueSansPro-Regular.woff",
  variable: "--font-value-sans",
});

export const metadata: Metadata = {
  title: "Sinbad Razib | Merchant Marine Officer",
  description: "Official Portfolio",
  icons: {
    icon: "/assests/logo.png",
    apple: "/assests/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${valueSans.variable} font-sans bg-[#000C1D] text-white antialiased`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}