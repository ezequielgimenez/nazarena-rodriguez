import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
const contacto = [
  {
    imagen: "/icons/instagram.png",
    texto: "@LIC.NAZARENA.RODRIGUEZ",
    link: "https://www.instagram.com/lic.nazarena.rodriguez/",
  },
  {
    imagen: "/icons/email.png",
    texto: "LIC.NAZARENA.RODRIGUEZ@GMAIL.COM",
    link: "mailto:lic.nazarena.rodriguez@gmail.com",
  },
  {
    imagen: "/icons/telefono.png",
    texto: "+54 351-5050001",
    link: "https://wa.link/pgsn7c",
  },
];

export default function ContactComp() {
  return (
    <div id="contacto" className="bg-[#F0EFEA]">
      <div className="flex flex-col items-center pt-[50px] pb-[80px]">
        <Link href="/">
          <Image
            src="/logo/logo-footer.png"
            alt="logo"
            width={113}
            height={116}
            unoptimized
            priority
            className="cursor-pointer"
          />
        </Link>

        <h3 className="font-sans font-semibold text-[36px] text-[#4A5048] text-center pt-[57px]">
          CONTACTO
        </h3>

        <div className="flex justify-center items-center w-full max-w-[900px] flex-col lg:flex-row gap-[46px] pt-[40px]">
          {contacto.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer transition-all duration-300 ease-out "
            >
              <div
                className="w-[260px] flex flex-col items-center gap-[17px] 
              transition-transform duration-500 ease-out
              group-hover:-translate-y-1 group-hover:scale-[1.01]"
              >
                <div
                  className="rounded-full p-3
                  transition-shadow duration-500 ease-out
                  group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)]"
                >
                  <Image
                    src={item.imagen}
                    alt={`icono ${index}`}
                    width={68}
                    height={68}
                    unoptimized
                    priority
                  />
                </div>

                <p className="font-sans font-bold text-[12px] text-[#4A5048] tracking-[1.2px] text-center break-words">
                  {item.texto}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="w-[300px] sm:w-[500px] md:w-[600px] xl:w-[1200px] h-px bg-[#4A5048]/10 mt-[60px] "></div>
        <p className="font-sans font-light text-[14px] text-[#757575] text-center pt-8">
          © 2026 Lic. Nazarena Rodriguez MP 4849 - Nutricionista. <br /> Todos
          los derechos reservados. <br /> Desarrollado por{" "}
          <a
            href="https://www.egsitios.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="
            font-normal
            text-[#757575]
            hover:text-black
            underline
            underline-offset-4
            decoration-transparent
            hover:decoration-black
            transition-all
            duration-300
          "
          >
            EG Sitios.
          </a>
        </p>
      </div>
    </div>
  );
}
//
