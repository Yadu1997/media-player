import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Category from '../Components/Category'
import View from '../Components/View'
import Add from '../Components/Add'

function Home() {
  const [addVideoResponse,setAddVideoResponse] = useState("")
  const[removeCategoryVideoResponse,setRemoveCategoryVideoResponse] = useState("")
  const[deleteVideoCategoryResponse,setDeleteVideoCategoryResponse] = useState("")
  return (
    <>
     <div className="container d-flex justify-content-between my-5">
      <Add setAddVideoResponse={setAddVideoResponse}/>
      <Link to={'/history'}>Watch History</Link>
    </div>
    <div className="row container-fluid my-5 ">
     <div className="col-lg-6">
      <h3>All Videos</h3>
      <View setDeleteVideoCategoryResponse={setDeleteVideoCategoryResponse} addVideoResponse={addVideoResponse} removeCategoryVideoResponse={removeCategoryVideoResponse}/>
     </div>
     <div className="col-lg-6">
      <Category deleteVideoCategoryResponse={deleteVideoCategoryResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
      </div> 
     </div> 
    </>
  )
}

export default Home
