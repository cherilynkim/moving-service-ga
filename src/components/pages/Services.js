// src/components/Services.js
import React from 'react';
import '../../App.css';

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <ul>
        <li>Residential Moving</li>
        <li>Commercial Moving</li>
        <li>Office Moving</li>
        <li>Full Packing Services</li>
        <li>Nationwide</li>
      </ul>
      <h2>Customer Reviews</h2>
      <div className="review">
        <p> Five star rated reviews on Google Reviews</p>
      </div>
      <div className="review">
        <p>"Did a great job, price was the same as quoted and they work hard."</p>
        <p>- Shaun Conners</p>
      </div>
      <div className="review">
        <p>"I met Kevin at Peachstate Freightliner and told me if I ever needed his services call. Needless to say I did. To my surprise company arrived early with Phone call. They started packing and moving. Total 2 hrs my house is packed and ready. This company is very professional and courteous. A BIG THUMBS UP. Thank you Kevin and his hard workers"</p>
        <p>- Benjamin Denard</p>
        <div className="review-picture">
          <img src="/image18.jpg" alt='moving' className="review-picture" />
        </div>
      </div>
      <div className="review">
        <p>"Truly the best experience with a moving company I have ever had. Kevin and his team were not only incredibly kind and hard-working, but they also executed everything flawlessly!

Prior to finding this company, I contacted several other moving companies who all claimed the size and amount of the furniture in my 3BR townhome was too much and too difficult. But Kevin never once doubted that him and his team could do it all. He reassured us before and throughout the process that we were fine and that him and his team could get it all done. And they did!

There ended up being more items than we initially thought. But with zero complaints, they put genuine and honest efforts into everything they did, and was able to help us with way more than what we had initially asked them to do. And they were super efficient... I am so so pleased with this hard-working and kind-hearted team. I will continue to come to them again and again, and will recommend them to everyone I know!"</p>
        <p>- Joann Kang</p>
        <div className="review-picture">
          <img src="/image9.jpg" alt='moving' className="review-picture" />
          <img src="/image10.jpg" alt='moving' className="review-picture" />
          <img src="/image8.jpg" alt='moving' className="review-picture" />
        </div>
      </div>
      <div className="review">
        <p>"Our family only has positive things to say about our moving experience with this company.
The day of the move, the movers had rolled out carpets to protect the flooring, wrapped the bed mattresses, clear wrapped and fabric wrapped heavy furniture. Each mover moved heavy items with expertise. I was surprised to see one man carry a queen-sized mattress by himself with ease. They packed all our things into the truck like Tetris.
Their truck has been specially made for moving. The usual roll up door has been opted out for a barn-style door. The side of the truck has an additional door and the front of the truck has been extended over the drivers seat all for maximum storage.
At the site, they unloaded all the things without breaking anything.
They started from 7:30 in the morning and finished around 2:30. Everything was done quickly and professionally.
Overall, highly recommend!"</p>
        <p>- Dandy Dan Yoon</p>
        <div className="review-picture">
          <img src="/image6.jpg" alt='moving' className="review-picture" />
          <img src="/image7.jpg" alt='moving' className="review-picture" />
          <img src="/image5.jpg" alt='moving' className="review-picture" />
        </div>
      </div>
      <div className="review">
        <p>"I recently used Moving Service GA for my move, and I was very impressed with their service. The movers arrived on time and were very professional. They quickly and efficiently disassembled my furniture and packed it into the moving truck. They also took great care to protect my belongings, and they even used red carpet to protect the floors in my new home.

The movers were also very friendly and helpful. They answered all of my questions and made sure that I was satisfied with their service. I would highly recommend Moving Service GA to anyone who is looking for a reliable and affordable moving company.

Other moving companies were expensive, and I had experiences where they would charge extra depending on the situation. However, Moving Service GA did not charge any extra and their prices were very reasonable. I was very impressed with their professionalism and would highly recommend them to anyone looking for a moving company."</p>
        <p>- Seongduk Hwang</p>
        <div className="review-picture">
          <img src="/image12.jpg" alt='moving' className="review-picture" />
          <img src="/image3.jpg" alt='moving' className="review-picture" />
          <img src="/image13.jpg" alt='moving' className="review-picture" />
        </div>
      </div>
      <div className="review">
        <p>"Everything was packed with care. Extra work that needed to be put into disassembling, assembling, wrapping furnitures and equipments were put into place. They organized accordingly so that there was no complications during our move, as we had 4 different routes. Communication was great, price was excellent, and service from all the employees were friendly. Overall, they showed value and care in our items as if it was their own. Highly Recommended!"</p>
        <p>- Susan Jeong</p>
        <div className="review-picture">
          <img src="/image14.jpg" alt='moving' className="review-picture" />
          <img src="/image15.jpg" alt='moving' className="review-picture" />
        </div>
      </div>
      <div className="blanks"> 
      </div>
    </section>
  );
}

export default Services;
