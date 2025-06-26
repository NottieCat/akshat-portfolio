"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function HeroSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="hero" className="relative flex min-h-screen w-full items-center justify-center bg-transparent">
      <div
        ref={ref}
        className={`container mx-auto flex flex-col items-center justify-center gap-6 px-4 text-center md:px-6 transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl glow-text">
          Akshat Jain
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Full-Stack Developer | Competitive Programmer | AI Enthusiast
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
            <a href="/MYRESUME.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="transition-transform duration-300 hover:scale-105">
            <Link href="#contact">
              <Send className="mr-2 h-5 w-5" />
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
