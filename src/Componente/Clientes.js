import { Fragment } from "react";
import Cliente from '../img/usuario.jpg';

function Clientes() {
    return (
        <>
            <section className="reviews" id="reviews">
                <div className="middle-text">
                    <h4>Clientes</h4>
                    <h2>Opiniones de nuestros clientes</h2>
                </div>
            </section>

            <section className="reviews-content">
                <div className="box">
                    <p>
                        ¡Buen lugar para comer!
                    </p>
                    <div className="in-box">
                        <div className="bx-img">
                            <img src={Cliente} alt="Cliente 1" />
                        </div>
                    </div>
                    <div className="bxx-text">
                        <h4>Pepe Cardona</h4>
                        <h5>Exportador</h5>
                        <div className="ratings">
                            <a href="#"><i className="bx bxs-star"></i></a>
                            <a href="#"><i className="bx bxs-star"></i></a>
                            <a href="#"><i className="bx bxs-star"></i></a>
                            <a href="#"><i className="bx bxs-star"></i></a>
                            <a href="#"><i className="bx bxs-star"></i></a>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <p>
                        ¡Una delicia de tradición!
                    </p>
                    <div className="in-box">
                        <div className="bx-img">
                            <img src={Cliente} alt="Cliente 2" />
                        </div>
                    </div>
                    <div className="bxx-text">
                        <h4>Carolina Herrera</h4>
                        <h5>Modista</h5>
                        <div className="ratings">
                            <a href="#"><i className="bx bxs-star"></i></a>
                            <a href="#"><i className="bx bxs-star"></i></a>
                            <a href="#"><i className="bx bxs-star"></i></a>
                            <a href="#"><i className="bx bxs-star"></i></a>
                            <a href="#"><i className="bx bxs-star"></i></a>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <p>
                        ¡Para chuparse los dedos!
                    </p>
                    <div className="in-box">
                        <div className="bx-img">
                            <img src={Cliente} alt="Cliente 3" />
                        </div>
                    </div>
                    <div className="bxx-text">
                        <h4>Jorge Pérez</h4>
                        <h5>Futbolista</h5>
                        <div className="ratings">
                            <a href="#"><i className="bx bxs-star"></i></a>
                            <a href="#"><i className="bx bxs-star"></i></a>
                            <a href="#"><i className="bx bxs-star"></i></a>
                            <a href="#"><i className="bx bxs-star"></i></a>
                            <a href="#"><i className="bx bxs-star"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Clientes;
