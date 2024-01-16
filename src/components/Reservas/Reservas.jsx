import { useState } from 'react'
import DniModal from '../DniModal/DniModal'
import './reservas.css'
import ReservaItem from '../ReservaItem/ReservaItem'
import { useRef } from 'react'
import FutbolIcon from '../../img/soccer-ball-variant.png'
import PaddleIcon from '../../img/paddle.png'
import TennisIcon from '../../img/tennis.png'
import HomeIcon from '../../img/home.png'

const dataItems = [
  {
    icon: FutbolIcon,
    nombre: 'Cancha de futbol 5',
    descripcion: '',
  },
  {
    icon: PaddleIcon,
    nombre: 'Cancha padel alfombra',
    descripcion: '',
  },
  {
    icon: PaddleIcon,
    nombre: 'Cancha de padel cemento',
    descripcion: '',
  },
  {
    icon: TennisIcon,
    nombre: 'Cancha de tenis',
    descripcion: '',
  },
  {
    icon: HomeIcon,
    nombre: 'Salon',
    descripcion: '',
  },
  {
    icon: HomeIcon,
    nombre: 'Quincho',
    descripcion: '',
  },
]

export const Reservas = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const link = useRef('')

  const changeLink = (item) => {
    link.current = item
  }

  return (
    <div id='reservas' className='text-center'>
      <div className='container'>
        <div className='section-title reservas-title'>
          <h2>Reservas</h2>
          <p>Realiza tu reserva en cualquiera de nuestros espacios!</p>
        </div>
        <div className='row items-container'>
          {dataItems.map((item) => {
            return (
              <ReservaItem
                icon={item.icon}
                nombre={item.nombre}
                descripcion={item.descripcion}
                changeLink={changeLink}
                setIsOpen={setIsOpen}
              />
            )
          })}
        </div>
        <DniModal isOpen={isOpen} setIsOpen={setIsOpen} link={link.current} />
      </div>
    </div>
  )
}
