import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    iplTeams: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(object => ({
      name: object.name,
      id: object.id,
      teamImageUrl: object.team_image_url,
    }))

    this.setState({
      iplTeams: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {iplTeams, isLoading} = this.state
    return (
      <div className="responsive-container">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader" className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-container-home">
            <div className="main-head-container">
              <img
                className="logo"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              />
              <h1 className="head">IPL Dashboard</h1>
            </div>
            <ul className="ipl-teams-list-container">
              {iplTeams.map(object => (
                <TeamCard key={object.id} item={object} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
