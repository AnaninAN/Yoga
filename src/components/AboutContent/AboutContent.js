import './AboutContent.css'
import './media.css'

import React from 'react'
import { Container } from 'react-bootstrap'

export const AboutContent = () => {
  return (
    <article className="about-content">
      <Container>
        <div className="about-content__title">О себе</div>
      </Container>
    </article>
  )
}
