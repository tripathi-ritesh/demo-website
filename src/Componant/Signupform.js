import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Dashboard from "./Dashboard";
import { Route, Router, Switch } from 'react-router'; 


const Signupform = () => {
    const [user,setUser]= useState({
        fname:"",
        mobile:"",
        email:"",
        pass:"",
        cnfpass:"",
    });
    let name, value;
     const getUserData = (event)=>{
        name= event.target.name; 
        value= event.target.value; 

        setUser({...user,[name]: value});
     }
     const postData = async(e) => {
        e.preventDefault();
        const {fname,mobile,email,pass,cnfpass} = user;
        if(fname && mobile && email && pass && cnfpass && pass==cnfpass){
            
        const res = fetch("https://riteshdemo-bacad-default-rtdb.firebaseio.com/registerdatabase.json",{
            method:"POST",
            headers: {"Content-Type":"application/json,"},
            body:JSON.stringify({
                fname,
                mobile,
                email,
                pass,
                cnfpass,

            }),
        }); 
        if (res){
            setUser({
                fname:"",
                mobile:"",
                email:"",
                pass:"",
                cnfpass:"",
            });
                
            alert("Data Stored Successfully");
        }   
        }else{
            alert("Please Fill The DAta First");
        }
     };
    
    return (
        <>
        <Container>
            <div>
            <Stack gap={2} className="col-md-5 mx-auto">
                <label>
                <Card>
                    <Card.Body>
                     <h2 className="text-center mb-4">Sign Up</h2>
          
                         <Form method="POST">
                         <Form.Group id="name">
                                <Form.Label >Full Name</Form.Label>
                                <Form.Control name="fname" placeholder="Enter Your Full Name" value={user.fname} onChange={getUserData}  type="text"  required />
                            </Form.Group>
                            <Form.Group id="phone">
                                <Form.Label >Mobile Number</Form.Label>
                                <Form.Control  placeholder="Enter Your Mobile Number" name="mobile" value={user.mobile} onChange={getUserData} type="text"  required />
                            </Form.Group>
                            <Form.Group id="email">
                                <Form.Label >Email</Form.Label>
                                <Form.Control placeholder="Enter Your Email ID" name="email" value={user.email} onChange={getUserData} type="email"  required />
                            </Form.Group>
                                <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                 <Form.Control placeholder="Enter Your New Password" name="pass" value={user.pass} onChange={getUserData} type="password" required />
                             </Form.Group>
                            <Form.Group id="password-confirm">
                                 <Form.Label>Password Confirmation</Form.Label>
                                 <Form.Control placeholder="Confirm Your Password" name="cnfpass" value={user.cnfpass} onChange={getUserData}type="password"  required />
                            </Form.Group>
                                
            
              
                        </Form>
                    </Card.Body>
                    </Card>
                </label>
                <Button onClick={postData} variant="primary">Sign Up</Button>
                
            </Stack>
            </div>
        </Container>
        <br/>
        
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login" ><Button variant="success">Login Here</Button></Link>
      </div>
        </>
    )
}

export default Signupform;
