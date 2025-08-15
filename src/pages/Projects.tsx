import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "DocsAI – Internal Q&A Agent",
      description: "An AI-powered internal document search and Q&A agent designed for teams. Built with advanced NLP techniques to provide contextual answers, source highlighting, autocomplete, conversational memory, and analytics. Integrates with multiple document sources for seamless knowledge retrieval.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "FastAPI", "OpenAI API", "Tailwind CSS"],
      githubUrl: "https://github.com/gayatri148/DocsAI",
      liveUrl: "https://docsai-1.onrender.com/",
      date: "2025"
    },
    
    {
      title: "Money Mentor – Personal Finance Manager",
      description: "A smart personal finance management platform that helps users track expenses, set savings goals, and receive personalized investment plan suggestions based on their financial profile. Features include category-wise spending analytics, monthly budget recommendations, and future value projections using the time value of money.",
      image: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js"],
      githubUrl: "https://github.com/yourusername/money-mentor",
      liveUrl: "https://moneymentor.example.com",
      date: "2025"
    },
    
    {
      title: "Smart Traffic & Safety AI System",
      description:
        "Real-time road safety platform that detects vehicle speeds and riders without helmets using YOLOv8, then generates a safety map with the safest routes, highlighting nearby police stations and hospitals along the way.",
      image: "https://www.eletimes.com/wp-content/uploads/2022/05/Traffic-AI-control-1200x600-1-768x384.jpg", // replace with your image path or URL
      technologies: ["React (Vite)","Flask","Python","Ultralytics YOLOv8","PyTorch","OpenCV","REST API"],
      githubUrl: "https://github.com/your-username/smart-traffic-safety-ai",
      liveUrl: "http://localhost:5173",
      date: "2025"
    },
    {
      title: "Mini GitHub – Project Document Repository",
      description: "A lightweight document management platform designed for students to upload, store, and share project-related files with faculty for reference and review. Features include secure uploads, organized categorization, and easy retrieval of documents.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2025"
    }
    
   /* {
      title: "Learning Management System",
      description: "An educational platform with course creation, video streaming, quiz system, progress tracking, and certificate generation for online learning.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Angular", "NestJS", "PostgreSQL", "AWS S3", "WebRTC"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2021"
    },
    {
      title: "IoT Monitoring Dashboard",
      description: "A real-time IoT device monitoring system with sensor data visualization, alert system, device management, and predictive maintenance features.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "InfluxDB", "MQTT", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2021"
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: { 
      y: -5, 
      transition: { duration: 0.2 } 
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-4">
            Featured Projects
          </h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-700 dark:text-stone-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in various technologies and domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-stone-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-orange-600 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-stone-600 dark:text-stone-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-stone-600 dark:text-stone-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors text-sm"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-stone-600 dark:text-stone-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-stone-600 dark:text-stone-400 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/gayatri148?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Github className="h-5 w-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;