import React from 'react'

const Hero = () => {
  return (
    <section className="khaleHero" id="inicio">

      <div className="khaleHero__copy">

        <p className="khaleHero__eyebrow">
          piezas hechas a mano
        </p>

        <h1 className="khaleHero__title">
          <span className="khaleHero__titlePrint">
            CERÁMICA
          </span>

          <span className="khaleHero__titleScript">
            para habitar
          </span>

          <span className="khaleHero__titlePrint khaleHero__titlePrint--bottom">
            LO COTIDIANO
          </span>
        </h1>

        <div className="khaleHero__text">
          <p>
            Objetos únicos, hechos con tiempo, barro y fuego.
          </p>

          <div className="khaleHero__actions">
            <a href="#piezas" className="khaleHero__btn khaleHero__btn--dark">
              ver piezas
            </a>

            <a href="#clases" className="khaleHero__btn khaleHero__btn--line">
              clases de cerámica
            </a>
          </div>
        </div>

      </div>


      <div className="khaleHero__visual">

        <div className="khaleHero__imageWrap">
          <img
            src="https://res.cloudinary.com/df6hryxoa/image/upload/v1788547706/imgHero_idl1bp.jpg"
            alt="Piezas de cerámica Khale"
          />

          <span className="khaleHero__note khaleHero__note--top">
            barro + fuego
          </span>

          <span className="khaleHero__note khaleHero__note--bottom">
            hecho sin apuro ♡
          </span>
        </div>

        <div className="khaleHero__circle">
          <span>
            KHALE · CERÁMICA · KHALE · CERÁMICA ·
          </span>
        </div>

      </div>

    </section>
  )
}

export default Hero