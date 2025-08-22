import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Aspiring Web Developer";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-4"
        >
          Hi, I'm <span className="text-orange-600">Gayatri</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-2xl md:text-3xl text-stone-700 dark:text-stone-300 mb-6 h-12 flex items-center justify-center"
        >
          <span className="border-r-2 border-orange-600 pr-2 animate-pulse">
            {displayText}
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-stone-600 dark:text-stone-400 mb-8 max-w-2xl mx-auto"
        >
          Passionate about creating amazing digital experiences with clean code and innovative solutions. 
          I specialize in building scalable web applications and bringing ideas to life.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            to="/projects"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105"
          >
            Get In Touch
          </Link>
          <a
            href="https://drive.google.com/file/d/15fSyN8QWQf7VBcm84ERdb5qd2Ifr6j6f/view?usp=sharing"
            download
            className="flex items-center space-x-2 text-stone-700 dark:text-stone-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
          >
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-orange-600 mx-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home; 



