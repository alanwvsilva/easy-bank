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
          <Col xs={12} lg={6}>
            <div className="hero__img">
              <img src={heroImage} className="img-fluid" alt="Easy Bank" />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="hero__wrapper">
              <h1 className="hero__title">Welcome to a new era of digital banking</h1>
              <p className="hero__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veritatis optio, adipisci laudantium fuga, numquam animi et dolore illo laboriosam perferendis, nisi soluta quasi!
                Corrupti natus ad repellat ipsa similique.{' '}
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
