import './Footer.css'
import './media.css'

import React from 'react'
import { Container } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer>
      <Container className="h-100">
        <div className="footer__wrapper">
          <div className="footer__text">
            2022 &copy;&nbsp; Все права защищены
          </div>
          <div className="social">
            <a
              href="https://vk.com/ananina_elena"
              target="_blank"
              rel="noreferrer"
              className="vk"
            >
              <i className="fa fa-vk" aria-hidden="true"></i>
            </a>
            <a
              href="https://instagram.com/lenylinka/"
              target="_blank"
              rel="noreferrer"
              className="instagram"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
