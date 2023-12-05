import { useState, useEffect } from "react";
import { RxTextAlignJustify, RxCross1 } from "react-icons/rx";
import "./navbar.css";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) setBg(true);
      else setBg(false);
    });
  }, []);

  useEffect(() => {
    console.log(bg);
  }, [bg]);

  return (
    <>
      <nav className={`navbar ${bg ? "bg" : ""}`}>
        <div className='container'>
          <div className='logo'>
            <Link to='/'>
              <img src='../../../assets/img/bocetito.png' alt='' />
            </Link>
          </div>
          <div className='links' id='nav'>
            <a href='#home'>Inicio</a>
            <a href='#about'>Nosotros</a>
            <a href='#about'>Deportes</a>
            <a href='#about'>Contacto</a>
            <Link to='/reservas' className='btn'>
              Reservas
            </Link>
          </div>
          <div
            className='mobile-btns'
            onClick={() => setMobileNavbar(!mobileNavbar)}
          >
            {mobileNavbar ? (
              <RxCross1 size='40' color='black' className='mobile-btns__btn' />
            ) : (
              <RxTextAlignJustify
                size='40'
                color='black'
                className='mobile-btns__btn'
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
