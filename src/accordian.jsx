import React, { useState } from 'react';

const Accordion = ({Importance }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
         
          <div className='text-1xl'>{isActive ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="up-arrow"><path fill="#000" fill-rule="evenodd" d="M5.306 15.694a1.043 1.043 0 0 0 1.476 0L12 10.47l5.218 5.224a1.043 1.043 0 0 0 1.476 0 1.046 1.046 0 0 0 0-1.478l-5.904-5.91a1.04 1.04 0 0 0-.79-.305 1.04 1.04 0 0 0-.79.305l-5.904 5.91a1.046 1.046 0 0 0 0 1.478Z" clip-rule="evenodd"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="down-arrow"><path d="M22.782 13.8 17 19.582 11.218 13.8a1 1 0 0 0-1.414 1.414L16.29 21.7a.992.992 0 0 0 .71.292.997.997 0 0 0 .71-.292l6.486-6.486a1 1 0 0 0-1.414-1.414z"></path></svg>}</div>
        </div>
        
        {isActive && <div className="accordion-content">{Importance}</div>}
      </div>
    );
  };
  
  export default Accordion;