import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import Encabezado from "./Componente/Encabezado";
import './Componente/Encabezado.css';
import Inicio from "./Componente/Inicio";
import './Componente/Inicio.css';
import Contenedor from "./Componente/Contenedor";
import './Componente/Contenedor.css';
import Nosotros from "./Componente/Nosotros";
import './Componente/Nosotros.css';
import Tienda from "./Componente/Tienda";
import './Componente/Tienda.css';
import Clientes from "./Componente/Clientes";
import './Componente/Cliente.css';
import Contacto from "./Componente/Contacto";
import './Componente/Contacto.css';
import ContadorVisitas from './Componente/ContadorVisitas';
import './Componente/ContadorVisitas.css';

function App() {
  const [pedidos, setPedidos] = useState([]);
  const [hamburguesaSeleccionada, setHamburguesaSeleccionada] = useState(null);

  // Función para actualizar el pedido
  const onSelectHamburguesa = (hamburguesa) => {
    setHamburguesaSeleccionada(hamburguesa);
  };

  const onUpdatePedido = (nuevoPedido) => {
    setPedidos((prevPedidos) => [...prevPedidos, nuevoPedido]);
  };

  // Guardar y recuperar pedidos en localStorage
  useEffect(() => {
    const storedPedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    setPedidos(storedPedidos);
  }, []);

  useEffect(() => {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
  }, [pedidos]);

  // Efecto de caída suave
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '85px',
      duration: 2500,
      reset: false,
    });

    sr.reveal('.home-text', { delay: 300 });
    sr.reveal('.home-img', { delay: 400 });
    sr.reveal('.container', { delay: 400 });
    sr.reveal('.about-img', {});
    sr.reveal('.about-text', { delay: 300 });
    sr.reveal('.middle-text', {});
    sr.reveal('.row-btn,.shop-content', { delay: 300 });
    sr.reveal('.review,.contact', { delay: 300 });
  }, []);

  return (
    <>
      <Encabezado 
        pedidos={pedidos} 
        onUpdatePedido={onUpdatePedido} 
        hamburguesaSeleccionada={hamburguesaSeleccionada} 
      />
      <Inicio />
      <Contenedor />
      <Nosotros />
      <Tienda onSelectHamburguesa={onSelectHamburguesa} />
      <Clientes />
      <br />
      <Contacto />
      <ContadorVisitas />
    </>
  );
}

export default App;
