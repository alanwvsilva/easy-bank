//Styles
import './style.scss'

// Bs
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'

// Images
import logoYellow from '../../assets/images/logo-yellow.svg'
import googlePlay from '../../assets/images/google-play.svg'
import appStore from '../../assets/images/app-store.svg'

// Icons
import { FaFacebook, FaInstagram, FaTwitter, FaSpotify } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__navigation">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="footer__top">
                <Navbar.Brand href="#home" className="footer__brand">
                  <img src={logoYellow} className="logo-icon" width={64} height={64} alt="Easy Bank" />
                  <span>Easy BANK</span>
                </Navbar.Brand>
              </div>
            </Col>
            <Col xs={12} md={6} lg>
              <div className="footer__section">
                <h4 className="footer__title">Accounts</h4>
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Consectetur
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Adipisicing
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Repellendus
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Beatae
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6} lg>
              <div className="footer__section">
                <h4 className="footer__title">Products</h4>
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Eveniet
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Exercitationem
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Asperiores
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Voluptatum
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6} lg>
              <div className="footer__section">
                <h4 className="footer__title">Crypto</h4>
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Quibusdam
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Tempore
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Eveniet
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Nostrum
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6} lg>
              <div className="footer__section">
                <h4 className="footer__title">Contacts</h4>
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Explicabo
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Tenetur
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Molestiae
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Eligendi
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg>
              <div className="footer__section footer__section--last">
                <div className="app">
                  <div className="app__list">
                    <div className="app__link">
                      <img src={googlePlay} alt="Google Play" />
                    </div>
                    <div className="app__link">
                      <img src={appStore} alt="App Store" />
                    </div>
                  </div>
                </div>
                <div className="social">
                  <ul className="social__list">
                    <li className="social__item">
                      <a href="#" className="social__link">
                        <FaFacebook></FaFacebook>
                      </a>
                    </li>
                    <li className="social__item">
                      <a href="#" className="social__link">
                        <FaInstagram></FaInstagram>
                      </a>
                    </li>
                    <li className="social__item">
                      <a href="#" className="social__link">
                        <FaTwitter></FaTwitter>
                      </a>
                    </li>
                    <li className="social__item">
                      <a href="#" className="social__link">
                        <FaSpotify></FaSpotify>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright">2088 &copy; EasyBank</div>
    </footer>
  )
}

export default Footer
