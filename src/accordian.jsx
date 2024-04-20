import React, { useState } from 'react';

const Accordion = ({Importance }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          {/* <div>{Id}</div> */}
          <div className='text-1xl'>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">{Importance}</div>}
      </div>
    );
  };
  
  export default Accordion;