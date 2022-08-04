import React, { Component } from 'react'
import { Rating } from 'react-simple-star-rating'
import "../App.css"
import Moviecard from "./MovieCard"

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
         data :this.props.data,
        data1:[],
        filtree:""
    }
}

async handlechange(event){
     await this.setState({[event.target.name]:event.target.value})
    var array=[];
      this.props.data.map((elemnt,index)=>{
       console.log(elemnt.movie_title.toupercase.includes(this.state.filtree))

// if((elemnt.movie_title.includes(this.state.filtree))===true){
//     this.setState({data1:elemnt})
// }


      })
      this.setState ({
        data : array})
  }


handlclick(){
    console.log(this.state.data)
    
    console.log(this.state.filtree)
var array = []
array= this.state.data.filter((res) =>{
    console.log(res.movie_title)
    for(var i=0;i<this.state.filtree.length;i++){
        return( (res.movie_title.includes(this.state.filtree[i])))} 
    }
)




this.setState ({
data : array})

console.log(this.state.data1)

}



    render () {
        console.log(this.state.data1,'ggg')

   return (    
  
<div>
<input type="text"  name="filtree"  placeholder="filtre" onChange={(event)=>this.handlechange(event)} />
<button onClick={()=>this.handlclick()} >filtre </button>
<br/>
{ <Moviecard data={this.state.data}     /> }



</div>

  
  
  
  
  
     
   
   
  
   
   
    
  
    
     )
  
  
  
    }
  }
  