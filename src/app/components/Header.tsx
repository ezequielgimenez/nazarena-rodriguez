"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function HeaderComp() {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header>
      <div className="lg:hidden relative flex items-center bg-white h-22.5 px-4">
        {/* Burger */}
        <button onClick={openNav} className="z-10">
          <Image
            src="/logo/burger-bar.png"
            alt="burger"
            width={35}
            height={35}
            priority
            unoptimized
          />
        </button>

        {/* Logo centrado real */}
        <div className="absolute left-1/2 -translate-x-1/2 pt-2">
          <Link href="/">
            <Image
              src="/logo/logo-mobile.png"
              alt="Logo"
              width={118}
              height={67}
              priority
              unoptimized
            />
          </Link>
        </div>
      </div>

      <div
        className={`
    fixed top-0 left-0 w-screen h-145 bg-[#737373]/93
    z-50 rounded-b-3xl
    flex flex-col items-center
    transition-all duration-300 ease-out
    ${
      showNav
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-6 pointer-events-none"
    }
  `}
      >
        <div className="flex w-full justify-between px-4 py-4">
          <div onClick={openNav}>
            <Image
              src="/logo/close.png"
              alt="Logo"
              width={24}
              height={24}
            ></Image>
          </div>
        </div>

        <Link
          className="py-8 text-[20px] font-sans font-semibold text-white"
          href="/#planes"
          onClick={openNav}
        >
          PLANES
        </Link>
        <Link
          className="py-8 text-[20px] font-sans font-semibold text-white"
          href="/#sobre-mi"
          onClick={openNav}
        >
          SOBRE MÍ
        </Link>
        <Link
          className="py-8 text-[20px] font-sans font-semibold text-white"
          href="/#recetarios"
          onClick={openNav}
        >
          RECETARIOS
        </Link>

        <Link
          className="py-8 text-[20px] font-sans font-semibold text-white"
          href="/#recursos"
          onClick={openNav}
        >
          RECURSOS
        </Link>
        <Link
          className="py-8 text-[20px] font-sans font-semibold text-white"
          href="/#contacto"
          onClick={openNav}
        >
          CONTACTO
        </Link>
      </div>

      <div className="hidden lg:flex justify-between bg-white h-24">
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Logo-Nazarena-Rodriguez"
              width={158}
              height={88}
              priority
              unoptimized
              className="p-2"
            />
          </Link>
        </div>

        <nav className="flex px-10">
          <ul className="flex justify-center items-center gap-12">
            <li>
              <Link
                className="font-sans font-semibold text-[#737373] text-[15px] cursor-pointer hover:text-[#A3A3A3] transition-colors duration-500 ease-in-out"
                href="/#planes"
              >
                PLANES
              </Link>
            </li>
            <li>
              <Link
                className="font-sans font-semibold text-[#737373] text-[15px] cursor-pointer hover:text-[#A3A3A3] transition-colors duration-500 ease-in-out"
                href="/#sobre-mi"
              >
                SOBRE MÍ
              </Link>
            </li>
            <li>
              <Link
                className="font-sans font-semibold text-[#737373] text-[15px] cursor-pointer hover:text-[#A3A3A3] transition-colors duration-500 ease-in-out"
                href="/#recetarios"
              >
                RECETARIOS
              </Link>
            </li>

            <li>
              <Link
                className="font-sans font-semibold text-[#737373] text-[15px] cursor-pointer hover:text-[#A3A3A3] transition-colors duration-500 ease-in-out"
                href="/#recursos"
              >
                RECURSOS
              </Link>
            </li>

            <li>
              <Link
                className="font-sans font-semibold text-[#737373] text-[15px] cursor-pointer hover:text-[#A3A3A3] transition-colors duration-500 ease-in-out"
                href="/#contacto"
              >
                CONTACTO
              </Link>
            </li>
            <li>
              <a
                className="
                    inline-flex items-center justify-center
                    px-5 py-3
                    bg-[#737373]
                    rounded-full
                    font-sans font-bold text-white text-[12px] cursor-pointer
                    transition-colors duration-300 ease-in-out 
                   hover:bg-[#8A8A8A]
                     "
                href="https://wa.link/20og9y"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESERVAR TURNO
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
