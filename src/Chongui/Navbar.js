import React, { useState } from 'react'

const Navbar = () => {

    const [menuAbierto, setMenuAbierto] = useState(false)

    const cerrarMenu = () => {
        setMenuAbierto(false)
    }

    return (
        <header className="khaleNav">

            {/* LOGO */}
            <a
                href="#inicio"
                className="khaleNav__brand"
                onClick={cerrarMenu}
            >
                <span className="khaleNav__brandMain">
                    KHALE
                </span>

                <span className="khaleNav__brandScript">
                    cerámica
                </span>
            </a>


            {/* LINKS */}
            <nav className="khaleNav__links">

                <a href="#piezas">
                    Piezas
                </a>

                <a href="#pedidos">
                    Pedidos
                </a>

                <a href="#taller">
                    Taller
                </a>

                <a href="#contacto">
                    Contacto
                </a>

            </nav>


            {/* CLASES */}
            <a
                href="#clases"
                className="khaleNav__clases"
            >
                <span>
                    Clases
                </span>

                <small>
                    vení a crear
                </small>

                <b>
                    ↗
                </b>
            </a>


            {/* MOBILE */}
            <button
                className={`khaleNav__menu ${menuAbierto ? 'activo' : ''}`}
                onClick={() => setMenuAbierto(!menuAbierto)}
                aria-label="Abrir menú"
            >
                <span></span>
                <span></span>
            </button>


            <div className={`khaleNavMobile ${menuAbierto ? 'abierto' : ''}`}>

                <a href="#piezas" onClick={cerrarMenu}>
                    <small>01</small>
                    piezas
                </a>

                <a href="#pedidos" onClick={cerrarMenu}>
                    <small>02</small>
                    pedidos
                </a>

                <a href="#clases" onClick={cerrarMenu}>
                    <small>03</small>
                    clases
                </a>

                <a href="#taller" onClick={cerrarMenu}>
                    <small>04</small>
                    taller
                </a>

                <p>
                    barro, fuego
                    <br />
                    y un poquito de paciencia ♡
                </p>

            </div>

        </header>
    )
}

export default Navbar