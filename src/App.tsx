import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Faq from './pages/Faq'
import Contato from './pages/Contato'
import Missoes from './pages/Missoes'
import Recompensas from './pages/Recompensas'
import Integrantes from './pages/Integrantes'
import MissaoDetalhe from './pages/missao-detalhe'
import RecompensaDetalhe from './pages/recompensa-detalhe'

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/missoes" element={<Missoes />} />
        <Route path="/missao/:id" element={<MissaoDetalhe />} />
        <Route path="/recompensas" element={<Recompensas />} />
        <Route path="/recompensa/:id" element={<RecompensaDetalhe />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App