import './MainContent.css'
import './media.css'

import React from 'react'
import { Container, Carousel, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import { PROGRAMM_ROUTE } from '../../utils/consts'
import { THEME } from '../../theme'

const item = [
  { id: '1', alt: 'First slide', title: 'Carousel1.jpg' },
  { id: '2', alt: 'Second slide', title: 'Carousel2.jpg' },
  { id: '3', alt: 'Third slide', title: 'Carousel3.jpg' },
]

export const MainContent = () => {
  const renderItem = item.map(({ id, alt, title }) => (
    <Carousel.Item key={id}>
      <img
        className="d-block w-100"
        src={require(`../../assets/img/${title}`)}
        alt={alt}
      />
    </Carousel.Item>
  ))

  return (
    <article className="main-content">
      <Container className="main-container">
        <div className="main-content__title">Моя авторская программа</div>
        <div className="main-content__carousel">
          <Carousel fade>{renderItem}</Carousel>
          <NavLink to={PROGRAMM_ROUTE}>
            <Button
              className="app-button"
              style={{ backgroundColor: THEME.MAIN_COLOR }}
            >
              Открыть
            </Button>
          </NavLink>
        </div>
      </Container>
    </article>
  )
}
