"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'AUTOMATA',
    description: 'A Next.js & React Flow workflow builder accelerating pipeline deployment by 50%. Features real-time graph sync and advanced rate limiting.',
    bullets: [
      'Built a Next.js & React Flow workflow builder, accelerating pipeline deployment by 50%.',
      'Designed a serverless Convex DB backend for real-time graph sync, reducing data latency by 40%.',
      'Integrated Clerk billing and Arcjet rate limiting, shielding APIs from 100% of bot abuse.',
      'Built a node-to-JSON parser for complex HTTP requests, streaming responses in under 200ms.'
    ],
    tags: ['Next.js', 'React Flow', 'Convex DB', 'Clerk', 'Arcjet'],
    liveUrl: '#',
    githubUrl: 'https://github.com/NottieCat/automata',
    gradient: 'from-cyan-500/20 to-blue-600/20'
  },
  {
    id: 2,
    title: 'SUDOKU SOLVER',
    description: 'An advanced backtracking solver utilizing MRV heuristics and optimized data structures for lightning-fast puzzle resolution.',
    bullets: [
      'Refined a recursive backtracking algorithm with MRV heuristics, solving grids in under 0.5s.',
      'Optimized the validation engine for O(1) grid updates, pruning the state search tree by 60%.'
    ],
    tags: ['Backtracking', 'MRV Heuristic', 'Data Structures', 'C++'],
    liveUrl: '#',
    githubUrl: 'https://github.com/NottieCat/sudoku-solver',
    gradient: 'from-purple-500/20 to-pink-600/20'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative z-10 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 inline-block mb-2">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="mx-auto max-w-[700px] text-slate-400 text-lg">
            Engineering scalable applications and optimized algorithms.
          </p>
        </motion.div>

        <div className="grid gap-12 md:gap-16 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative grid md:grid-cols-2 gap-8 items-center bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Abstract Visual Placeholder */}
              <div className={`relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} border border-white/10 flex items-center justify-center`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
                <div className="text-5xl md:text-7xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-500 group-hover:scale-110 transform">
                  {project.title.substring(0,2)}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <ArrowRight className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 border border-white/5 hover:border-white/20">
                    <Github className="h-4 w-4" /> Code
                  </a>
                  {project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-100 bg-cyan-500/10 hover:bg-cyan-500/20 px-4 py-2 rounded-lg transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/40">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
