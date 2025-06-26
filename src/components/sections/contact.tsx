"use client"

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/30">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="space-y-6 text-center mb-12">
          <h2 className="section-title">Connect with Me</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            I'm always open to connecting with like-minded people. Find me on GitHub and LinkedIn.
          </p>
        </div>
        <div className="mx-auto max-w-xl">
           <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="https://github.com/NottieCat" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full w-16 h-16 hover:bg-accent/50 hover:-translate-y-1 transition-transform duration-300">
                <Github className="h-8 w-8" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/akshat2005/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full w-16 h-16 hover:bg-accent/50 hover:-translate-y-1 transition-transform duration-300">
                <Linkedin className="h-8 w-8" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
