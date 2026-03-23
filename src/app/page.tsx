import Link from "next/link";
import Image from "next/image";
import {
  AcademicCapIcon,
  BookOpenIcon,
  LightBulbIcon,
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const skills = [
  {
    icon: <BookOpenIcon className="w-8 h-8" />,
    title: "Curriculum Design",
    description:
      "Crafting engaging, standards-aligned curricula that cater to diverse learning styles.",
  },
  {
    icon: <UserGroupIcon className="w-8 h-8" />,
    title: "Classroom Management",
    description:
      "Building positive, inclusive classroom environments where every student thrives.",
  },
  {
    icon: <LightBulbIcon className="w-8 h-8" />,
    title: "Innovative Teaching",
    description:
      "Integrating technology and creative methods to make learning interactive and fun.",
  },
  {
    icon: <SparklesIcon className="w-8 h-8" />,
    title: "Student Mentorship",
    description:
      "Guiding students beyond academics to develop confidence and life skills.",
  },
];

const highlights = [
  {
    number: "5+",
    label: "Years Teaching",
    description: "Across multiple grade levels",
  },
  {
    number: "500+",
    label: "Students Taught",
    description: "Inspiring young minds",
  },
  {
    number: "50+",
    label: "Lesson Plans",
    description: "Creative & interactive",
  },
  {
    number: "100%",
    label: "Dedication",
    description: "To student success",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-6">
                Welcome to My Portfolio
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white leading-tight mb-6">
                Hi, I&apos;m{" "}
                <span className="text-primary-500">Ambreen Jahan</span>
              </h1>

              <p className="text-xl sm:text-2xl text-secondary-500 dark:text-secondary-300 mb-4 font-light">
                Passionate Educator from Karachi
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8 max-w-lg">
                Dedicated to inspiring learners through innovative teaching,
                creative lesson plans, and a genuine love for education.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/cv" className="btn-primary gap-2">
                  View My CV
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link href="/lesson-plans" className="btn-secondary gap-2">
                  Lesson Plans
                  <BookOpenIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-4 border-white dark:border-secondary-700 shadow-xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center">
                <Image
                  src="/teacher.png"
                  alt="Ambreen Jahan - Educator"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 -mt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-6 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary-500 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-secondary-900 dark:text-white">
                    {stat.label}
                  </div>
                  <div className="text-xs text-secondary-500 dark:text-secondary-400 mt-1">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">
              What I Bring to the Classroom
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              With years of dedicated teaching experience, I bring a unique blend
              of skills that help students excel both academically and
              personally.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="glass-card p-6 h-full group hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-body">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-500 to-primary-600 p-8 sm:p-12 text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Looking for a Passionate Educator?
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                I&apos;m eager to bring my enthusiasm and dedication to your
                institution. Let&apos;s connect and discuss how I can make a
                difference.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-500 font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get In Touch
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
