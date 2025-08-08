'use client'
import React, { useState } from "react";
// const CardImages = "/assets/images/thumbnail-w.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
// export const addTransformParam = (src) => {
//   return src?.length > 0 && src?.indexOf("?") === -1 ? "?t=w" : "&t=w";
// };

const LazyImage = ({ image }) => {
  const { src, alt } = image;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    < >
      <LazyLoadImage
        src={src}
        alt={alt ?? "Image Alt"}
        // placeholderSrc={CardImages}
        afterLoad={() => setIsLoaded(true)}
        threshold={500}
        loading="lazy"
        className={isLoaded ? "image-loaded" : "image-loading"}
      />
    </>
  );
};

export default LazyImage;
