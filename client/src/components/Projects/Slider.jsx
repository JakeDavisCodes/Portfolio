import React, { useState } from 'react';
import Item from './SliderItem.jsx';

function Slider({ theme, data }) {
  const [index, setIndex] = useState(0);

  const select = (idx) => {
    setIndex(idx);
  };

  return (
    <div className={`${theme} slider`}>
      {data.map((item, idx) => (
        <Item
          key={item.name + idx}
          select={() => select(idx)}
          theme={theme}
          item={item}
          focused={idx === index}
          transform={(index * 110) - 80}
        />
      ))}
    </div>
  );
}

export default Slider;
