"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const experiences = [
    {
      role: "Software Development Engineer Intern",
      company: "Thales",
      duration: "May 2026 - Jul 2026",
      details: [
        "Engineered an OpenSSL script pack to automate AES workflows, reducing testing time by 30%.",
        "Implemented RSA and ECDSA key-pair generation with digital signatures and HMAC checks.",
        "Validated data authenticity across 15+ test files, strengthening cryptographic pipelines.",
        "Built tamper-detection demos by analyzing signature verification failures on modified content."
      ]
    }
  ];

  const education = [
    {
      course: "B.Tech (Electrical Engineering)",
      institution: "Netaji Subhas University of Technology",
      score: "6.71 CGPA",
      year: "2027"
    },
    {
      course: "Class XII",
      institution: "Ch. Chhabil Dass Public School",
      score: "83.6%",
      year: "2023"
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 inline-block">
            About & Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left Column: About & Education */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative group w-full max-w-sm mx-auto lg:mx-0 mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-500 z-10 rounded-2xl"></div>
                <Image
                  src="/mypic.jpeg"
                  alt="Akshat Jain"
                  width={400}
                  height={400}
                  className="object-cover transition-transform duration-700 group-hover:scale-110 w-full h-auto rounded-2xl grayscale group-hover:grayscale-0"
                />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a full-stack developer and competitive programmer specializing in building high-performance systems and interactive web applications. 
                With a deep passion for algorithms and data structures, I love solving complex problems and optimizing code for scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <span className="text-cyan-400">#</span> Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-cyan-500/30">
                    <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>
                    <h4 className="text-lg font-semibold text-slate-200">{edu.course}</h4>
                    <p className="text-purple-400 text-sm font-medium">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-1 text-sm text-slate-400">
                      <span>{edu.year}</span>
                      <span className="bg-slate-800 px-2 py-0.5 rounded text-xs">{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Experience */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                <span className="text-purple-400">#</span> Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
                        <div>
                          <h4 className="text-xl font-bold text-slate-100">{exp.role}</h4>
                          <p className="text-cyan-400 font-medium text-lg">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-sm border border-purple-500/20 whitespace-nowrap">
                          {exp.duration}
                        </span>
                      </div>
                      <ul className="space-y-3 mt-4">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                            <span className="text-cyan-500 mt-1.5 shrink-0">▹</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
