

import React, { Component } from 'react'
import axios from "axios"
export default class App extends Component {
  constructor(){
  super()
  this.state = {
   data : []

  } }
  

  componentDidMount(){

axios.get('https://jsonplaceholder.typicode.com/users').then((res)=> { console.log(res.data)
this.setState({data:res.data})



}
)
console.log(this.state,"rfsdgchvgcf")

  }


 
   
  

    

    
  render() {
 return (
  <div>



{this.state.data.map((res)=>  <div>
      {res.id}<br/>
      {res.name}<br/>
      {res.username }<br/>
      {res.email}<br/>
      {res.address.street}<br/>
      {res.address.suite}<br/>
      {res.address.city}<br/>
      {res.address.zipcode  }<br/>
      {res.address.geo.lat  }<br/><br/><br/><br/>
      </div>                  )}

     
      
  </div>
 )
 }
  }