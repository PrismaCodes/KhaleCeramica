import React from 'react'

const CtaFinal = () => {
  return (
    <section className="ctaFinalKhale">

      <div className="ctaFinalKhale__intro">
        <span>antes de irte...</span>
        <h2>
          ¿QUÉ TE
          <br />
          TRAJO HASTA ACÁ?
        </h2>
      </div>


      <div className="ctaFinalKhale__opciones">

        {/* PIEZAS */}
        <a
          href="#piezas"
          className="ctaFinalKhale__card ctaFinalKhale__card--piezas"
        >
          <span className="ctaFinalKhale__numero">
            01
          </span>

          <div className="ctaFinalKhale__texto">
            <small>
              quiero
            </small>

            <h3>
              UNA
              <br />
              PIEZA KHALE
            </h3>

            <p>
              ver piezas, encargos
              <br />
              y cosas hechas a mano
            </p>
          </div>

          <span className="ctaFinalKhale__flecha">
            ↘
          </span>

          <div className="ctaFinalKhale__nota">
            me llevo una ♡
          </div>
        </a>


        {/* CLASES */}
        <a
          href="#clases"
          className="ctaFinalKhale__card ctaFinalKhale__card--clases"
        >
          <span className="ctaFinalKhale__numero">
            02
          </span>

          <div className="ctaFinalKhale__texto">
            <small>
              quiero
            </small>

            <h3>
              HACER
              <br />
              LA MÍA
            </h3>

            <p>
              clases de cerámica
              <br />
              para todos los niveles
            </p>
          </div>

          <span className="ctaFinalKhale__flecha">
            ↗
          </span>

          <div className="ctaFinalKhale__nota">
            primera vez? vení igual
          </div>
        </a>

      </div>

    </section>
  )
}

export default CtaFinal