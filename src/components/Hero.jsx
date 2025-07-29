import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-20%] w-96 h-96 bg-accent/5 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[30%] right-[15%] w-72 h-72 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-secondary mb-4 leading-tight"
          variants={itemVariants}
        >
          Desenvolva experiências
          <br />
          <span className="gradient-text bg-gradient-to-r from-accent-light via-secondary to-accent">
            únicas na web
          </span>
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl text-accent-dark mb-8"
          variants={itemVariants}
        >
          Leve seu site a um novo patamar com a Papum. Utilizamos inteligência
          artificial para criar plataformas digitais rápidas, inteligentes e
          otimizadas para o seu sucesso.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Transforme sua presença online
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
