import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import CompetitiveProgrammingSection from '@/components/sections/competitive-programming';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CompetitiveProgrammingSection />
      <ContactSection />
    </>
  );
}
