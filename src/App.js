import { Fragment } from "react";
import Encabezado from "./Componente/Encabezado";
import './Componente/Encabezado.css'
import Inicio from "./Componente/Inicio";
import './Componente/Inicio.css'
import Contenedor from "./Componente/Contenedor";
import './Componente/Contenedor.css'
import Nosotros from "./Componente/Nosotros";
import './Componente/Nosotros.css'
import Tienda from "./Componente/Tienda";
import './Componente/Tienda.css'
import Clientes from "./Componente/Clientes";
import './Componente/Cliente.css'
import Contacto from "./Componente/Contacto";
import './Componente/Contacto.css'

function App() {
  
  return (
    <>
      <Encabezado  />
      
      <Inicio />
      <Contenedor />
      <Nosotros />
      <Tienda /> 
      <Clientes />
      <Contacto />

      </>
  )

}

export default App;