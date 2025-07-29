import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary">
            Vamos Construir o Futuro Juntos
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-accent-dark">
            Tem uma ideia? Precisa de um parceiro tecnológico? Preencha o
            formulário abaixo e vamos conversar.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-accent-dark mb-1"
              >
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-accent-dark mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                placeholder="seu.email@exemplo.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-accent-dark mb-1"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                placeholder="Conte-nos sobre seu projeto..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-secondary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent-dark transition-all duration-300 transform hover:scale-105 disabled:bg-accent-light disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin mr-2 h-5 w-5" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center p-4 bg-green-100 text-green-800 rounded-lg"
            >
              <CheckCircle className="h-5 w-5 mr-3" />
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </motion.div>
          )}
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center p-4 bg-red-100 text-red-800 rounded-lg"
            >
              <AlertTriangle className="h-5 w-5 mr-3" />
              Erro: {submitError}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
