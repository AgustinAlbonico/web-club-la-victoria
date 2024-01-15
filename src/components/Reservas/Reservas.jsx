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
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.',
    link: 'https://www.facebook.com',
  },
  {
    icon: PaddleIcon,
    nombre: 'Cancha paddel alfombra',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.',
    link: 'https://www.facebook.com',
  },
  {
    icon: PaddleIcon,
    nombre: 'Cancha de paddel cemento',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.',
    link: 'https://www.facebook.com',
  },
  {
    icon: TennisIcon,
    nombre: 'Cancha de tenis',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.',
    link: 'https://www.facebook.com',
  },
  {
    icon: HomeIcon,
    nombre: 'Salon',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.',
    link: 'https://www.facebook.com',
  },
  {
    icon: HomeIcon,
    nombre: 'Quincho',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.',
    link: 'https://www.facebook.com',
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row items-container'>
          {dataItems.map((item) => {
            return (
              <ReservaItem
                icon={item.icon}
                nombre={item.nombre}
                descripcion={item.descripcion}
                link={item.link}
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
