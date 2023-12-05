import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { useNavigate } from 'react-router-dom'


function Home() {

  const [uploadVideoStatus, setUploadVideoStatus] = useState({})
  const navigateByUrl = useNavigate()
  return (
    <>
    <div className='d-flex justify-content-between m-5'>
      <Add setUploadVideoStatus={setUploadVideoStatus}/>  
      <div>
      <button type="button" onClick={()=>{navigateByUrl('/watch')}} class="btn btn-light mt-2 me-5" style={{background:'transparent', border:'none'}} ><h4>Watch History</h4></button>
      </div>  
    </div>
    <div className='d-flex justify-content-between '>
      <div className='allvideos col-lg-9'>
      <View uploadVideoStatus={uploadVideoStatus}/>
      </div>
      <div className='category col-lg-3 '> 
      <Category/>
      </div>
     
    </div>
    </>
  )
}

export default Home