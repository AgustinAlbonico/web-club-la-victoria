import React from 'react'
import { Carousel } from '../Carousel/Carousel'
import './about.css'

export const About = (props) => {
  return (
    <div id='about'>
      <div className='container about-container'>
        <div className='row-about'>
          <div className='about-text'>
            <h2>El club</h2>
            <p>
              El Club de Cazadores “La Victoria” fue establecido el 4 de
              septiembre de 1944 con el objetivo principal de construir una
              entidad deportiva y social dedicada a la práctica del tiro a
              paloma, más tarde reemplazado por el tiro al vuelo (platillo y
              hélice). A lo largo del tiempo hemos ampliado nuestras actividades
              incorporando nuevas disciplinas como Tenis, Pádel, Hockey,
              Gimnasia Artística y Voley.
            </p>
            <p>
              En el transcurso de los años, hemos desarrollado infraestructuras
              significativas que influyen un natatorio recreativo, un gimnasio,
              canchas de pádel, fútbol, hockey y tenis, así como un salón
              comedor y un quincho para mayor comodidad de nuestros miembros.
            </p>
            <p>
              Como pionera entre las instituciones locales, ha desempeñado un
              papel fundamental como punto de encuentro para niños, jóvenes y
              adultos. A lo largo de su trayectoria, ha congregado a familias
              completas que participan activamente en sus diversas actividades,
              una tradición que perdura. Esta institución ha sido testigo de
              sacrifios, alegrías y triunfos, así como de desafíos y superación
              constante. Ha sido un espacio donde la convivencia y la
              colaboración en equipo han sido valores fundamentales, generando
              experiencias enriquecedoras y fomentando la unión comunitaria.
            </p>
            <p>
              La clave de su éxito y su permanencia se destaca con un lema "
              <b>DEL ESFUERZO ES LA VICTORIA</b>".
            </p>
            {/* <h3>Why Choose Us?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div> */}
          </div>
        </div>
        <div className='col-xs-12 col-md-12 slider-container'>
          <Carousel />
        </div>
      </div>
    </div>
  )
}
