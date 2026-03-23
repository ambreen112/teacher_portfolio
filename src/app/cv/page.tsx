"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  DocumentArrowDownIcon,
  SparklesIcon,
  CommandLineIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";

const education = [
  {
    degree: "Master of Science (M.Sc.) – Biochemistry",
    institution: "University of Karachi",
    year: "",
    description:
      "Advanced study in biochemistry with focus on molecular biology and chemical processes.",
  },
  {
    degree: "Bachelor of Education (B.Ed.) – General Science, Chemistry",
    institution: "University of Karachi",
    year: "",
    description:
      "Specialized in teaching methodologies for general science and chemistry education.",
  },
  {
    degree: "Bachelor of Science (B.Sc.) – Biochemistry, Zoology, Botany",
    institution: "University of Karachi",
    year: "",
    description:
      "Comprehensive study of life sciences including biochemistry, zoology, and botany.",
  },
  {
    degree: "Intermediate (Pre-Medical)",
    institution: "Karachi Board",
    year: "",
    description:
      "Focused on biology, chemistry, and physics in preparation for medical sciences.",
  },
  {
    degree: "Matriculation (Science)",
    institution: "Karachi Board",
    year: "",
    description:
      "Foundation in science subjects including biology, chemistry, physics, and mathematics.",
  },
];

const experience = [
  {
    title: "Science Teacher",
    organization: "Private School, Karachi",
    period: "2025 - Present",
    highlights: [
      "Teaching Science to middle and high school students",
      "Developing engaging lesson plans aligned with curriculum standards",
      "Conducting laboratory experiments and hands-on activities",
      "Assessing student progress through tests and projects",
    ],
  },
  {
    title: "Home-Based Tutor",
    organization: "Self-Employed",
    period: "2015 - Present",
    highlights: [
      "10+ years of experience providing personalized tuition to students",
      "Teaching multiple subjects across various grade levels",
      "Creating customized learning plans based on individual student needs",
      "Helping students improve academic performance and build confidence",
      "Flexible scheduling to accommodate student requirements",
    ],
  },
];

const skillCategories = [
  {
    category: "Teaching Skills",
    icon: <AcademicCapIcon className="w-5 h-5" />,
    skills: [
      "Curriculum Design",
      "Differentiated Instruction",
      "Assessment & Evaluation",
      "Classroom Management",
      "Student Counseling",
    ],
  },
  {
    category: "Office Tools",
    icon: <BriefcaseIcon className="w-5 h-5" />,
    skills: [
      "MS Word (Expert)",
      "MS Excel (Expert)",
      "MS PowerPoint (Expert)",
      "School Reports & Result Sheets",
      "Teaching Slides",
    ],
  },
  {
    category: "Technical Skills",
    icon: <CommandLineIcon className="w-5 h-5" />,
    skills: [
      "Web Design (HTML, CSS)",
      "Next.js",
      "Google Classroom",
      "Canva for Education",
      "Zoom & Teams",
      "Interactive Whiteboards",
    ],
  },
  {
    category: "Programming",
    icon: <CommandLineIcon className="w-5 h-5" />,
    skills: [
      "Python (Basic)",
      "TypeScript (Basic)",
    ],
  },
  {
    category: "AI Tools",
    icon: <SparklesIcon className="w-5 h-5" />,
    skills: [
      "Agentic AI",
      "Modern AI Tools for Productivity",
    ],
  },
  {
    category: "Soft Skills",
    icon: <SparklesIcon className="w-5 h-5" />,
    skills: [
      "Communication",
      "Leadership",
      "Problem Solving",
      "Adaptability",
      "Team Collaboration",
    ],
  },
  {
    category: "Languages",
    icon: <LanguageIcon className="w-5 h-5" />,
    skills: ["English (Fluent)", "Urdu (Native)"],
  },
];

export default function CVPage() {
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
            <h1 className="heading-primary mb-6">
              Curriculum <span className="text-primary-500">Vitae</span>
            </h1>
            <p className="text-lg text-body mb-8">
              A summary of my education, experience, and skills in the field of
              education.
            </p>
            <a
              href="/amber.pdf"
              download
              className="btn-primary gap-2 inline-flex"
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              Download CV (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                <AcademicCapIcon className="w-6 h-6" />
              </div>
              <h2 className="heading-secondary">Education</h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6 ml-6 border-l-2 border-primary-200 dark:border-primary-800 pl-8">
            {education.map((edu, index) => (
              <AnimatedSection key={edu.degree} delay={index * 0.15}>
                <div className="relative">
                  <div className="absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-secondary-900" />
                  <div className="glass-card p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-500">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-body">{edu.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900/50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                <BriefcaseIcon className="w-6 h-6" />
              </div>
              <h2 className="heading-secondary">Experience</h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6 ml-6 border-l-2 border-primary-200 dark:border-primary-800 pl-8">
            {experience.map((exp, index) => (
              <AnimatedSection key={exp.title} delay={index * 0.15}>
                <div className="relative">
                  <div className="absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-secondary-50 dark:border-secondary-900" />
                  <div className="glass-card p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-500">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">
                      {exp.organization}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-body flex gap-2 items-start"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 mt-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                <SparklesIcon className="w-6 h-6" />
              </div>
              <h2 className="heading-secondary">Skills</h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((cat, index) => (
              <AnimatedSection key={cat.category} delay={index * 0.1}>
                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-primary-500">{cat.icon}</span>
                    <h3 className="font-semibold text-secondary-900 dark:text-white">
                      {cat.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-primary-500/10 hover:text-primary-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
