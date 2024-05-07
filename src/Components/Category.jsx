import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getAVideoAPI, getCategoryAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard';


function Category({deleteVideoCategoryResponse,setRemoveCategoryVideoResponse}) {
  const[allCategory,setAllCategory]=useState([])

  const[categoryName,setCategoryName]=useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  console.log(allCategory);
  
  useEffect(()=>{
    getAllCategory()
  },[deleteVideoCategoryResponse])

  const getAllCategory = async ()=>{
    try {
      const result= await getCategoryAPI()
      setAllCategory(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddCategory= async ()=>{
    if (categoryName) {
      await addCategoryAPI({categoryName,allVideos:[]})
      setCategoryName("")
      handleClose()
      getAllCategory()
    }else{
      toast.warning("Please Fill the Form Completely")
    }
  }

  const handleRemoveCategory= async(categoryId)=>{
      try {
        await removeCategoryAPI(categoryId)
        getAllCategory()
      } catch (error) {
        console.log(error);
      }
  }


  const dragoverCategory=(e)=>{
    e.preventDefault()
  }

  const videoDropped= async (e,categoryId)=>{
    const videoId = e.dataTransfer.getData("videoId")
    console.log(`video dropped id ${videoId} category id ${categoryId}`);
    try {
      const {data} = await getAVideoAPI(videoId)
      console.log(data);
      let selectedCategory= allCategory?.find(item=>item.id==categoryId)
  
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);
      await updateCategoryAPI(categoryId,selectedCategory)
      const result = await removeVideoAPI(videoId)
      setRemoveCategoryVideoResponse(result)
      getAllCategory()


    } catch (error) {
      console.log(error);
    }
  }

  const videoDragStarted=(e,videoDetails,categoryId)=>{
    console.log("video drag started");
    let dataShare={categoryId,videoDetails}
    e.dataTransfer.setData('dataShare',JSON.stringify(dataShare))
    console.log(videoDetails,categoryId);
  }


  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

      <div className="d-flex justify-content-center-around">
        <h3>All Category</h3>
        <button onClick={handleShow} className='btn btn-info ms-3 fw-bolder rounded-circle'>+</button>
      </div>

      <div className="container-fluid mt-3">
        {
          allCategory.length>0?
          allCategory?.map(item=>(
            <div droppable='true' onDragOver={e=>dragoverCategory(e)} onDrop={e=>videoDropped(e,item?.id)} key={item?.id} className="border rounded p-3 mb-3">
              <div className='d-flex justify-content-between'>
                <h6>{item?.categoryName}</h6>
                <button onClick={()=>handleRemoveCategory(item?.id)} className='btn'><i className='fa-solid fa-trash '></i></button>
              </div>
              <div className="row mt-2">
                {
                  item.allVideos?.length>0 &&
                  item.allVideos?.map(video=>(
                    <div draggable="true" onDragStart={e=>videoDragStarted(e,video,item.id)} key={video?.id} className="col-lg-6">
                      <VideoCard displayData={video} insideCategory={true}/>
                    </div>
                  ))
                }
              </div>
            </div>
            
          ))
          :
          <h1 className='text-danger'>No Categories</h1>
        }
      </div>

      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>

    </>
  )
}

export default Category
