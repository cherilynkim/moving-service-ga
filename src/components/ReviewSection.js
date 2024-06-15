import React from 'react';
import './ReviewSection.css';
import '../App.css';
import { Button } from './Button';

function ReviewSection() {
  return (
    <div className="review-section">
      <h2>Customer Reviews</h2>
      <div className="review">
        <p>"Truly the best experience with a moving company I have ever had. Kevin and his team were not only incredibly kind and hard-working, but they also executed everything flawlessly!

Prior to finding this company, I contacted several other moving companies who all claimed the size and amount of the furniture in my 3BR townhome was too much and too difficult. But Kevin never once doubted that him and his team could do it all. He reassured us before and throughout the process that we were fine and that him and his team could get it all done. And they did!

There ended up being more items than we initially thought. But with zero complaints, they put genuine and honest efforts into everything they did, and was able to help us with way more than what we had initially asked them to do. And they were super efficient — I was shocked and amazed at how well and smooth everything went!

I am so so pleased with this hard-working and kind-hearted team. I will continue to come to them again and again, and will recommend them to everyone I know!</p>
        <p>- Joann Kang</p>
      </div>
      <div className="review">
        <p>"Our family only has positive things to say about our moving experience with this company.
The day of the move, the movers had rolled out carpets to protect the flooring, wrapped the bed mattresses, clear wrapped and fabric wrapped heavy furniture. Each mover moved heavy items with expertise. I was surprised to see one man carry a queen-sized mattress by himself with ease. They packed all our things into the truck like Tetris.
Their truck has been specially made for moving. The usual roll up door has been opted out for a barn-style door. The side of the truck has an additional door and the front of the truck has been extended over the drivers seat all for maximum storage.
At the site, they unloaded all the things without breaking anything.
They started from 7:30 in the morning and finished around 2:30. Everything was done quickly and professionally.
Overall, highly recommend!"</p>
        <p>- Dandy Dan Yoon</p>
      </div>
    </div>
  );
}

export default ReviewSection;
