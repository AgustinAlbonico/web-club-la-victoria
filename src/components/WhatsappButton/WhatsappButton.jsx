import './whatsappButton.css';
import Icon from '../../img/ico.png';

const WhatsappButton = () => {
  return (
    <div className='joinchat__button'>
      <a href='' className='link_wpp'>
        <div className='wpp_container'>
          <img src={Icon} alt='' className='icon' />
        </div>
      </a>
    </div>
  );
};

export default WhatsappButton;
