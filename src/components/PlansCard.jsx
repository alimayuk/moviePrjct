import React from "react";

const PlansCard = ({count,desc,desc2,desc3}) => {
  return (
    <div className="card">
    <div className="card-head">
      <p>STARTER</p>
      <h1>
        <span className="dolar">$</span>
        <span className="count">{count}</span>
        <span className="mounth">/mo</span>
      </h1>
    </div>
    <div className="card-body">
      <div className="body-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            fill: "rgba(255, 255, 255, 0.834)",
            transform: "",
            msFilter: "",
          }}
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
          <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
        </svg>    <p>{desc}</p>
      </div>
      <div className="body-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            fill: "rgba(255, 255, 255, 0.834)",
            transform: "",
            msFilter: "",
          }}
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
          <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
        </svg>    <p>{desc2}</p>
      </div>
      <div className="body-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            fill: "rgba(255, 255, 255, 0.834)",
            transform: "",
            msFilter: "",
          }}
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
          <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
        </svg>    <p>{desc3}</p>
      </div>
    </div>
    <div className="card-footer">
      <button>BUY NOW</button>
    </div>
  </div>
  );
};

export default PlansCard;
