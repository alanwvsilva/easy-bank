//Styles
import './style.scss'

// Bs
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// Images
import logoYellow from '../../assets/images/logo-yellow.svg'

// Icons
import { FaStream, FaWallet, FaUserAlt, FaCheck, FaBell } from 'react-icons/fa'

function Header() {
  return (
    <header>
      <div className="quick-links">
        <Container>
          <Row>
            <Col>
              <Nav className="quick-links__useful useful">
                <Nav.Link href="#" className="useful__link">
                  Lorem
                </Nav.Link>
                <Nav.Link href="#" className="useful__link">
                  Ipsum
                </Nav.Link>
                <Nav.Link href="#" className="useful__link">
                  dolor
                </Nav.Link>
                <Nav.Link href="#" className="useful__link">
                  Site
                </Nav.Link>
                <Nav.Link href="#" className="useful__link">
                  Amet
                </Nav.Link>
                <Nav.Link href="#" className="useful__link">
                  Consectetur
                </Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav className="quick-links__features features">
                <Nav.Link href="#" className="features__link">
                  <FaStream className="features__icon"></FaStream>
                  <span>Extract</span>
                </Nav.Link>
                <Nav.Link href="#" className="features__link">
                  <FaWallet className="features__icon"></FaWallet>
                  <span>Wallet</span>
                </Nav.Link>
                <Nav.Link href="#" className="features__link features__link--bell">
                  <FaBell className="features__icon"></FaBell>
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main-navigation">
        <Container>
          <Row>
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Col xs={12} md={8}>
                  <div className="main-navigation__stack">
                    <Navbar.Brand href="#home" className="main-navigation__brand">
                      <img src={logoYellow} className="logo-icon" width={64} height={64} alt="Easy Bank" />
                      <span>Easy BANK</span>
                    </Navbar.Brand>
                    <Nav className="main-navigation__products">
                      <Nav.Link href="#home" className="main-navigation__link">
                        Accounts
                      </Nav.Link>
                      <Nav.Link href="#link" className="main-navigation__link">
                        Products
                      </Nav.Link>
                      <Nav.Link href="#link" className="main-navigation__link">
                        Crypto
                      </Nav.Link>
                      <Nav.Link href="#link" className="main-navigation__link">
                        Credit
                      </Nav.Link>
                      <Nav.Link href="#link" className="main-navigation__link">
                        Contacts
                      </Nav.Link>
                    </Nav>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <Nav className="main-navigation__actions actions">
                    <Nav.Link href="#home" className="main-navigation__link actions__link actions__link--hglt">
                      <FaUserAlt className="actions__icon"></FaUserAlt>
                      Login
                    </Nav.Link>
                    <Nav.Link href="#link" className="main-navigation__link actions__link actions__link--hglt">
                      <FaCheck className="actions__icon"></FaCheck>
                      Open Account
                    </Nav.Link>
                  </Nav>
                </Col>

                <Col xs={12} md={4}></Col>
              </Navbar.Collapse>
            </Navbar>
          </Row>
        </Container>
      </div>
    </header>
  )
}

export default Header
