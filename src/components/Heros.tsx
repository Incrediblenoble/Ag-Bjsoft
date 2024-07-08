import React from 'react';
import "./hero.css";

const Hero = () => {

  // const secondary-color = "#F9F9F9";

  return (
    <div>
     <div className="px-4 py-5 my-5 text-center">
        {/* <Img className="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
        <h1 className="display-4 fw-bold text-body-emphasis">Step Up Your Game</h1>
        <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Shop now for unbeatable comfort, top-notch designs, and top-tier performance from your favorite brands. Elevate your sneaker game with us!</p>
        <div className="d-grid d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
            {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button> */}
        </div>
        </div>
     </div>

      <div className="row">
        <div className="col-lg-2 text-center">
          <svg className="bd-placeholder-img rounded-circle" width="110" height="110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#F9F9F9"/></svg>
          <h5 className="fw-normal">Heading</h5>
        </div>
        <div className="col-lg-2 text-center">
          <svg className="bd-placeholder-img rounded-circle" width="110" height="110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#F9F9F9"/></svg>
          <h5 className="fw-normal">Heading</h5>
        </div>
        <div className="col-lg-2 text-center">
          <svg className="bd-placeholder-img rounded-circle" width="110" height="110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#F9F9F9"/></svg>
          <h5 className="fw-normal">Heading</h5>
        </div>
        <div className="col-lg-2 text-center">
          <svg className="bd-placeholder-img rounded-circle" width="110" height="110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#F9F9F9"/></svg>
          <h5 className="fw-normal">Heading</h5>
        </div>
        <div className="col-lg-2 text-center">
          <svg className="bd-placeholder-img rounded-circle" width="110" height="110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#F9F9F9"/></svg>
          <h5 className="fw-normal">Heading</h5>
        </div>
        <div className="col-lg-2 text-center">
          <svg className="bd-placeholder-img rounded-circle" width="110" height="110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#F9F9F9"/></svg>
          <h5 className="fw-normal">Heading</h5>
        </div>
        <div className="col-lg-2 text-center">
          <svg className="bd-placeholder-img rounded-circle" width="110" height="110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#F9F9F9"/></svg>
          <h5 className="fw-normal">Heading</h5>
        </div>
        <div className="col-lg-2 text-center">
          <svg className="bd-placeholder-img rounded-circle" width="110" height="110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#F9F9F9"/></svg>
          <h5 className="fw-normal">Heading</h5>
        </div>
        <div className="col-lg-2 text-center">
          <svg className="bd-placeholder-img rounded-circle" width="110" height="110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#F9F9F9"/></svg>
          <h5 className="fw-normal">Heading</h5>
        </div>
      </div>
    </div>
  );
}

export default Hero;