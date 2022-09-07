import React, {useState} from 'react'
import './login.css';
import {Link, useHistory} from "react-router-dom"
import  { Component } from 'react'
import axios from "axios"
import { useStateValue } from "../stateProvider/StateProvider"
import { products,bannerImg } from '../../products'
export default class App extends Component {



   
      
       
    
    
    
    
    
    constructor(){
	super()
  this.state = {
image : "",

  }
	}


   
    async handlechange(a){

		await this.setState({[a.target.name]:a.target.value})
		
		 
        console.log(this.state)
        
	
	  }
	
checkuser(){
       
        console.log(this.state +"efdssf")

 const k=[{
    id:   6,
    title: this.state.title,
    image: this.state.image,
    price: this.state.price,
    rating: 4

 }]
        products.push(k)
        
}

    render() {
        return (
            <div>
 
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet"/>
        
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            
            
        
            
            <section class="ftco-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6 text-center mb-5">
                            <h2 class="heading-section">Login </h2>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-12 col-lg-10">
                            <div class="wrap d-md-flex">
                                <div class="img" >
                                   <img  style={{ height: "400px" }} src={this.image}  /> 
                          </div>
                                <div class="login-wrap p-4 p-md-5">
                              <div class="d-flex">
                                  <div class="w-100">
                                      <h3 class="mb-4">Sign In</h3>
                                  </div>
                                        <div class="w-100">
                                            <p class="social-media d-flex justify-content-end">
                                                <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
                                                <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
                                     
                                            </p>
                                        </div>
                              </div>
                            
                                    <form  >
                                  <div class="form-group mb-3">
                                      <label class="label" for="name">title</label>
                                      <input type="email" class="form-control" id="username" placeholder="email" name="title" onChange={(a)=>this.handlechange(a)} required/>
                                  </div>
                            <div class="form-group mb-3">
                                <label class="label" for="password">image</label>
                              <input type="password" class="form-control" id="userpaswword" placeholder="Password" name="image" onChange={(a)=>this.handlechange(a)} required/>
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="password">price</label>
                              <input type="password" class="form-control" id="userpaswword" placeholder="Password" name="price" onChange={(a)=>this.handlechange(a)} required/>
                            </div>
                            <div class="form-group">
                            <Link to="/"> <button type="button" class="form-control btn btn-primary rounded submit px-3" onClick={()=>this.checkuser()}	>add</button></Link>
                            </div>
                            <div class="form-group d-md-flex">
                                <div class="w-50 text-left">
                                  
                                            </div>
                                            
                            </div>
                          </form>
                         
                        </div>
                      </div>
                        </div>
                    </div>
                    {
                      
                    console.log("")
                    
                    
                    
                    }
              
                </div>
            </section>
         

         </div>
          )
            }
        

}
