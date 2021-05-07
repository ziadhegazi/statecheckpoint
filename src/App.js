import React, { Component } from 'react'
import logo from "./ZH style 2 WIP3pdf.jpg"
import "./App.css"

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Show Profile",
       shows: false
    }
  }

  // Defining person
  person = {
    fullname: this.props.fullname,
    bio: this.props.bio,
    profession: this.props.profession
  }


  // Button function
  buttonclick = () => {
    const profile = document.querySelector(".profile");
    if (this.state.shows === false) {
      this.setState({
        message: "Hide Profile",
        shows: true,
      });
      profile.style.display = "contents"
    }else {
      this.setState({
        message: "Show Profile",
        shows: false
      });
      profile.style.display = "none"
    }
  };

  // rendering content
  render() {
    return (
      <div>
        <div className="profile">
          <img src={logo} alt="Logo" className="logo"></img>
          <h3>{this.person.fullname}</h3>
          <h4>{this.person.profession}</h4>
          <p>{this.person.bio}</p>
        </div>
        <button type="button" onClick={this.buttonclick}>{this.state.message}</button>
      </div>
    )
  }
}

export default App

