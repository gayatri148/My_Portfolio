import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 dark:bg-stone-800 border-t border-stone-200 dark:border-stone-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/gayatri148"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 dark:text-stone-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gayatri-gurugubelli-8912452a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 dark:text-stone-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:gayatri.gurugubelli05@gmail.com"
              className="text-stone-600 dark:text-stone-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
