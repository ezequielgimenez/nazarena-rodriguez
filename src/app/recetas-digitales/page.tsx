import Image from "next/image";

const imagenes = [
  "/recetarios/recetario1.png",
  "/recetarios/recetario2.png",
  "/recetarios/recetario3.png",
  "/recetarios/recetario4.png",
  "/recetarios/recetario5.png",
  "/recetarios/recetario6.png",
  "/recetarios/recetario7.png",
  "/recetarios/recetario8.png",
  "/recetarios/recetario9.png",
];

export default function RecetariosPage() {
  return (
    <div>
      <div className="flex flex-col bg-white pb-16">
        {/* contenedor titulos y subtitulos, flecha  */}
        <div className="pt-[96px] px-[20px] sm:px-[40px] md:px-[60px] lg:px-[120px] ">
          <p className="font-sans font-bold text-[12px] text-[#6B7268] tracking-[0.15em]">
            RECETARIOS
          </p>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end ">
            <h3 className="font-sans font-normal text-[36px] text-[#4A5048] pt-6 text-left">
              Recetas Digitales
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[300px] sm:w-[500px] md:w-[600px] xl:min-w-[1200px] bg-[#e4e2e2] h-px mt-[40px]"></div>

          {/* Container cards  */}
          <div className="flex justify-center gap-[48px] flex-wrap xs:flex-col lg:flex-row pt-[35px] px-6">
            {imagenes?.map((img, index) => (
              <div
                key={index}
                className="w-[276px] h-[458px] bg-[#F0EFEA]/70 rounded-[10px]
                transition-transform duration-300 ease-out hover:scale-[1.02]"
              >
                <Image
                  src={img}
                  alt={"recetario " + index}
                  width={276}
                  height={368}
                  unoptimized
                  priority
                />
                <div className="flex justify-between px-[15px] pt-[48px] ">
                  <p className="font-sans font-bold text-[18px] text-[#4A5048] ">
                    $5.000
                  </p>
                  <a
                    href="https://wa.link/m4ud3p"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="
                    w-[114px]
                    h-[34px]
                    px-6 py-2
                    border border-[#4A5048]
                    text-[#4A5048]
                    text-[12px]
                    font-sans font-bold
                    cursor-pointer
                    transition-colors duration-500 ease-in-out
                    hover:bg-gray-200
                  "
                    >
                      COMPRAR
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
