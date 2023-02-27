import React from 'react';
import '../styles/Testimonio.scss'

function Testimonio(props){
  return (
    <div className='contenedor-testimonio flex-xl-row flex-column'>
      <img className='imagen-testimonio' src={require(`../img/t${props.img}.png`)} alt={`imagen del testimonio de ${props.nombre}`} />  
      <div className='informacion-testimonio'>
        <h1 className='titulo-testimonio'>{props.nombre} en {props.pais}</h1>
        <h2 className='subtitulo-testimonio'>{props.cargo} en {props.empresa}</h2>
        <p className='parrafo-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;