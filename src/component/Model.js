import React from 'react'

const Model = ({ isvisible,onClose}) => {
    if (!isvisible) return null;

    const handleClose = (e) =>{
      if(e.target.id === 'wrapper') onClose();
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex
    justify-center items-center' id='wrapper'  onClick={handleClose}>
     <div className='w-[600px] flex flex-col'>
        <button className='text-green text-xl place-self-end'onClick={()=>onClose()}>X</button>
        <div className='bg-white p-2 rounded'></div>
    
     </div>
    </div>
  )
}

export default Model
