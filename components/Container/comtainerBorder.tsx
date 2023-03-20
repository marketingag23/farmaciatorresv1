"use client";

export default function Centainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="container mx-auto md:my-8
        "
    >
      <div
        className=" px-0 my-6
            md:border-2 md:rounded-lg md:px-8 md:py-14 md:border-gray-300
            xl:block lg:px-12
            "
      >
        {children}
      </div>
    </div>
  );
}
