import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainHeader from "./main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kamino-Stats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClass = `${inter.className}`;

  return (
    <html lang="en">
      <body className={bodyClass}>
        <MainHeader />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
