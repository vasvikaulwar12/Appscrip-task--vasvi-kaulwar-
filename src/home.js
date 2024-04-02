import React from "react";
import "./home.css"
import App from "./App.js";


const Home = ()=>{

    return(
        <>
        <div className="container-fluid">
            <div className="container mt-5">
               
                <div className="header d-flex justify-content-between">
                    <div className="logo">
                         <img className="main-logo" src={process.env.PUBLIC_URL +'/img/logo/logo.png'}/>
                    </div>
                    <div className="txt-logo">
                        <h2>LOGO</h2>
                    </div>
                    <div className="d-flex justify-content-center logo-icon">
                    <img src={process.env.PUBLIC_URL + "/img/icons/search.png"} className="icon" alt=" " />
                         <img className="icon" src={process.env.PUBLIC_URL + "/img/icons/like.png"} alt=" "/>
                         <img className="icon" src={process.env.PUBLIC_URL + "/img/icons/bag.png"} alt=" "/>
                        <img className="icon" src={process.env.PUBLIC_URL + "/img/icons/user.png"} alt=" "/>
                        <div className="d-flex m-2">
                            <h6 className="logo-icon">ENG</h6>
                            <i class="fa-solid fa-angle-down logo-icon" style={{margin:"4px"}}></i>
                        </div>
                    </div>
                </div>
                {/* navbar */}
                <div className="d-flex justify-content-center mt-3">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container navbarrr d-flex justify-content-center " id="navbar">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className=" navbarlay">  
                                    <a className="nav-link fw-bold" href="#">SHOP</a>
                                    <a className="nav-link fw-bold" href="#">SKILLS</a>
                                    <a className="nav-link fw-bold" href="#">STORIES</a>
                                    <a className="nav-link fw-bold" href="#">ABOUT</a>
                                    <a className="nav-link fw-bold" href="#">CONTACT US</a>
                                </ul>
                            </div>   
                        </div>   
                    
                    </nav> 
                </div>
                <hr />
                <div className="text-center mb-3">
                    <h1 className="head">DISCOVER OUR PRODUCTS</h1>
                    <div className="para">
                        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                    </div>
                </div>
                <hr/>   
                <App />   
            </div>
        </div>
        </>











        // <>   
        //         {/*  */}
        //         <div className="row">
        //             <div className="d-flex justify-content-between" style={{height:"35px"}}>
        //                 <div style={{width:"300px",display:"flex"}}>
        //                     <p><b>3425 ITEMS</b></p>
        //                     <div style={{margin:"0px 40px",display:"flex"}}>
        //                         <i class="fa-solid fa-angle-left" style={{margin:"5px"}}></i>
        //                         <a href="#" style={{color:"darkgray",fontFamily:"Adobe Caslon Pro",marginLeft:"5px"}}>HIDE FILTER</a>
        //                     </div>
        //                 </div>
        //                 <div>
        //                     <div style={{margin:"0px 40px",display:"flex"}} onClick={toggleListVisibility} >
        //                         <p><b>RECOMENDED</b></p>
        //                         <i className={`fa ${isListVisible ? 'fa-angle-down' : 'fa-angle-right'}`} style={{margin:"5px"}}/>
        //                     </div>
        //                     {isListVisible && (
        //                         <div className="dropdown shadow">
        //                         <ul style={{ margin: 0, padding: 0 }}>
        //                           <li style={{ listStyle: 'none' }}>
        //                             <div>
        //                              <p><i class="fa-solid fa-check" style={{margin:"5px"}}></i><b>RECOMENDED</b></p>
        //                             </div>
        //                           </li>
        //                           <li style={{ listStyle: 'none' }}>NEWEST FIRST</li>
        //                           <li style={{ listStyle: 'none' }}>POPULAR</li>
        //                           <li style={{ listStyle: 'none' }}>PRICE:HIGH TO LOW </li>
        //                           <li style={{ listStyle: 'none' }}>PRICE:LOW TO HIGH </li>
        //                         </ul>
        //                       </div>
        //                     )}
        //                 </div>
        //             </div>
        //         </div>
        //         <hr/>
        //         {/* main content */}
        //         <div className="row">
        //             <div className="col-md-3 col-lg-3 col-sm-3">
        //                 <div className="d-flex">
        //                     <input type="checkbox"/>
        //                     <p style={{margin:"5px"}}><b>CUSTUMIZABLE</b></p>
        //                 </div>
        //                 <hr/>
        //                 {/* ideal */}
        //                 <div>
        //                     <div className="d-flex justify-content-between" onClick={checkboxVisibility}>
        //                         <p style={{margin:"0px"}}><b>IDEAL FOR</b></p>
        //                         <i className={`fa ${isCheckBoxVisible ? 'fa-angle-down' : 'fa-angle-down'}`} style={{margin:"5px"}}></i>
        //                     </div>
        //                     <p>All</p>
        //                     {isCheckBoxVisible && (
        //                             <div>
        //                                 <ul style={{listStyle:"none",margin:"0px",padding:"0px"}}>
        //                                     <li>
        //                                         <input type="checkbox"/><span style={{marginLeft:"5px"}}>Men</span>
        //                                     </li>
        //                                     <li>
        //                                         <input type="checkbox"/><span style={{marginLeft:"5px"}}>Women</span>
        //                                     </li>
        //                                     <li>
        //                                         <input type="checkbox"/><span style={{marginLeft:"5px"}}>Baby & Kids</span>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                         )}
        //                     <hr/>
        //                 </div>
        //                 {/* occasion */}
        //                 <div>
        //                     <div className="d-flex justify-content-between">
        //                         <p style={{margin:"0px"}}><b>OCCASION</b></p>
        //                         <i class="fa-solid fa-angle-down" style={{margin:"5px"}}></i>
        //                     </div>
        //                     <p>All</p>
        //                     <hr/>
        //                 </div>
        //                 {/* work */}
        //                 <div>
        //                     <div className="d-flex justify-content-between">
        //                         <p style={{margin:"0px"}}><b>WORK</b></p>
        //                         <i class="fa-solid fa-angle-down" style={{margin:"5px"}}></i>
        //                     </div>
        //                     <p>All</p>
        //                     <hr/>
        //                 </div>
        //                 {/* fabric */}
        //                 <div>
        //                     <div className="d-flex justify-content-between">
        //                         <p style={{margin:"0px"}}><b>FRABIC</b></p>
        //                         <i class="fa-solid fa-angle-down" style={{margin:"5px"}}></i>
        //                     </div>
        //                     <p>All</p>
        //                     <hr/>
        //                 </div>
        //                 {/* segment */}
        //                 <div>
        //                     <div className="d-flex justify-content-between">
        //                         <p style={{margin:"0px"}}><b>SEGMENT</b></p>
        //                         <i class="fa-solid fa-angle-down" style={{margin:"5px"}}></i>
        //                     </div>
        //                     <p>All</p>
        //                     <hr/>
        //                 </div>
        //                 {/* suitable for */}
        //                 <div>
        //                     <div className="d-flex justify-content-between">
        //                         <p style={{margin:"0px"}}><b>SUITABLE FOR</b></p>
        //                         <i class="fa-solid fa-angle-down" style={{margin:"5px"}}></i>
        //                     </div>
        //                     <p>All</p>
        //                     <hr/>
        //                 </div>
        //                 {/* raw material */}
        //                 <div>
        //                     <div className="d-flex justify-content-between">
        //                         <p style={{margin:"0px"}}><b>RAW MATERIALS</b></p>
        //                         <i class="fa-solid fa-angle-down" style={{margin:"5px"}}></i>
        //                     </div>
        //                     <p>All</p>
        //                     <hr/>
        //                 </div>
        //                 {/* pattern */}
        //                 <div>
        //                     <div className="d-flex justify-content-between">
        //                         <p style={{margin:"0px"}}><b>PATTERN</b></p>
        //                         <i class="fa-solid fa-angle-down" style={{margin:"5px"}}></i>
        //                     </div>
        //                     <p>All</p>
        //                     <hr/>
        //                 </div>
        //             </div>
        //             <div className="col-md-9">
        //                 <App />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </>
    )
}

export default Home;