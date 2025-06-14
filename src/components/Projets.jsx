import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import '../index.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import projet1 from '../assets/projet1.png'

export default function Realisations() {
  const projets = [
    { titre: 'Appartement haussmannien', description: 'Parquet rénové, murs raffinés, élégance intemporelle.', image: projet1 },
    { titre: 'Loft industriel', description: 'Béton ciré, verrière moderne, ambiance brute et chic.', image: projet1 },
    { titre: 'Maison de campagne', description: 'Bois naturel, tons doux, confort chaleureux, ambiance brute et chic.', image: projet1 },
    { titre: 'Studio scandinave', description: 'Design épuré, couleurs nordiques, Bois naturel, lumière douce.', image: projet1 },
    { titre: 'Studio scandinave', description: 'Design épuré, couleurs nordiques, Bois naturel, lumière douce.', image: projet1 },
    { titre: 'Studio scandinave', description: 'Design épuré, couleurs nordiques, Bois naturel, lumière douce.', image: projet1 },
    { titre: 'Studio scandinave', description: 'Design épuré, couleurs nordiques, Bois naturel, lumière douce.', image: projet1 },
    { titre: 'Studio scandinave', description: 'Design épuré, couleurs nordiques, Bois naturel, lumière douce.', image: projet1 }
  ]

  return (
    <div className="py-28 text-center mx-4 sm:mx-[5%]">
      <h1 className="text-4xl font-bold mb-2">Nos Réalisations</h1>
      <p>Des intérieurs transformés avec passion.</p>
      <p className="mb-8">Chaque projet reflète le style de nos clients et notre savoir-faire.</p>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="py-4"
      >
        {projets.map((projet, index) => (
          <SwiperSlide key={index}>
            <div className=" relative flex flex-col h-full pb-8 border-2 border-gray-200 rounded-lg">
              <img className="rounded-t-lg w-full h-52 object-cover" src={projet.image} alt={projet.titre} />
              <div className=' absolute top-4 left-3 px-4 py-2 font-medium text-white bg-red-700 rounded-full text-sm  '>Rénovation complète</div>
              <div className="px-4 pt-2 flex flex-col gap-2">
                <h1 className="text-start text-xl font-bold">{projet.titre}</h1>
                <p className="text-start text-lg font-medium text-gray-500">{projet.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔴 Bouton ajouté ici */}
      <div className="mt-10">
        <button className="text-red-600 border-2 border-red-600 px-6 py-3 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300">
          Voir tous nos projets
        </button>
      </div>
    </div>
  )
}
