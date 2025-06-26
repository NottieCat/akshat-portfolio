"use client";

import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 sm:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex justify-center">
            <Image
              src="/mypic.jpeg"
              alt="Profile Picture"
              width={400}
              height={400}
              data-ai-hint="portrait professional"
              className="rounded-full object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <h2 className="section-title">About Me</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                I'm a full-stack developer with a deep love for competitive programming and a strong interest in AI. I enjoy building clean, user-friendly applications that are both functional and visually engaging.

Competitive programming is close to my heart — I love solving problems, optimizing code, and constantly improving my skills. Outside of coding, I explore new tech, contribute to open-source, and dive into the world of AI. I'm always eager to learn and take on new challenges.
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and diving into the fascinating world of AI. I'm always eager to learn and take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
