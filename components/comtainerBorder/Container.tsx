"use client";

export default function Centainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="container lg:max-w-7xl 2xl:max-w-[1600px] 2xl:px-[4.7rem] mx-auto px-4 lg:px-5">
      {children}
    </div>
  );
}
