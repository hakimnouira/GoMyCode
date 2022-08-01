import React, { Component } from 'react'

export default class thumbnails extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }

  render() {
    return (
      <div class="contai"> 
     
      {console.log(this.state , "hhhhhhhhhhhhhhhhhhhhhhh")}
      <img src ="https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" />
      <img src ="https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" />
      {this.props.data.results?.map((EL)=> {
     EL.photos.map((e)=>  {
      return (
        <div>
          {console.log(e.thumbnail_url)}
          dfsgfsh gfdgfsdgfdghdfhfd
          <img source={e.thumbnail_url} id="th" alt="aaaaaaaa" />
          <img src ="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4461ba51281127b8/60df0455878686258b9c2809/16c84589a1ceef313e45c4a39b0f28f2cbeaaf85.jpg" id="th" alt="" />
        </div>
      )
     })
    })}
    </div>
    )
  }
}



   
    
  /* props.data.results.map( element => (<div class="contai"> 

       
   {console.log(props.data , "hhhhhhhhhhhhhhhhhhhhhhh")}
        
        
         <img src="https://cdn-images.farfetch-contents.com/16/95/90/67/16959067_36058706_300.jpg" id="th" alt="" /> <br/></div>))*/
  
  
