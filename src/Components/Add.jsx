import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'

function Add() {
    const [videoDetails,setVideoDetails]=useState({
      caption:'',imageURL:'',youtubeURL:''
    })
    console.log(videoDetails);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload Videos</h5>
        <button className='btn btn-success ms-3 fw-bolder' onClick={handleShow}>+</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Following Details</p>
          <div className='border rounded p-4'>
            <FloatingLabel 
          controlId="floatingInputCaption"
          label="Video Caption"
          className="mb-3"
        >
          <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInputImage"
          label="Image URL"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Image URL" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInputURL"
          label="youtube URL"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="youtube URL" />
        </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
