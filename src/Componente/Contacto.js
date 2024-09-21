import { Fragment } from "react";

function Contacto() {
    return (
        <>
            <section className="contact" id="contact">
                <div className="contact-content">
                    <div className="contact-text">
                        <h2>Contáctanos</h2>
                        <p>
                            El servicio es cálido y atento, haciendo que cada visita se sienta personalizada y especial.
                            La decoración del restaurante es sencilla y elegante, creando un entorno relajado y cómodo para disfrutar de
                            una comida en familia o con amigos.
                        </p>
                        <div className="social">
                            <a href="#" className="clr"><i className="bx bxl-instagram-alt"></i></a>
                            <a href="#"><i className="bx bxl-facebook"></i></a>
                            <a href="#"><i className="bx bxl-twitter"></i></a>
                            <a href="#"><i className="bx bxl-telegram"></i></a>
                            <a href="#"><i className="bx bxl-google"></i></a>
                        </div>

                        <div className="details">
                            <div className="main-d">
                                <a href="https://maps.app.goo.gl/dCTj6qAHNRB4Kegi8"><i className="bx bxs-location-plus"></i>Av. Armendáriz 100, Lima</a>
                            </div>
                            <div className="main-d">
                                <a href="#"><i className="bx bx-mobile-alt"></i>999 555 222</a>
                            </div>
                            <div className="main-d">
                                <a href="#"><i className="bx bxl-youtube"></i>Sabor_BarruntoYT</a>
                            </div>
                            <div className="main-d">
                                <a href="#"><i className="bx bx-bell"></i>Suscríbete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contacto;
