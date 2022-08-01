import React from 'react'

const imgCard = ({EL}) => {
  return (
    <div class="contai"> 
        
        {EL.EL.original_price}
     <img src={EL.EL.photos} id="th" alt="" />
    </div>
  )
}

export default imgCard