import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'  // <-- Pas d'accolades {Home}, car c'est un export default
import Projets from './components/Projets'
import Produits from './components/Produits'
import Faq from './components/FAQ'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar' 

 // <-- Pas d'accolades {Navbar}, car c'est un export default

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projets' element={<Projets />} />
        <Route path='/produits' element={<Produits />} />
         <Route path='/about-us' element={<AboutUs />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact' element={<Contact />} />
       
        {/* Ajout de la route pour la page "À propos de nous" */}
       
      </Routes>
    </div>
  )
}

export default App  // <-- On exporte seulement App ici