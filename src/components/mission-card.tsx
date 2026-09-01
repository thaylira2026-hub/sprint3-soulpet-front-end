interface MissionCardProps {
  icon: string
  difficulty: string
  tag?: string
  title: string
  description: string
  points: number
  deadline: string
}

const MissionCard = ({ icon, difficulty, tag, title, description, points, deadline }: MissionCardProps) => {
  return (
    <article>
      {icon && <div>{icon}</div>}
      <div>
        <span>{difficulty}</span>
        {tag && <span>{tag}</span>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <span>+{points} pts</span>
        <span>⏱ {deadline}</span>
      </div>
    </article>
  )
}

export default MissionCard