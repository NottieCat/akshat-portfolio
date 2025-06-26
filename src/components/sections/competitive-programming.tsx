"use client";

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, ChefHat, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const profiles = [
  {
    name: 'Codeforces',
    icon: Code2,
    url: 'https://codeforces.com/profile/NottieCat',
    description: 'Competitive programming platform with a focus on contests and problem solving.'
  },
  {
    name: 'CodeChef',
    icon: ChefHat,
    url: 'https://www.codechef.com/users/nottiecat',
    description: 'A platform for aspiring programmers to practice and compete in contests.'
  },
  {
    name: 'LeetCode',
    icon: Code2,
    url: 'https://leetcode.com/u/nottiecat/',
    description: 'The go-to platform for preparing for technical interviews at top companies.'
  },
];

export default function CompetitiveProgrammingSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="competitive-programming" className="py-24 sm:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="space-y-6 text-center mb-12">
          <h2 className="section-title">Competitive Programming</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            My profiles on various competitive programming platforms.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile, index) => (
            <div
              key={profile.name}
              className={`transition-all duration-500 ease-out hover:!opacity-100 hover:scale-105`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="h-full flex flex-col text-center overflow-hidden transition-shadow duration-300 hover:shadow-primary/20 hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full">
                    <profile.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="pt-4">{profile.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{profile.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <a href={profile.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Profile
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
