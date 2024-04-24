import React from 'react'
import { Link } from 'react-router-dom'
import ladingImg from '../assets/video_player.gif'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/Manage.png'
import feature2 from '../assets/Category.png'
import feature3 from '../assets/History.png'

function Landing() {
  return (
    <>
     <div className="container landingpage">
      <div className="row align-items-center my-5">
        <div className="col-lg-6">
          <h3>Welcome to <span style={{color:'orange'}}>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Allow users to organize their multimedia collection, play songs and movies, rip CD tracks to MP3 and other audio formats, burn CDs, listen to Internet radio, download content from online music stores and stream content from the Internet.</p>
          <Link to={'/home'} className='mt-3 btn btn-info'>Get Started</Link>
        </div>
        <div className="col-lg-6">
          <img src={ladingImg} alt="Landing Page Image" />
        </div>
      </div>
      <div className="features my-5">
        <h3 className='text-center'>FEATURES</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card style={{ width: '22rem',height:'400px'}}>
              <Card.Img variant="top" style={{height:'250px'}} src={feature1} />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                    <Card.Text>
                      Users Can Upload,View and Remove Videos
                    </Card.Text>
                  </Card.Body>
                </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '22rem',height:'400px'}}>
              <Card.Img variant="top" style={{height:'250px'}} src={feature2} />
                <Card.Body>
                  <Card.Title>Categorise Videos</Card.Title>
                    <Card.Text>
                      Users Can Categorise Videos
                    </Card.Text>
                  </Card.Body>
                </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '22rem',height:'400px'}}>
              <Card.Img variant="top" style={{height:'250px'}} src={feature3} />
                <Card.Body>
                  <Card.Title>Keep Track Of History</Card.Title>
                    <Card.Text>
                      Users Can Upload,View and Remove Videos
                    </Card.Text>
                  </Card.Body>
                </Card>
          </div>
        </div>
      </div>
      <div className='my-5 p-5 rounded' style={{height:'500px',border:'solid 1px'}}>
        <div className="row">
          <div className="col-lg-5 d-flex justify-content-center align-items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magni repellendus pariatur optio officia inventore perspiciatis. Quam saepe, a ipsa dicta esse dolor consectetur itaque voluptas eum quia distinctio deserunt.
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/S_gkPs2svE0" title="Maduraikku Pogathadi  Hd Video Song | Azhagiya tamil magan | Vijay | Shriya | Star Music Spot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Landing
