"use client";

import Link from "next/link";

interface Props {
  title: string;
  url: string;
  textLink?: string;
}
function TitleLink({ title, url, textLink }: Props) {
  return (
    <div
      className="my-2"
      data-aos="zoom-ou"
      data-aos-duration="1500"
      data-aos-delay="200"
    >
      <h1 className="text-maastricht text-base lg:text-lg font-extrabold">
        {title}
      </h1>
      <Link
        href={`${url}`}
        className="text-bluet text-sm lg:text-base font-semibold "
      >
        {textLink || "Ver todos"}
      </Link>
    </div>
  );
}

export default TitleLink;
