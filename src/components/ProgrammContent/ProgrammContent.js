import './ProgrammContent.css'
import './media.css'

import photo1 from '../../assets/img/Programm1.jpg'
import photo2 from '../../assets/img/Programm2.jpg'

import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

const item = [
  { id: '1', name: 'Разминка', title: 'Video1.mp4', poster: 'Poster1.jpg' },
  { id: '2', name: 'День 1', title: 'Video1.mp4', poster: 'Poster2.jpg' },
  { id: '3', name: 'День 2', title: 'Video1.mp4', poster: 'Poster2.jpg' },
]

export const ProgrammContent = () => {
  const renderItem = item.map(({ id, name, title, poster }) => (
    <Accordion.Item eventKey={id} key={id}>
      <Accordion.Header className="accordion__header">{name}</Accordion.Header>
      <Accordion.Body>
        <div className="accordion__video">
          {title ? (
            <video controls>
              <source
                src={require(`../../assets/video/${title}`)}
                type="video/mp4"
              ></source>
            </video>
          ) : (
            'нет данных'
          )}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  ))

  return (
    <article className="programm-content">
      <Container>
        <div className="programm-content__title">
          Программа:
          <br /> йога ДО и йога ПОСЛЕ
        </div>
        <Row>
          <Col>
            <img className="d-block w-100" src={photo1} alt="First slide" />
          </Col>
          <Col>
            <img className="d-block w-100" src={photo2} alt="First slide" />
          </Col>
        </Row>
        <Row className="programm-content__accordion">
          <Accordion>{renderItem}</Accordion>
        </Row>
      </Container>
    </article>
  )
}
