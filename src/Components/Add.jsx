import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideoAPI } from '../Services/allAPI';

function Add({setAddVideoResponse}) {
  const [videoDetails, setVideoDetails] = useState({
    caption: '', imageURL: '', youtubeURL: ''
  })

  const [invalidYoutubeURL, setInvalidYoutubeURL] = useState(false)

  const getEmbedURL = (link) => {
    console.log(link);
    if (link.includes('v=')) {
      let videoId = link.split('v=')[1].slice(0, 11)
      console.log(videoId);
      setVideoDetails({ ...videoDetails, youtubeURL: `https://www.youtube.com/embed/${videoId}` })
      setInvalidYoutubeURL(false)
    } else {
      setVideoDetails({ ...videoDetails, youtubeURL: "" })
      setInvalidYoutubeURL(true)
    }
  }
  console.log(videoDetails);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const  handleUpload= async ()=>{
    console.log('inside upload');
    const {caption,imageURL,youtubeURL} = videoDetails
    if (caption && imageURL && youtubeURL) {
      console.log('api call');
      try {
        const result = await addVideoAPI(videoDetails)
        console.log(result);
        if (result.status>=200 && result.status<300) {
          console.log(result.data);
          setAddVideoResponse(result.data)
          setVideoDetails({caption: '', imageURL: '', youtubeURL: ''})

          toast.success(`Added ${result.data.caption}`)
          handleClose()
        }else{
          toast.error(result.response.data)
        }
      } catch (error) {
        console.log(error);
      }
    }else{
      toast.warning('please fill the form completely')
    }
  }

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
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Video Caption" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputImage"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imageURL: e.target.value })} type="text" placeholder="Image URL" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputURL"
              label="youtube URL"
              className="mb-3"
            >
              <Form.Control onChange={e => getEmbedURL(e.target.value)} type="text" placeholder="youtube URL" />
            </FloatingLabel>
            {
              invalidYoutubeURL && <div className='text-danger'>*Invalid Link</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
  )
}

export default Add
