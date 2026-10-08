"use client";

import { motion } from 'framer-motion';
import { Trophy, Star, Users, Medal, ExternalLink } from 'lucide-react';

const achievements = [
  {
    title: "2x ICPC Regionalist '25",
    icon: Trophy,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    description: "Led a 3-member team to qualify for ICPC Onsite Regionals at Chennai (Rank 48) and Amritapuri (Rank 157) out of 2,930 teams nationwide."
  },
  {
    title: "Meta HackerCup 2025",
    icon: Medal,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    description: "Qualified Round 1 with Global Rank 1856."
  },
  {
    title: "IICPC CodeFest '25",
    icon: Star,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    description: "Secured 1124th place in the Prelims out of 20,000+ participants."
  },
  {
    title: "DSA Department Mentor",
    icon: Users,
    color: "text-green-400",
    bg: "bg-green-400/10",
    description: "Google Developer Group, NSUT. Developed an algorithm optimization framework adopted by 10% of the training cohort."
  }
];

const cpProfiles = [
  {
    name: 'Codeforces',
    rank: 'Expert',
    rating: '1746',
    peak: '596',
    url: 'https://codeforces.com/profile/NottieCat',
    color: 'from-blue-500 to-indigo-600',
    shadow: 'hover:shadow-blue-500/20'
  },
  {
    name: 'LeetCode',
    rank: 'Guardian',
    rating: '2188',
    peak: '144',
    url: 'https://leetcode.com/u/nottiecat/',
    color: 'from-orange-400 to-red-500',
    shadow: 'hover:shadow-orange-500/20'
  },
  {
    name: 'CodeChef',
    rank: '4-Star',
    rating: '1939',
    peak: '123',
    url: 'https://www.codechef.com/users/nottiecat',
    color: 'from-amber-700 to-yellow-600',
    shadow: 'hover:shadow-yellow-600/20'
  }
];

export default function CompetitiveProgrammingSection() {
  return (
    <section id="achievements" className="py-24 sm:py-32 relative z-10 bg-black/60">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white inline-block mb-2">
            Achievements & CP
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full mb-4"></div>
          <p className="mx-auto max-w-[700px] text-slate-400 text-lg">
            A track record of algorithmic problem solving and competitive excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: CP Profiles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Star className="text-yellow-400 h-6 w-6" /> Profiles
            </h3>
            {cpProfiles.map((profile, idx) => (
              <motion.a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                key={profile.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`block relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all duration-300 hover:scale-[1.02] ${profile.shadow} shadow-lg group`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${profile.color}`} />
                <div className="p-6 pl-8 flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {profile.name}
                    </h4>
                    <p className="text-slate-400 font-medium mt-1">
                      {profile.rank} <span className="mx-2 opacity-50">•</span> Max Rating: {profile.rating}
                    </p>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${profile.color} text-white shadow-md`}>
                      Peak Rank #{profile.peak}
                    </span>
                    <ExternalLink className="h-5 w-5 text-slate-500 mt-2 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right: Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Trophy className="text-blue-400 h-6 w-6" /> Milestones
            </h3>
            <div className="relative border-l border-slate-800 ml-4 space-y-8 pb-4">
              {achievements.map((achievement, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative pl-8"
                >
                  <div className={`absolute -left-[20px] top-1 p-2 rounded-full bg-slate-900 border border-slate-700 ${achievement.color} ${achievement.bg} shadow-xl z-10`}>
                    <achievement.icon className="h-5 w-5" />
                  </div>
                  <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800/50 hover:border-slate-700 transition-colors">
                    <h4 className="text-lg font-bold text-slate-200 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
