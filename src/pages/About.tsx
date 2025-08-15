import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
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
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <img
              src="https://gegosoft.com/wp-content/uploads/2018/03/working-on-laptop-at-office-workspace.jpg"
              alt="About me"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">
              Passionate Developer & Problem Solver
            </h2>
            
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
            I’m a web developer passionate about building clean, user-friendly, and efficient websites.
             I enjoy turning ideas into functional digital experiences using modern technologies, 
             and I’m always eager to learn and improve my skills. 
             I’m also interested in exploring new opportunities, diving into AI/ML, and creating engaging interfaces through UI/UX design.
            </p>

            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with 
              the latest industry trends. When I'm not coding, you'll find me exploring 
              new technologies, contributing to open source projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-4 bg-stone-100 dark:bg-stone-800 rounded-lg">
                <MapPin className="h-5 w-5 text-orange-600" />
                <span className="text-stone-700 dark:text-stone-300">Bengaluru, Karnataka</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-stone-100 dark:bg-stone-800 rounded-lg">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span className="text-stone-700 dark:text-stone-300">Fresher - Open to opportunities</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-stone-100 dark:bg-stone-800 rounded-lg">
                <Award className="h-5 w-5 text-orange-600" />
                <span className="text-stone-700 dark:text-stone-300">AI ML Enthusiast</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-stone-100 dark:bg-stone-800 rounded-lg">
                <User className="h-5 w-5 text-orange-600" />
                <span className="text-stone-700 dark:text-stone-300">UI UX Designer</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-8 text-center">
            My Journey
          </h3>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
                  Started Programming (2023)
                </h4>
                <p className="text-stone-700 dark:text-stone-300">
                  Began my coding journey with C and C++ and fell in love with problem-solving through code.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
                  First Web Application (2024)
                </h4>
                <p className="text-stone-700 dark:text-stone-300">
                  Built my first full-stack application using React and Node.js, sparking my passion for web development.
                </p>
              </div>
            </div>
           
      
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;