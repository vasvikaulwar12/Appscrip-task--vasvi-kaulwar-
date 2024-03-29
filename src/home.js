import React from "react";
import { useState } from "react";
import "./home.css"
import App from "./App.js";

const Home = ()=>{

    const [isListVisible, setIsListVisible] = useState(false);
    const [isCheckBoxVisible, setIsCheckBoxVisible] = useState(false);
  
    const toggleListVisibility = () => {
      setIsListVisible(!isListVisible);
    };

    const checkboxVisibility = () => {
        setIsCheckBoxVisible(!isCheckBoxVisible);
      };

    return(
        <>
        <div className="container-fluid">
            <div className="container mt-5">
                {/* logo block */}
                <div className="header d-flex justify-content-between">
                    <div className="logo">
                        <img src={'../img/logo/logo.png'} style={{width:"100%"}}/>
                    </div>
                    <div>
                        <h2>LOGO</h2>
                    </div>
                    <div className="d-flex justify-content-center">
                        <img className="icon" src="../img/icons/search.png"/>
                        <img className="icon" src="../img/icons/like.png"/>
                        <img className="icon" src="../img/icons/bag.png"/>
                        <img className="icon" src="../img/icons/user.png"/>
                        <div className="d-flex m-2">
                            <h6>ENG</h6>
                            <i class="fa-solid fa-angle-down" style={{margin:"4px"}}></i>
                        </div>
                    </div>
                </div>
                {/* navbar */}
                <div className="d-flex justify-content-center mt-3">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container d-flex justify-content-center " id="navbar">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="d-flex navbarlay">  
                                    <a className="nav-link fw-bold" href="#">SHOP</a>
                                    <a className="nav-link fw-bold" href="#">SKILLS</a>
                                    <a className="nav-link fw-bold" href="#">STORIES</a>
                                    <a className="nav-link fw-bold" href="#">ABOUT</a>
                                    <a className="nav-link fw-bold" href="#">CONTACT US</a>
                                </ul>
                            </div>   
                        </div>   
                    {/* <hr style={{backgroundColor:"black"}}/> */}
                    </nav> 
                </div>
                <hr />
                <div className="text-center mb-3">
                    <h1 className="heading">DISCOVER OUR PRODUCTS</h1>
                    <div style={{width:"600px",height:"100px",margin:"20px auto"}}>
                    <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                    </div>
                </div>
                <hr/>   
                {/*  */}
                <div className="row">
                    <div className="d-flex justify-content-between" style={{height:"35px"}}>
                        <div style={{width:"300px",display:"flex"}}>
                            <p><b>3425 ITEMS</b></p>
                            <div style={{margin:"0px 40px",display:"flex"}}>
                                <i class="fa-solid fa-angle-left" style={{margin:"5px"}}></i>
                                <a href="#" style={{color:"darkgray",fontFamily:"Adobe Caslon Pro",marginLeft:"5px"}}>HIDE FILTER</a>
                            </div>
                        </div>
                        <div>
                            <div style={{margin:"0px 40px",display:"flex"}} onClick={toggleListVisibility} >
                                <p><b>RECOMENDED</b></p>
                                <i className={`fa ${isListVisible ? 'fa-angle-down' : 'fa-angle-right'}`} style={{margin:"5px"}}/>
                            </div>
                            {isListVisible && (
                                <div className="dropdown shadow">
                                <ul style={{ margin: 0, padding: 0 }}>
                                  <li style={{ listStyle: 'none' }}>
                                    <div>
                                     <p><i class="fa-solid fa-check" style={{margin:"5px"}}></i><b>RECOMENDED</b></p>
                                    </div>
                                  </li>
                                  <li style={{ listStyle: 'none' }}>NEWEST FIRST</li>
                                  <li style={{ listStyle: 'none' }}>POPULAR</li>
                                  <li style={{ listStyle: 'none' }}>PRICE:HIGH TO LOW </li>
                                  <li style={{ listStyle: 'none' }}>PRICE:LOW TO HIGH </li>
                                </ul>
                              </div>
                            )}
                        </div>
                    </div>
                </div>
                <hr/>
                {/* main content */}
                <div className="row">
                    <div className="col-md-3 col-lg-3 col-sm-3">
                        <div className="d-flex">
                            <input type="checkbox"/>
                            <p style={{margin:"5px"}}><b>CUSTUMIZABLE</b></p>
                        </div>
                        <hr/>
                        {/* ideal */}
                        <div>
                            <div className="d-flex justify-content-between" onClick={checkboxVisibility}>
                                <p style={{margin:"0px"}}><b>IDEAL FOR</b></p>
                                <i className={`fa ${isCheckBoxVisible ? 'fa-angle-down' : 'fa-angle-down'}`} style={{margin:"5px"}}></i>
                            </div>
                            <p>All</p>
                            {isCheckBoxVisible && (
                                    <div>
                                        <ul style={{listStyle:"none",margin:"0px",padding:"0px"}}>
                                            <li>
                                                <input type="checkbox"/><span style={{marginLeft:"5px"}}>Men</span>
                                            </li>
                                            <li>
                                                <input type="checkbox"/><span style={{marginLeft:"5px"}}>Women</span>
                                            </li>
                                            <li>
                                                <input type="checkbox"/><span style={{marginLeft:"5px"}}>Baby & Kids</span>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            <hr/>
                        </div>
                        {/* occasion */}
                        <div>
                            <div className="d-flex justify-content-between">
                                <p style={{margin:"0px"}}><b>OCCASION</b></p>
                                <i class="fa-solid fa-angle-down" style={{margin:"5px"}}></i>
                            </div>
                            <p>All</p>
                            <hr/>
                        </div>
                        {/* work */}
                        <div>
                            <div className="d-flex justify-content-between">
                                <p style={{margin:"0px"}}><b>WORK</b></p>
                                <i class="fa-solid fa-angle-down" style={{margin:"5px"}}></i>
                            </div>
                            <p>All</p>
                            <hr/>
                        </div>
                        {/* fabric */}
                        <div>
                            <div className="d-flex justify-content-between">
                                <p style={{margin:"0px"}}><b>FRABIC</b></p>
                                <i class="fa-solid fa-angle-down" style={{margin:"5px"}}></i>
                            </div>
                            <p>All</p>
                            <hr/>
                        </div>
                        {/* segment */}
                        <div>
                            <div className="d-flex justify-content-between">
                                <p style={{margin:"0px"}}><b>SEGMENT</b></p>
                                <i class="fa-solid fa-angle-down" style={{margin:"5px"}}></i>
                            </div>
                            <p>All</p>
                            <hr/>
                        </div>
                        {/* suitable for */}
                        <div>
                            <div className="d-flex justify-content-between">
                                <p style={{margin:"0px"}}><b>SUITABLE FOR</b></p>
                                <i class="fa-solid fa-angle-down" style={{margin:"5px"}}></i>
                            </div>
                            <p>All</p>
                            <hr/>
                        </div>
                        {/* raw material */}
                        <div>
                            <div className="d-flex justify-content-between">
                                <p style={{margin:"0px"}}><b>RAW MATERIALS</b></p>
                                <i class="fa-solid fa-angle-down" style={{margin:"5px"}}></i>
                            </div>
                            <p>All</p>
                            <hr/>
                        </div>
                        {/* pattern */}
                        <div>
                            <div className="d-flex justify-content-between">
                                <p style={{margin:"0px"}}><b>PATTERN</b></p>
                                <i class="fa-solid fa-angle-down" style={{margin:"5px"}}></i>
                            </div>
                            <p>All</p>
                            <hr/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <App />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;