import { Link } from 'react-router-dom'
import FeatureCard from '../components/feature-card'
import MissionCard from '../components/mission-card'
import RewardCard from '../components/reward-card'
import StatCounter from '../components/stat-counter'
import { missions } from '../data/missions'
import { rewards } from '../data/rewards'

const Home = () => {
  const featuredMissions = missions.slice(0, 3)
  const featuredRewards = rewards.slice(0, 4)

  return (
    <main>
      {/* Hero */}
      <section aria-labelledby="hero-title">
        <div>
          <div>
            <div>
              <span>🐾</span> Comunidade SoulUp
            </div>

            <h1 id="hero-title">
              Ajude pets,<br />
              <span>ganhe recompensas</span>
            </h1>

            <p>
              Na SoulPet você completa missões, acumula pontos e troca por produtos reais para o seu pet — tudo de graça e pelo bem dos animais!
            </p>

            <div>
              <Link to="/sobre">Conhecer o projeto</Link>
              <Link to="/missoes">Ver missões</Link>
            </div>

            <div>
              <StatCounter target={1200} label="Missões disponíveis" />
              <StatCounter target={50} label="Recompensas" />
              <StatCounter target={5000} label="Pets beneficiados" />
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section aria-labelledby="how-title">
        <div>
          <div>
            <span>✨ Como funciona</span>
            <h2 id="how-title">Simples, divertido e <span>recompensador</span></h2>
            <p>Três passos para transformar o seu amor pelos pets em recompensas reais.</p>
          </div>

          <div>
            <FeatureCard
              icon="🎯"
              title="Complete Missões"
              description="Escolha missões do seu nível - fácil, médio ou difícil. Cada uma tem um prazo e um valor em pontos diferentes. Quanto maior o esforço, maior a recompensa!"
            />
            <FeatureCard
              icon="⭐"
              title="Acumule Pontos"
              description="Cada missão concluída te dá pontos que ficam guardados na sua carteira. Suba de nível e desbloqueie recompensas exclusivas!"
            />
            <FeatureCard
              icon="🎁"
              title="Resgate Recompensas"
              description="Troque seus pontos por ração, coleiras, areia, brinquedos e muito mais — sem gastar um centavo do seu bolso!"
            />
          </div>
        </div>
      </section>

      {/* Missões em destaque */}
      <section aria-labelledby="missions-title">
        <div>
          <div>
            <span>🎯 Missões</span>
            <h2 id="missions-title">Missões para <span>todos os níveis</span></h2>
            <p>Fácil, médio ou difícil — escolha o seu ritmo e comece a ganhar pontos agora!</p>
          </div>

          <div role="tablist" aria-label="Filtro de missões">
            <button role="tab" aria-selected="true">Todas</button>
            <button role="tab" aria-selected="false">🟢 Fácil</button>
            <button role="tab" aria-selected="false">🟡 Médio</button>
            <button role="tab" aria-selected="false">🔴 Difícil</button>
          </div>

          <div aria-live="polite">
            {featuredMissions.map((mission) => (
              <MissionCard
                key={mission.title}
                icon={mission.icon}
                difficulty={mission.difficulty}
                tag={mission.tag}
                title={mission.title}
                description={mission.description}
                points={mission.points}
                deadline={mission.deadline}
              />
            ))}
          </div>

          <div>
            <Link to="/missoes">Ver todas as missões →</Link>
          </div>
        </div>
      </section>

      {/* Recompensas em destaque */}
      <section aria-labelledby="rewards-title">
        <div>
          <div>
            <span>🎁 Recompensas</span>
            <h2 id="rewards-title">Troque pontos por <span>produtos reais</span></h2>
            <p>Sem gastar dinheiro! Use seus pontos para resgatar produtos de qualidade para o seu pet.</p>
          </div>

          <div>
            {featuredRewards.map((reward) => (
              <RewardCard
                key={reward.name}
                emoji={reward.emoji}
                name={reward.name}
                points={reward.points}
              />
            ))}
          </div>

          <div>
            <Link to="/recompensas">Ver loja completa →</Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section aria-labelledby="cta-title">
        <div>
          <span>🐾 Junte-se a nós</span>
          <h2 id="cta-title">Pronto para começar a ajudar?</h2>
          <p>
            Entre para a SoulPet, complete missões e faça parte de uma comunidade que transforma o amor por pets em impacto real.
          </p>
          <Link to="/sobre">Saiba mais sobre o projeto</Link>
        </div>
      </section>
    </main>
  )
}

export default Home