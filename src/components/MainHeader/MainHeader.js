import './MainHeader.css'
import './media.css'

//import Elena from '../../assets/img/Elena.png'

import React from 'react'
import { Container } from 'react-bootstrap'

export const MainHeader = () => {
  return (
    <header>
      <div className="header-wrapper">
        <Container>
          <div className="header-title">
            Привет, меня зовут <br />
            Ананьина Елена!
          </div>
          <div className="header-text">
            На моих курсах ты воплотишь <br />
            мечту в реальность :)
          </div>
        </Container>
      </div>
    </header>
  )
}
