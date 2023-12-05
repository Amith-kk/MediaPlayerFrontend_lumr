import React, { useEffect, useState } from 'react'
import ViewCard from './ViewCard'
import {Row,Col } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoStatus}) {
  const [allVideo, setAllVideo] = useState([])

  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

  const getAllUploadedVideo = async()=> {
    const response = await getAllVideos()
    // console.log(response);
    const {data} = response
    setAllVideo(data)
  }

  useEffect(() => {
    getAllUploadedVideo()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus, deleteVideoStatus])

  return (
    
    <div className=' ms-2'>
        <h4>All Videos</h4>
        <Row>{ allVideo.length>0?
        allVideo.map((video)=>(<Col sm={12} md={6} lg={4} xl={3}>
          <ViewCard displayVideo = {video} setDeleteVideoStatus={setDeleteVideoStatus} />
          </Col>)):
            <p className='mt-5 fw-bolder fs-4 text-danger'>Nothing to display</p>
        }
        </Row>
    </div>
  )
}

export default View