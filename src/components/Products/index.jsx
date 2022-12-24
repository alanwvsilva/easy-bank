//Styles
import './style.scss'

// Bs
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Images
import productCrypto from '../../assets/images/crypto.png'
import productSecurity from '../../assets/images/security.png'
import productAccount from '../../assets/images/account.png'

function Products() {
  return (
    <>
      <div className="product">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <h2 className="product__title">Crypto Investments</h2>
              <p className="product__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore earum laboriosam alias commodi, sint, architecto illum, eos et nobis quae quasi eum qui dolor repudiandae hic! Est quo
                perferendis recusandae!
              </p>
              <div className="product__actions">
                <a href="#" className="button button--yellow">
                  <span>See my options</span>
                </a>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <img src={productCrypto} alt="Know Easy Crypto" className="product__img img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="product product--bg-green">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <img src={productSecurity} alt="Know Easy Security" className="product__img img-fluid" />
            </Col>
            <Col xs={12} md={8}>
              <h2 className="product__title">You security matters</h2>
              <p className="product__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore earum laboriosam alias commodi, sint, architecto illum, eos et nobis quae quasi eum qui dolor repudiandae hic! Est quo
                perferendis recusandae!
              </p>
              <div className="product__actions">
                <a href="#" className="button button--yellow">
                  <span>Know more</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="product">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <h2 className="product__title">Where is your money?</h2>
              <p className="product__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore earum laboriosam alias commodi, sint, architecto illum, eos et nobis quae quasi eum qui dolor repudiandae hic! Est quo
                perferendis recusandae!
              </p>
              <div className="product__actions">
                <a href="#" className="button button--yellow">
                  <span>Our solutions</span>
                </a>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <img src={productAccount} alt="Know Easy Account" className="product__img img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Products
