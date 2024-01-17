import React, { useEffect, useRef, useState } from 'react'
import Logo from '../../img/logo.png'

export const Navigation = (props) => {
  const [close, setClose] = useState(false)

  const handleItemClick = () => {
    setClose(true)
  }

  return (
    <nav
      id='menu'
      className={`navbar navbar-default navbar-fixed-top bg-primary navbar-no-background`}
    >
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
            onClick={() => close && setClose(false)}
          >
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='logo-container' href='#home'>
            <img src={Logo} alt='La Victoria Logo' className='logo-img' />
          </a>
        </div>
        <div
          className={`collapse navbar-collapse ${close && 'hide'}`}
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a
                href='#home'
                className='page-scroll navbar-item'
                onClick={handleItemClick}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='page-scroll navbar-item'
                onClick={handleItemClick}
              >
                Nosotros
              </a>
            </li>
            <li className='reservas-btn'>
              <a
                href='#reservas'
                className='page-scroll'
                onClick={handleItemClick}
              >
                Reservas
              </a>
            </li>
            {/* <li>
              <a href='#services' className='page-scroll navbar-item'>
                Servicios
              </a>
            </li> */}
            <li>
              <a
                href='#contact'
                className='page-scroll navbar-item'
                onClick={handleItemClick}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
