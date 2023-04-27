import "./globals.css";
import { Nunito } from "next/font/google";

const inter = Nunito({ subsets: ["latin"] });

import ToasterProvider from "@/providers/ToasterProvider";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";
import Navbar from "@/components/navbar/Navbar";
import getCurrentUser from "@/actions/getCurrentUser";

export const metadata = {
  title: "frogbnb",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <RegisterModal />
          <LoginModal />
          <ToasterProvider />
          <Navbar currentUser={currentUser} />
          {children}
        </div>
      </body>
    </html>
  );
}
