"use client";

export default function CentainerBlack({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="container max-w-screen-2xl lg:my-8 lg:p-4 p-2 my-4 rounded-2xl bg-white shadow-sm"
      data-aos="zoom-ou"
      data-aos-duration="1500"
      data-aos-delay="200"
    >
      {children}
    </div>
  );
}
