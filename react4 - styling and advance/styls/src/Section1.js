import React from 'react'

function Section1() {
  return (
    <div>
      <div className='container-fluid mt-5'>

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel ">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/slider/slider-1.png" className=" d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block  text-end text-dark">
                <p className='display-1'><b>Don't miss amazing</b></p>
                <p className='display-1'><b>grocery deals</b></p>

                <p  className='fs-1 text-secondary'>Sing up for the daily newsletter</p>
                <div>
                 <button className='btn btn-success py-3 px-5 '>Subscribe</button>
                 <input className=' py-3 px-5  btn btn-info ms-1' type="" name="" placeholder='Your email address'  />
                </div>
               
              </div>
            </div>

            <div className="carousel-item">
              <img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/slider/slider-2.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block  text-end text-dark">
                <p className='display-1'><b>Fresh Vegetables</b></p>
                <p className='display-1'><b>Big Discount</b></p>

                <p  className='fs-1 text-secondary'>Save up to 50% off on your first order</p>
                <div>
                 <button className='btn btn-success py-3 px-5 '>Subscribe</button>
                 <input className=' py-3 px-5  btn btn-info ms-1' type="" name="" placeholder='Your email address'  />
                </div>
               
              </div>
            </div>

          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Section1
