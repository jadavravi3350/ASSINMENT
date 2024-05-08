import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function Section2() {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 10 },
    };
    
    const items = [
        <div className="item item1" data-value="1"><img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/shop/cat-14.png" alt="" />
        <b>Coffe & Tea</b>
        <p>items 89</p>

        </div>,
        <div className="item item2" data-value="2"><img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/shop/cat-5.png" alt="" />
          <b>Custard Apple</b>
         <p>items 34</p>

        </div>,
        <div className="item item3" data-value="3"><img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/shop/cat-4.png" alt="" />
        <b>Black plim</b>
        <p>items 123</p>

        </div>,
        <div className="item item4" data-value="4"><img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/shop/cat-2.png" alt="" />
          <b>Strawberry</b>
        <p>items 36</p>

        </div>,
        <div className="item item5" data-value="5"><img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/shop/cat-1.png" alt="" />
          <b>Vegetable</b>
        <p>items 72</p>

        </div>,

        <div className="item item6" data-value="6"><img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/shop/cat-14.png" alt="" />
          <b>Snack</b>
        <p>items 56</p>

        </div>,
        <div className="item item7" data-value="7"><img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/shop/cat-5.png" alt="" />
          <b>Red Apple</b>
        <p>items 54</p>

        </div>,
        <div className="item item8" data-value="8"><img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/shop/cat-4.png" alt="" />
          <b>Peach</b>
        <p>items 14</p>

        </div>,
        <div className="item item9" data-value="9"><img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/shop/cat-2.png" alt="" />
          <b>Oranic Kiwi</b>
        <p>items 28</p>

        </div>,
        <div className="item item10" data-value="10"><img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/shop/cat-1.png" alt="" />
          <b>cake Milk</b>
        <p>items 26</p>

        </div>,

        <div className="item item11" data-value="1"><img src="https://nest-frontend-rtl-v6.netlify.app/assets/imgs/shop/cat-14.png" alt="" />
          <b>Headphone</b>
        <p>items 87</p>

        </div>,

        
       
    ];
    
       
  return (
    <div>
      
      <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
        />
    </div>
  )
}

export default Section2
