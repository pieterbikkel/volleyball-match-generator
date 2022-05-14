import './App.css';
import Card from './Card';
import { exportComponentAsJPEG } from 'react-component-export-image';
import React from 'react';
import Button from './Button'

 export default class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      day: 12,
      month: "april",
      time: "18:00",
      homeTeam: "Dash Heren 1",
      otherTeam: "DVO Heren 1"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.componentRef = React.createRef();
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleDateChange(event) {
    const months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
    const target = event.target;
    const date = new Date(target.value);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const time = date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0');
    this.setState({
      day: day,
      month: month,
      time: time
    });
  }

  componentDidMount(){
    document.querySelectorAll(".text-input").forEach((element) => {
      element.addEventListener("blur", (event) => {
          if (event.target.value !== "") {
              event.target.nextElementSibling.classList.add("filled");
          } else {
              event.target.nextElementSibling.classList.remove("filled");
          }
      });
    })
  }

  render() {

    return (
      <div className="App">
        <h1>Volleyball Match Generator</h1>
        <div>
          <div className="game-card">
            <Card state={this.state} key={`${this.state.homeTeam}-${this.state.otherTeam}`} ref={this.componentRef} />
          </div>
          <br/>
        </div>
        <div className='input-export'>
          <form>
            <div className="input-container">
              <input type="datetime-local" id="username" className="date-input " autoComplete="off" placeholder="Enter date" required name="date" onChange={this.handleDateChange}/>
              <label className="label" htmlFor="date"></label>
            </div>
            <div className="input-container">
              <input type="text" id="username" className="text-input" autoComplete="off" maxlength="22" placeholder={this.state.homeTeam} required name="homeTeam" onChange={this.handleInputChange}/>
              <label className="label" htmlFor="homeTeam">Home team</label>
            </div>
            <div className="input-container">
              <input type="text" id="username" className="text-input" autoComplete="off" maxlength="22" placeholder={this.state.otherTeam} required name="otherTeam" onChange={this.handleInputChange}/>
              <label className="label" htmlFor="otherTeam">Other team</label>
            </div>
          </form>
          <div className='button-div' onClick={() => exportComponentAsJPEG(this.componentRef, {fileName:`match-${this.state.homeTeam}-${this.state.otherTeam}`})}>
            <Button/>
          </div>
        </div>
    </div>
    )
  }
}

