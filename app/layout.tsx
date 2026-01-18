import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrewFlow",
  description: "BrewFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
