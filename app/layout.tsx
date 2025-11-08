import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpaceGuard AI - Team Zentra",
  description: "AI that keeps space stations safe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
