import "./globals.css";
import { Nunito } from "next/font/google";

const inter = Nunito({ subsets: ["latin"] });

import ToasterProvider from "@/providers/ToasterProvider";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "frogbnb",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <ToasterProvider />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
