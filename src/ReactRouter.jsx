import HousingForm from './pages/housingForm/housingForm'
import Error from './pages/error/Error'
import Home from './pages/home'
import About from './pages/about/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function ReactRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:logementId" element={<HousingForm />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default ReactRouter
