import React from 'react';
import './Card.css';
import Polygon from './Assets/polygon.svg';


class Card extends React.Component {

  constructor(props) {
    super(props);

    this.state = props.state
  }

  render() {
    return (
      <div className="card">
        <img className="polygon" src={Polygon} alt="polygon"/>
        <div className="date-section">
          <div className="dag-maand">
            <h4 className="dag">{this.state.day}</h4>
            <h4 className="maand">{this.state.month}</h4>
          </div>
          <h4 className="tijd">{this.state.time}</h4>
        </div>
        <div className="teams">
          <h4 className="team">{this.state.homeTeam}</h4>
          <h4 className="vs">VS</h4>
          <h4 className="team">{this.state.otherTeam}</h4>
        </div>
      </div>
    );
  }

}

export default Card;