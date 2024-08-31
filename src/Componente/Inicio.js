import { Fragment } from "react";
import imginicio from '../img/hamburguesa.png';

function Inicio() {
    return (
        <>
            <section className="home" id="home">
                <div className="home-txt">
                    <h1>Como <span>quieres</span> <br />hoy tu pedido</h1>
                    <a href="#shop" className="btn">Menú<i className="bx bxs-right-arrow"></i></a>
                    <a href="https://wa.me/51999555222" className="btn2">Ordenar ahora</a>
                </div>

                <div className="home-img">
                    <img alt="Inicio" src={imginicio} className="imgInic"/>
                </div>
            </section>
        </>
    );
}

export default Inicio;