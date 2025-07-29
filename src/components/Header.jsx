import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753759156304_0.png';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img src={logoUrl} alt="Papum Logo" className="h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary hover:text-accent-light transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block bg-secondary text-primary px-6 py-2 rounded-full hover:bg-accent-dark transition-all duration-300 transform hover:scale-105"
        >
          Entre em Contato
        </a>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <Menu className="h-6 w-6 text-secondary" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-primary"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex justify-end p-6">
              <button onClick={toggleMenu} aria-label="Close Menu">
                <X className="h-8 w-8 text-secondary" />
              </button>
            </div>
            <motion.nav
              className="flex flex-col items-center justify-center h-full space-y-8"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-2xl font-bold text-secondary hover:text-accent-light"
                  variants={itemVariants}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={toggleMenu}
                className="bg-secondary text-primary px-8 py-4 rounded-full text-lg font-bold"
                variants={itemVariants}
              >
                Entre em Contato
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
