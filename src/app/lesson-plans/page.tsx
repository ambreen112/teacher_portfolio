"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  BookOpenIcon,
  ChevronDownIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BeakerIcon,
  CalculatorIcon,
  GlobeAltIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

interface LessonPlan {
  id: number;
  title: string;
  subject: string;
  grade: string;
  duration: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  objectives: string[];
  materials: string[];
  steps: { title: string; description: string }[];
  assessment: string;
}

const lessonPlans: LessonPlan[] = [
  {
    id: 1,
    title: "Interactive Math Lesson for Grade 5",
    subject: "Mathematics",
    grade: "Grade 5",
    duration: "45 minutes",
    icon: <CalculatorIcon className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600",
    description:
      "A hands-on lesson exploring fractions through real-world applications like pizza sharing and recipe measurements, making abstract concepts tangible and fun.",
    objectives: [
      "Understand the concept of fractions as parts of a whole",
      "Compare and order fractions with different denominators",
      "Apply fractions to solve real-world problems",
      "Collaborate with peers to discuss solutions",
    ],
    materials: [
      "Fraction tiles or pizza cutouts",
      "Whiteboard and markers",
      "Worksheet with practice problems",
      "Digital fraction tool (optional)",
      "Colored paper and scissors",
    ],
    steps: [
      {
        title: "Warm-Up (5 min)",
        description:
          "Start with a quick fraction quiz game where students identify fractions from visual representations shown on the board.",
      },
      {
        title: "Introduction (10 min)",
        description:
          "Introduce fractions using the pizza model. Show how a whole pizza can be divided into equal parts. Discuss numerator and denominator.",
      },
      {
        title: "Guided Practice (15 min)",
        description:
          "Students work in pairs using fraction tiles to compare fractions. They physically arrange pieces to see which fraction is larger.",
      },
      {
        title: "Independent Activity (10 min)",
        description:
          "Students solve a set of real-world fraction problems individually, such as dividing ingredients for a recipe.",
      },
      {
        title: "Wrap-Up (5 min)",
        description:
          "Class discussion on what they learned. Students share one real-life situation where they might use fractions.",
      },
    ],
    assessment:
      "Formative assessment through observation during pair work, review of completed worksheets, and a quick exit ticket with 3 fraction comparison problems.",
  },
  {
    id: 2,
    title: "Exploring the Water Cycle Through Experiments",
    subject: "Science",
    grade: "Grade 4",
    duration: "60 minutes",
    icon: <BeakerIcon className="w-6 h-6" />,
    color: "from-green-500 to-emerald-600",
    description:
      "Students discover the water cycle through a miniature terrarium experiment, learning about evaporation, condensation, and precipitation firsthand.",
    objectives: [
      "Identify the four stages of the water cycle",
      "Explain how water changes state during each stage",
      "Conduct a simple experiment to observe the water cycle",
      "Connect the water cycle to everyday weather patterns",
    ],
    materials: [
      "Clear plastic containers with lids",
      "Warm water, ice cubes",
      "Blue food coloring",
      "Small plastic plants or figures",
      "Soil and pebbles",
      "Water cycle diagram poster",
    ],
    steps: [
      {
        title: "Engagement (10 min)",
        description:
          "Show a short animated video about the water cycle. Ask students where rain comes from and collect their ideas on the board.",
      },
      {
        title: "Explanation (15 min)",
        description:
          "Walk through each stage of the water cycle using the poster: evaporation, condensation, precipitation, and collection. Use relatable examples.",
      },
      {
        title: "Experiment (20 min)",
        description:
          "Students build mini terrariums in groups. Add soil, plants, warm water (with blue dye), seal with lid, and place ice on top. Observe condensation forming.",
      },
      {
        title: "Observation & Discussion (10 min)",
        description:
          "Groups share what they observed. Discuss how the experiment mirrors the real water cycle. Students draw and label their observations.",
      },
      {
        title: "Reflection (5 min)",
        description:
          "Students write a short paragraph explaining the water cycle in their own words, using the vocabulary learned today.",
      },
    ],
    assessment:
      "Evaluate through the labeled diagrams drawn by students, their reflective paragraphs, and group participation during the experiment.",
  },
  {
    id: 3,// Next ID
    title: "The Anatomy of a Flower",
    subject: "Science / Biology",
    grade: "Grade 6",
    duration: "50 minutes",
    icon: <BeakerIcon className="w-6 h-6" />, // Ya koi botanical icon
    color: "from-green-500 to-emerald-600",
    description:
      "Students will explore the biological structure of flowering plants, identifying male and female reproductive parts and understanding their functions in pollination.",
    objectives: [
      "Identify the main parts of a flower (petals, sepals, stamen, pistil)",
      "Distinguish between male (stamen) and female (pistil) reproductive organs",
      "Explain the process of pollination and fertilization",
      "Label a biological diagram accurately using scientific terminology"
    ],
    materials: [
      "Fresh flowers (Hibiscus or Lily are best for dissection)",
      "Magnifying glasses",
      "Tweezers and small scalpels/blades",
      "Anatomy of a Flower labeled diagram",
      "Science journals and sticky notes"
    ],
    steps: [
      {
        title: "Introduction (10 min)",
        description:
          "Show a real flower and ask students why flowers are colorful. Discuss the primary purpose of a flower: reproduction. Introduce key vocabulary.",
      },
      {
        title: "Live Dissection (15 min)",
        description:
          "In pairs, students carefully peel back sepals and petals. Use magnifying glasses to identify the anther, filament (stamen), and the stigma, style, ovary (pistil).",
      },
      {
        title: "Labeling & Sketching (15 min)",
        description:
          "Students draw their dissected flower in their journals, labeling each part. They must write one sentence describing the function of each part.",
      },
      {
        title: "Pollination Game (7 min)",
        description:
          "A quick interactive activity where students simulate how pollen moves from the anther to the stigma via 'pollinators' (bees/wind).",
      },
      {
        title: "Wrap-up (3 min)",
        description:
          "Quick fire quiz: 'Which part produces pollen?' 'Which part attracts insects?' Clean up the dissection stations.",
      },
    ],
    assessment:
      "Performance-based assessment: Accuracy of the labeled diagram (50%), correct identification during dissection (30%), and exit ticket quiz (20%).",
},
 {
    id: 4,
    title: "The Structure of an Atom",
    subject: "Science / Chemistry",
    grade: "Grade 8-9",
    duration: "45 minutes",
    icon: <BeakerIcon className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-600",
    description:
      "Students dive into the microscopic world to explore subatomic particles, understanding how protons, neutrons, and electrons define the identity and behavior of matter.",
    objectives: [
      "Identify protons, neutrons, and electrons and their locations",
      "Understand the charges and relative masses of subatomic particles",
      "Calculate the number of particles using Atomic Number and Mass Number",
      "Draw a basic Bohr model of a simple atom (e.g., Carbon or Oxygen)",
    ],
    materials: [
      "Periodic Table for each student",
      "Colored beads or clay (3 different colors for particles)",
      "Large paper plates (to serve as shells/orbitals)",
      "Whiteboard markers",
      "Atomic structure simulation (e.g., PhET)",
    ],
    steps: [
      {
        title: "The Tiny Mystery (8 min)",
        description:
          "Start with a piece of foil and keep 'cutting' it mentally. Introduce the concept of the Atom. Discuss the nucleus vs. the electron cloud.",
      },
      {
        title: "Particle Profile (7 min)",
        description:
          "Quick lecture on the 'Big Three': Protons (+), Neutrons (neutral), and Electrons (-). Use a table to compare their charges and locations.",
      },
      {
        title: "Model Building (20 min)",
        description:
          "Hands-on activity: Students use beads/clay to build an atom on a paper plate. For example, building Lithium with 3 protons, 4 neutrons, and 3 electrons.",
      },
      {
        title: "Atomic Math (7 min)",
        description:
          "Practice session: Using the Periodic Table to find Atomic Number (protons) and Mass Number (protons + neutrons) for various elements.",
      },
      {
        title: "Final Review (3 min)",
        description:
          "Exit ticket: Students must list the subatomic particles found in the nucleus and their charges before leaving.",
      },
    ],
    assessment:
      "Check the bead models for accuracy (100%), and a 5-question worksheet on calculating subatomic particles from atomic symbols.",
  },

];

function LessonCard({ plan }: { plan: LessonPlan }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedSection>
      <div className="glass-card overflow-hidden group hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300">
        {/* Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-6 flex items-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-t-2xl"
        >
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} text-white flex items-center justify-center flex-shrink-0`}
          >
            {plan.icon}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors">
              {plan.title}
            </h3>
            <div className="flex flex-wrap gap-3 text-sm text-secondary-500 dark:text-secondary-400">
              <span className="flex items-center gap-1">
                <BookOpenIcon className="w-4 h-4" />
                {plan.subject}
              </span>
              <span className="flex items-center gap-1">
                <UserGroupIcon className="w-4 h-4" />
                {plan.grade}
              </span>
              <span className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                {plan.duration}
              </span>
            </div>
            <p className="text-sm text-body mt-2">{plan.description}</p>
          </div>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 mt-1"
          >
            <ChevronDownIcon className="w-5 h-5 text-secondary-400" />
          </motion.div>
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 space-y-6 border-t border-secondary-100 dark:border-secondary-800 pt-6">
                {/* Objectives */}
                <div>
                  <h4 className="text-sm font-semibold text-secondary-900 dark:text-white uppercase tracking-wider mb-3">
                    Learning Objectives
                  </h4>
                  <ul className="space-y-2">
                    {plan.objectives.map((obj, i) => (
                      <li
                        key={i}
                        className="flex gap-2 items-start text-sm text-body"
                      >
                        <span className="w-5 h-5 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                          {i + 1}
                        </span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Materials */}
                <div>
                  <h4 className="text-sm font-semibold text-secondary-900 dark:text-white uppercase tracking-wider mb-3">
                    Materials Needed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {plan.materials.map((mat, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Steps */}
                <div>
                  <h4 className="text-sm font-semibold text-secondary-900 dark:text-white uppercase tracking-wider mb-3">
                    Lesson Steps
                  </h4>
                  <div className="space-y-3">
                    {plan.steps.map((step, i) => (
                      <div
                        key={i}
                        className="flex gap-3 items-start p-3 rounded-xl bg-secondary-50 dark:bg-secondary-800/50"
                      >
                        <span
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${plan.color} text-white flex items-center justify-center flex-shrink-0 text-sm font-bold`}
                        >
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-secondary-900 dark:text-white">
                            {step.title}
                          </p>
                          <p className="text-sm text-body mt-1">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assessment */}
                <div>
                  <h4 className="text-sm font-semibold text-secondary-900 dark:text-white uppercase tracking-wider mb-3">
                    Assessment
                  </h4>
                  <div className="p-4 rounded-xl bg-primary-500/5 border border-primary-200 dark:border-primary-800">
                    <p className="text-sm text-body">{plan.assessment}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default function LessonPlansPage() {
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
              <BookOpenIcon className="w-4 h-4" />
              Teaching Resources
            </div>
            <h1 className="heading-primary mb-6">
              Lesson <span className="text-primary-500">Plans</span>
            </h1>
            <p className="text-lg text-body">
              Here are some sample lesson plans that showcase my teaching
              approach — interactive, student-centered, and designed to make
              learning an exciting adventure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lesson Plans */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto space-y-6">
          {lessonPlans.map((plan) => (
            <LessonCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>
    </>
  );
}
