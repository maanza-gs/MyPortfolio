import './layout.css'
import React from 'react'
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import gmail from '../assets/icons/gmail.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
import discord from '../assets/icons/discord.svg'
import youtube from '../assets/icons/youtube.svg'

export default function CustomLayout() {
  return (
    <div id='gradientContainer'>
        <div className="iconContainer">
        <div className='iconsContainer'>
            <a href='https://www.linkedin.com/in/maanasa-s-a24812211/'><img className="icons" src={linkedin}/></a>
            <img src={gmail}/>
            <img src={github}/>
            <img src={instagram}/>
            <img src={discord}/>
            <img src={twitter}/>
            <img src={youtube}/>
        </div>
        <div className='verticalLine'></div>
        </div>
    </div>
  )
}
