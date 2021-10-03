import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
const Login = () => {
    
    return (
        <>
        <Container>
            <div>
            <Stack gap={2} className="col-md-5 mx-auto">
                <label>
                <Card>
                    <Card.Body>
                     <h2 className="text-center mb-4">Log In With Smile</h2>
          
                         <Form >
                        
                            <Form.Group id="email">
                                <Form.Label  value="email">Email</Form.Label>
                                <Form.Control  type="email"  required />
                            </Form.Group>
                                <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                 <Form.Control type="password" required />
                             </Form.Group>
                            
                                
            
              
                        </Form>
                    </Card.Body>
                    </Card>
                </label>
                <Button variant="danger"><Link to="/dashboard">Log In With Smile</Link></Button>
                
            </Stack>
            </div>
        </Container>
        <br/>
        
      <div className="w-100 text-center mt-2">
        Don't Have Account ... <Link to="/signupform"><Button variant="success">Sign Up</Button></Link>
      </div>
      </>
    )
}

export default Login
