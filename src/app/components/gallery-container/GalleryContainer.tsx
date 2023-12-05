"use client";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import { vanguard } from "@/app/fonts";

const imageUrls: string[] = [
  "/images/Ai_Environment_2.png",
  "/images/AIforgas.0123.png",
  "/images/Ezdan_Concept_V2png.png",
  "/images/game-mechanism-bg.jpg",
  "/images/human_copy.jpg",
  "/images/landing-bg.png",
  "/images/nft-bg.png",
  "/images/roadmap-bg.png",
  "/images/roadmap-phase-0-bg.jpg",
  "/images/roadmap-phase-1-bg.png",
  "/images/roadmap-phase-2-bg.png",
  "/images/tokenomics-bg.png",
  "/images/whitepaper-bg.png",
];

const sliderOptions: SwiperProps = {
  slidesPerView: 0,
  navigation: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
};

const GalleryContainer = () => {
  return (
    <section className="relative h-screen w-full pb-16 lg:pt-[15vh]">
      <h2
        className={`absolute left-6 top-8 z-20 lg:-top-4 lg:left-[10%] ${vanguard.className} text-shadow text-6xl text-dystopi-black md:text-7xl lg:text-9xl 4xl:text-[12rem]`}
      >
        GALLERY
      </h2>
      <Swiper
        className="h-full w-full"
        initialSlide={1}
        modules={[Navigation, Autoplay]}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        {imageUrls.map((imageUrl: string, index: number) => (
          <SwiperSlide key={index}>
            <Image
              src={imageUrl}
              fill
              sizes="100vw"
              className="object-contain"
              alt="dystopi gallery image"
            />
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </section>
  );
};

export default GalleryContainer;
