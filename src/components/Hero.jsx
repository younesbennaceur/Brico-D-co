import React from 'react'
import Hero from '../assets/hero.png';
import BackgroundImage from '../assets/backgroundImage.png'; // Ton image de fond
import note from '../assets/note.png';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div
      className="bg-cover min-h-screen bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className='mx-4 sm:mx-[5%] flex flex-row gap-8  w-full'>
        <div className='w-1/2 flex flex-col gap-6 justify-center text-white'>
          <h1 className='text-6xl  font-bold'>
            Un intérieur à votre image, avec <span className='text-[var(--primary-color)]'>style</span> et <span className='text-[var(--primary-color)]'>savoir-faire</span>
          </h1>
          <p className='text-xl '>
            Chez Brico Déco, nous transformons vos espaces en lieux de vie uniques, de la rénovation à la décoration, notre équipe vous accompagne de A à Z.
          </p>
          <div className='gap-4 flex flex-col sm:flex-row items-start sm:items-center'>
            <NavLink
              to="/projets"
              className="bg-red-600 hover:bg-red-700 border-2 border-red-700 text-white font-medium py-2 px-4 rounded-sm transition duration-300 text-lg"
            >
              Créer ensemble
            </NavLink>
            <NavLink
              to="/projets"
              className="bg-white hover:bg-red-50  text-red-700 border-2 border-red-700 font-medium py-2 px-4 rounded-sm transition duration-300 text-lg"
            >
              En savoir plus
            </NavLink>
          </div >
          <div className='flex flex-col sm:flex-row gap-8  text-center sm:text-left'>
            <div>
                <h1 className='text-3xl font-medium' >+4</h1>
                <p>Ans d'expérience</p>

            </div>
             <div>
                <h1 className='text-3xl font-medium'>+25</h1>
                <p>Projets réalisés</p>

            </div>
             <div>
                <h1 className='text-3xl font-medium'>88%</h1>
                <p>De clients satisfaits</p>

            </div>

          </div>
        </div>

        <div className='w-1/2 relative '>
          <img className='w-full h-140' src={Hero} alt="Hero" />
          <img className=' absolute bottom-0 -left-3 ' src={note} alt="note" />
        </div>
      </div>
    </div>
  )
}
