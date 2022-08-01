import Carousels from "./Carousels.js";
import Search from "./search.js";
import Footer from "./Footer.js";
import Thumbnails from "./thumbnails.js";
import Card  from  "./card.js";
import React, { Component } from 'react'
import axios from 'axios';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:[],
      data2:[]
    };
   
        
      
   
   }
   componentDidMount(){
     axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products",{
      headers: {
        Authorization: "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",
      }
    })
    .then((res)=>{
      return   this.setState({data:res.data})
    
    })
    this.getdata()
  }
  getdata(){
    axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40346/styles",{
      headers: {
        Authorization: "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",
      }
    }).then((res)=>{
      return   this.setState({data2:res.data})
    
    })
  } 
  render() {
    
const {data,data2}=this.state.data

    return (
      <>

{console.log(this.state.data , " aaaaaaaaaaaaaaaaaaaaaaaaa" )}
      
      { <Search />  }
      {console.log(this.state.data2 , " ppppppppppppppppppppp" )}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div class="row">
<div class="col-sm-8">
  
{ <Carousels data={data} /> }

</div>
<div class="col-sm-4">



<Thumbnails data={this.state.data2} />

</div>
</div>

       
     <div className="dpp">
<Card data={data} />
</div>










    <Footer />
    
    </>
    )
  }
}




