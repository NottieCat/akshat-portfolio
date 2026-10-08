"use client";

import { Code2, Braces, Database, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['C', 'C++', 'JavaScript', 'Python', 'SQL'],
    color: 'from-blue-400 to-cyan-400'
  },
  {
    title: 'Frontend & Backend',
    icon: Braces,
    skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
    color: 'from-purple-400 to-pink-400'
  },
  {
    title: 'Databases & Systems',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Convex DB'],
    color: 'from-emerald-400 to-teal-400'
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code'],
    color: 'from-orange-400 to-rose-400'
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white inline-block mb-2">
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="mx-auto max-w-[700px] text-slate-400 text-lg">
            Technologies I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl z-0" />
              <div className="relative h-full bg-slate-950/80 backdrop-blur-sm p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center z-10">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-slate-800/50 hover:bg-slate-700/80 border border-slate-700/50 text-slate-300 hover:text-white text-sm rounded-lg transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
