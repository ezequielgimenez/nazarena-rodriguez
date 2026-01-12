import HeroSectionComp from "./components/Hero";
import PlanesComp from "./components/Planes";
import AboutMeComp from "./components/AboutMe";
import RecetariosComp from "./components/Recetarios";
import RecursosComp from "./components/Recursos";
import ContactComp from "./components/Contact";

export default function Home() {
  return (
    <div>
      <HeroSectionComp />
      <PlanesComp />
      <AboutMeComp />
      <RecetariosComp />
      <RecursosComp />
    </div>
  );
}
