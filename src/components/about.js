import React from 'react'
import './about.css';
import Html from '../assests/HTML5_Badge.svg'
import Css from '../assests/css-3.svg'
import Bootstrap from '../assests/bootstrap.png'
import Js from '../assests/javascript.svg'
import LogoReact from '../assests/react.svg'

export default function about() {
  return (
   <section id="about">
    <span className='aboutTitle'>What I know</span>
    <span className='aboutDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML,CSS, and JavaScript.</span>

    <div className='aboutBars'>
        <div className='aboutBar'>
            <img src={Html} alt = "" className='aboutBarImg'/>
            <div className='aboutBarText'>
            <h2>HTML</h2> 
            <p>HyperText Markup Language</p>
            </div>
        </div>
        <div className='aboutBar'>
            <img src={Css} alt = "" className='aboutBarImg'/>
            <div className='aboutBarText'>
            <h2>CSS</h2> 
            <p>Cascading Style Sheets</p>
            </div>
        </div>
        <div className='aboutBar'>
            <img src={Bootstrap} alt = "" className='aboutBarImg'/>
            <div className='aboutBarText'>
            <h2>Bootstrap</h2> 
            <p>Bootstrap</p>
            </div>
        </div>
        <div className='aboutBar'>
            <img src={Js} alt = "" className='aboutBarImg'/>
            <div className='aboutBarText'>
            <h2>JS</h2> 
            <p>JavaScript</p>
            </div>
        </div>
        <div className='aboutBar'>
            <img src={LogoReact} alt = "" className='aboutBarImg'/>
            <div className='aboutBarText'>
            <h2>React</h2> 
            <p>react.js</p>
            </div>
        </div>
    </div>

   </section>
  )
}
