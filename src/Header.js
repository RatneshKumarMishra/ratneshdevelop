import React,{useState} from "react";
import hero4 from '../src/images/hero4.jpg';
import z3 from '../src/images/z3.jpg';
import z6 from '../src/images/z6.jpg';
import z5 from '../src/images/z5.jpg';
import background from '../src/images/background.jpg';
import './index.css'
import { Carousel, Card, Button,CardGroup,Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faAnchor,faEnvelope,faLock,faUser,faCar,faLaptop,faCamera,faMobile} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container">
        <div className="row">

        
          <div style={{marginTop:20,padding:40,textAlign:'center'}} className="col-md-4  ">
            <h1 style={{color:'green',fontSize:30 ,paddingTop:20,fontWeight:'bold'}}>This is <span style={{color:'red',fontSize:35,fontWeight:'bold'}}> Ratnesh Mishra</span> website page</h1>
            <p style={{color:'blue',fontSize:20 ,paddingTop:20,fontWeight:'bold'}}>Grow your Bussiness and lot of Chalanging with me..</p>
            <div style={{fontWeight:'bold', marginTop:30,height:50,width:250,backgroundColor:'green',color:'white',borderColor:'red',borderWidth:3,borderRadius:50,alignItems: 'center',textAlign: 'center',fontSize:30,marginBottom:40,justifyContent: 'center',alignItems: 'center',alignSelf: 'center',marginLeft:20}}  onClick={handleShow} >Get Started</div>
          </div>
        <Modal show={show} onHide={handleClose} style={{fontSize:20,fontWeight:'bold',color:'blue',textAlign: 'center'}}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:40,fontWeight:'bold',color:'#ff00e1',textAlign: 'center'}}>Your Welcome by Er.Ratnesh Mishra</Modal.Title>
        </Modal.Header>
        <Modal.Body>Grow Your Bussiness with me..</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          
          <div className="col-md-8 ">
            <div className="ox">
            <img style={{height:500,width:"100%"}} src={hero4} alt="img"/>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
          <CardGroup>
  <Card>
    <Card.Img variant="top" src={z3}/>
    <Card.Body>
      <Card.Title style={{color:'#ff00e1',fontSize:20}}>Project Management</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={z6} />
    <Card.Body>
      <Card.Title style={{color:'#ff00e1',fontSize:20}}>Fixing Errors</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={z5} />
    <Card.Body>
      <Card.Title style={{color:'#ff00e1',fontSize:20}}>Problem Solving</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
          </div>
        </div>
       <div className="row">
         <div className="col-md-12" style={{marginTop:20,marginBottom:10,textAlign: 'center',}}>
           <h2 className="section-head" style={{fontSize:18,fontWeight: 'bold',color:'white',backgroundColor:'#ff0055'}}>Some Features Goes Here</h2>
         </div>
         <div className="col-md-4">
           <div className="service-box">
           <i className='faAnchor'><FontAwesomeIcon icon={faLaptop}  /> </i>
             <h3 style={{fontSize:15,fontWeight: 'bold',color:'white',backgroundColor:'#ff0055'}}>Coding Expert</h3>
             <p style={{fontSize:12,fontWeight: 'bold',color:'white',backgroundColor:'#ff0055'}}>Also known as software engineers or systems programmers, computer programmers are tasked with designing and creating software programs, integrating systems and software, training end-users, analyzing algorithms, modifying source-code, writing system instructions, debugging, and maintaining operating systems. </p>
           </div>
         </div>
         <div className="col-md-4">
           <div className="service-box">
           <i className='faAnchor'><FontAwesomeIcon icon={faEnvelope}  /> </i>
             <h3 style={{fontSize:15,fontWeight: 'bold',color:'white',backgroundColor:'#ff0055'}}>Messagess Supporting</h3>
             <p style={{fontSize:12,fontWeight: 'bold',color:'white',backgroundColor:'#ff0055'}}>A massage therapist is responsible for treating clients through soft tissue manipulation while maintaining a safe and relaxing experience. The therapist should be good at perceiving client wishes and needs through spoken language, body language and other cues and modifying their treatments accordingly.</p>
           </div>
         </div>
         <div className="col-md-4">
           <div className="service-box">
             <i className='faAnchor'><FontAwesomeIcon icon={faUser}  /> </i>
             <h3 style={{fontSize:15,fontWeight: 'bold',color:'white',backgroundColor:'#ff0055'}}>User Authentication</h3>
             <p style={{fontSize:12,fontWeight: 'bold',color:'white',backgroundColor:'#ff0055'}}>TUser authentication is a process that allows a device to verify the identify of someone who connects to a network resource. ... It is also important if you must identify your users before you let them connect to resources on the external network. </p>
           </div>
         </div>
       </div>
      </div>
      <div className ='container '>
        <div className='row '>
        <div className='banner'>
        
        <img style={{height:400,width:'100%'}}  src={background} alt="img"/> 
        
        <h2 className='heading' ><span style={{color:'white',}}>Author Name:</span> Er Rtanesh Mishra</h2>
        <h2 className='para' ><span style={{color:'white',}}>E-Mail Id:</span> ratneshmishra137@gmail.com</h2>
        <h2 className='myfont'><FontAwesomeIcon icon={faMobile}  /><span style={{color:'white',}}> Mobile Number:</span> 9119957785 </h2>
        </div> 
        </div>
      </div>

      
    </>
  );
};

export default Header;
