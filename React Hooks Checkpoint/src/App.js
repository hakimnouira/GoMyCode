

import React, { Component } from 'react'
import { Rating } from 'react-simple-star-rating'
import "./App.css"
import Moviecard from "./components/MovieCard"
import Filter from "./components/Filter"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     data : [
    {
url :"https://i.ibb.co/ThPNnzM/blade-runner.jpg",
movie_title : "Blade Runner 2049",
description : " More human than human is our motto.",
rating : 3


    }
    ,
    {
      url :"https://i.ibb.co/Zd51z5c/justice-league.jpg",
      movie_title : "Justice League",
      description : " You can't save the world alone.",
      rating : 1


    }



     ],
     url :"",
     movie_title :"",
     description :"",
     rating :""
  }
  }
  handlechange(a){

    this.setState({
      
      [a.target.name]:a.target.value})
    
    {console.log(this.state)}


  }

handlclick(){
   var obj={
   }
  obj["movie_title"]=this.state.movie_title
   obj['url']=this.state.url
   obj['description']=this.state.description
  obj['rating']=this.state.rating
  console.log(obj)
  this.setState(this.state.data[this.state.data.length+2]=obj)
}


  render () {
 return (    

<div>

  <div class="hero-container">
  { console.log(this.state.data)  }
  
<Filter data={this.state.data}/>




<div class="main-container">
       
       <div class="poster-container">
   
        <a href="#"><img src="https://cdn.pixabay.com/photo/2017/04/20/07/07/add-2244771_960_720.png" class="poster" /></a>
      </div>
      <div class="ticket-container">
        <div class="ticket__content">
          <h4 class="ticket__movie-title">  <input type="text" name="movie_title "  placeholder="Enter title" onChange={(a)=>this.handlechange(a)}></input>  </h4>
          <p class="ticket__movie-slogan"> <input type="text" name="description"  placeholder="Enter descreption" onChange={(a)=>this.handlechange(a)}></input>  </p>
          <p class="ticket__current-price">
         
          <Rating  initialValue="0" name="rating" onChange={(a)=>this.handlechange(a)}  />
           </p>
          <p class="ticket__old-price"><input type="text"  name="url"  placeholder="Enter url of photo" onChange={(a)=>this.handlechange(a)}></input>  </p>
          <button class="ticket__buy-btn" onClick={()=>this.handlclick()}>add movie</button>
        
        </div>
      </div>
    </div>


</div>
</div>
 
 
  
  
  
   )



  }
}

