"use client";

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative z-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white inline-block mb-2">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="mx-auto max-w-[700px] text-slate-400 text-lg">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-xl text-center"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-12 h-14 px-8 text-lg rounded-xl">
            <a href="mailto:email@example.com">
              <Send className="mr-2 h-5 w-5" /> Say Hello
            </a>
          </Button>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://github.com/NottieCat" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 border border-slate-800 group-hover:border-slate-600 group-hover:bg-slate-800 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                <Github className="h-8 w-8 text-slate-400 group-hover:text-white transition-colors" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/akshat2005/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 border border-slate-800 group-hover:border-[#0A66C2] group-hover:bg-[#0A66C2]/10 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(10,102,194,0.2)]">
                <Linkedin className="h-8 w-8 text-slate-400 group-hover:text-[#0A66C2] transition-colors" />
              </div>
            </a>
            <a href="mailto:email@example.com" className="group">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 border border-slate-800 group-hover:border-cyan-500 group-hover:bg-cyan-500/10 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(6,182,212,0.2)]">
                <Mail className="h-8 w-8 text-slate-400 group-hover:text-cyan-500 transition-colors" />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
