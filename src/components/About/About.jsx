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
              Nuestro Club de Cazadores “La Victoria” se fundó el 4 de
              septiembre de 1944, siendo uno de los propósitos constituir una
              entidad deportiva y social para practicar el tiro a la paloma,
              luego reemplaza por tiro al vuelo (platillo y hélice).
              Paulatinamente, se han incorporado nuevas disciplinas tales como
              Tenis, Hockey, Gimnasia Artística, y Voley. Se construyó el
              natatorio recreativo, el gimnasio, las canchas de pádel, fútbol,
              hockey y tenis. Como así también el salón comedor y el quincho.
              Nuestro Club es una de las primeras instituciones locales. Ha
              funcionado y funciona como punto de encuentro de niños, jóvenes y
              adultos. Las familias enteras participan de las actividades y así
              ha sido tradicionalmente. Esta institución ha estado cargada de
              sacrificios, alegrías y triunfos, pero también de decepciones, de
              retos y superación constante, de convivencia y de trabajo en
              equipo. La clave de su éxito y su permanencia se destaca con un
              lema “𝐃𝐄𝐋 𝐄𝐒𝐅𝐔𝐄𝐑𝐙𝐎 𝐄𝐒 𝐋𝐀 𝐕𝐈𝐂𝐓𝐎𝐑𝐈𝐀”
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
