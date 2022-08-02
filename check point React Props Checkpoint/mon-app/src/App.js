
import Profile from "./profile/profile.js"
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "hakim",
      lastname : "nouira"


  }
  }

  render () {
 return (    <div>
  <Profile data={this.state} />
  
  
  
   </div> )



  }
}


