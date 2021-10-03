import React from 'react'
import Home from '../home'
import Sidebar from '../Sidebar'
import { Card , Button} from 'react-bootstrap'
import logo from '../logo512.png';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



const Course1 = () => {
    return (
        <div>
            <Sidebar/>
           <div class="page-content p-5" id="content">
  
 
            <button id="sidebarCollapse" type="button" class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold">Toggle</small></button>
                
            
            <Container>
  <Row>
    <Col xs={{ order: 'last' }}><Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
    <Col xs><Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
    <Col xs={{ order: 'first' }}><Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
  </Row>
  <br/>
  <Row>
    <Col xs={{ order: 'last' }}><Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
    <Col xs><Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
    <Col xs={{ order: 'first' }}><Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
  </Row>
  <br/>
  <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
</Container>
            

                

            </div>
        </div>
    )
}

export default Course1
