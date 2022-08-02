import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
      super(props);
     
      this.state = {

   data:this.props.data

      }
    
      
    }

    render () {
   return (    <div>
    
    
    <button onClick={alert(this.state.data.name + this.state.data.lastname ) }     >Click me</button>
     </div> )



    }
}