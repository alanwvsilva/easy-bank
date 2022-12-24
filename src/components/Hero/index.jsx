//Styles
import './style.scss'

// Bs
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Images
import heroImage from '../../assets/images/hero.jpg'

function Hero() {
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col>
            <img src={heroImage} className="img-fluid" alt="Easy Bank" />
          </Col>
          <Col>
            <div className="hero__wrapper">
              <h1 className="hero__title">Welcome to a new era of digital banking</h1>
              <p className="hero__desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati sunt est odit deleniti veritatis dolorem non voluptatibus cum maiores et tempora eaque, corporis doloremque officia
                qui excepturi{' '}
                <a href="#" className="text-bold">
                  omnis incidunt ipsa.
                </a>
              </p>
              <div className="hero__actions">
                <a href="#" className="button button--under">
                  <span>See more</span>
                </a>
                <a href="#" className="button button--yellow">
                  <span>Open account</span>
                </a>
              </div>
              <p className="hero__smalls">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
