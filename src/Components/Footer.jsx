import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div style={{height:"300px"}} className='container mt-5'>
      <div className="d-lg-flex justify-content-between">
        <div style={{width:'400px'}} className="intro">
          <h5><i className="fa-solid fa-file-video"></i> Media Player</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet esse praesentium quidem sunt beatae pariatur. Quos repellat obcaecati, ipsa, deleniti quis quod optio animi ab, eaque consequuntur doloremque fugiat?</p>
        </div>
        <div className="links d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h5>Guides</h5>
          <a style={{textDecoration:'none', color:'white'}} href="">React</a>
          <a style={{textDecoration:'none', color:'white'}} href="">Bootstrap</a>
          <a style={{textDecoration:'none', color:'white'}} href="">Fontawesome</a>
        </div>
        <div className="contact">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input type="text" placeholder='Enter Your Email Here' className='form-control' />
            <button className='btn btn-info ms-2'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icon d-flex justify-content-between mt-2">
            <a style={{textDecoration:'none', color:'white'}} href=""><i className="fa-brands fa-instagram fs-3"></i></a>
            <a style={{textDecoration:'none', color:'white'}} href=""><i className="fa-brands fa-facebook fs-3"></i></a>
            <a style={{textDecoration:'none', color:'white'}} href=""><i className="fa-brands fa-twitter fs-3"></i></a>
            <a style={{textDecoration:'none', color:'white'}} href=""><i className="fa-brands fa-github fs-3"></i></a>
          </div>
        </div>
      </div>
      <p style={{color:'white'}} className='text-center mt-5 '>Copy right © Media Player 2024, Inc.</p>
    </div>
  )
}

export default Footer
