import React from 'react'

function Header1() {
  return (
    <div>
      <header> 
        <div className='usd'>
            <ul>
                <li className='inrspan'>
                    <a href="">▼  USD</a>
                   <span>
                    <a href="">INR <img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/theme/flag-fr.png" alt="" height={10}/></a>
                    <a href="">INR <img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/theme/flag-fr.png" alt="" height={10}/></a>
                    <a href="">INR <img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/theme/flag-fr.png" alt="" height={10}/></a>
                    
                    </span> 
                </li>

                <li className='inrspan'>
                    <a href="">▼  English</a>
                    <span>
                    <a href="">INR 2 <img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/theme/flag-fr.png" alt="" height={10}/></a>
                    <a href="">INR 2 <img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/theme/flag-fr.png" alt="" height={10}/></a>
                    <a href="">INR 2 <img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/theme/flag-fr.png" alt="" height={10}/></a>
                    
                    </span> 
                </li>

                <li><a href="" className='border-end-0'><b>1800 900 +</b>:Need help? Call Us</a></li>
            </ul>
           
        </div>

        <div>
        <b>Supper Value Deals - Save more with coupons</b>
        </div>

        <div className='usd'>
            <ul>
                <li><a href="">Order Tracking</a></li>
                <li><a href="">Wishlist</a></li>
                <li><a href="">My Account</a></li>
                <li><a href="" className='border-end-0'>About Us</a></li>
            </ul>
        </div>

      </header>  
    </div>
  )
}

export default Header1;
