import React from 'react'

const Clases = () => {

  const beneficios = [
    'No necesitás experiencia',
    'Materiales incluidos',
    'Clases en grupos reducidos',
    'Acompañamiento durante todo el proceso'
  ]

  return (
    <section className="clasesKhale" id="clases">

      <div className="clasesKhale__cabecera">

        <span className="clasesKhale__numero">
          03 / CLASES
        </span>

        <div className="clasesKhale__titulo">

          <span className="clasesKhale__script">
            vení a ensuciarte
          </span>

          <h2>
            LAS MANOS.
          </h2>

        </div>

        <p className="clasesKhale__bajada">
          Un espacio para aprender cerámica,
          bajar un cambio y crear algo desde cero.
        </p>

      </div>


      <div className="clasesKhale__contenido">

        {/* FOTO PRINCIPAL */}
        <div className="clasesKhale__visual">

          <div className="clasesKhale__fotoGrande">
            <img
              src="/img/clases-1.jpg"
              alt="Clase de cerámica en Khale"
            />

            <span className="clasesKhale__cinta"></span>
          </div>


          <div className="clasesKhale__fotoChica">
            <img
              src="/img/clases-2.jpg"
              alt="Personas trabajando con cerámica"
            />
          </div>


          <div className="clasesKhale__nota">
            <span>primera vez?</span>
            <strong>mejor todavía ♡</strong>
          </div>

        </div>


        {/* INFO */}
        <div className="clasesKhale__info">

          <span className="clasesKhale__miniTitulo">
            CLASES PARA TODOS LOS NIVELES
          </span>


          <h3>
            NO TENÉS QUE
            <span>SABER HACERLO.</span>
          </h3>


          <p className="clasesKhale__texto">
            Venís, elegís qué querés crear y te acompañamos
            durante todo el proceso. Desde preparar el barro
            hasta darle forma, decorar y terminar tu pieza.
          </p>


          <div className="clasesKhale__beneficios">

            {beneficios.map((beneficio, index) => (
              <div className="clasesKhale__beneficio" key={index}>

                <span>
                  0{index + 1}
                </span>

                <p>
                  {beneficio}
                </p>

              </div>
            ))}

          </div>


          <div className="clasesKhale__cta">

            <div className="clasesKhale__ctaTexto">
              <span>¿te gustaría probar?</span>
              <strong>reservá tu lugar</strong>
            </div>

            <a
              href="https://wa.me/549XXXXXXXXXX?text=Hola!%20Vi%20las%20clases%20de%20cer%C3%A1mica%20en%20la%20web%20de%20Khale%20y%20quer%C3%ADa%20consultar%20por%20lugares%20disponibles."
              target="_blank"
              rel="noreferrer"
            >
              QUIERO EMPEZAR
              <span>↗</span>
            </a>

          </div>

        </div>

      </div>


      <div className="clasesKhale__frase">

        <span>
          barro
        </span>

        <i>+</i>

        <span>
          tiempo
        </span>

        <i>+</i>

        <span>
          tus manos
        </span>

        <strong>= algo tuyo</strong>

      </div>

    </section>
  )
}

export default Clases