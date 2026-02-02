import Image from "next/image";

const contenido = [
  {
    imagenes: ["/planes/plan1-a.webp", "/planes/plan1-b.webp"],
    titulo: "Consulta Eventual",
    subtitulo: "DUDAS PUNTUALES",
    descripcion:
      "Ideal para quienes buscan una orientación puntual y personalizada, pensado para personas que necesitan una consulta única.",
    incluye: [
      "Consulta nutricional individual presencial o virtual",
      "Plan de alimentación 100% personalizado, adaptado a tus necesidades, gustos y rutina",
      "Guía alimentaria con recomendaciones claras",
      "Dos recetarios, con opciones simples, saludables y fáciles",
    ],
    modalidad:
      "Durante la consulta realizamos una evaluación integral, y a partir de allí, se diseña un plan personalizado.",
    recomendado: null,
    precio: "$30.000",
    link: "https://wa.link/qmfmuh",
  },

  {
    imagenes: ["/planes/plan2.webp"],
    titulo: "Antropometría",
    subtitulo:
      "EVALUACIÓN CORPORAL PRECISA BAJO PROTOCOLO INTERNACIONAL ISAK I",
    descripcion:
      "Este plan está orientado a quienes buscan conocer su composición corporal de manera objetiva, ya sea con fines deportivos, de salud o de seguimiento personal, sin incluir planificación alimentaria.",
    incluye: [
      "Evaluación antropométrica completa realizada bajo protocolo internacional ISAK nivel I",
      "Medición de pliegues cutáneos, perímetros, diámetros y peso",
      "Análisis de composición corporal (masa grasa, masa muscular, somatotipo)",
    ],
    modalidad: "Evaluación presencial",
    recomendado:
      "Personas que desean evaluar su estado corporal actual. Deportistas que necesitan un control preciso de su composición corporal. Seguimientos puntuales sin consulta nutricional",
    precio: "$29.000",
    link: "https://wa.link/br9vg0",
  },

  {
    imagenes: ["/planes/plan3-2.webp"],
    titulo: "Integral Nutrición + Antropometría",
    subtitulo: "EVALUACIÓN CORPORAL Y ACOMPAÑAMIENTO NUTRICIONAL.",
    descripcion:
      "Este plan combina una evaluación antropométrica completa con una consulta nutricional personalizada, ideal para quienes buscan un abordaje más profundo y preciso, ya sea con objetivos de salud, bienestar o rendimiento deportivo.",
    incluye: [
      "Consulta nutricional individual",
      "Evaluación antropométrica completa bajo protocolo internacional ISAK nivel I",
      "Análisis de composición corporal y explicación detallada de los resultados",
      "Plan de alimentación 100% personalizado, adaptado a objetivos, gustos y rutina",
      "Guía alimentaria práctica para el día a día",
      "2 Recetarios, con opciones simples y nutritivas",
    ],
    modalidad:
      "Presencial. Se realiza una evaluación completa inicial y, a partir de los resultados antropométricos y la entrevista nutricional, se diseña un plan personalizado.",
    recomendado:
      "Personas que buscan conocer su composición corporal y trabajar sobre ella de manera consciente. Deportistas que desean optimizar rendimiento y recuperación. Quienes prefieren un abordaje integral, con evaluación y planificación conjunta",
    precio: "$55.000",
    link: "https://wa.link/gvjo68",
  },

  {
    imagenes: ["/planes/plan4-2.webp"],
    titulo: "Seguimiento corto",
    subtitulo:
      "ACOMPAÑAMIENTO NUTRICIONAL CON EVALUACIÓN Y AJUSTES PERSONALIZADOS.",
    descripcion:
      "Este plan está diseñado para quienes buscan un seguimiento a corto plazo, con espacio para evaluar avances, realizar ajustes y sostener cambios.",
    incluye: [
      "Dos controles nutricionales",
      "Una evaluación antropométrica bajo protocolo internacional ISAK nivel I",
      "Análisis de composición corporal y explicación de resultados",
      "Ajustes personalizados del plan de alimentación, según evolución y objetivos",
      "Acompañamiento profesional durante el proceso",
    ],
    modalidad:
      "Durante los 45 días se realizan los controles pautados para evaluar avances, resolver dudas y adaptar el plan.",
    duracion: "Vigencia de 45 días desde la primera consulta",
    recomendado:
      "Personas que desean comenzar un proceso con seguimiento. Quienes buscan evaluar cambios corporales en un período definido. Deportistas o pacientes que necesitan ajustes progresivos.",
    precio: "$80.000",
    link: "https://wa.link/b46vb5",
  },

  {
    imagenes: [
      "/planes/plan5-a.webp",
      "/planes/plan5-b.webp",
      "/planes/plan5-c.webp",
    ],
    titulo: "Pro 3 Meses",
    subtitulo:
      "ACOMPAÑAMIENTO NUTRICIONAL INTEGRAL PARA UN PROCESO PERSONALIZADO.",
    descripcion:
      "Este plan está pensado para quienes buscan un trabajo a mediano plazo, con seguimiento, evaluación y ajustes progresivos, permitiendo consolidar hábitos y lograr cambios reales y sostenibles en el tiempo.",
    incluye: [
      "Tres consultas nutricionales (consulta inicial + 2 controles)",
      "Dos planes alimentarios 100% personalizados, adaptados a cada etapa del proceso",
      "Dos evaluaciones antropométricas bajo protocolo internacional ISAK nivel I",
      "Análisis de composición corporal y explicación clara de los resultados",
      "Guía alimentaria práctica para el día a día",
      "Dos recetarios",
    ],
    modalidad:
      "A lo largo de los tres meses se realizan evaluaciones y ajustes progresivos, combinando planificación nutricional y mediciones corporales.",
    duracion:
      "Vigencia de 3 meses desde la primera consulta, ideal una consulta al mes",
    recomendado:
      "Personas que buscan un acompañamiento continuo y profundo. Deportistas que desean mejorar rendimiento y composición corporal. Quienes necesitan tiempo y seguimiento para consolidar cambios de hábitos.",
    precio: "$135.000",
    link: "https://wa.link/x8cky6",
  },

  {
    imagenes: ["/planes/plan6-2.webp"],
    titulo: "Acompañamiento Nutricional 3 Meses",
    subtitulo:
      "SEGUIMIENTO PERSONALIZADO, SIN MEDICIONES CORPORALES, CENTRADO EN HÁBITOS Y BIENESTAR.",
    descripcion:
      "Este plan está diseñado para quienes buscan un proceso de acompañamiento nutricional continuo, con foco en la relación con la comida, la salud digestiva, el rendimiento o el bienestar general. Puede realizarse de manera presencial u online, adaptándose a las necesidades y disponibilidad de cada persona.",
    incluye: [
      "Cuatro consultas nutricionales distribuidas a lo largo de 3 meses",
      "Plan de alimentación 100% personalizado, con ajustes progresivos",
      "Revisión y adaptación del plan en cada consulta",
      "Guía alimentaria práctica",
      "Dos recetarios",
      "Acompañamiento profesional continuo durante el proceso",
    ],
    modalidad: "Online - Presencial",
    duracion: "Vigencia de 3 meses desde la primera consulta",
    recomendado:
      "Personas que prefieren un enfoque sin mediciones corporales. Procesos de cambio de hábitos y mejora de la relación con la comida. Patologías digestivas. Acompañamiento nutricional desde una mirada integral.",
    precio: "$110.000",
    link: "https://wa.link/in2xan",
  },
];

/////
export default function PlanesComp() {
  return (
    <div id="planes" className="pb-0 lg:pb-23">
      {/* container texto */}
      <div
        data-aos="fade-up"
        className="flex flex-col items-center pt-24 pb-16"
      >
        <p className="font-sans font-bold text-[12px] text-[#6B7268] tracking-[0.15em]">
          SERVICIOS
        </p>

        <h3 className="font-sans font-normal text-[48px] text-[#737373] pt-3">
          Mis planes
        </h3>

        <div className="w-16 h-0.5 bg-[#4A5048]/20 mt-6"></div>

        <p className="font-sans font-light text-[18px] text-[#757575] pt-6 text-center">
          Encontrá el plan que mejor se adapte a tus objetivos y estilo de vida.
        </p>
      </div>

      {/* container cards */}
      <div
        data-aos="fade-up"
        className="flex justify-center flex-wrap gap-15.75 "
      >
        {/* card */}
        {contenido
          ? contenido.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-[397px] h-auto lg:h-[1142px] flex flex-col rounded-[12px] border border-[#E7E5E4] 
                shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]
                transition-transform duration-300 ease-out hover:scale-[1.02]
                hover:shadow-[0px_14px_25px_-4px_rgba(0,0,0,0.12),0px_6px_10px_-6px_rgba(0,0,0,0.12)]"
              >
                {/* imagenes */}
                <div className="w-full h-[219px] rounded-t-[12px] flex">
                  {item.imagenes.length === 1 && (
                    <Image
                      src={item.imagenes[0]}
                      alt={item.titulo}
                      width={381}
                      height={219}
                      priority
                      unoptimized
                      className="rounded-t-[12px] select-none pointer-events-none"
                    />
                  )}

                  {item.imagenes.length === 2 && (
                    <div className="flex gap-1 px-1">
                      {item.imagenes.map((img, i) => (
                        <div key={i} className="relative w-1/2 h-full">
                          <Image
                            src={img}
                            alt={item.titulo}
                            width={185}
                            height={219}
                            priority
                            unoptimized
                            className="rounded-t-[12px] select-none pointer-events-none"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {item.imagenes.length === 3 && (
                    <>
                      {/* izquierda grande */}
                      <div className="relative w-1/2 h-[219px] overflow-hidden rounded-tl-[12px]">
                        <Image
                          src={item.imagenes[0]}
                          alt={item.titulo}
                          fill
                          sizes="50vw"
                          className="object-cover pr-1 select-none pointer-events-none"
                        />
                      </div>

                      {/* derecha 2 apiladas */}
                      <div className="w-1/2 h-[219px] flex flex-col gap-1">
                        {item.imagenes.slice(1).map((img, i) => (
                          <div
                            key={i}
                            className={`relative h-1/2 overflow-hidden ${
                              i === 0 ? "rounded-tr-[12px]" : ""
                            }`}
                          >
                            <Image
                              src={img}
                              alt={item.titulo}
                              fill
                              sizes="50vw"
                              className="object-cover select-none pointer-events-none"
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* container de todos los textos */}
                <div className="pl-[31px] flex flex-col h-full">
                  {/* CONTENIDO SUPERIOR */}
                  <div>
                    <h3 className="font-sans text-[24px] font-normal text-[#4A5048] pt-[24px]">
                      {item.titulo}
                    </h3>

                    <div className="w-[265px] ">
                      <p className="font-sans font-semibold text-[12px] text-[#6B7268] tracking-[0.04em] pt-[13px]">
                        {item.subtitulo}
                      </p>
                    </div>

                    <div className="w-[310px]">
                      <p className="font-sans font-light text-[14px] text-[#757575] pt-[13px]">
                        {item.descripcion}
                      </p>
                    </div>

                    <div className="w-[310px] bg-[#e4e2e2] h-px mt-[9px]" />

                    <div className="w-[313px] pt-[17px] space-y-2.25">
                      <p className="font-sans text-[#4A5048] text-[12px] font-bold pb-3">
                        INCLUYE:
                      </p>

                      {item.incluye?.map((i, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Image
                            src="/icons/check.png"
                            alt="check"
                            width={11}
                            height={8}
                            className="mt-[4px]"
                          />
                          <p className="font-sans font-light text-[14px] text-[#757575]">
                            {i}
                          </p>
                        </div>
                      ))}

                      <p className="font-sans font-light text-[14px] text-[#757575]">
                        <span className="text-[#4A5048] font-semibold">
                          Modalidad:
                        </span>{" "}
                        {item.modalidad}
                      </p>

                      {item.duracion ? (
                        <p className="font-sans font-light text-[14px] text-[#757575]">
                          <span className="text-[#4A5048] font-semibold">
                            Duración:
                          </span>{" "}
                          {item.duracion}
                        </p>
                      ) : (
                        ""
                      )}

                      {item.recomendado ? (
                        <p className="font-sans font-light text-[14px] text-[#757575]">
                          <span className="text-[#4A5048] font-semibold">
                            Recomendado:
                          </span>{" "}
                          {item.recomendado}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center gap-[90px] mt-auto xs:pt-8 lg:pt-0 pb-6">
                    <p className="text-[#4A5048] text-[30px]"> {item.precio}</p>

                    <a
                      href={item.link}
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
                        RESERVAR
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
