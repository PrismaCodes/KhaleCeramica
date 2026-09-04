import React from 'react'

const Presentacion = () => {
    return (
        <section className="presentacion" id="nosotros">

            {/* TEXTO DECORATIVO SUPERIOR */}
            <div className="presentacion__intro">
                <span>un poquito</span>
                <p>sobre Khale</p>
                <i>↘</i>
            </div>


            <div className="presentacion__contenido">

                {/* =========================
                    COLLAGE
                ========================== */}

                <div className="presentacion__collage">

                    <div className="presentacion__foto presentacion__foto--principal">
                        <img
                            src="https://res.cloudinary.com/df6hryxoa/image/upload/v1788547706/PresentacionCambiarBig_jjojjd.jpg"
                            alt="Proceso artesanal de Khale Cerámica"
                        />

                        <span className="presentacion__cinta"></span>
                    </div>


                    <div className="presentacion__foto presentacion__foto--secundaria">
                        <img
                            src="https://res.cloudinary.com/df6hryxoa/image/upload/v1788547706/PresentacionCambiarSmall_x7oezm.jpg"
                            alt="Piezas de cerámica Khale"
                        />
                    </div>


                    <div className="presentacion__nota">
                        <span>hecho</span>
                        <strong>a mano</strong>
                        <span>siempre ♡</span>
                    </div>


                    <span className="presentacion__garabato">
                        ✦
                    </span>

                </div>


                {/* =========================
                    INFORMACIÓN
                ========================== */}

                <div className="presentacion__info">

                    <span className="presentacion__numero">
                        01 / KHALE
                    </span>


                    <h2>
                        NO HACEMOS
                        <span>DOS PIEZAS</span>
                        IGUALES.
                    </h2>


                    <div className="presentacion__descripcion">

                        <p>
                            Cada pieza empieza en las manos y encuentra
                            su forma de a poco. Sin moldes perfectos,
                            sin apuro y dejando que el material también
                            tenga algo para decir.
                        </p>

                        <p>
                            Creamos objetos para acompañar lo cotidiano:
                            una taza, un desayuno, una mesa compartida
                            o ese rincón favorito de casa.
                        </p>

                    </div>


                    <div className="presentacion__firma">
                        <span>
                            barro + manos + fuego
                        </span>

                        <div></div>
                    </div>


                    <a
                        href="#piezas"
                        className="presentacion__link"
                    >
                        <span>
                            conocer las piezas
                        </span>

                        <b>
                            ↘
                        </b>
                    </a>

                </div>

            </div>

        </section>
    )
}

export default Presentacion