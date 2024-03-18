import './index.css'

const MatchCard = props => {
  const {item} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = item

  return (
    <li className="list-item">
      <img
        className="ct-img"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="ct-head">{competingTeam}</p>
      <p className="m-result">{result}</p>
      <p
        className={`m-status ${
          matchStatus === 'Lost' ? 'match-lost' : 'match-won'
        }`}
      >
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
