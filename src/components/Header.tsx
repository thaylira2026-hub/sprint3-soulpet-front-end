import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">soulpet</Link>

      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/missoes">Missões</Link></li>
        <li><Link to="/recompensas">Recompensas</Link></li>
        <li><Link to="/integrantes">Equipe</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  )
}

export default Header