import type { Metadata, Viewport } from "next";
import { Anton, DM_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#d80621",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Francisco Natale — Backend Java Developer",
  description:
    "Backend Java Developer en Río Cuarto. APIs REST, sistemas SaaS en producción, PostgreSQL y arquitecturas que escalan.",
  openGraph: {
    title: "Francisco Natale — Backend Java Developer",
    description:
      "Backend Java Developer en Río Cuarto. APIs REST, sistemas SaaS en producción, PostgreSQL y arquitecturas que escalan.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${anton.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
