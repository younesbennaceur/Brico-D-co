import React from "react";
import { NavLink } from "react-router-dom";
import Hero from "../assets/hero.png";
import About from "../assets/aboutus.png"; // Assurez-vous d'avoir une image pour la section "À propos"
import since from "../assets/2019.png"; // Image pour "Depuis 4 ans"

export default function AboutUs() {
  return (
    <div>
      <div className="mx-4 sm:mx-[5%] py-20 flex flex-row   ">
        <div className="w-1/2 flex flex-col gap-10 justify-center">
          <h1 className="text-6xl  font-bold">
            Derrière Br<span className="text-[var(--primary-color)]">i</span>co
            D<span className="text-[var(--primary-color)]">é</span>co
          </h1>
         
          <div className="text-xl text-gray-600 w-3/4 flex flex-col gap-4">
            <p>
               Depuis 4 ans, nous mettons notre savoir-faire au service de la
            décoration et de la rénovation intérieure.
            </p>
            <p>
               Notre équipe vous accompagne de l’inspiration à la réalisation, avec
            une attention particulière portée aux détails, aux matériaux, et à
            vos envies
            </p>
            <p>
               Chez Brico Déco, chaque projet est une collaboration : nous
            écoutons, nous proposons, nous créons ensemble des lieux qui vous
            ressemblent.
            </p>

          </div>

          <div className="flex flex-col sm:flex-row gap-8  text-center sm:text-left">
            <div>
              <h1 className="text-3xl font-bold text-[var(--primary-color)]">
                4 ans
              </h1>
              <p>Notre parcours</p>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[var(--primary-color)]">
                +25
              </h1>
              <p>Clients accompagnés</p>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[var(--primary-color)]">
                88%
              </h1>
              <p>Taux de satisfaction</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 relative ">
        <img className="w-7/8" src={About} alt="" />
        <img className=" absolute top-0 -right-19" src={since} alt="" />
        </div>
      </div>
    </div>
  );
}
