import Image from "next/image";
import { navItems } from "../data";
import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FloatingNav";
import Grid from "../components/Grid";
import { Bio } from "../components/Bio";
import RecentProjects from "../components/RecentProjects";
import Heados from "../components/Heados";

import Experience from "../components/Experience";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center
    flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Bio/>
        <RecentProjects/>
        <Experience/>
        <Footer/>
      </div>
    </main>
  );
}
