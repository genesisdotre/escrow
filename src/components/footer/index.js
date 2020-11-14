import React from 'react'

import { ReactComponent as Question } from '../../assets/question-circle.svg'
import { ReactComponent as Twitter } from '../../assets/twitter.svg'
import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Ghost } from '../../assets/ghost.svg'
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg'
import { ReactComponent as Telegram } from '../../assets/telegram.svg'

import './footer.css'

const Footer = () => (
  <div className='footer'>
      <div className='footer-left'>
        <a href="https://docs.google.com/document/d/1g6P7GYGm5KMkElDYViqfm8W3992ok1RgHqAqQ677nBo/edit?usp=sharing">Google Doc proposal</a>
      </div>
      <div className='footer-center'>
        Powered By Kleros Hackathon
      </div>
      <div className='footer-right'>
        <div className='footer-right-icons'>
          <a href="https://twitter.com/marsXrobertson?"><Twitter /></a>
          <a href="https://github.com/marsrobertson"><Github /></a>
          <a href="https://www.linkedin.com/in/marsrobertson/"><LinkedIn /></a>
          <a href="https://t.me/kleros"><Telegram/></a>
        </div>
      </div>
  </div>
)

export default Footer
