import { useEffect, useState } from "react";
import React from "react";
import PropTypes from 'prop-types';
import hamb1 from '../img/hmbg1.jpg';
import hamb2 from '../img/hmbg2.jpg';
import hamb3 from '../img/hmbg3.jpg';
import hamb4 from '../img/hmbg4.jpg';

const hamburguesasDisponibles = [
    { src: hamb1, alt: 'Hamburguesa de carne', nombre: 'Hamburguesa Clásica', descripcion: 'Granjera Simple', precio: 'S/.25.00' },
    { src: hamb2, alt: 'Hamburguesa de Duo Carne', nombre: 'Hamburguesa BBQ', descripcion: 'La Poderosa', precio: 'S/.35.00' },
    { src: hamb3, alt: 'Hamburguesa Vegana', nombre: 'Hamburguesa Veggie', descripcion: 'Cuarto de libra vegana', precio: 'S/.27.00' },
    { src: hamb4, alt: 'Hamburguesa Vegana Veggie Clásico', nombre: 'Hamburguesa Vegana Veggie Clásico', descripcion: 'Veggie Clásico', precio: 'S/.30.00' }
];

function Encabezado({ pedidos = [], onUpdatePedido, hamburguesaSeleccionada }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [formulario, setFormulario] = useState({
        nombre: "",
        apellidos: "",
        dni: "",
        email: "",
        direccion: "",
        comentarios: ""
    });
    const [hamburguesas, setHamburguesas] = useState([]);
    const [cantidad, setCantidad] = useState(1);
    const [cremasSeleccionadas, setCremasSeleccionadas] = useState([]);
    const [hamburguesaSeleccionadaForm, setHamburguesaSeleccionadaForm] = useState(hamburguesasDisponibles[0]);
    const [ultimoPedido, setUltimoPedido] = useState(null);

    const cremasDisponibles = ["Mayonesa", "Ketchup", "Mostaza", "Salsa Picante"];
    const eliminarHamburguesa = (index) => {
        setHamburguesas(prevHamburguesas => prevHamburguesas.filter((_, i) => i !== index));
    };

    // Sincronizar la hamburguesa seleccionada de la tienda con el formulario
    useEffect(() => {
        if (hamburguesaSeleccionada) {
            const hamburguesa = hamburguesasDisponibles.find(h => h.nombre === hamburguesaSeleccionada.nombre);
            setHamburguesaSeleccionadaForm(hamburguesa);
        }
    }, [hamburguesaSeleccionada]);

    const agregarHamburguesaDesdeFormulario = () => {
        if (hamburguesaSeleccionadaForm) {
            const hamburguesaExistente = hamburguesas.find(h => h.nombre === hamburguesaSeleccionadaForm.nombre);

            if (hamburguesaExistente) {
                setHamburguesas(prevHamburguesas => 
                    prevHamburguesas.map(h =>
                        h.nombre === hamburguesaSeleccionadaForm.nombre
                            ? { ...h, cantidad: h.cantidad + cantidad, cremas: cremasSeleccionadas }
                            : h
                    )
                );
            } else {
                setHamburguesas(prevHamburguesas => [
                    ...prevHamburguesas,
                    {
                        nombre: hamburguesaSeleccionadaForm.nombre,
                        cantidad,
                        cremas: cremasSeleccionadas
                    }
                ]);
            }

            setCantidad(1); 
            setCremasSeleccionadas([]);
        }
    };

    const abrirCarrito = (e) => {
        e.preventDefault();
        setModalVisible(!modalVisible);
        document.body.classList.toggle('no-scroll', !modalVisible);
    };

    const cerrarModal = () => {
        setModalVisible(false);
        document.body.classList.remove('no-scroll');
    };

    const agregarHamburguesa = () => {
        if (hamburguesaSeleccionada) {
            const hamburguesaExistente = hamburguesas.find(h => h.nombre === hamburguesaSeleccionada.nombre);

            if (hamburguesaExistente) {
                // Si la hamburguesa ya existe, solo incrementar la cantidad
                setHamburguesas(prevHamburguesas => 
                    prevHamburguesas.map(h =>
                        h.nombre === hamburguesaSeleccionada.nombre
                            ? { ...h, cantidad: h.cantidad + cantidad }
                            : h
                    )
                );
            } else {
                // Si la hamburguesa no existe, añadirla al pedido
                setHamburguesas(prevHamburguesas => [
                    ...prevHamburguesas,
                    {
                        nombre: hamburguesaSeleccionada.nombre,
                        cantidad,
                        cremas: cremasSeleccionadas
                    }
                ]);
            }

            setCantidad(1); // Resetear cantidad
            setCremasSeleccionadas([]); // Resetear cremas seleccionadas
        }
    };

    const enviarPedido = (e) => {
        e.preventDefault();
        const nuevoPedido = { ...formulario, hamburguesas };
        onUpdatePedido(nuevoPedido); // Actualiza los pedidos en el componente padre

         // Guardar el último pedido
        setUltimoPedido(nuevoPedido);

        // Limpiar formulario y hamburguesas después de enviar
        setFormulario({
            nombre: "",
            apellidos: "",
            dni: "",
            email: "",
            direccion: "",
            comentarios: ""
        });
        setHamburguesas([]);

        alert("¡Pedido enviado!");
    };

    const manejarCambioCrema = (crema) => {
        setCremasSeleccionadas((prev) =>
            prev.includes(crema) ? prev.filter(c => c !== crema) : [...prev, crema]
        );
    };

    const manejarCambioFormulario = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    };

    const descargarPedidos = () => {
        if (!ultimoPedido) {
            alert("No hay pedidos para descargar.");
            return;
        }
    
        const contenido = `Nombre: ${ultimoPedido.nombre} ${ultimoPedido.apellidos}\n 
        DNI: ${ultimoPedido.dni}\n 
        Correo: ${ultimoPedido.email}\n 
        Dirección: ${ultimoPedido.direccion}\n 
        Hamburguesas: ${ultimoPedido.hamburguesas.map(h => `${h.nombre} x${h.cantidad} (${h.cremas.join(', ')})`).join(', ')}\n 
        Comentarios: ${ultimoPedido.comentarios}\n 
        --------------------------------\n
        Tio Barrunto está preparando tu pedido!\n
        Gracias por tu preferencia!\n`;
    
        const mensajeDescarga = "               Tu Pedido está preparándose :)\n\n";
        const blob = new Blob([mensajeDescarga + contenido], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Tu_pedido.txt';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <header>
                <div className="logo">
                    <a href="#home">
                        <i className="bx bx-restaurant"></i>
                        <span>
                            <h1>Sabor Barrunto</h1>
                            <h5 className="log2">FastFood</h5>
                        </span>
                    </a>
                </div>
                <ul className="navlist">
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#shop">Tienda</a></li>
                    <li><a href="#reviews">Clientes</a></li>
                    <li><a href="#contact">Contáctanos</a></li>
                </ul>

                <div className="nav-icons">
                    <a href="#" onClick={abrirCarrito}><i className="bx bx-cart"></i></a>
                    <div className="bx bx-menu" id="menu-icon"></div>
                </div>

                <a href="#" className="scroll">
                    <i className="bx bx-up-arrow-alt"></i>
                </a>
            </header>

            <div id="modal" className={`modal ${modalVisible ? 'visible' : ''}`}>
                <div className="logo2">
                    <a href="">
                        <span>
                            <h1>Sabor Barrunto</h1>
                            <h5 className="log3">PEDIDOS</h5>
                        </span>
                    </a>
                </div>
                <form onSubmit={enviarPedido}>
                    <input 
                        type="text" 
                        name="nombre" 
                        placeholder="Nombre" 
                        value={formulario.nombre} 
                        onChange={manejarCambioFormulario} 
                        required 
                    />
                    <input 
                        type="text" 
                        name="apellidos" 
                        placeholder="Apellidos" 
                        value={formulario.apellidos} 
                        onChange={manejarCambioFormulario} 
                        required 
                    />
                    <input 
                        type="text" 
                        name="dni" 
                        placeholder="DNI" 
                        value={formulario.dni} 
                        onChange={manejarCambioFormulario} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Correo Electrónico" 
                        value={formulario.email} 
                        onChange={manejarCambioFormulario} 
                        required 
                    />
                    <input 
                        type="text" 
                        name="direccion" 
                        placeholder="Dirección" 
                        value={formulario.direccion} 
                        onChange={manejarCambioFormulario} 
                        required 
                    />
                    <textarea 
                        name="comentarios" 
                        placeholder="Comentarios" 
                        value={formulario.comentarios} 
                        onChange={manejarCambioFormulario} 
                    ></textarea>

                    <h4>Seleccionar Hamburguesa:</h4>
                    <select 
                        value={hamburguesaSeleccionadaForm.nombre}
                        onChange={(e) => {
                            const hamburguesa = hamburguesasDisponibles.find(h => h.nombre === e.target.value);
                            setHamburguesaSeleccionadaForm(hamburguesa);
                        }}
                    >
                        {hamburguesasDisponibles.map((hamburguesa, index) => (
                            <option key={index} value={hamburguesa.nombre}>
                                {hamburguesa.nombre} - {hamburguesa.precio}
                            </option>
                        ))}
                    </select>
                    <h4>Cantidad:</h4>
                    <input 
                        type="number" 
                        value={cantidad} 
                        onChange={(e) => setCantidad(Number(e.target.value))} // Asegurarse de que la cantidad sea un número
                        min="1" 
                        max="10" 
                    />
                    <h4>Cremas:</h4>
                    {cremasDisponibles.map((crema) => (
                        <div key={crema} className="cremas-lista">
                            <input 
                                type="checkbox" 
                                checked={cremasSeleccionadas.includes(crema)} 
                                onChange={() => manejarCambioCrema(crema)} 
                            />
                            <label>{crema}</label>
                        </div>
                    ))}

                    
                    <div className="botones-container">
                        <button type="button" onClick={agregarHamburguesaDesdeFormulario}>Agregar Hamburguesa</button>
                        <button type="submit">Enviar <br /> Pedido</button>
                    </div>
                </form>

                    <button className="descargar-pedido" onClick={descargarPedidos}>Descargar Pedido</button>
                
                    <div className="hamburguesas-lista">
                        <h4 className="titulo-pedido">Edita tu Pedido</h4>
                        {hamburguesas.length === 0 ? (
                            <p>No hay hamburguesas en el pedido.</p>
                        ) : (
                            <div className="lista-hamburguesas">
                                {hamburguesas.map((hamburguesa, index) => (
                                <div key={index} className="hamburguesa-item">
                                    <div className="hamburguesa-info">
                                    <span className="nombre-hamburguesa">{hamburguesa.nombre} x{hamburguesa.cantidad}</span>
                                    <button onClick={() => eliminarHamburguesa(index)} className="eliminar-button">Eliminar</button>
                                </div>
                                {hamburguesa.cremas.length > 0 && (
                                    <div className="cremas-hamburguesa">
                                        <span>Cremas:</span>
                                        <span>{hamburguesa.cremas.join(', ')}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </>
);
}

Encabezado.propTypes = {
    pedidos: PropTypes.array,
    onUpdatePedido: PropTypes.func.isRequired,
    hamburguesaSeleccionada: PropTypes.object
};

export default Encabezado;
