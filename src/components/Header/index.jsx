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
            <Col xs={12} md="auto">
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
            <Col xs={12} md>
              <Nav className="quick-links__featured featured">
                <Nav.Link href="#" className="featured__link">
                  <FaStream className="featured__icon"></FaStream>
                  <span>Extract</span>
                </Nav.Link>
                <Nav.Link href="#" className="featured__link">
                  <FaWallet className="featured__icon"></FaWallet>
                  <span>Wallet</span>
                </Nav.Link>
                <Nav.Link href="#" className="featured__link featured__link--bell">
                  <FaBell className="featured__icon"></FaBell>
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main-navigation">
        <Navbar expand="md">
          <Container>
            <div className="main-navigation__stack">
              <div className="main-navigation__slim">
                <Navbar.Brand href="#" className="main-navigation__brand brand">
                  <img src={logoYellow} className="brand__icon" width={64} height={64} alt="Easy Bank" />
                  <span>Easy BANK</span>
                </Navbar.Brand>
                <div className="main-navigation__mobile mobile">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" className="button-toggler mobile__toggler" />
                </div>
              </div>
              <Navbar.Collapse className="main-navigation__collapse" id="basic-navbar-nav">
                <Nav className="main-navigation__products">
                  <Nav.Link href="#" className="main-navigation__link">
                    Accounts
                  </Nav.Link>
                  <Nav.Link href="#" className="main-navigation__link">
                    Products
                  </Nav.Link>
                  <Nav.Link href="#" className="main-navigation__link">
                    Crypto
                  </Nav.Link>
                  <Nav.Link href="#" className="main-navigation__link">
                    Credit
                  </Nav.Link>
                  <Nav.Link href="#" className="main-navigation__link">
                    Contacts
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Nav className="main-navigation__actions actions">
                <Nav.Link href="#" className="main-navigation__link actions__link actions__link--hglt">
                  <FaUserAlt className="actions__icon"></FaUserAlt>
                  Login
                </Nav.Link>
                <Nav.Link href="#" className="main-navigation__link actions__link actions__link--hglt">
                  <FaCheck className="actions__icon"></FaCheck>
                  Open Account
                </Nav.Link>
              </Nav>
            </div>
          </Container>
        </Navbar>
      </div>
    </header>
  )
}

export default Header
