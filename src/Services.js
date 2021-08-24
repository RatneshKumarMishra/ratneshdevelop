import React from 'react'
import './index.css'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faAnchor,faEnvelope,faLock,faUser,faCar,faLaptop,faCamera,faMobile} from '@fortawesome/free-solid-svg-icons'


function Services() {
   
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="myhead">
                    <img src='./images/z1.jpg' width="100%" />
                    </div>
                </div>

            </div>
            <div className="row m-auto mt-5">
                <div className="col-md-4 p-2">
                    <h1 style={{ color: 'white', backgroundColor: 'blue', textAlign: 'center' }}>Software Engineer</h1>
                    <p style={{ color: 'white', backgroundColor: 'green', fontWeight: 'bold', fontSize: 15, padding: 10 }}>This is a Software Company Who can developed any types of apps One
                        more important thing is to decide how you will sell your product. If
                        there
                        are similar offerings on the market, study the way your competitors
                        do
                        it. Basically, you can either sell your software directly to the end
                        user or allow users to download it through your website.

                        In the case of direct sales, you will be dealing with big
                        companies and SMEs. You may sell licenses for your
                        software or charge for subscriptions, making the product
                        available for a limited period while the subscription is
                        active. You may also customize your software to make it
                        perfectly suit customers’ needs. Your profit will depend
                        on the uniqueness of your software and on the number of
                        competitors on the market. Basically, selling a few expensive
                        licenses to big companies may be as profitable as selling lots
                        of cheap licenses to SMEs.

                        If you plan on selling your software through a website, you should
                        start with offering users a free trial of your product to see if it
                        works for them. Meanwhile, you may gain revenue from support and
                        maintenance.

                        Key Takeaways
                        Choosing the right stage of the market is vital
                        Different ways of selling bring different opportunities
                        Use outsourcing, but do it wisely
                        Legal part is the immune system of your project
                        Prototyping makes a difference
                        So, you have an idea to start up with. Indeed, it looks like you have the idea. But is an
                        insight, even the brightest one, enough for success? This question gives rise to a bunch
                        of other questions. Do I have any chances to succeed without huge startup funds and
                        experience?





                    </p>
                </div>
                <div className="col-md-8">
                    <div className="box">
                        <img style={{ height:900}} src='./images/z2.jpg' />
                        <div className="box-content" style={{ fontSize: 15 }}>
                            <h2 style={{ color: "red", fontWeight: "bold", }}>Er Ratnesh Mishra</h2>
                            <h2 style={{ color: "white", fontWeight: "bold", marginBottom: 20, marginRight: 10 }}>_________________________</h2>
                            <p>This is our Software Company team Members Who can developed any types
                                of applications and Websites if you are interested than follow and call
                                me mo no- 9119957785, E-mail: ratneshmishra137@gmail.com
                            </p>
                            <h2 style={{ color: "white", fontWeight: "bold", marginBottom: 20, marginRight: 10 }}>_________________________</h2>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className ='container '>
        <div className='row '>
        <div className='banner'>
        <div className='box'>
        <img style={{height:400,width:'100%'}}  src='./images/background.jpg' alt="img"/> 
        </div>
        <div className="box-content">
        <h2 className='heading' ><span style={{color:'red',}}>Author Name:</span> Er Rtanesh Mishra</h2>
        <h2 className='para' ><span style={{color:'red',}}>E-Mail Id:</span> ratneshmishra137@gmail.com</h2>
        <h2 className='myfont'><FontAwesomeIcon icon={faMobile}  /><span style={{color:'red',}}> Mobile Number:</span> 9119957785 </h2>
        </div> 
        </div>
        </div>
      </div>
        </>
    )
}

export default Services
