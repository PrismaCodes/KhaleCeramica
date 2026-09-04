import React from 'react'

const Piezas = () => {

    const categorias = [
        {
            nombre: 'Tazas',
            imagen: '/img/piezas-tazas.jpg',
            texto: 'para el café de todos los días',
            clase: 'pieza pieza--grande'
        },
        {
            nombre: 'Cuencos',
            imagen: '/img/piezas-cuencos.jpg',
            texto: 'pequeños, grandes y únicos',
            clase: 'pieza pieza--alta'
        },
        {
            nombre: 'Vajilla',
            imagen: '/img/piezas-vajilla.jpg',
            texto: 'para mesas con historia',
            clase: 'pieza pieza--media'
        },
        {
            nombre: 'Deco',
            imagen: '/img/piezas-deco.jpg',
            texto: 'objetos para hacer hogar',
            clase: 'pieza pieza--chica'
        },
        {
            nombre: 'Sets',
            imagen: '/img/piezas-sets.jpg',
            texto: 'piezas que nacieron juntas',
            clase: 'pieza pieza--ancha'
        },
        {
            nombre: 'Personalizadas',
            imagen: '/img/piezas-personalizadas.jpg',
            texto: 'contanos qué tenés en mente',
            clase: 'pieza pieza--especial'
        }
    ]


    return (
        <section className="piezas" id="piezas">

            <div className="piezas__header">

                <div className="piezas__numero">
                    02 / PIEZAS
                </div>

                <div className="piezas__titulo">

                    <span className="piezas__tituloScript">
                        hechas para
                    </span>

                    <h2>
                        USAR,
                        <br />
                        MIRAR
                        <br />
                        <span>Y QUERER.</span>
                    </h2>

                </div>


                <div className="piezas__intro">

                    <p>
                        Cada pieza de Khale está hecha a mano.
                        Puede haber pequeñas diferencias de forma,
                        textura o color.
                    </p>

                    <strong>
                        y eso es justamente
                        <br />
                        lo que nos gusta ♡
                    </strong>

                </div>

            </div>


            <div className="piezas__galeria">

                {categorias.map((item, index) => (

                    <article
                        className={item.clase}
                        key={index}
                    >

                        <a href="#pedidos">

                            <div className="pieza__imagen">

                                <img
                                    src={item.imagen}
                                    alt={item.nombre}
                                />

                                <span className="pieza__numero">
                                    0{index + 1}
                                </span>

                            </div>


                            <div className="pieza__info">

                                <h3>
                                    {item.nombre}
                                </h3>

                                <p>
                                    {item.texto}
                                </p>

                                <span className="pieza__flecha">
                                    ↗
                                </span>

                            </div>

                        </a>

                    </article>

                ))}

            </div>


            <div className="piezas__footer">

                <span>
                    ¿buscabas otra cosa?
                </span>

                <a href="#pedidos">
                    hagamos algo juntas
                    <b>↘</b>
                </a>

            </div>

        </section>
    )
}

export default Piezas