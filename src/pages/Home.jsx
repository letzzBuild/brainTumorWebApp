import React from 'react'
import Appbar from '../reuseableComponent/Appbar'

export default function Home(){
    return(
        <div>
            <Appbar></Appbar>
            <div className='outer-img'>
        <div className='image'></div>

        <div className='text-div'>
        <h1><span style={{color:"#f50057",fontFamily:'dancing-script',marginRight:'110px',fontSize:80,fontWeight:'bold'}}> BRAIN TUMOR  </span> </h1>
        <h1><span style={{color:"black", marginLeft:'120px',fontSize:35}}>Detection and Stage Identification </span> </h1>
        
        </div>
      </div>
            
        </div>
        

    )
}











