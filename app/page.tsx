"use client";

import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";

export default function Home() {
  return (
    <main className="py-24">
      <RegisterModal />
      <LoginModal />

      <h1 className="text-rose-500 text-2xl">Hello</h1>
    </main>
  );
}
