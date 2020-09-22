import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeBitrate = () => {
    this.setState(state => {
      return {settings: {
          ...state.settings,
          bitrate: 12
        }
      }
    })
  }

  changeResolution = () => {
    this.setState(state => {
      return {settings: {
          ...state.settings,
          video: {
            resolution: '720p'
          }
        }
      }
    })
  }

  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>Change Bitrate</button>
        <button className="resolution" onClick={this.changeResolution}>Change Video Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger
