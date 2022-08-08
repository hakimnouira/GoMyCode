
import React, { Component } from 'react'
import axios from "axios"
export default class App extends Component {
  constructor(){
  super()
  this.state = {
    id:"",
 fristname:"",
 lastname:"",
 age:"",
 data:[]

  } }
  handlechange(a){

    this.setState({[a.target.name]:a.target.value})
    
    {console.log(this.state)}


  }

  componentDidMount(){

axios.get('http://localhost:3363/api/user').then((res)=> { console.log(res.data)
this.setState({data:res.data})



}
)
console.log(this.state,"rfsdgchvgcf")

  }


 deleteuser(id){
console.log(this.state.delete)
  axios.delete(`http://localhost:3363/api/delete/${id}`).then(() => {console.log("delted")})

 }
addposte(){
    const {fristname,lastname,age}=this.state
    axios.post("http://localhost:3363/api/create",{
      fristname:fristname,
 lastname:lastname,
 age:age

    })


  }

   update(){
    const {fristname1,lastname1,age1,update}=this.state
    
    axios.patch(`http://localhost:3363/api/${update}`,{
      fristname:fristname1,
      lastname:lastname1,
      age:age1
     
         

    }

    

    ).then((res) => {console.log(res.data,"mmmmmmmmmmmmmm")
      })

   

    }
  render() {
 return (
  <div>

{console.log(this.state.data,'zarqsdfhgd')}
<label for="fristname">First name:</label>
  <input type="text" id="fristname" name="fristname" onChange={(a)=>this.handlechange(a)} /><br/><br/>
  <label for="lastname">Last name:</label>
  <input type="text" id="lastname" name="lastname" onChange={(a)=>this.handlechange(a)} /><br/><br/>
  <label for="age">age:</label>
  <input type="text" id="age" name="age" onChange={(a)=>this.handlechange(a)}  /><br/><br/>
  <input type="submit" value="Submit"   onClick={()=>this.addposte() }  ></input>

     {this.state.data.map((res)=>  <div>
      <label for="id">id:                       {res.id}            <br/> </label>
      <label for="fristname">fristname:      {  res.fristname}         <br/> </label>
      <label for="lastname">lastname:           {res.lastname          }            <br/></label>
      
      <label for="age">{res.age          }</label>

      <br/> <br/> <br/> <br/>
      <input type="submit" value="delete"   onClick={()=>this.deleteuser(res.id) }  />
      
      </div>                  )}


      update : <br/><br/>
      id :<input type="text" id="update" name="update" onChange={(a)=>this.handlechange(a)} /><br/><br/>
      <label for="fristname">First name:</label>
  <input type="text" id="fristname1" name="fristname1" onChange={(a)=>this.handlechange(a)} /><br/><br/>
  <label for="lastname">Last name:</label>
  <input type="text" id="lastname1" name="lastname1" onChange={(a)=>this.handlechange(a)} /><br/><br/>
  <label for="age">age:</label>
  <input type="text" id="age1" name="age1" onChange={(a)=>this.handlechange(a)}  /><br/><br/>


      <input type="submit" value="update"   onClick={()=>this.update() }  />
     




      <br/><br/> delete : <br/><br/>
      id :<input type="text" id="delete" name="delete" onChange={(a)=>this.handlechange(a)} /><br/><br/>
    

     
      
  </div>
 )
 }
  }







