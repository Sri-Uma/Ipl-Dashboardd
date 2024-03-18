import Loader from 'react-loader-spinner'
import './index.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamMatches: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const {
      team_banner_url: bannerUrl,
      latest_match_details: details,
      recent_matches: recentMatchList,
    } = data
    const latestMatchDetails = {
      umpires: details.umpires,
      result: details.result,
      manOfTheMatch: details.man_of_the_match,
      id: details.id,
      date: details.date,
      venue: details.venue,
      competingTeam: details.competing_team,
      competingTeamLogo: details.competing_team_logo,
      firstInnings: details.first_innings,
      secondInnings: details.second_innings,
      matchStatus: details.match_status,
    }
    const recentMatches = recentMatchList.map(object => ({
      id: object.id,
      competingTeamLogo: object.competing_team_logo,
      competingTeam: object.competing_team,
      result: object.result,
      matchStatus: object.match_status,
    }))

    const updatedData = {
      teamBannerUrl: bannerUrl,
      latestMatchDetails,
      recentMatches,
    }
    this.setState({
      teamMatches: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamMatches, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatches
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader" className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`tm-bg-container ${id}`}>
            <div className="banner-container">
              <img
                className="banner-img"
                alt="team banner"
                src={teamBannerUrl}
              />
            </div>
            <p>Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="list-container">
              {recentMatches.map(object => (
                <MatchCard key={object.id} item={object} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
