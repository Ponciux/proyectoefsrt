import { Fragment } from "react";

function Encabezado() {
    return (
        <>
            <div className="logo">
                <i className="bx bx-restaurant"></i>
                <em>
                    <h1>Sabor Barrunto</h1>
                    <h5 className="log2">FastFood</h5>
                </em>
            </div>
            <ul className="navlist">
                <li><a href="#home" className="active">Inicio</a></li>
                <li><a href="#about">Nosotros</a></li>
                <li><a href="#shop">Tienda</a></li>
                <li><a href="#reviews">Clientes</a></li>
                <li><a href="#contact">Contáctanos</a></li>
            </ul>

            <div className="nav-icons">
                <a href="#"><i className="bx bx-search"></i></a>
                <a href="#"><i className="bx bx-cart"></i></a>
                <div className="bx bx-menu" id="menu-icon"></div>
            </div>

            <a href="#" class="scroll">
                <i class="bx bx-up-arrow-alt"></i>
            </a>
        </>
    );
}

export default Encabezado;