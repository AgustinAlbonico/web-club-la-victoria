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
    nombre: 'Cancha fútbol 5',
    descripcion: '',
  },
  {
    icon: PaddleIcon,
    nombre: 'Pádel sobre alfombra',
    descripcion: '',
  },
  {
    icon: PaddleIcon,
    nombre: 'Pádel sobre cemento',
    descripcion: '',
  },
  {
    icon: TennisIcon,
    nombre: 'Tenis sobre polvo de ladrillo',
    descripcion: '',
  },
  {
    icon: HomeIcon,
    nombre: 'Salón',
    descripcion:
      'En caso de solicitar este servicio para Casamientos o Cumpleaños de Quince, comunicarse previamente con la Secretaría del Club.',
  },
  {
    icon: HomeIcon,
    nombre: 'Quincho',
    descripcion:
      'En caso de solicitar este servicio para Casamientos o Cumpleaños de Quince, comunicarse previamente con la Secretaría del Club.',
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
            Seleccioná actividad, día y hora. Una vez abonada, deberás adjuntar
            el comprobante del pago en el apartado "Mis reservas". Tendrás 30
            minutos para hacerlo.
          </p>
        </div>
        <div className='row items-container'>
          {dataItems.map((item) => {
            return (
              <ReservaItem
                key={item.nombre}
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
