import React, { useRef } from 'react'

const HeroPrisma = () => {

  const prismaRef = useRef(null)

  const moverPrisma = (e) => {

    const elemento = prismaRef.current
    if (!elemento) return

    const rect = elemento.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centroX = rect.width / 2
    const centroY = rect.height / 2

    const rotacionY = ((x - centroX) / centroX) * 10
    const rotacionX = ((centroY - y) / centroY) * 8

    elemento.style.transform = `
      perspective(900px)
      rotateX(${rotacionX}deg)
      rotateY(${rotacionY}deg)
      scale(1.02)
    `
  }


  const resetPrisma = () => {

    const elemento = prismaRef.current
    if (!elemento) return

    elemento.style.transform = `
      perspective(900px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `
  }


  return (
    <section className="prismaHero">

      <div className="prismaHero__content">

        <p className="prismaHero__eyebrow">
          PENSAR · DISEÑAR · DESARROLLAR
        </p>

        <h1 className="prismaHero__title">
          PRISMA
        </h1>

        <h2 className="prismaHero__subtitle">
          SOLUCIONES DIGITALES
          <span> PARA EMPRESAS y EMPRENDIMIENTOS</span>
        </h2>

        <p className="prismaHero__description">
          Transformamos ideas, procesos y necesidades
          en herramientas digitales claras,
          funcionales y adaptadas a cada empresa.
        </p>

        <div className="prismaHero__services">
          <span>DESARROLLO WEB</span>
          <span>SOFTWARE A MEDIDA</span>
          <span>SISTEMAS DE GESTIÓN</span>
        </div>

        <div className="prismaHero__buttons">

          <a
            href="#proyectos"
            className="prismaBtn prismaBtn--primary"
          >
            VER PROYECTOS
          </a>

          <a
            href="#contacto"
            className="prismaBtn prismaBtn--secondary"
          >
            CONTACTO
          </a>

        </div>

      </div>


      <div
        className="prismaTiltArea"
        onMouseMove={moverPrisma}
        onMouseLeave={resetPrisma}
      >

        <div
          ref={prismaRef}
          className="prismaVisual"
        >

          {/* brillo de fondo */}
          <div className="prismaGlow"></div>


          {/* PARTÍCULAS */}

          <span className="prismaParticle prismaParticle--1">
            P
          </span>

          <span className="prismaParticle prismaParticle--2">
            R
          </span>

          <span className="prismaParticle prismaParticle--3">
            01
          </span>

          <span className="prismaParticle prismaParticle--4">
            {`{ }`}
          </span>

          <span className="prismaParticle prismaParticle--5">
            S
          </span>

          <span className="prismaParticle prismaParticle--6">
            M
          </span>


          {/* HAZ QUE ENTRA */}

          <div className="prismaInputBeam"></div>


          {/* PRISMA */}

          <div className="prismaShape">

            <div className="prismaShape__inner"></div>

            <div className="prismaShape__shine"></div>

          </div>


          {/* HACES QUE SALEN */}

          <div className="prismaBeam prismaBeam--1"></div>

          <div className="prismaBeam prismaBeam--2"></div>

          <div className="prismaBeam prismaBeam--3"></div>


          {/* pequeñas etiquetas */}

          <span className="prismaOutput prismaOutput--1">
            WEB
          </span>

          <span className="prismaOutput prismaOutput--2">
            SOFTWARE
          </span>

          <span className="prismaOutput prismaOutput--3">
            GESTIÓN
          </span>

        </div>

      </div>

    </section>
  )
}

export default HeroPrisma