import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Next.js", level: 88 },
        { name: "Vue.js", level: 80 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 87 },
        { name: "MongoDB", level: 83 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Figma", level: 90 },
        { name: "Jest", level: 88 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1, delay: 0.5 }
    })
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-4">
            Skills & Technologies
          </h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-700 dark:text-stone-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-stone-700 dark:text-stone-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-orange-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-3">
                      <motion.div
                        custom={skill.level}
                        variants={skillBarVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-orange-600 to-amber-500 h-3 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-8">
            Certifications 
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Agile Scrum in Practice
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                By Infosys Springboard
              </p>
            </div>
            <div className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Introduction to Artificial Intelligence
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                By Infosys Springboard
              </p>
            </div>
            <div className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Introduction to Deep Learning
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                By Infosys Springboard
              </p>
            </div>
            <div className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Introduction to Computer Vision
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                By Infosys Springboard
              </p>
            </div>
            <div className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Introduction to Data Science
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                By Infosys Springboard
              </p>
            </div>
            <div className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Introduction to Natural Language Processing
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                By Infosys Springboard
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;