import React, { useEffect, useRef } from 'react'

function Nav1() {
  const Categories = useRef();


  const fun1 = () => {
    if (Categories.current.style.display == "none") {
      Categories.current.style.display = "block"
    }

    else {
      Categories.current.style.display = "none"
    }
  }

  return (
    <div>
      <nav>
        <div className='Account'>
          <ul>
            <li className='Hover-Account'>
              Account <span className="fa-regular fa-user"></span>
              <span className='Acc-child'>
                <span className='fs-6'>My Account</span><br />
                <span className='fs-6'>Order Tracking</span><br />
                <span className='fs-6'>My Voucher</span><br />
                <span className='fs-6'>My Wishlist</span><br />
                <span className='fs-6'><span className="fa-solid fa-sliders fs-6"></span> Setting</span><br />
                <span className='fs-6'><span className="fa-solid fa-right-from-bracket fs-6"></span> Sign Out</span>
              </span>
            </li>
            <li>Cart <span className="fa-solid fa-cart-shopping"></span></li>
            <li>Wishlist <span className="fa-regular fa-heart"></span></li>
            <li>Compare <span className="fa-solid fa-code-compare"></span></li>
          </ul>
        </div>

        <div className='Search' id='id'>

          <div>
            <input type="text" placeholder='...Search for items' />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div onClick={fun1} className='Categories'>
            ▼ All Categories
            <div ref={Categories} style={{ display: "none" }}>
              <p>All Categories</p>
              <p>Milks and Dairies</p>
              <p>Wines & Alcohol</p>
              <p>Clothing & Beauty</p>
              <p>Pet Food & Toy </p>
              <p>Fast food</p>
              <p>Baking material</p>
              <p>Vagetables</p>
              <p>Fresh Seafood</p>
              <p>Noodles & Rice</p>
              <p>Ice cream</p>

            </div>
          </div>

        </div>
         
        <div>
          <img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/theme/logo.svg" alt=""
            height={60} />
        </div>
        <div className='bar'>
          <i className="fa-solid fa-bars fs-1"></i>
          </div>
      </nav>

    </div>
  )
}

export default Nav1
