"use client";

import React, { Suspense, useState } from "react";
import Image from "next/image";

const ImageWithFallback = (props: any) => {
  const { src, fallbackSrc, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Suspense
      fallback={<div className="w-12 h-12 object-contain bg-black"></div>}
    >
      <Image
        alt={alt}
        className="w-12 h-12 object-contain"
        {...rest}
        src={imgSrc}
        onError={() => {
          setImgSrc(fallbackSrc);
        }}
      />
    </Suspense>
  );
};

export default ImageWithFallback;
