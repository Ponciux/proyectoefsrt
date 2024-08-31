import { Fragment } from "react";
import imgnosotros from '../img/Debarrio.jpg';

function Nosotros() {
    return (
        <>
            <section className="about" id="about">
                <div className="about-img">
                    <img src={imgnosotros} alt="Sabor Barrunto" />
                </div>

                <div className="about-text">
                    <h2>
                        "Sabor Barrunto" <br />
                        Una historia de tradición y mucho barrio
                    </h2>
                    <p>
                        "Sabor Barrunto" es un restaurante de barrio que ha ganado el cariño de la comunidad por su ambiente acogedor y
                        su sabor casero. Ubicado en un pasaje tranquilo, este lugar destaca por su comida rápida tradicional preparada con ingredientes
                        frescos y de calidad. <br /><br /> A la salida de las clases o del trabajo siempre podrás encontrar
                        a "Sabor Barrunto" con sus ricos platos económicos.
                        Es una experiencia familiar que invita a los clientes a sentirse como en casa. El decorado sencillo y funcional contribuye
                        a una atmósfera relajada, ideal tanto para una comida rápida durante la semana como para una cena tranquila en fin de semana.
                    </p>
                    <a href="https://www.youtube.com/watch?v=KWmZeA3-9HY" className="btn">Ver Historia<i className="bx bxs-right-arrow"></i></a>
                </div>
            </section>
        </>
    );
}

export default Nosotros;