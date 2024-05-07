import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getVideoHistoryAPI, removeVideoHistoryAPI } from '../Services/allAPI'

function History() {

  const[videoHistory,setVideoHistory]= useState([])
  console.log(videoHistory);
  useEffect(()=>{
    getAllHistory()
  },[])

  const getAllHistory= async()=>{
    try {
      const result= await getVideoHistoryAPI()
      setVideoHistory(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  const handleRemoveVideoHistory= async(videoId)=>{
    
     try {
      await removeVideoHistoryAPI(videoId)
      getAllHistory()
     } catch (error) {
      console.log(error);
     }
  }



  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between'>
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className='table my-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Video Link</th>
            <th>Time Stamp</th>
            <th><i className="fa-solid fa-ellipsis-vertical"></i></th>
          </tr>
        </thead>
        <tbody>
         {
          videoHistory.length>0?
          videoHistory?.map((item,index)=>(
            <tr key={item?.id}>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td><a href={item?.youtubeURL} target='_blank'>{item?.youtubeURL}</a></td>
            <td>{item?.timeStamp}</td>
            <td><button className='btn' onClick={()=>handleRemoveVideoHistory(item?.id)}><i className="fa-solid fa-trash"></i></button></td>
          </tr>
          ))
          :
          <tr><td className='text-danger fw-bolder'>Your Watch History is Empty</td></tr>
         }
        </tbody>
      </table>
    </div>
  )
}

export default History
