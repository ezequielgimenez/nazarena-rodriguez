"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import Image from "next/image";
// import Loading from "@/app/loading";
//hook

const content = {
  hero: {
    titulo: "Nutrición y bienestar",
    subtitulo: "Rendimiento, salud digestiva y hábitos saludables.",
    subtitulo2:
      "Acompañamiento nutricional personalizado, basado en evidencia científica, desde una mirada integral.",
    imagenes: [
      "/carrusel/carrusel1.webp",
      "/carrusel/carrusel2.webp",
      "/carrusel/carrusel3.webp",
    ],
    imagenesMobile: [
      "/carrusel/carrusel-mobile1.webp",
      "/carrusel/carrusel-mobile2.webp",
      "/carrusel/carrusel-mobile3.webp",
    ],
  },
};

export default function HeroSectionComp() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  //   if (!content) return <Loading></Loading>;

  return (
    <div ref={emblaRef} className="relative overflow-hidden">
      <div className="flex">
        {content.hero.imagenes.map((_, index) => {
          const desktopImg = content.hero.imagenes[index];
          const mobileImg = content.hero.imagenesMobile[index];

          const isFirst = index === 0;

          return (
            <div
              key={index}
              className="relative min-w-full h-[85vh] sm:h-[80vh] md:h-[90vh] xl:h-[650px]"
            >
              {/* Desktop */}
              <Image
                src={desktopImg}
                alt="Hero"
                fill
                sizes="100vw"
                className="hidden lg:block object-cover"
                priority={isFirst}
                fetchPriority={isFirst ? "high" : "auto"}
              />

              {/* Mobile (LCP real en mobile) */}
              <Image
                src={mobileImg}
                alt="Hero"
                fill
                sizes="100vw"
                className="block lg:hidden object-cover"
                priority={isFirst}
                fetchPriority={isFirst ? "high" : "auto"}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          );
        })}
      </div>

      {/* Texto */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 pt-30  xs:pb-6.5 lg:pb-0">
        <h1
          className="
    font-sans font-light leading-tight
    text-white 
    xs:text-[64px]
    sm:text-4xl
    md:text-5xl
    lg:text-[72px]
    max-w-xs sm:max-w-md md:max-w-2xl
  "
        >
          {content.hero.titulo}
        </h1>

        <p
          className="
                  xs:mt-12.25 sm:mt-6
                   sm:text-lg md:text-xl
                  text-[#D0DBCB]
                  font-sans font-light
                  text-[24px]
                  max-w-xs sm:max-w-md
                "
        >
          {content.hero.subtitulo}
        </p>

        <p
          className="
                  xs:mt-2.5 sm:mt-6 lg:mb-6
                   sm:text-lg md:text-xl
                  text-white
                  font-sans font-light
                  text-[18px]
                  max-w-xs sm:max-w-md
                "
        >
          {content.hero.subtitulo2}
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 xs:mt-6.5 lg:mt-0 ">
          <a href="#planes">
            <button
              className="
                    w-40
                    px-6 py-3
                    bg-white
                    rounded-full
                    text-[#4A5048]
                    cursor-pointer
                    font-sans font-bold
                    transition-colors duration-500 ease-in-out
                    hover:bg-gray-300
                    transition
                  "
            >
              Ver planes
            </button>
          </a>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-0 pb-4 left-1/2 -translate-x-1/2  flex gap-3 z-30 ">
        {content.hero.imagenes.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-white scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
