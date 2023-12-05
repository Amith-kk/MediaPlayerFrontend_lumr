import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteAVideo } from '../services/allAPI';

function ViewCard({displayVideo, setDeleteVideoStatus, ispresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => { setShow(true)
    
    const {caption, embedLink} = displayVideo

    let today = new Date()
    let timestamp = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    let videoDetails= {
      caption,embedLink,timestamp
    }
    await addToHistory(videoDetails)
  }

  const removeVideo = async(id)=>{
    const response = await deleteAVideo(id)
    setDeleteVideoStatus(true)
  }
  //function to drag the videocard
  const cardDrag = (e,id)=>{
    console.log(id);
    e.dataTransfer.setData("videoID",id)
  }

  return (
    <>
    <Card className='mt-3' style={{ width: '100%', height:"380px" }} draggable onDragStart={(e)=>cardDrag(e,displayVideo?.id)}>
    <Card.Img onClick={handleShow} width="100%" height="280px" src={displayVideo.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Card.Img>     
     <Card.Body className='d-flex justify-content-between'>
        <h6>{displayVideo.caption}</h6>
        {!ispresent?
          <button onClick={() =>removeVideo(displayVideo?.id)} type='button' className='btn btn-danger ms-5'><i className='fa-solid fa-trash'></i></button>:         
            <button  type='button' className='btn btn-warning ms-5'><i className='fa-solid fa-trash'></i></button>}
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{displayVideo.caption}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe width="100%" height="530" src={`${displayVideo.embedLink}?autoplay=1`}  frameborder="0"
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen></iframe>
      </Modal.Body>

    </Modal>
    </>
  )
}

export default ViewCard
//010830