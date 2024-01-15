import Logo from '../../img/logo.png';
import './home.css';

export const Home = (props) => {
  return (
    <header id='home'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row asd'>
              <div className='col-md-6 col-md-offset-2 intro-text intro-container'>
                <h1 className='title'>
                  Club <br />
                  <span className='secondary'>La Victoria</span>
                </h1>
                <p>Club de caza y pesca La Victoria</p>
                <a
                  href='#reservas'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Reservar
                </a>
              </div>
              <div className='col-md-6 img-container'>
                <img src={Logo} alt='' height={400} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
