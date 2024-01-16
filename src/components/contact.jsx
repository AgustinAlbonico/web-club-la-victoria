import { useState } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)

    console.log(
      emailjs
        .sendForm(
          'service_qtedt3e',
          'template_trim2ya',
          e.target,
          'mmAzyozjh5Xm-H0mr'
        )
        .then(
          (result) => {
            console.log(result.text)
            clearState()
          },
          (error) => {
            console.log(error.text)
          }
        )
        .then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
          toast.success('Mensaje enviado!', {
            position: 'top-center',
            autoClose: 1500,
          })
        })
    )
  }

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='contenedor'>
            <div className='col-md-8'>
              <div className='row'>
                <div className='section-title'>
                  <h2>Contactanos</h2>
                  <p></p>
                </div>
                <form
                  name='sentMessage'
                  validate
                  onSubmit={handleSubmit}
                  className='contact-form'
                >
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          className='form-control'
                          placeholder='Nombre completo'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='form-control'
                          placeholder='Email'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      rows='8'
                      placeholder='Mensaje'
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                  <div id='success'></div>
                  <div className='btn-container'>
                    <button
                      type='submit'
                      className='btn btn-custom btn-lg contact-btn'
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.659539045054!2d-61.54432000033622!3d-32.95999709238338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c9c516b1555555%3A0xdfbc2836c5cdceb4!2sClub%20La%20Victoria!5e0!3m2!1ses-419!2sar!4v1704432166726!5m2!1ses-419!2sar'
              title='mapa'
              height='450'
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
              className='mapa'
            ></iframe>
          </div>

          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
