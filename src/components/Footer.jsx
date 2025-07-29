import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753759156304_0.png';

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-secondary text-primary"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home">
              <img
                src={logoUrl}
                alt="Papum Logo"
                className="h-12 w-auto mb-4 bg-white p-2 rounded-md"
              />
            </a>
            <p className="text-accent-light max-w-xs">
              Construindo o futuro da web com inteligência artificial.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-white">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-accent-light hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-accent-light hover:text-primary transition-colors duration-300"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-accent-light hover:text-primary transition-colors duration-300"
                >
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent-dark text-center text-accent-light">
          <p>
            &copy; {new Date().getFullYear()} Papum. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
