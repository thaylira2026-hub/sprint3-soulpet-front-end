export type Reward = {
  emoji: string
  name: string
  description: string
  points: number
  badge?: string
  category: 'food' | 'toy' | 'accessory' | 'donation'
  isDonation?: boolean
}

export const rewards: Reward[] = [
  {
    emoji: '🍖',
    name: 'Ração Premium Cão 15kg',
    description: 'Ração completa e balanceada para cães adultos de todas as raças.',
    points: 300,
    badge: 'Popular',
    category: 'food',
  },
  {
    emoji: '🐟',
    name: 'Ração Premium Gato 3kg',
    description: 'Nutrição completa para gatos adultos com taurina e ômega-3.',
    points: 180,
    category: 'food',
  },
  {
    emoji: '🐱',
    name: 'Areia para Gato 4kg',
    description: 'Areia granulada com controle de odores e alta absorção.',
    points: 200,
    category: 'food',
  },
  {
    emoji: '🦴',
    name: 'Petisco Natural Cão',
    description: 'Snacks naturais sem corantes. Pacote com 300g, ótimo para treino.',
    points: 90,
    category: 'food',
  },
  {
    emoji: '🪢',
    name: 'Brinquedo de Corda',
    description: 'Corda trançada resistente, ótima para brincadeiras de puxar e morder.',
    points: 150,
    category: 'toy',
  },
  {
    emoji: '🎾',
    name: 'Bolinha de Tênis Pet',
    description: 'Kit com 3 bolinhas coloridas de borracha para cães pequenos e médios.',
    points: 80,
    category: 'toy',
  },
  {
    emoji: '🐭',
    name: 'Brinquedo Interativo Gato',
    description: 'Mouse de pelúcia com catnip. Estimula o instinto caçador dos gatos.',
    points: 120,
    category: 'toy',
  },
  {
    emoji: '🎀',
    name: 'Coleira Ajustável Pet',
    description: 'Coleira de nylon durável com fivela de segurança. Disponível em P, M e G.',
    points: 170,
    badge: 'Novo',
    category: 'accessory',
  },
  {
    emoji: '🛏️',
    name: 'Caminha Conforto',
    description: 'Cama acolchoada lavável em máquina. Tamanho M, ideal para pets de até 10kg.',
    points: 500,
    category: 'accessory',
  },
  {
    emoji: '🥣',
    name: 'Comedouro Duplo Inox',
    description: 'Conjunto com comedouro e bebedouro de aço inoxidável com suporte antiderrapante.',
    points: 220,
    category: 'accessory',
  },
  {
    emoji: '❤️',
    name: 'Doe para ONG Patas Amigas',
    description: 'Seus pontos viram ração e produtos para pets em situação de abandono.',
    points: 100,
    category: 'donation',
    isDonation: true,
  },
  {
    emoji: '🐕',
    name: 'Doe para Projeto Vida Animal',
    description: 'Apoie cuidados veterinários para animais resgatados de maus-tratos.',
    points: 100,
    category: 'donation',
    isDonation: true,
  },
]