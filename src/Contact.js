import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';
import background from '../src/images/background.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faAnchor,faEnvelope,faLock,faUser,faCar,faLaptop,faCamera,faMobile} from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Form style={{fontSize:18,marginTop:20}}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

            </div>
        </div>
        <div className ='container '>
        <div className='row '>
        <div className='banner' style={{marginTop:30}}>
        
        <img style={{height:100,width:'100%',marginTop:30}}  src={background} alt="img"/> 
        
        <h6 className='heading' ><span style={{color:'white',}}>Author Name:</span> Er Rtanesh Mishra</h6>
        <h6 className='para' ><span style={{color:'white',}}>E-Mail Id:</span> ratneshmishra137@gmail.com</h6>
        <h6 className='myfont'><FontAwesomeIcon icon={faMobile}  /><span style={{color:'white',}}> Mobile Number:</span> 9119957785 </h6>
        </div> 
        </div>
      </div>
        </>
        
    )
}

export default Contact
