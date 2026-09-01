interface RewardCardProps {
  emoji: string
  name: string
  description?: string
  points: number
  badge?: string
  note?: string
  buttonLabel?: string
}

const RewardCard = ({ emoji, name, description, points, badge, note, buttonLabel }: RewardCardProps) => {
  return (
    <article>
      {badge && <span>{badge}</span>}
      <span>{emoji}</span>
      <div>{name}</div>
      {description && <div>{description}</div>}
      <div>{points} pts</div>
      {note && <span>{note}</span>}
      {buttonLabel && <button>{buttonLabel}</button>}
    </article>
  )
}

export default RewardCard