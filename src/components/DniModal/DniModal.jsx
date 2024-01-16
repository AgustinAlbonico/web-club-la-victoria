import React, { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import dnis from '../../data/documentosSocios.json'
import Modal from 'react-modal'
import './dniModal.css'
import { toast } from 'react-toastify'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1000000',
  },
}

const DniModal = ({ isOpen, setIsOpen }) => {
  //const [isOpen, setIsOpen] = useState(true);
  const [dni, setDni] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (dni.length === 0) return setError('Campo vacio')
    else {
      if (dni.length < 7 || dni.length > 8) return setError('Dni erroneo')
    }
    if (dnis.documentos.find((item) => item === dni)) {
      setError('')
      setTimeout(() => {
        window.location.href =
          'https://turnosconqr.com/club_la_victoria-prueba1'
      }, 1500)
      toast.success('Redirigiendo a las reservas', {
        position: 'top-center',
        autoclose: 1500,
      })
    } else {
      return setError('Para asociarse al club, comunicarse con secretaria')
    }
  }

  return (
    <Modal isOpen={isOpen} style={customStyles} preventScroll={true}>
      <div className='modal-container'>
        <div className='top'>
          <h2 className='title'>Ingresar DNI</h2>
          <div
            className='close-container'
            onClick={() => {
              setIsOpen(false)
            }}
          >
            <RxCross1 size={24} />
          </div>
        </div>
        <p>Para poder realizar una reserva se debe ser socio del club.</p>
        <form onSubmit={(e) => handleSubmit(e)} className='modal-form'>
          <input
            type='text'
            name='dni'
            placeholder='Documento (Sin puntos)'
            onChange={(e) => setDni(e.target.value)}
          />
          {error.length > 0 && <p className='error'>{error}</p>}
          <button type='submit' className='btn'>
            Ingresar
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default DniModal
