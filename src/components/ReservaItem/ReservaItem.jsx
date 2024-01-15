import React from 'react';
import './reservaItem.css';

const ReservaItem = ({
  icon,
  nombre,
  descripcion,
  link,
  changeLink,
  setIsOpen,
}) => {
  const handleClick = () => {
    changeLink(link);
    setIsOpen(true);
  };

  return (
    // <div className='reservaItem-container'>
    //   <img src={imagen} alt='' />
    //   <h4>{nombre}</h4>
    //   <p>{descripcion}</p>
    //   <button onClick={() => handleClick()}>Reservar</button>
    // </div>

    <div className='col-md-4 reserva-item-container'>
      <div className='border-top'></div>
      <div className='img-container'>
        <img src={icon} alt='' className='' />
      </div>
      <div className='item-desc'>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <button className='btn btn-custom btn-lg' onClick={() => handleClick()}>
          Reservar
        </button>
      </div>
    </div>
  );
};

export default ReservaItem;
