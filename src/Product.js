import React, { useState } from "react";

const Product = (props) => {
  const { new_prod, heading, img, login, sentence } = props;

  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="product-card">
      <div className="card-body">
        <h5 className="m-3 fw-bold" style={{ position: "absolute" }}>
          {new_prod}
        </h5>
        <img
          src={img}
          className="img-fluid"
          style={{ height: "399px", width: "300px" }}
          alt=""
        />
      </div>
      <div className="card-footer pt-3">
        <p style={{margin:"0px"}}><b>{heading}</b></p>
        <div className="d-flex justify-content-between">
        <p style={{fontSize:"14px",color:"darkgray",width:"400px"}}>
          <u>{login}</u> {sentence}
        </p>
        <i
           className={`fa ${isLiked ? 'fa-solid fa-heart fa-xl' : 'fa-regular fa-heart fa-xl'}`}
            // className={`fa fa-heart fa-xl ${isLiked ? ' red' : ''} `}
            style={{marginTop:"10px",cursor: "pointer", color: isLiked ? 'red' : 'black' }}
            onClick={handleHeartClick}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Product;