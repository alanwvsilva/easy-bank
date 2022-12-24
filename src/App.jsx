// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.scss'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Products></Products>
      <Footer></Footer>
    </>
  )
}

export default App
