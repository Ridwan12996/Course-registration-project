import React from 'react';

const Card = ({card,handleclick}) => {
    const {image, title,description,price,credit,button}= card
    return (
        <>
         <div className="card bg-base-100 shadow-xl px-6 py-5">
           <figure className="gap-3">
    <img src={image} alt="" className="rounded-xl" />
  </figure>
  <div className="my-3">
    <h2 className="card-title text-1xl font-semibold">{title}</h2>
    <p className='text-xs text-slate-600 my-2'>{description}</p>
    <div className=" lg:flex justify-between my-3 ">
        <p className='text-slate-600 mb-2'> $ Price: {price}</p>
        <p className='text-slate-600'>  Credit: {credit} hr</p>
    </div>
    <div className="card-actions">
      <button onClick={()=>handleclick(card)} 
    
      className="text-white bg-blue-600 w-full rounded-md">{button}</button>
    </div>
  </div> 
  </div> 
        </>
    );
};

export default Card;