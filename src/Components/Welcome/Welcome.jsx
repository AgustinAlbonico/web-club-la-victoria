import "./welcome.css";

const Welcome = () => {
  return (
    <section className='welcome' id='#welcome'>
      <div className='container'>
        <div className='hero-text'>
          <h2>Bienvenidos a</h2>
          <h1>
            Club Cazadores
            <br />
            <b>La Victoria</b>
          </h1>
          <a href='/reservas' className='btn hero-btn'>
            Reserva ahora!
          </a>
        </div>
        <img src='../../../assets/img/bocetito.png' className='hero-logo' />
      </div>
    </section>
  );
};

export default Welcome;
