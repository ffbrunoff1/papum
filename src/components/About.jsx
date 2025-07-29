import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Zap, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-secondary" />,
      title: 'Inteligência Artificial no Core',
      description:
        'Nossa plataforma utiliza IA para otimizar cada aspecto do seu site, desde o design até a performance e SEO.',
    },
    {
      icon: <Zap className="h-10 w-10 text-secondary" />,
      title: 'Velocidade e Performance',
      description:
        'Construímos sites ultrarrápidos que garantem a melhor experiência para o usuário e melhores rankings nos buscadores.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
      title: 'Segurança e Confiabilidade',
      description:
        'Implementamos as melhores práticas de segurança para garantir que seu site e os dados dos seus clientes estejam sempre protegidos.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary">
            Por que escolher a <span className="gradient-text">Papum</span>?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-accent-dark">
            Somos mais que uma agência de desenvolvimento. Somos seus parceiros
            na jornada de transformação digital, impulsionados por tecnologia de
            ponta.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col"
              variants={itemVariants}
            >
              <div className="mb-6 p-4 bg-accent-dark/5 rounded-full w-max">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-accent-dark leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
