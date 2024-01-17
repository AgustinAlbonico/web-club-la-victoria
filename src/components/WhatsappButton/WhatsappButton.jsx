import './whatsappButton.css'
import Icon from '../../img/ico.png'

const WhatsappButton = () => {
  return (
    <div className='joinchat__button'>
      <a
        href='https://api.whatsapp.com/send/?phone=5493471336319&text=%C2%A1Hola%21+quiero+consultar+sobre...&type=phone_number&app_absent=0'
        className='link_wpp'
        target='_blank'
        rel='noreferrer'
      >
        <div className='wpp_container'>
          <img src={Icon} alt='' className='icon' />
        </div>
      </a>
    </div>
  )
}

export default WhatsappButton
