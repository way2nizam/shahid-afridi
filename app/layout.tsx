import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shahid Afridi — Fashion Designer & Couturier",
  description: "The atelier of Shahid Afridi. Where fabric becomes emotion.",
  openGraph: { title: "Shahid Afridi — The Atelier", description: "A cinematic couture experience.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
