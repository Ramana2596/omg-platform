import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OMG – Operations Management Simulation | Experiential Learning Platform",
  description:
    "OMG is an experiential learning platform offering an operations management business simulation for academia, professionals, and corporates.",
  keywords: [
    "operations management simulation",
    "business simulation",
    "experiential learning",
    "operations management",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://omgplatform.com",
  },
  icons: {
    icon: '/omg-logo.png',
    shortcut: '/omg-logo.png',
    apple: '/omg-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
