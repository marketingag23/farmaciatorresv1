"use client";

export default function Centainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
