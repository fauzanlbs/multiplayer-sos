import React from 'react'

import Players from "./Players.js";
import AddPlayer from "./AddPlayer.js"

class Leaderboard extends React.Component {
  constructor (props) {
    super(props)

    const PLAYERS = [
      {id: 1, name: "Fauzan Lubis", score: 60},
      {id: 2, name: "Susi Susanti", score: 20},
      {id: 3, name: "Ade Ray", score: 15}
    ]

    this.state = {
      members: PLAYERS
    }

  }
  onPlayerAdd(name) {
    let members = this.state.members
    members.push({id: members.length + 1, name: name, score: 10})
    
    this.setState({
      members: members
    })
  }
  render() {

    const style = {
      padding: 60
    }

    return (
      <div style={style}>
        <h1>Multiplayer Gundu</h1>
        <Players members={this.state.members} />
        <AddPlayer onAdd={this.onPlayerAdd.bind(this)} />
      </div>
    )
  }
}

export default Leaderboard
