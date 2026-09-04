import React from 'react'

const Footer = () => {

  const anioActual = new Date().getFullYear()

  return (
    <footer className="footerKhale">

      {/* =====================================
          CABECERA
      ====================================== */}

      <div className="footerKhale__top">

        <div className="footerKhale__frase">

          <span>
            nos vemos entre
          </span>

          <h2>
            BARRO
            <i>&</i>
            COSAS LINDAS.
          </h2>

          <p>
            hecho despacito ♡
          </p>

        </div>


        <div className="footerKhale__contacto">

          <span className="footerKhale__mini">
            ¿hablamos?
          </span>

          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="footerKhale__whatsapp"
          >
            WHATSAPP
            <span>↗</span>
          </a>

          <a
            href="https://www.instagram.com/khale.ceramica/"
            target="_blank"
            rel="noreferrer"
            className="footerKhale__instagram"
          >
            @khale.ceramica
          </a>

        </div>

      </div>


      {/* =====================================
          CENTRO
      ====================================== */}

      <div className="footerKhale__middle">

        {/* NAVEGACION */}

        <div className="footerKhale__nav">

          <span className="footerKhale__label">
            RECORRER
          </span>

          <a href="#inicio">
            inicio
          </a>

          <a href="#piezas">
            piezas
          </a>

          <a href="#pedidos">
            pedidos
          </a>

          <a href="#clases">
            clases
          </a>

          <a href="#nosotros">
            sobre Khale
          </a>

        </div>


        {/* INFO */}

        <div className="footerKhale__info">

          <span className="footerKhale__label">
            KHALE CERÁMICA
          </span>

          <p>
            Piezas hechas a mano
            <br />
            y clases de cerámica.
          </p>

          <span className="footerKhale__nota">
            barro + manos + fuego
          </span>

        </div>


        {/* SOCIAL */}

        <div className="footerKhale__social">

          <span className="footerKhale__label">
            ENCONTRANOS
          </span>

          <a
            href="https://www.instagram.com/khale.ceramica/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
            <span>↗</span>
          </a>

          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
            <span>↗</span>
          </a>

        </div>

      </div>


      {/* =====================================
          LOGO GIGANTE
      ====================================== */}

      <div className="footerKhale__brand">

        <h2>
          KHALE
        </h2>

        <span>
          cerámica
        </span>

        <div className="footerKhale__corazon">
          ♡
        </div>

      </div>


      {/* =====================================
          BOTTOM
      ====================================== */}

      <div className="footerKhale__bottom">

        <p>
          © {anioActual} KHALE CERÁMICA
        </p>

        <p className="footerKhale__artesanal">
          hecho con amor & un poco de barro
        </p>

        <a
          href="#inicio"
          className="footerKhale__volver"
        >
          volver arriba
          <span>↑</span>
        </a>

      </div>

    </footer>
  )
}

export default Footer