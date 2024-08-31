import { Fragment } from "react";
import hamb1 from '../img/hmbg1.jpg';
import hamb2 from '../img/hmbg2.jpg';
import hamb3 from '../img/hmbg3.jpg';
import hamb4 from '../img/hmbg4.jpg';

function Tienda() {
    return (
        <>
            <section className="shop" id="shop">
                <div className="middle-text">
                    <h4>Tienda</h4>
                    <h2>Hamburguesas más populares</h2>
                </div>

                <div className="shop-content">
                    <div className="row">
                        <img src={hamb1} alt="Hamburguesa de carne" />
                        <h3 className="txt">Hamburguesa de carne</h3>
                        <p className="txt1">Granjera Simple</p>
                        <div className="in-text">
                            <div className="price">
                                <h6>S/.25.00</h6>
                            </div>
                            <div className="s-btn">
                                <a href="https://wa.link/sol527">Pide ya!</a>
                            </div>
                        </div>
                        <div className="top-icon">
                            <a href="#"><i className="bx bx-heart"></i></a>
                        </div>
                    </div>

                    <div className="row">
                        <img src={hamb2} alt="Hamburguesa de Duo Carne" />
                        <h3 className="txt">Hamburguesa de Duo Carne</h3>
                        <p className="txt1">Blue Label</p>
                        <div className="in-text">
                            <div className="price">
                                <h6>S/.35.00</h6>
                            </div>
                            <div className="s-btn">
                                <a href="https://wa.link/sol527">Pide ya!</a>
                            </div>
                        </div>
                        <div className="top-icon">
                            <a href="#"><i className="bx bx-heart"></i></a>
                        </div>
                    </div>

                    <div className="row">
                        <img src={hamb3} alt="Hamburguesa Vegana" />
                        <h3 className="txt">Hamburguesa Vegana</h3>
                        <p className="txt1">Cuarto de libra vegan</p>
                        <div className="in-text">
                            <div className="price">
                                <h6>S/.27.00</h6>
                            </div>
                            <div className="s-btn">
                                <a href="https://wa.link/sol527">Pide ya!</a>
                            </div>
                        </div>
                        <div className="top-icon">
                            <a href="#"><i className="bx bx-heart"></i></a>
                        </div>
                    </div>

                    <div className="row">
                        <img src={hamb4} alt="Hamburguesa Vegana Veggie Clásico" />
                        <h3 className="txt">Hamburguesa Vegana</h3>
                        <p className="txt1">Veggie Clásico</p>
                        <div className="in-text">
                            <div className="price">
                                <h6>S/.25.00</h6>
                            </div>
                            <div className="s-btn">
                                <a href="https://wa.link/sol527">Pide ya!</a>
                            </div>
                        </div>
                        <div className="top-icon">
                            <a href="#"><i className="bx bx-heart"></i></a>
                        </div>
                    </div>
                </div>

                <div className="row-btn">
                    <a href="img/CartaFastfood.pdf" className="btn">Todos los productos <i className="bx bx bxs-right-arrow"></i></a>
                </div>
            </section>
        </>
    );
}

export default Tienda;