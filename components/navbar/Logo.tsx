"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <div className="hidden md:block">
      <Image
        alt="Logo"
        className="hidden md:block cursor-pointer"
        width="100"
        height="32"
        src="/images/logo.png"
        priority
      />
    </div>
  );
}
