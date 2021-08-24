import React,{useState} from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom'
import {auth} from './firebase'

function Signup() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const history = useHistory( )
    const handleSubmit = async (e)=> {
     e.preventDefault();
     
     try{
        const result = await auth.signInWithEmailAndPassword(email,password)
        window.M.toast({html: ' welcome ${result.user.email}',classes:'green'});
        history.push('/')
    }catch(err){
        window.M.toast({html:err.message,classes:'green'});
     }
     
    }

    return (
        <div className="container">
        <div className="row mt-5">
            <div className="col-md-12">
                <h3 style={{color: 'white',backgroundColor: 'blue',fontWeight:'bold',textAlign: 'center'}}>Please Signup Here</h3>
                <Form onSubmit={(e)=>handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder=" email" onChange={(e)=>setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    </div>
    )
}

export default Signup
