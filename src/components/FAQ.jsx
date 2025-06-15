import { useState } from 'react';
import { ChevronDown, Dice1 } from 'lucide-react';
import BackgroundImage from '../assets/backgroundImage.png';

export default function FAQComponent() {
  const [openItems, setOpenItems] = useState({});

  const faqItems = [
    {
      id: 'projects',
      question: 'Quels types de projets prenez-vous en charge ?',
      answer: 'Nous prenons en charge une large gamme de projets de rénovation : rénovation complète d\'appartements et maisons, réaménagement d\'espaces, travaux de plomberie, électricité, peinture, carrelage, parquet, cuisine, salle de bain, et bien plus encore. Chaque projet est étudié selon vos besoins spécifiques.'
    },
    {
      id: 'france',
      question: 'Intervenez-vous partout en France ?',
      answer: 'Nous intervenons principalement en Île-de-France et dans les grandes métropoles françaises. Pour les projets d\'envergure, nous pouvons nous déplacer dans toute la France. N\'hésitez pas à nous contacter pour vérifier la faisabilité de votre projet selon votre localisation.'
    },
    {
      id: 'devis',
      question: 'Est-ce que vous proposez des devis ?',
      answer: 'Oui, nous proposons des devis gratuits et détaillés. Après une première visite sur site, nous établissons un devis complet incluant les matériaux, la main-d\'œuvre et les délais. Le devis est valable 30 jours and nous nous engageons sur les prix annoncés.'
    },
    {
      id: 'materiaux',
      question: 'Puis-je choisir les matériaux moi-même ?',
      answer: 'Absolument ! Vous pouvez soit choisir vos propres matériaux, soit bénéficier de nos conseils et de notre réseau de fournisseurs partenaires. Nous vous guidons dans le choix des matériaux selon votre budget, vos goûts et les contraintes techniques du projet.'
    },
    {
      id: 'duree',
      question: 'Combien de temps dure une rénovation ?',
      answer: 'La durée dépend de l\'ampleur du projet. Une rénovation de salle de bain prend généralement 1-2 semaines, une cuisine 2-3 semaines, et une rénovation complète d\'appartement 1-3 mois. Nous établissons un planning précis dès le début et nous nous efforçons de respecter les délais convenus.'
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="bg-cover min-h-screen bg-center bg-no-repeat flex justify-center items-center"
          style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <div className='mx-4 sm:mx-[5%] flex flex-col justify-center items-center  gap-6 py-20 text-center text-white'>
              <h1 className='text-4xl font-bold mb-2'>Questions fréquentes</h1>
          <div>
            <p className='text-lg'>Besoin de plus d'infos ? Voici les réponses aux questions que l'on <br /> nous pose souvent.</p>
          </div>
          <div className="max-w-4xl mx-auto p-6 space-y-4">
      {faqItems.map((item) => (
        <div key={item.id} className="border border-gray-200 rounded-lg bg-white shadow-sm">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
          >
            <span className="text-lg font-medium text-gray-900 pr-4">
              {item.question}
            </span>
            <ChevronDown 
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                openItems[item.id] ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-200 ease-in-out ${
              openItems[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-4 text-gray-700 leading-relaxed text-left">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
          </div>



    </div>
    
    
  );
}