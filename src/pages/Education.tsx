import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering & Business Systems",
      institution: "Dayananda Sagar College of Engineering",
      location: "Bengaluru, Karnataka",
      period: "2023 - 2027",
      gpa: "9.69/10",
      description: "Active member of the Department Club and participated in multiple hackathons.",
      courses: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Web Development",
        "Database Management Systems",
        "Computer Networks"
      ]
    }
  ];

  const achievements = [
    {
      title: "Aventus 3.0 Winner",
      description: "National level Hackathon conducted by department of AIML in Dayananda Sagar college of Enginnering",
      year: "2025"
    },
    {
      title: "AI Agent Hackathon - 2nd Runner up",
      description: "A online Hackathon conducted by Product Space",
      year: "2025"
    },
    {
      title: "ComeBack Challenge",
      description: "Secured 2rd place by presenting an idea to fix a failing company in 24 hours",
      year: "2025"
    },
    {
      title: "National Symposium Poster Presentation",
      description: "Secured 3rd place by presenting a paper on Artificial Intelligence trends",
      year: "2023"
    }
    /*{
      title: "Teaching Assistant",
      description: "TA for Web Development course, mentoring 50+ students",
      year: "2017"
    }*/
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
            Education & Certifications
          </h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-700 dark:text-stone-300 max-w-2xl mx-auto">
            My academic background and professional certifications that have shaped my expertise in software development.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-8 flex items-center">
            <GraduationCap className="h-8 w-8 text-orange-600 mr-3" />
            Academic Background
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl text-orange-600 font-semibold mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-stone-600 dark:text-stone-400">
                      {edu.location}
                    </p>
                  </div>
                  <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                    <div className="flex items-center text-stone-600 dark:text-stone-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      {edu.period}
                    </div>
                    <div className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-semibold">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>

                <p className="text-stone-700 dark:text-stone-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div>
                  <h5 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">
                    Relevant Coursework:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 text-sm rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      
        {/* Achievements Section */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-8 flex items-center">
            <BookOpen className="h-8 w-8 text-orange-600 mr-3" />
            Academic Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 flex-1">
                    {achievement.title}
                  </h3>
                  <span className="text-orange-600 font-semibold text-sm ml-4">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Continuous Learning
            </h3>
            <p className="mb-6">
              I believe in lifelong learning and staying updated with the latest technologies and industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                Currently studying: Advanced React Patterns
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                Next: Kubernetes Administration
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;