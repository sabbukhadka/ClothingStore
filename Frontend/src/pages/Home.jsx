import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col,Carousel } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import {Wave} from "react-animated-text";
// IMAGES
// import b1 from "../img/collection.png";
// import b2 from "../img/image.jpg";
// import bc from "../img/bc.png";
import heroBg from "../img/herobg.png";
import a1 from "../img/a1.png";
import a2 from "../img/a2.png";
import a3 from "../img/a3.png";
import top1 from "../img/top1.png";
import top2 from "../img/top2.png";
import cheap from "../img/cheap.png";
import hour from "../img/hour.png";
import money from "../img/money.png";
import payment from "../img/payment.png";
import f11 from "../img/10.jpg";
import f4 from "../img/1.jpg";
import f5 from "../img/ks.jpg";
import f6 from "../img/sk.jpg";
import f31 from "../img/1.jpg";
import f32 from "../img/2.jpg";
import f33 from "../img/3.jpg";
import f34 from "../img/4.jpg";


// COMPONENTS
import ProductList from "./ProductList";
import FeaturedProducts from "../pages/FeaturedProducts";

import f1 from "../img/cloth.jpg";
import f100 from "../img/cloth1.jpg";
import f101 from "../img/cloth3.jpg";




var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var currDate=months[d.getMonth()];
var day= [d.getUTCDate()];
var year =[d.getFullYear()];


function Home(props) {
    return (
        <>
         
            <div className="hero">
                <Container className="mb-5">

                    
                <Carousel>
                      
           
<Carousel.Item>
  <img id="car"
    className="d-block w-100"
    src={f1}
    alt="First slide" style={{height:"70vh"}}
  />
  <Carousel.Caption className="c-content" id="ccaption">
   <h1> <Wave text="Clothing Store"  id="wave" effect="stretch"   effectChange={2}/></h1>
   <div className="date1">
      <strong >{currDate} {day}, {year}</strong>
      </div>
         
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img id="car"
    className="d-block w-100" 
    src={f100}
    alt="Third slide" style={{height:"70vh"}}
  />

  <Carousel.Caption className="c-content" id="ccaption">
  <h1> <Wave text="Clothing Store"  id="wave" effect="stretch"   effectChange={2}/></h1>
  
  <div className="date1">
      <strong >{currDate} {day}, {year}</strong>
      </div>
  
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img id="car"
    className="d-block w-100"
    src={f101}
    alt="Third slide" style={{height:"70vh"}}
  />

  <Carousel.Caption className="c-content" id="ccaption">
  <h1> <Wave text="Clothing Store"  id="wave" effect="stretch"   effectChange={2}/></h1>
  
  <div className="date1">
      <strong >{currDate} {day}, {year}</strong>
      </div>
    
  </Carousel.Caption>
</Carousel.Item>

                    {/* <div className="hero__bg">
                    <h1> <Wave text="News Portal"  id="wave" effect="stretch"   effectChange={2}/></h1>

                        <img src={f1} alt="" />
                    </div>
                    <div className="hero__bg">
                        <img src={f1} alt="" />
                    </div>
                    <div className="hero__bg">
                        <img src={f1} alt="" />
                    </div> */}
                    </Carousel>
                    <br/>

                   
                    {/* <div className="hero__bg">
                        <img src={heroBg} alt="" />
                    </div> */}
                    <div className="hero__card">
                        <div className="card">
                            <Row>
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={cheap} alt="" />
                                        <div className="pl-3">
                                            <p>Cheap Shipping</p>
                                            <span>Very low price</span>
                                        </div>
                                    </div>
                                </Col>
                               
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={hour} alt="" />
                                        <div className="pl-3">
                                            <p>Help Center</p>
                                            <span>24/7 Support System</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={payment} alt="" />
                                        <div className="pl-3">
                                            <p>Payment Method</p>
                                            <span>Secure payment</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={money} alt="" />
                                        <div className="pl-3">
                                            <p>100% Money Back</p>
                                            <span>30 days money back</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
                <ProductList />
            </div>
            {props.userId && (
                <div className="feature">
                    <FeaturedProducts />
                </div>
            )}
            <div className="my-5 feature">
                <div className="container">
                    <div className="title">
                        <h2 className="mb-4">Selected Products</h2>
                        <p>Trending Item</p>
                    </div>
                    <div className="hero__bg">
                        <img src={heroBg} alt="" />
                    </div>
                    {/* <div className="r">
    
           
<div className="row">
    <div className="col">
<div className="my-5 feature">

    
<div className="centered">
<div className="text-block0">
    <h4 className="">NEW ARRIVALS</h4>
  
  </div>

    </div>
    
    <div className="skcontainer">
        <div className="row ">
                <div className="feature__item d-flex mt-5">
                
                    <div className="">
                  
                        <img src={f32} alt="" />
                        
                        <h6 className="bottom-left1" > </h6>
                       
                       
                    </div>
                    <div>
                    <img src={f31} alt="" />
                        
                        <h6 className="bottom-left1" > </h6>
                       
                       
                    </div>
                    <div>
                    <img src={f31} alt="" />
                        
                        <h6 className="bottom-left1" > </h6>
                       
                       
                    </div>
                   
                    <div className=""> 
                     <img src={f32} alt=""  />
                     <h6 className="bottom-left1" > </h6>
                    
                    </div>
                    <div className="">
                        <img src={f33} alt="" />
                        <h6 className="bottom-left1" ></h6>
                        
                    </div>
                    <div className="">
                        <img src={f34} alt="" />
                    
                        <h6 className="bottom-left1"> </h6>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</div> */}
                    {/* <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-10">
                            <div className="new-arrivals">
                                <h1>NEW ARRIVALS</h1>
                                <div className="row p-4">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="card__img">
                                            <img src={a1} alt="" />
                                            <div className="card__text">
                                                <p>The coat hotlist</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="card__img-2">
                                                    <img src={a2} alt="" />
                                                    <p>JW Anderson</p>
                                                    <span>NET-A-PORTER</span>
                                                    <p className="price">
                                                        Rs 7000
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="card__img-2">
                                                    <img src={a3} alt="" />
                                                    <p>JW Anderson</p>
                                                    <span>NET-A-PORTER</span>
                                                    <p className="price">
                                                        Rs 7000
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-10 ">
                            <div className="top-seller">
                                <h1>TOP SELLERS</h1>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="top-sell__card">
                                            <img src={top1} alt="" />
                                            <div className="top-sell__card-info">
                                                <h4>Red Dress- Stipes</h4>
                                                <p>
                                                    Best kind of clothing in the
                                                    country. #saynotoFastFashion
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="top-sell__card">
                                            <img src={top2} alt="" />
                                            <div className="top-sell__card-info">
                                                <h4>Red Dress- Stipes</h4>
                                                <p>
                                                    Best kind of clothing in the
                                                    country. #saynotoFastFashion
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="container" id="skcontainer">
<div className="row">
    <div className="col">
<div className="my-5 feature">

    
<div className="centered1">
   <div className="">
   <h4 className="text-block">Best Sellers</h4>
  
    </div>
   
    </div>
    
    <div className="feature__wrapper">
        <div className="row">
                <div className="feature__item d-flex mt-5">
                
                    <div className="">
                        <img src={f11} alt="" />
                       
                        
                       
                    </div>
                    <hr/>
                    <div className=""> 
                     <img src={f4} alt="" />
                   
                  
                     
                    </div>
                    <div className="">
                        <img src={f5} alt="" />
                        
                       
                        
                    </div>
                    <div className="">
                        <img src={f11} alt="" />
                       
                        
                       
                    </div>
                    <div className="">
                        <img src={f6} alt="" />
                        
                     
                        <div className="topy">  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
         
         
                    {/* <div className="feature__wrapper">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 feature__right-img">
                                <img src={f1} alt="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="feature-head-img">
                                    <img src={f2} alt="" />
                                </div>
                                <div className="feature__item d-flex mt-5">
                                    <div className="">
                                        <img src={f3} alt="" />
                                    </div>
                                    <div className="">
                                        <img src={f4} alt="" />
                                    </div>
                                    <div className="">
                                        <img src={f5} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        userId: state.userData._id,
    };
};

export default connect(mapStateToProps)(Home);
