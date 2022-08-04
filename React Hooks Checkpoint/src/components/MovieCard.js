
import React, { Component } from 'react'
import { Rating } from 'react-simple-star-rating'
import "../App.css"


export default class App extends Component {
    constructor(props) {
      super(props);
    
    }
  
    render () {
   return (    
  


    <div class="hero-container">
 { this.props.data.map((res)=>{
    return(


  
  
    <div class="main-container">
       
      <div class="poster-container">
  
       <a href="#"><img src={res.url} class="poster" /></a>
     </div>
     <div class="ticket-container">
       <div class="ticket__content">
         <h4 class="ticket__movie-title">{res.movie_title}</h4>
         <p class="ticket__movie-slogan"> {res.description}  </p>
         <p class="ticket__current-price">
        
         <Rating  initialValue={res.rating} readonly={true}  />
          </p>
         <p class="ticket__old-price"><a href="https://i.ibb.co/ThPNnzM/blade-runner.jpg">photo url</a>  </p>
         <button class="ticket__buy-btn">Buy now</button>
       </div>
     </div>
   </div>
    )

  })  }
  
  
  
  
  
  
     
   
   
  
   
   
    
  </div>
    
     )
  
  
  
    }
  }
  