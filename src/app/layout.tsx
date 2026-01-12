import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import HeaderComp from "./components/Header";
import ContactComp from "./components/Contact";
import AOSProvider from "./AosProvider";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Lic. Nazarena Rodriguez",
  description: "Rendimiento, salud digestiva y hábitos saludables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sourceSansPro.variable} antialiased`}>
        <HeaderComp />
        <AOSProvider />
        {children}
        <ContactComp />
      </body>
    </html>
  );
}
