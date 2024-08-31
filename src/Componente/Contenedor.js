import { Fragment } from "react";
import imgburger from '../img/icono burger.png';

function Contenedor() {
    return (
        <>
            <section className="container">
                <div className="container-box">
                    <img alt="Contenedor" src={imgburger}/>
                    <h3>11:00 am - 8:00 pm</h3>
                    <a href="#">Horario</a>
                </div>

                <div className="container-box">
                    <img alt="Contenedor" src={imgburger}/>
                    <h3>Jr. Los Horizontes 111</h3>
                    <a href="https://maps.app.goo.gl/Tz6HXGxVyU1vJjLX9">Obtener dirección</a>
                </div>

                <div className="container-box">
                    <img alt="Contenedor" src={imgburger}/>
                    <h3>+51 999 555 222</h3>
                    <a href="https://wa.me/51999555222">Whatsapp</a>
                </div>
            </section>
        </>
    );
}

export default Contenedor;