import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Palette, TrendingUp, Code2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: 'Desenvolvimento Acelerado',
      description:
        'Nossa IA automatiza tarefas repetitivas, permitindo que seu site seja lançado em tempo recorde, sem comprometer a qualidade.',
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: 'Design Inteligente e Responsivo',
      description:
        'Criamos layouts visualmente impressionantes que se adaptam perfeitamente a qualquer dispositivo, gerados com base em análises de usabilidade.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: 'Otimização Contínua para SEO',
      description:
        'Nossos algoritmos analisam e otimizam seu site constantemente para garantir as melhores posições nos mecanismos de busca.',
    },
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: 'Código Limpo e Escalável',
      description:
        'Entregamos uma base de código robusta e moderna, utilizando as melhores tecnologias como React e Tailwind CSS para fácil manutenção.',
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-accent-dark/5">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary">
            Nossa Abordagem Única
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-accent-dark">
            Combinamos criatividade humana com o poder da inteligência
            artificial para entregar resultados excepcionais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-secondary text-primary p-8 rounded-2xl shadow-xl flex flex-col transform hover:-translate-y-2 transition-transform duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="bg-accent-dark p-4 rounded-full w-max mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-accent-light leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
