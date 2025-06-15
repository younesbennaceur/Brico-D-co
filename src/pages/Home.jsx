import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Projets from '../components/Projets'
import Produits from '../components/Produits'
import AboutUs from '../components/AboutUs'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Projets/>
        <Produits/>
        <AboutUs/>
        <FAQ/>
        <Contact/>
        
    </div>
    

    
  )
}


// Pas besoin de réécrire `export default` si déjà présent