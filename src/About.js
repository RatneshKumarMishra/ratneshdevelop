import React from 'react'
import { Carousel, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faAnchor,faEnvelope,faLock,faUser,faCar,faLaptop,faCamera,faMobile} from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-xl">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src='./images/img1.jpg'
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src='./images/img2.jpg'
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src='./images/img4.jpg'
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src='./images/img5.jpg'
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </div>

                <div className="row  mt-2 mb-5" style={{ fontSize: 15 }}>

                    <Card className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ color: 'blue', fontSize: 20 }}>Software Development</Card.Title>
                            <Card.Text>
                                With supporting Software below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>

                    <div className="col-md-4 mt-5 " >
                        <Card >
                            <Card.Img variant="top" src='./images/img10.jpg' />
                            <Card.Body>
                                <Card.Title style={{ color: 'blue', fontSize: 20 }}>Mobile Application Development</Card.Title>
                                <Card.Text>
                                    Here All types Mobile Application Development are available to you
                                    if you think purchase than contact us Er Ratnesh Mishra mo no- 9119957785
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 ">
                        <Card >
                            <Card.Img variant="top" src='./images/img10.jpg' />
                            <Card.Body>
                                <Card.Title style={{ color: 'blue', fontSize: 20 }}>Website Development</Card.Title>
                                <Card.Text>
                                    Here All types Website Application Development are available to you
                                    if you think purchase than contact us Er Ratnesh Mishra mo no- 9119957785
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5">
                        <Card >
                            <Card.Img variant="top" src='./images/img10.jpg' />
                            <Card.Body>
                                <Card.Title style={{ color: 'blue', fontSize: 20 }}>Grafics Desining</Card.Title>
                                <Card.Text>
                                    Here All types Grafics Application Desining Development are available to you
                                    if you think purchase than contact us Er Ratnesh Mishra mo no- 9119957785
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 ">
                        <Card >
                            <Card.Img variant="top" src='./images/img10.jpg' />
                            <Card.Body>
                                <Card.Title style={{ color: 'blue' }}>Digital Marketting</Card.Title>
                                <Card.Text>
                                    Here All types Digital Marketting Development are available to you
                                    if you think purchase than contact us ER Ratnesh Mishra mo no- 9119957785
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 ">
                        <Card>
                            <Card.Img variant="top" src='./images/img10.jpg' />
                            <Card.Body>
                                <Card.Title style={{ color: 'blue', fontSize: 20 }}>SEO Search</Card.Title>
                                <Card.Text>
                                    Here All types SEO Searching Development are available to you
                                    if you think purchase than contact us ER Ratnesh Mishra mo no- 9119957785
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 ">
                        <Card >
                            <Card.Img variant="top" src='./images/img10.jpg' />
                            <Card.Body>
                                <Card.Title style={{ color: 'blue', fontSize: 20 }}>Game Development</Card.Title>
                                <Card.Text>
                                    Here All types Game Application Development are available to you
                                    if you think purchase than contact us ER Ratnesh Mishra mo no- 9119957785
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </div>



            </div>
            <div className='container '>
                <div className='row '>
                    <div className='banner'>

                        <img style={{ height: 400, width: '100%' }} src='./images/background.jpg' alt="img" />

                        <h2 className='heading' ><span style={{ color: 'white', }}>Author Name:</span> Er Rtanesh Mishra</h2>
                        <h2 className='para' ><span style={{ color: 'white', }}>E-Mail Id:</span> ratneshmishra137@gmail.com</h2>
                        <h2 className='myfont'><FontAwesomeIcon icon={faMobile} /><span style={{ color: 'white', }}> Mobile Number:</span> 9119957785 </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
