"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send, Github, Linkedin, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="hero" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 text-center md:px-6 relative z-10"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
          Software Development Engineer
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              Akshat
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Jain
            </span>
          </h1>
        </motion.div>

        <motion.p variants={itemVariants} className="max-w-[700px] text-lg text-slate-300 md:text-xl font-light">
          Building high-performance systems and solving complex algorithmic challenges. 
          Expert in competitive programming and scalable full-stack development.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <a href="#projects">
              <Terminal className="mr-2 h-5 w-5" />
              View Projects
            </a>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 text-purple-100 transition-all duration-300 hover:scale-105">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5 text-purple-400" />
              Resume
            </a>
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-6 mt-8">
          <Link href="https://github.com/akshat-jain" target="_blank" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <Github className="h-7 w-7" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/akshat-jain" target="_blank" className="text-slate-400 hover:text-[#0A66C2] transition-colors hover:scale-110 transform duration-200">
            <Linkedin className="h-7 w-7" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:email@example.com" className="text-slate-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200">
            <Send className="h-7 w-7" />
            <span className="sr-only">Email</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-0"></div>
    </section>
  );
}
