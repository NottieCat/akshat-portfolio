"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Aeternum',
    description: 'AI-powered healthcare platform for early diagnosis and integrated care',
    longDescription: 'Aeternum is an AI-powered healthcare platform designed to detect chest and heart diseases early using machine learning. It combines advanced diagnostics with hospital and ambulance management, teleconsultation, and secure data handling to improve patient care and enable timely medical intervention.',
    image: '/aeternum.png',
    aiHint: 'abstract data',
    tags: ['Next.js', 'TypeScript', 'AI', 'Python', 'Firebase', 'MongoDB', 'Javascript', 'Flask', 'FastAPI', 'JWT'],
    liveUrl: 'https://aeternum-ex.vercel.app/',
    githubUrl: 'https://github.com/NottieCat/aeternum-ex',
  },
  {
    id: 2,
    title: 'E-Commerce Fusion',
    description: 'A modern, headless e-commerce solution for startups.',
    longDescription: 'E-Commerce Fusion is a high-performance online store built with a headless architecture for maximum flexibility. It integrates with various payment gateways and CMS platforms, offering a seamless shopping experience for customers and easy management for owners.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'online shopping',
    tags: ['React', 'Node.js', 'GraphQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'Projects, Skills & Experience in One Place',
    longDescription: 'Showcasing my projects, skills, and experiences with smooth animations, modern UI, and a dark-themed aesthetic.',
    image: '/portfolio.png',
    aiHint: 'mobile interface',
    tags: ['Next.js', 'Typescript'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/30">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="space-y-6 text-center mb-12">
          <h2 className="section-title">My Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <div
                className={`transition-all duration-500 ease-out hover:!opacity-100 hover:scale-105 group-hover:opacity-50`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="h-full flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-primary/20 hover:shadow-lg">
                  <CardHeader>
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={project.aiHint}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <DialogTrigger asChild>
                      <Button className="w-full">View Details</Button>
                    </DialogTrigger>
                  </CardFooter>
                </Card>
              </div>

              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={project.aiHint}
                    />
                  </div>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <DialogDescription className="pt-4 text-base">
                    {project.longDescription}
                  </DialogDescription>
                </DialogHeader>
                <div className="flex gap-4 pt-4">
                  <Button asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="secondary" className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
