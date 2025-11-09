import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Celebrate Creativity",
      subtitle: "Explore stunning artworks from creators worldwide.",
      image: "https://i.ibb.co/tpg56kLt/art-banner1.jpg",
      btnText: "Explore Art",
      btnLink: "/explore",
    },
    {
      id: 2,
      title: "Share Your Masterpiece",
      subtitle: "Upload your art and get the recognition you deserve.",
      image: "https://i.ibb.co/BVN8MGnt/art-banner2.jpg",
      btnText: "Upload Now",
      btnLink: "/add-artwork",
    },
    {
      id: 3,
      title: "Connect Through Art",
      subtitle: "Discover, appreciate, and connect with fellow artists.",
      image: "https://i.ibb.co/B2wk3kv1/art-banner3.jpg",
      btnText: "Join Community",
      btnLink: "/login",
    },
  ];

  return (
    <div className="mt-20">
      <section className="relative w-11/12 mx-auto rounded-2xl overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-[480px] md:h-[520px]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative w-full h-full flex items-center justify-center text-center bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
                <div className="relative z-10 text-white max-w-2xl px-6">
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-6 text-gray-200">
                    {slide.subtitle}
                  </p>
                  <a
                    href={slide.btnLink}
                    className="inline-block px-7 py-3 bg-primary hover:bg-secondary rounded-full font-semibold transition duration-300"
                  >
                    {slide.btnText}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Banner;
