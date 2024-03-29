import Product from './Product.js'

const App=()=>{
  const Products_data=[
    {
      new_prod:"NEW PRODUCT",
      heading:"PPXOC MILKYWAY DRESS IN...",
      img:'../img/product/bag.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",
    },
    {
      
      heading:"PPXOC MILKYWAY DRESS IN...",
      img:'../img/product/teddy.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",
      
    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/blet.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/cap.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/bag1.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/teddy1.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/blet1.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/bag2.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/bag3.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/parse.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/parse1.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/parse2.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/blet.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/teddy.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/cap.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/bag.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/bag1.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    },
    {
      heading:"PRODUCT NAME",
      img:'../img/product/parse2.jpg',
      login:"Sign in",
      sentence:"or Create an account to see pricing",

    }
  ]

  return (
    <>
      <div className="container"> 
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row ">
              {
                Products_data.map((val)=>{
                  return(
                    <>                      
                      <div className="col-lg-4 col-md-4 col-sm-6 my-1 ">
                        <Product
                          new_prod={val.new_prod}
                   
                          heading={val.heading}
                          img={val.img}  
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