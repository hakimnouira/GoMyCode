

import './login.css';
import React, { Component } from 'react'
import axios from "axios"

export default class App extends Component {
	constructor(){
	super()
  this.state={

  }
	}

	async handlechange(a){

		await this.setState({[a.target.name]:a.target.value})
		
		console.log(this.state)
	
	
	  }
	

	sgin_in(){
       const {name,pasword,imageurl,phoneNumber,adress,email}=this.state
		console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        axios.post('http://localhost:3363/createuser',{
          name:name,
     pasword:pasword,
     imageUrl:imageurl,
	 phoneNumber:phoneNumber,
adress:adress,
    email:email
        }).then((res)=> { console.log(res)
    
      }
      )
      
      
        }




	render(){
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
                           <img  style={{ height: "400px" }} src=""   /> 
			      </div>
						<div class="login-wrap p-4 p-md-5">
			      	<div class="d-flex">
			      		<div class="w-100">
			      			<h3 class="mb-4">Sign up</h3>
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
			      			<label class="label" for="name">Username</label>
			      			<input type="text" class="form-control" id="username" placeholder="Username" name="name" onChange={(a)=>this.handlechange(a)} required/>
			      		</div>
						  <div class="form-group mb-3">
			      			<label class="label" for="name">email</label>
			      			<input type="text" class="form-control" id="username" placeholder="Username" name="email" onChange={(a)=>this.handlechange(a)} required/>
			      		</div>
		            <div class="form-group mb-3">
		            	<label class="label" for="password">Password</label>
		              <input type="password" class="form-control" id="userpaswword" placeholder="Password" name="pasword" onChange={(a)=>this.handlechange(a)} required/>
		            </div>
					<div class="form-group mb-3">
		            	<label class="label" for="password">confirm Password</label>
		              <input type="password" class="form-control" id="userpaswword" placeholder="Password" name="pasword2" onChange={(a)=>this.handlechange(a)} required/>
		            </div>
                    <div class="form-group mb-3">
			      			<label class="label" for="name">image url</label>
			      			<input type="text" class="form-control" id="username" placeholder="Username" name="imageurl" onChange={(a)=>this.handlechange(a)} required/>
			      		</div>
						  <div class="form-group mb-3">
			      			<label class="label" for="name">phoneNumber</label>
			      			<input type="text" class="form-control" id="username" placeholder="Username" name="phoneNumber" onChange={(a)=>this.handlechange(a)} required/>
			      		</div>
						  <div class="form-group mb-3">
			      			<label class="label" for="name">adress</label>
			      			<input type="text" class="form-control" id="username" placeholder="Username" name="adress" onChange={(a)=>this.handlechange(a)} required/>
			      		</div>


		            <div class="form-group">
		            	<button type="button" class="form-control btn btn-primary rounded submit px-3" onClick={()=>this.sgin_in()}	>Sign In</button>
		            </div>
		            <div class="form-group d-md-flex">
		            	<div class="w-50 text-left">
			            	<label class="checkbox-wrap checkbox-primary mb-0">Remember Me
									  <input type="checkbox" checked/>
									  <span class="checkmark"></span>
										</label>
									</div>
									<div class="w-50 text-md-right">
										<a href="#">Forgot Password</a>
									</div>

		            </div>
		          </form>
		          <p class="text-center">already a member ?<a data-toggle="tab" href="/login.js"> log in</a></p>
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
  );
}

}
