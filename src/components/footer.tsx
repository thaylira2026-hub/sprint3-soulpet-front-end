import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <div>🐾 soulpet</div>
            <p>Comunidade dentro da SoulUp para quem ama e cuida de pets. Complete missões, ganhe pontos e resgate recompensas!</p>
          </div>

          <div>
            <h3>Navegação</h3>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/sobre">Sobre o Projeto</Link></li>
              <li><Link to="/missoes">Missões</Link></li>
              <li><Link to="/recompensas">Recompensas</Link></li>
            </ul>
          </div>

          <div>
            <h3>Comunidade</h3>
            <ul>
              <li><Link to="/integrantes">Nossa Equipe</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3>Projeto</h3>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><Link to="/sobre">Tecnologias</Link></li>
              <li><Link to="/sobre">Roadmap</Link></li>
            </ul>
          </div>
        </div>

        <div>
          <p>© 2026 SoulPet · Projeto challenge FIAP</p>
          <p>Feito com 💜 pela equipe SoulPet</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer