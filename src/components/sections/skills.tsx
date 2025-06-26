"use client";

import { Code, Database, Wind, Cloud, GitBranch, TerminalSquare, Figma, Smartphone } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

const skills = [
  { name: 'JavaScript', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'React', icon: Smartphone },
  { name: 'Next.js', icon: Smartphone },
  { name: 'Node.js', icon: TerminalSquare },
  { name: 'Python', icon: Code },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'SQL & NoSQL', icon: Database },
  { name: 'Docker', icon: TerminalSquare },
  { name: 'Git & GitHub', icon: GitBranch },
  { name: 'Firebase', icon: Cloud },
  { name: 'Figma', icon: Figma },
];

const ReactIcon = (props: LucideProps) => (
  <svg {...props} viewBox="-11.5 -10.23174 23 20.46348">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

skills[2].icon = ReactIcon as ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
skills[3].icon = ReactIcon as ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;


export default function SkillsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="space-y-6 text-center mb-12">
          <h2 className="section-title">My Technical Skills</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A selection of technologies and tools I'm proficient in.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Card className="text-center group transition-all duration-300 hover:bg-accent/50 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20">
                <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
                  <skill.icon className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-125" />
                  <p className="font-semibold text-sm">{skill.name}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
