import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    result,
  } = latestMatchDetails

  return (
    <div className="lm-container">
      <div className="lm-1">
        <div className="lm-1-1">
          <p className="ct">{competingTeam}</p>
          <p className="cd">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          className="competing-team-img"
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
        />
      </div>
      <hr className="hr-item" />
      <div className="lm-2">
        <p className="para-q">First Innings</p>
        <p className="para-a">{firstInnings}</p>
        <p className="para-q">Second Innings</p>
        <p className="para-a">{secondInnings}</p>
        <p className="para-q">Man Of The Match</p>
        <p className="para-a">{manOfTheMatch}</p>
        <p className="para-q">Umpires</p>
        <p className="para-a">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
