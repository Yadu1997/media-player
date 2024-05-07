import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../Services/allAPI';

function VideoCard({displayData,setDeleteResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    const {caption,youtubeURL}= displayData
    const systemTime=new Date()
    const formattedDate= systemTime.toLocaleString('en-us',{timeZoneName:'short'});
    console.log(formattedDate);
    const videoHistory = {caption,youtubeURL,timeStamp:formattedDate}
    try {
      await saveHistoryAPI(videoHistory)
    } catch (error) {
      console.log(error);
    }
  }
  const handleRemoveVideo = async (videoId)=>{
    try {
      const result = await removeVideoAPI(videoId)
      setDeleteResponse(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  const dragStarted=(e,videoId)=>{
    console.log(`Draging Started With video id : ${videoId}`);
    e.dataTransfer.setData("videoId",videoId)
    
  }

  return (
    <>
       <Card draggable='true' onDragStart={e=>dragStarted(e,displayData?.id)}>
      <Card.Img onClick={handleShow} height={'200px'} variant="top" src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title>
          <div className='d-flex justify-content-between align-items-center'>
            <p>{displayData?.caption}</p>
            
            {
              !insideCategory &&
              <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn'><i className="fa-solid fa-trash"></i></button>
              }
          </div>
        </Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="500px" src={`${displayData?.youtubeURL}?autoplay=1`} title="AAVESHAM Official Teaser | Jithu Madhavan | Fahadh Faasil | Sushin Shyam" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard
