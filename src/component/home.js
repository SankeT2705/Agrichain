import React from 'react'
import Image from './home.png'
import Service from'./service.png'
function Home() {
  return (
    <div class="container-flex text-center">
     <img src={Image} className='homeImage'/>
     <img src={Service} className='homeImage mt-1 border'/>
    </div>
 
  )
}

export default Home