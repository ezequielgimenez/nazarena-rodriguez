import Image from "next/image";
export default function AboutMeComp() {
  return (
    <div
      id="sobre-mi"
      className="flex justify-center bg-[#F0EFEA] pt-[40px] lg:pt-[132px] pb-32 px-4"
    >
      <div
        className="flex flex-col lg:flex-row gap-[10px] lg:gap-[54px] w-full max-w-[1088px] bg-white border border-[#F5F5F4]
         shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),0px_8px_10px_-6px_rgba(0,0,0,0.10)]"
      >
        {/* contenedor imagenes */}
        <div
          data-aos="fade-up"
          className="flex flex-col lg:gap-[36px] py-[36px] lg:pl-[50px] items-center"
        >
          <Image
            src="/acercade/imagen-nutricionista-1.png"
            alt="carousel desktop"
            width={443}
            height={511}
            unoptimized
            priority
          />

          <Image
            src="/acercade/imagen-nutricionista-2.png"
            alt="carousel desktop"
            width={404}
            height={492}
            className="hidden lg:block lg:pl-[50px]"
            unoptimized
            priority
          />
        </div>

        <div className="lg:pt-[36px] px-5">
          <p
            data-aos="fade-up"
            className="font-sans font-bold text-[12px] text-[#6B7268] tracking-[0.15em]"
          >
            SOBRE MÍ
          </p>
          <h3
            data-aos="fade-up"
            className="font-sans font-normal text-[36px] text-[#4A5048] pt-6 text-center lg:text-left"
          >
            ¡Hola! Soy Nazarena Rodriguez
          </h3>
          <div className="w-[48px] h-px bg-[#4A5048]/60 mt-6 xs:mx-auto lg:mx-0"></div>
          <div data-aos="fade-up" className="w-full lg:w-[525px]">
            <p className="font-sans font-light text-[#757575] text-[18px] pt-[13px] text-justify">
              Soy Nazarena Rodríguez, Licenciada en Nutrición, egresada de la
              Universidad Nacional de Córdoba, MP 4849 . Me especializo en
              Nutrición Deportiva, Patologías Digestivas y Trastornos de la
              Conducta Alimentaria, áreas en las que me formé a través de
              posgrados y diplomaturas en instituciones como UNC, Conceptual
              Capacitaciones, CEDA, SANC y Sensus, ABND.
            </p>
            <p className="font-sans font-light text-[#757575] text-[18px] pt-[24px] text-justify">
              Además, soy antropometrista ISAK nivel I, lo que me permite
              realizar evaluaciones precisas bajo protocolo internacional.
            </p>
            <p className="font-sans font-light text-[#757575] text-[18px] pt-[24px] text-justify">
              Desde que comencé a ejercer, acompaño a mis consultantes con el
              objetivo de mejorar su calidad de vida, desde una mirada integral
              y personalizada, entendiendo que la nutrición va mucho más allá de
              la alimentación. Mi enfoque se centra en el bienestar físico y
              emocional, el respeto por los procesos individuales y la
              construcción de hábitos sostenibles en el tiempo, basados en la
              evidencia científica y libres de restricciones innecesarias.
            </p>
            <p className="font-sans font-light text-[#757575] text-[18px] pt-[24px] text-justify">
              Trabajo desde un abordaje actualizado, individualizado y basado en
              evidencia científica, adaptando cada plan a las necesidades,
              objetivos y contexto de cada persona. Mi objetivo es acompañarte a
              mejorar tu relación con la comida, tu salud y tu rendimiento, de
              manera realista y sostenible. Podes agendar tu turno online o
              presencial en Córdoba Capital o Villa Carlos Paz.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col lg:hidden py-[10px] lg:pl-[50px] items-center"
        >
          <Image
            src="/acercade/imagen-nutricionista-2.png"
            alt="carousel desktop"
            width={404}
            height={492}
            unoptimized
            priority
          />
        </div>
      </div>
    </div>
  );
}
