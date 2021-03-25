import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
      <footer>
    
    <Container className="py-3">
        <Row>
            
            <Col sm={12} md={6}>
                <div className="subscribe">
                    <h3>Subscribe now</h3>
                    <h5>
                    Tell us what  type of clothes you love.
                    </h5>
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Your email address"
                        />
                        <button>Submit</button>
                    </div>
                </div>
            </Col>
            <Col className="quick-link" sm={6} md={3}>
           
                
                
               
            
                <h4>Quick Links</h4>
                <Link to="/Products"></Link>
                <Link to="/signin">Log in</Link>
                <Link to="/register">Sign up</Link>
                <Link to="/contactus">Contact</Link>
                
            </Col>
            <Col sm={12} md={3}>
                <h4>Contact us</h4>
                <p>(+760) 123 455 5590</p>
                <p>Clothingstores@.com</p>
                <p>ClothingStores</p>
            </Col>
        </Row>
    </Container>
    
    
    <div className="copy-right">
        <Container>
        <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Clothing Stores -All Rights Reserved
        </p>
            <div className="social-media">
     <Link to="/"><a className="btn-floating btn-sm btn-tw mx-1"><i className="fab fa-twitter"></i></a></Link>
                <Link to="/"><a className="btn-floating btn-sm btn-gplus mx-1"><i className="fab fa-google-plus-g"></i></a> </Link>
                <Link to="/"> <a className="btn-floating btn-sm btn-li mx-1"><i className="fab fa-youtube"></i></a> </Link>
                <Link to="/"> <a className="btn-floating btn-sm btn-dribbble mx-1"><i className="fab fa-instagram"></i></a></Link>
            </div>
        </Container>
    </div>
</footer> 
        {/* <div className="main-footer">
                <div className="container">
                    <div className="row">
                       
                        <div className="col-md-3 col-sm-6">
                            <h2 className="name"><FaIcons.FaNewspaper /> <i className="news">CLOTHING</i> <a className="paper">STORES</a></h2><br></br>

                            <ul className="list-unstyled">
                                <li>ASOS DESIGN has an array of different styles for you to feel yourself in, from mini and midi lengths to lace and gingham styles, while ASOS EDITION has all your wedding needs covered. </li>
                                <hr className="new1"></hr>
                                <div class="row">

                                </div>

                                <p className="names"><FaIcons.FaLocationArrow /> <i> Kadaghari, Kathmandu </i> </p>
                                <p className="names"> <FaIcons.FaPhone /> <i className="news">_  +97798406392 </i> </p>
                                <p className="names"><FaIcons.FaEnvelope /> <i className="news"> _ contact.us@clothingstore.com</i> </p>
                                <p className="names"><FaIcons.FaFax /> <i className="news">_ 345.576.1111</i> </p><br></br>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6 ">
                            <b><p className='text-center '>CATEGORIES</p></b>
                            <hr className="new2"></hr>
                            <ul className="list-styled ">
                                <li>HODDIES & SWEATER</li>
                                <li>GYMN SUITS </li>
                                <li>SHIRTS</li>
                                <li>JEANS & FLORALS </li>
                                <li>T-SHIRTS & JACKETS</li>
                                <li>TOPS FOR GIRLS</li>
                            </ul>

                        </div>

                      
                        <div className="col-md-3 col-sm-6">
                            <b><p className='text-center'>OUR PARTNERS</p></b>
                            <hr className="new3"></hr>
                            <ul className="list-styled">
                                <li>Shipping Information</li>
                                <li>CORRESPONDENTS</li>
                                <li>ADVERTISE WITH US</li>
                                <li>TERMS & CONDITIONS </li>
                                <li>WORK FOR US </li>
                                <li>GENERAL INQUIRIES</li>
                            </ul>
                        </div>

                    
                        <div className="col-md-3 col-sm-6">
                            <b> <p className='text-center'>GET CONNECT</p></b>
                            <hr className="new4"></hr>
                            <ul className="list-styled">
                                <li>CONTACT US</li>
                                <li>DOWNLOAD APPS</li>
                                <li>PODCASTS</li>
                                <li>NEWSLETTER SIGNUP </li>
                                <li> </li>

                            </ul>

                        </div>

                    </div>


                 

                </div>
                <div className="footer-bottom">
                    <br />
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Clothing Stores -All Rights Reserved
                    </p>
                </div>
            </div> */}

           
                       
                        
        </>
    );
}

export default Footer;




