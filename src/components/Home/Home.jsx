import Logo from '../../img/logo.png'
import './home.css'

export const Home = (props) => {
  return (
    <header id='home'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container home-container'>
            <div className='row asd'>
              <div className='col-md-6 col-md-offset-2 intro-text intro-container'>
                <h1 className='title'>
                  Club <br />
                  <span>La Victoria</span>
                </h1>
                <div className='home-text-container'>
                  <p>Club de caza y pesca La Victoria</p>
                </div>

                <div className='btn-container'>
                  <a
                    href='#reservas'
                    className='btn btn-custom btn-lg page-scroll btn-home'
                  >
                    <span>Reservar</span>
                  </a>
                </div>
              </div>
              <div className='col-md-6 img-container'>
                <img src={Logo} alt='Club La Victoria Logo' height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
