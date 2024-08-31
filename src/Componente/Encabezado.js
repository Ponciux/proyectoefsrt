import { Fragment } from "react";
import React, { useEffect } from "react";

function Encabezado() {
    // Evento de panel de menus quede inmovilizado para mejor interacción
    useEffect(() => {
        const header = document.querySelector('header');
        const menu = document.querySelector('#menu-icon');
        const navlist = document.querySelector('.navlist');

        // Función para manejar el scroll y agregar la clase 'sticky'
        const handleScroll = () => {
            header.classList.toggle('sticky', window.scrollY > 50);
        };

        // Función para alternar el menú
        const toggleMenu = () => {
            menu.classList.toggle('bx-x');
            navlist.classList.toggle('open');
        };

        // Agregar eventos
        window.addEventListener('scroll', handleScroll);
        menu.addEventListener('click', toggleMenu);

        // Cleanup para remover los eventos cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', handleScroll);
            menu.removeEventListener('click', toggleMenu);
        };
    }, []);


    return (
        <>
            <header>
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

                <a href="#" className="scroll">
                    <i className="bx bx-up-arrow-alt"></i>
                </a>
            </header>
            
            <a href="#" class="scroll">
                <i class="bx bx-up-arrow-alt"></i>
            </a>
        </>
    );
}

export default Encabezado;