import Image from "next/image";

const recursos = [
  {
    imagen: "/icons/icon-recurso1.png",
    titulo: "Tracker de Hábitos",
    archivo: "/pdfs/Registro-de-hábitos.pdf",
  },
  {
    imagen: "/icons/icon-recurso2.png",
    titulo: "Recetas Express",
    archivo: "/pdfs/Recetas-express.pdf",
  },
];

const recursos2 = [
  {
    imagen: "/icons/icon-nutritivo.png",
    titulo: "Plato nutritivo",
    archivo: "/pdfs/Plato-nutritivo.pdf",
  },
  {
    imagen: "/icons/icon-recurso4.png",
    titulo: "Planificador Semanal",
    archivo: "/pdfs/Planificador-semanal.pdf",
  },
];

export default function RecursosComp() {
  return (
    <div id="recursos" className="bg-[#4A5048]">
      <div className="flex flex-col items-center pt-24 pb-24">
        <p
          data-aos="fade-up"
          className="font-sans font-bold text-[12px] text-[#F0EFEA]/60 tracking-[0.15em]"
        >
          RECURSOS
        </p>
        <h3
          data-aos="fade-up"
          className="font-sans font-normal text-[36px] text-white pt-3 text-center lg:text-left"
        >
          Recursos Gratuitos
        </h3>
        <div className="w-16 h-0.5 bg-[#FFFFFF]/20 mt-4 "></div>

        <div
          data-aos="fade-up"
          className="flex flex-col lg:flex-row gap-[24px] pt-24"
        >
          {recursos?.map((item, index) => (
            <a key={index} href={item.archivo} download className="block">
              <div
                className="flex items-center xs:justify-between lg:justify-start w-[356px] md:w-[488px] h-[106px]
                 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 px-[25px] 
                   cursor-pointer hover:bg-[#FFFFFF]/10 transition-colors duration-500 ease-in-out"
              >
                <Image
                  src={item.imagen}
                  alt="icon"
                  width={56}
                  height={56}
                  unoptimized
                  priority
                />
                <div className="flex flex-col pl-[24px]">
                  <p className="font-sans font-normal text-[20px] text-white pt-3">
                    {item.titulo}
                  </p>
                  <p className="font-sans font-normal text-[12px] text-[#FFFFFF]/50">
                    PDF
                  </p>
                </div>
                <div className="ml-auto">
                  <Image
                    src="/icons/download.png"
                    alt="download"
                    width={24}
                    height={28}
                    unoptimized
                    priority
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col lg:flex-row gap-[24px] pt-[24px] "
        >
          {recursos2?.map((item, index) => (
            <a key={index} href={item.archivo} download className="block">
              <div
                className="flex items-center xs:justify-between lg:justify-start w-[356px] md:w-[488px] h-[106px]
                 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 px-[25px] 
                   cursor-pointer hover:bg-[#FFFFFF]/10 transition-colors duration-500 ease-in-out"
              >
                <Image
                  src={item.imagen}
                  alt="icon"
                  width={56}
                  height={56}
                  unoptimized
                  priority
                />
                <div className="flex flex-col pl-[24px]">
                  <p className="font-sans font-normal text-[20px] text-white pt-3">
                    {item.titulo}
                  </p>
                  <p className="font-sans font-normal text-[12px] text-[#FFFFFF]/50">
                    PDF
                  </p>
                </div>
                <div className="ml-auto">
                  <Image
                    src="/icons/download.png"
                    alt="download"
                    width={24}
                    height={28}
                    unoptimized
                    priority
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
