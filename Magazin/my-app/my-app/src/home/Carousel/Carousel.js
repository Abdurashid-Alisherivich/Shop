import React from "react"; 
import { Carousel, Row, Col} from "react-bootstrap";
import './Carousel.css'
import card1 from "../image/car1.jpg"
import card2 from "../image/car2.jpg"
import card3 from "../image/car3.jpg"
import card4 from "../image/car4.jpg"
import main1 from "../image/main2.1.jpg"
import main2 from "../image/main2.2.jpg"
import main3 from "../image/main2.3.jpg"
import Menu from "../../frontend/menu";
// import car1 from '../image/car1.jpg';

export default function Carousell(){
    return (
        <>
            <Menu />
        <div className="container-fluid">
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item style={{'height':'500px'}}>
                            <img 
                                className="d-block "
                                src={card1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, tempore.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti expedita saepe quisquam quidem!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{'height':'500px'}}>
                            <img 
                                className="d-block "
                                src={card2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, tempore.
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti expedita saepe quisquam quidem!
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{'height':'500px'}}>
                            <img 
                                className="d-block "
                                src={card3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, tempore.
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti expedita saepe quisquam quidem!
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{'height':'500px'}}>
                            <img 
                                className="d-block "
                                src={card4}
                                alt="Fourth slide"
                            />
                            <Carousel.Caption>
                                <h3>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, tempore.
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti expedita saepe quisquam quidem!
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </div>
        <div className="container main-central p-0">
            <Row>
                    <div className="fotocard">
                        <div className="phototext">
                            <h2>
                                <img src={main1} alt="card image1"/>
                            </h2>
                        <div className="meta-info">
                                <p>Order Online</p>
                                <h3 style={{ color: "orangered" }}>
                                Extra Special Bakery
                                </h3>
                                <a href="#">
                                Order Now
                                </a>
                                
                            </div>
                        </div>
                    </div>
                
                    <div className="fotocard" id="second2">
                        <div className="phototext">
                            <h2>
                                <img src={main2} alt="card image2"/>
                            </h2>
                            <div className="meta-info">
                                <h3 style={{ color: "orangered" }}>
                                Bakery, Breads & Rolls
                                </h3>
                                <p>Best Freshly Baked</p>
                                <a href="" id="second">
                                Discover Now
                                </a>
                            </div>
                        </div>
                    </div>
                
                    <div className=" fotocard">
                        <div className="phototext">
                            <h2>
                                <img src={main3} alt="card image3"/>
                            </h2>
                            <div className="meta-info">
                                <p>Our favorites</p>
                                <h3 style={{ color: "orangered" }}>
                                Brown Bread Bakery
                                </h3>
                                <a href="">
                                Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                
            </Row>
        </div>
           
        </>
    )
}