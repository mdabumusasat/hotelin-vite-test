import React from "react";
import galleryThumb1 from "../../assets/images/gallery/gallery-thumb1.jpg";
import galleryThumb2 from "../../assets/images/gallery/gallery-thumb2.jpg";
import galleryThumb3 from "../../assets/images/gallery/gallery-thumb3.jpg";
import galleryThumb4 from "../../assets/images/gallery/gallery-thumb4.jpg";
import galleryThumb5 from "../../assets/images/gallery/gallery-thumb5.jpg";
import galleryThumb6 from "../../assets/images/gallery/gallery-thumb6.jpg";
import galleryThumb7 from "../../assets/images/gallery/gallery-thumb7.jpg";
import galleryMainThumb from "../../assets/images/gallery/gallery-main-thumb.jpg";

// Side Gallery Images Data
const sideGalleryImages = [
  {
    id: 1,
    className: "gallery-thumb-inner-1 d-none d-xl-block",
    src: galleryThumb1,
    alt: "Gallery thumbnail 1",
  },
  {
    id: 2,
    className: "gallery-thumb-inner-2 d-none d-xl-block",
    src: galleryThumb2,
    alt: "Gallery thumbnail 2",
  },
  {
    id: 3,
    className: "gallery-thumb-inner-3 d-none d-xl-block",
    src: galleryThumb3,
    alt: "Gallery thumbnail 3",
  },
  {
    id: 4,
    className: "gallery-thumb-inner-4 d-none d-xl-block",
    src: galleryThumb4,
    alt: "Gallery thumbnail 4",
  },
  {
    id: 5,
    className: "gallery-thumb-inner-5 d-none d-xl-block",
    src: galleryThumb5,
    alt: "Gallery thumbnail 5",
  },
  {
    id: 6,
    className: "gallery-thumb-inner-6 d-none d-xl-block",
    src: galleryThumb6,
    alt: "Gallery thumbnail 6",
  },
  {
    id: 7,
    className: "gallery-thumb-inner-7 d-none d-xl-block",
    src: galleryThumb7,
    alt: "Gallery thumbnail 7",
  },
];

const GallerySection = () => {
  return (
    <div className="gallery-area text-center">
      <div className="gallery-thumb-wrap position-relative">
        {sideGalleryImages.map((image) => (
          <div key={image.id} className={image.className}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}

        <div className="gallery-thumb">
          <img
            src={galleryMainThumb}
            alt="Main gallery image"
          />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;