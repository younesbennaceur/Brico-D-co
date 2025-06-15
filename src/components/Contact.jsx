import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-4 sm:mx-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
          
          {/* Section gauche - Informations de contact */}
          <div className="flex flex-col  space-y-8">
             <h1 className='text-4xl font-bold mb-2'>Contactez-nous</h1>
          <div>
            <p className='text-lg mt-6'>Une question, un projet, une idée ? <br /> Nous sommes là pour échanger avec vous.</p>
          </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                  <p className="text-gray-600">+33 1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@renovation.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
                  <p className="text-gray-600">123 Rue de la Rénovation<br />75001 Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section droite - Formulaire */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              
              {/* Nom et prénom */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nom et prénom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="ex: Marie Dupont"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ex: marie.dupont@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors"
                />
              </div>

              {/* Sujet */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="ex: Projet de rénovation salon/cuisine"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre besoin ici..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {/* Bouton d'envoi */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-white border-2 border-red-600 text-red-600 font-semibold py-3 px-6 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}