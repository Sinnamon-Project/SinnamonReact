import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
// import one from '../assets/xyz.jpg';
//${props.post.post_id}



const Posts = (props) => {
  return (
    // <Card style={{ width: '75rem' }}>
    // {/* <Card.Img variant="top" src= {one} /> */}
    // {/* <Card.Img variant="top" src={require(`../assets/${props.post.picture}.jpg`)} /> */}
    
    // if (props.post.picture) {
    //   <Card.Img variant="top" src={require(`../assets/${props.post.picture}.jpg`)} />
    // }

    //   <Card.Body>  
    //     <Card.Title>{props.post.title}</Card.Title>
    //       <Card.Text>
    //       {props.post.text_post}
    //       </Card.Text>
    //       <Button variant="primary" as={NavLink} to={'/posts/'+props.post.text_post}>View Post</Button>
    //    </Card.Body>
    // </Card>

    <Row xs={1} md={2} className="g-4">
{Array.from({ length: 1 }).map((_, idx) => (
  <Col>
    <Card>
   
       {props.post.picture && <Card.Img variant="top" src={require(`../assets/${props.post.picture}.jpg`)} />}
     
      <Card.Body>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Text>
          <p> Created At</p>
        {props.post.date_time}
        </Card.Text>
        <Button variant="primary" as ={NavLink} to = {'/posts/'+props.post.post_id}>View Post</Button>
      </Card.Body>
    </Card>
  </Col>
))}
</Row>

  )
}

export default Posts

