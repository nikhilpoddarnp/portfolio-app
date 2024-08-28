import React from 'react'
import './intro.css'
import Hire from '../assests/hireme.png'
import reactLogo from '../assests/react.svg'
import {Link} from 'react-scroll'

export default function intro() {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>
                I'm <span className='introName'>Nikhil</span>
                <br/>
                Web Developer

            </span>
            <p className='introPara'>
                I am a skilled web  developer with experience in creating
                <br/>
                visually appealing and user friendly websites.

            </p>
            <Link to ="">
            <button className='btn2'>
                <img src={Hire} alt='Img' className='btnImg2'/>
                Hire Me

            </button>
             </Link>
        </div>
        <img src={reactLogo} className='logo2' alt="React Logo" />


    </section>
  )
}
