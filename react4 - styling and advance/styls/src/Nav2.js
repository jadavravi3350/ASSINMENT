import React from 'react'

function Nav2() {
  return (
    <div>

      <div className='nav2 container-fluid'>

        <div className='nav2-1'>
          <div className='d-flex gap-3 align-items-center'>
           <div>
           <b className='fs-4'>888 - 1900</b>
            <p>support Center 24/7</p>
           </div>
            <img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/theme/icons/icon-headphone.svg" alt="" height={30} />
          </div>
        </div>

        <div className='Contact'>
          <ul>
            <li>Contact</li>
            <li>Pages ▼</li>
            <li>Blog ▼</li>
            <li>Mega menu ▼</li>
            <li>Vendors ▼</li>
            <li>Shop ▼</li>
            <li>About </li>
            <li>Home ▼</li>
            <li>Deals <img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/theme/icons/icon-hot.svg" alt="" /></li>

          </ul>
        </div>

        <div>
          <button className='btn bg-success pe-4 ps-4 text-white'>▼ AllCategoriesBrowse {`:)`}</button>
        </div>
        
      </div>
     
      
    </div>
  )
}

export default Nav2
