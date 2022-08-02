

import React, { Component } from 'react'


export default class App extends Component {
    constructor(props) {
      super(props);
   
     
      this.state = {
        count: 0,
   data:this.props.data,
    show : false 
      }
  
      
    }
    componentDidMount() {
      const intervalId = setInterval(() => {
        this.setState(prevState => {
          return {
            count: prevState.count + 1,
          };
        });
      }, 1000);
    }


    



    render () {
   return (    <div>
    <h1>The component has been rendered for {this.state.count} seconds</h1>
    <button  onClick={()=>this.setState({show:!this.state.show})}  >   Click me  </button>
    

  




{this.state.show&&
<h1>name: {this.props.data.name}
<br/>
lastname: {this.props.data.lastname}</h1>



}
   


     </div> )



    }
}