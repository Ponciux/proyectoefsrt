import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContadorVisitas() {
  const [visitas, setVisitas] = useState(0);

  useEffect(() => {
    // Obtén el número actual de visitas cuando el componente se monte
    axios.get('http://localhost:5000/api/visitas')
      .then(response => setVisitas(response.data.count))
      .catch(error => console.error('Error al obtener el contador de visitas', error));

    // Incrementa el contador de visitas
    axios.post('http://localhost:5000/api/visitas')
      .then(response => setVisitas(response.data.count))
      .catch(error => console.error('Error al actualizar el contador de visitas', error));
  }, []);

  return (
    <div className="contador-visitas">
      <h1>Número de Visitas: {visitas}</h1>
    </div>
  );
}

export default ContadorVisitas;