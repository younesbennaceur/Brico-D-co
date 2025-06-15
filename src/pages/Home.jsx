import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Projets from '../components/Projets'
import Produits from '../components/Produits'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Projets/>
        <Produits/>
        
    </div>
    

    
  )
}


// Pas besoin de réécrire `export default` si déjà présent