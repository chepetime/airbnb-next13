"use client";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div
      className="
        max-w-[2520px]
        max-w-[1280px]
        mx-auto
        xl:px-20
        md:px-10
        sd:px-2
        px-4
      "
    >
      {children}
    </div>
  );
}
