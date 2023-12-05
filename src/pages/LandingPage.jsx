import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

  const navigateByUrl = useNavigate()

  return (
    <>
    <Row>
      <Col></Col>
      <Col lg={5}>
        <h2 className='mt-5'>Welcome to<span className='text-warning'>Media player</span></h2>
        <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Doloribus asperiores magni quos culpa nesciunt. Architecto amet id similique natus consequuntur
         facilis sed tempora quibusdam, saepe fugiat voluptatem est vero fugit!</p>
         <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-5'>Get Started</button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
      </Col>
    </Row>

    <div className='container d-flex justify-content-evenly align-items-center w-100 mt-5 mb-5 flex-column'>
      <h3 className='mb-5'>Features</h3>
      <div className='cards d-flex'>
      <Card className='p-4' style={{ width: '22rem', margin: '20px' }}>
      <Card.Img style={{width:'100%', height:'300px'}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem', margin:'20px' }}>
      <Card.Img style={{width:'100%', height:'300px'}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem', margin:'20px' }}>
      <Card.Img style={{width:'100%', height:'300px'}} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>

    <div className='container border border-2 rounded border-secondary p-5 mt-5 mb-5'>
      <Row>
        <Col lg={6}>
          <h3 className='text-warning'>Simple fast and PowerFul</h3>
          <p><span className='fs-5 fw-bolder'>Play Everything :</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad et qui laudantium tempore mollitia earum illum officia, a quos voluptate fugiat corporis cumque vel distinctio ratione dolores ab accusamus accusantium.</p>
          <p><span className='fs-5 fw-bolder'>Play Everything :</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi suscipit consectetur, quod, ipsa vitae quidem esse inventore ullam atque obcaecati officia natus voluptatibus iure illo neque autem ab nihil ex.</p>
          <p><span className='fs-5 fw-bolder'>Play Everything :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus placeat magni eveniet praesentium sunt dolorum vero, id, cum officiis hic, natus amet blanditiis! Repellat omnis debitis cupiditate doloremque aspernatur culpa.</p>

        </Col>
        <Col></Col>
        <Col lg={5}>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/MSaj9Otax6Y?si=0ZqziiVqMor6alsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default LandingPage