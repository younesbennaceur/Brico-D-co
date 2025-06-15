import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BackgroundImage from '../assets/backgroundImage.png'; // Ton image de fond
import pic from '../assets/Produit.png'; // Image par défaut pour les produits

export default function Produits() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Nombre de produits par page

  const filters = ['Tous', 'Murs', 'Sols', 'Bois', 'Pierre', 'Accessoires'];
 const Produit = [
  {
    titre: 'Carrés Acoustiques Asos',
    description: '60 cm × 60 cm × 1,5 cm',
    filter: 'Murs',
    prix: '20€',
    image: pic
  },
  {
    titre: 'Parquet Chêne Massif',
    description: '120 cm × 20 cm × 2 cm',
    filter: 'Sols',
    prix: '45€',
    image: pic
  },
  {
    titre: 'Lambris Bois Naturel',
    description: '200 cm × 15 cm × 1,8 cm',
    filter: 'Bois',
    prix: '35€',
    image: pic
  },
  {
    titre: 'Pierre de Parement',
    description: '30 cm × 30 cm × 2,5 cm',
    filter: 'Pierre',
    prix: '18€',
    image: pic
  },
  {
    titre: 'Plinthes Décoratives',
    description: '240 cm × 8 cm × 1,5 cm',
    filter: 'Accessoires',
    prix: '12€',
    image: pic
  },
  {
    titre: 'Panneaux Muraux 3D',
    description: '50 cm × 50 cm × 3 cm',
    filter: 'Murs',
    prix: '32€',
    image: pic
  },
  {
    titre: 'Carrelage Moderne',
    description: '40 cm × 40 cm × 1 cm',
    filter: 'Sols',
    prix: '25€',
    image: pic
  },
  {
    titre: 'Poutre Décorative',
    description: '300 cm × 20 cm × 15 cm',
    filter: 'Bois',
    prix: '85€',
    image: pic
  },
  {
    titre: 'Mosaïque Pierre',
    description: '30 cm × 30 cm × 1 cm',
    filter: 'Pierre',
    prix: '28€',
    image: pic
  },
   {
    titre: 'Carrés Acoustiques Asos',
    description: '60 cm × 60 cm × 1,5 cm',
    filter: 'Murs',
    prix: '20€',
    image: pic
  },
   {
    titre: 'Carrés Acoustiques Asos',
    description: '60 cm × 60 cm × 1,5 cm',
    filter: 'Murs',
    prix: '20€',
    image: pic
  },
   {
    titre: 'Carrés Acoustiques Asos',
    description: '60 cm × 60 cm × 1,5 cm',
    filter: 'Murs',
    prix: '20€',
    image: pic
  },
   {
    titre: 'Carrés Acoustiques Asos',
    description: '60 cm × 60 cm × 1,5 cm',
    filter: 'Murs',
    prix: '20€',
    image: pic
  }
];


  // Filtrage des produits
  const produitsFiltres = activeFilter === 'Tous' 
    ? Produit 
    : Produit.filter(produit => produit.filter === activeFilter);

  // Calcul de la pagination
  const totalPages = Math.ceil(produitsFiltres.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const produitsAffiches = produitsFiltres.slice(startIndex, startIndex + itemsPerPage);

  // Fonction pour changer de page
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Fonction pour voir tous les produits (enlève la pagination)
  const handleVoirTous = () => {
    setCurrentPage(1);
    setActiveFilter('Tous');
  };

  // Reset de la page quand on change de filtre
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <div
      className="bg-cover min-h-screen bg-center bg-no-repeat flex items-center"
           style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className='mx-4 sm:mx-[5%] w-full'>
        <div className='flex flex-col gap-6 py-20 text-center text-white'>
          <h1 className='text-4xl font-bold mb-2'>Nos Produits</h1>
          <div>
            <p className='text-lg'>Découvrez notre gamme de produits soigneusement choisis.</p>
            <p className='text-lg'>Finitions parfaites, chaque détail compte pour créer un intérieur à votre image.</p>
          </div>
          
          {/* Filtres */}
          <div className='flex flex-wrap justify-center gap-3'>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-6 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-red-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          {/* Contenu filtré */}
          <div className='mt-12'>
           
            
            {/* Grille de produits */}
            <div className='grid grid-cols- md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-8  justify-items-center'>
              {produitsAffiches.map((produit, index) => (
                <div key={startIndex + index} className='bg-white rounded-lg flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm w-full'>
                  <img className="rounded-t-lg w-full h-56 object-cover" src={produit.image} alt={produit.titre} />
                  <div className="px-6 py-5 flex flex-col">
                    <h1 className="text-start text-black text-2xl font-bold">{produit.titre}</h1>
                    <p className="text-start text-lg font-medium text-gray-500">{produit.description}</p>
                    <div className='flex justify-between mt-2'>
                      <p className='text-black font-bold text-2xl'>Prix</p>
                      <p className="text-red-700 font-bold text-2xl">{produit.prix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Barre de navigation avec boutons */}
            <div className='flex justify-between items-center mt-10 mb-8'>
              <button 
                onClick={handleVoirTous}
                className='border-2 border-red-600 text-red-700 bg-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-50 transition-colors duration-300'
              >
                Voir tous nos produits
              </button>
              
              {/* Boutons de pagination - affichés uniquement s'il y a plus d'une page */}
              {totalPages > 1 && (
                <div className='flex gap-3 items-center'>
                  <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`border-2 border-red-600 bg-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      currentPage === 1 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-red-50'
                    }`}
                  >
                    <ChevronLeft className='text-red-700' size={20} />
                  </button>
                  
                  {/* Indicateur de page */}
                  <span className='text-white font-medium px-3'>
                    {currentPage} / {totalPages}
                  </span>
                  
                  <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`border-2 border-red-600 bg-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      currentPage === totalPages 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-red-50'
                    }`}
                  >
                    <ChevronRight className='text-red-700' size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}