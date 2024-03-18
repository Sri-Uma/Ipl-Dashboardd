import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {item} = props
  const {id, name, teamImageUrl} = item

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="ipl-list-item">
        <img className="team-img" alt={name} src={teamImageUrl} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
