import React from 'react'
import { Link } from 'react-router-dom'

function History() {
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
            <th><i class="fa-solid fa-ellipsis-vertical"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Avesham Trailer</td>
            <td><a href="https://www.youtube.com/embed/L0yEMl8PXnw" target='_blank'>https://www.youtube.com/embed/L0yEMl8PXnw</a></td>
            <td></td>
            <td><i class="fa-solid fa-trash"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default History
