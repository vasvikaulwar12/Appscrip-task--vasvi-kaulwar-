import Product from './Product.js'
import React, {useState} from 'react';
import './App.css';

const App=()=>{
  const Products_data=[
    {
      new_prod:"NEW PRODUCT",
      heading:"PPXOC MILKYWAY DRESS IN...",
      img:'/img/product/bag.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",
    },
    {
      
      heading:"PPXOC MILKYWAY DRESS IN...",
      img:'/img/product/teddy.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",
      
    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/blet.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/cap.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/bag1.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/teddy1.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/blet1.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/bag2.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/bag3.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/parse.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/parse1.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/parse2.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/blet.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/teddy.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/cap.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/bag.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/bag1.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'/img/product/parse2.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    }
  ]

  const [isListVisible, setIsListVisible] = useState(false);
  const [isCheckBoxVisible, setIsCheckBoxVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  const checkboxVisibility = () => {
      setIsCheckBoxVisible(!isCheckBoxVisible);
  };


  const [isVisibleFilter, setIsVisibleFilter] = useState(false);

  const isFilterVisible = () => {
    setIsVisibleFilter(!isVisibleFilter);
  };

  return (
    <>
      <div className="container"> 
      {/*  */}
      <div className="row">
        <div className="d-flex justify-content-between" style={{height:"35px"}}>
            <div className='hide' style={{width:"300px",display:"flex"}}>
                <p><b>3425 ITEMS</b></p>
                <div style={{margin:"0px 40px",display:"flex"}}  onClick={isFilterVisible}>
                    <i className='hide' class="fa-solid fa-angle-left" style={{margin:"5px"}}></i>
                    <a href="#" style={{color:"darkgray",fontFamily:"Adobe Caslon Pro",marginLeft:"5px"}}>{isVisibleFilter ? 'HIDE FILTER' : 'SHOW FILTER'}</a>
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
      {isVisibleFilter && (
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
          )}    
               
          <div className={`${isVisibleFilter ? 'col-md-9' : 'col-lg-12'}`}>
            <div className="row ">
                {
                  Products_data.map((val)=>{
                    return(
                      <>                      
                        <div className={`${isVisibleFilter ? 'col-md-4' : 'col-lg-3'} col-sm-3`}>
                          <Product
                            new_prod={val.new_prod}
                    
                            heading={val.heading}
                            img={process.env.PUBLIC_URL + val.img}  
                            login={val.login} 
                            sentence={val.sentence}                     
                          />
                        </div>
                      </>
                    )
                  })
                }          
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;