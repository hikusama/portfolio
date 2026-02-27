'use client';
import HeaderNav from './headerNav';
import About from "@/components/about";
import { useState } from "react";
import SkillsAndTech from "@/components/skillsAndTech";
import FeaturedProjects from "@/components/featuredProjects";
import EducationCerts from "@/components/educationCerts";
import Contact from "@/components/contact";

export default function Home() {
  const [isPlayed, setIsPlayed] = useState<boolean>(false);

  return (
    <main className="bg-[#0a0a0a] text-[#e8e8e8]">
      <HeaderNav isPlayed={isPlayed} setIsPlayed={setIsPlayed} />
      <About isPlayed={isPlayed} setIsPlayed={setIsPlayed} />
      <SkillsAndTech isPlayed={isPlayed} />
      <FeaturedProjects />
      <EducationCerts />
      <Contact />
    </main>
  );
}
