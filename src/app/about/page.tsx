"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  AcademicCapIcon,
  HeartIcon,
  StarIcon,
  TrophyIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const achievements = [
  " Provided one-on-one academic and personal guidance to 50+ students, fostering a growth mindset and disciplined study routines.",
  "Built a reputation for excellence with a 95% retention and satisfaction rate based on measurable student progress and parent feedback."

];

const values = [
  {
    icon: <HeartIcon className="w-8 h-8" />,
    title: "Passion for Teaching",
    description:
      "Teaching is not just my profession — it's my calling. I believe every child has the potential to shine.",
  },
  {
    icon: <StarIcon className="w-8 h-8" />,
    title: "Student-Centered Approach",
    description:
      "My teaching revolves around the needs of each student, adapting methods to ensure everyone can learn effectively.",
  },
  {
    icon: <TrophyIcon className="w-8 h-8" />,
    title: "Continuous Growth",
    description:
      "I actively pursue professional development and stay updated with the latest educational research and methodologies.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-500/5 via-transparent to-primary-400/10 dark:from-primary-500/10 dark:to-primary-400/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-6">
              <AcademicCapIcon className="w-4 h-4" />
              About Me
            </div>
            <h1 className="heading-primary mb-6">
              Meet <span className="text-primary-500">Ambreen jahan</span>
            </h1>
            <p className="text-lg text-body">
              A dedicated educator from Karachi with a deep passion for nurturing
              young minds and making education accessible, engaging, and
              meaningful for every student.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-primary-500/10 rounded-3xl" />
                <div className="relative glass-card p-8 sm:p-10">
                  <h2 className="heading-secondary mb-6">My Teaching Journey</h2>
                  <div className="space-y-4 text-body">
                    <p>
                      My journey into education began with a simple belief: every
                      child deserves a chance to learn, grow, and discover their
                      potential. Growing up in Karachi, I witnessed firsthand how
                      quality education can transform lives.
                    </p>
                    <p>
                      Over the past five years, I have had the privilege of
                      teaching across multiple grade levels, working with diverse
                      groups of students, and continuously refining my approach to
                      meet the evolving needs of modern learners.
                    </p>
                    <p>
                      I specialize in creating interactive, student-centered
                      lessons that go beyond textbooks. Whether it&apos;s through
                      hands-on experiments, collaborative projects, or
                      technology-enhanced learning, I strive to make every class
                      session memorable and impactful.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="heading-secondary mb-6">Key Achievements</h2>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex gap-3 items-start"
                    >
                      <CheckCircleIcon className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                      <p className="text-body">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="heading-secondary mb-4">My Teaching Philosophy</h2>
            <p className="text-body max-w-2xl mx-auto">
              I believe that education is the most powerful tool we can use to
              change the world. These values guide everything I do in the
              classroom.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.15}>
                <div className="glass-card p-8 text-center h-full group hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-primary-500/10 text-primary-500 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-body">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <blockquote className="text-center">
              <div className="text-6xl text-primary-500/20 font-serif mb-4">
                &ldquo;
              </div>
              <p className="text-xl sm:text-2xl font-light text-secondary-700 dark:text-secondary-300 italic leading-relaxed">
                The art of teaching is the art of assisting discovery. My goal is
                to light the spark of curiosity in every student and watch them
                illuminate the world.
              </p>
              <footer className="mt-6 text-primary-500 font-medium">
                — Ambreen Jahan
              </footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
