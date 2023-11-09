import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({handleclick}) => {
    const [cards, setcards] =useState([])
    useEffect(()=>{
        fetch("Card.json")
        .then(res=>res.json())
        .then(data=>setcards(data))
    },[])
    return ( <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-4'>
        
  {/* <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div> */}

            {
                cards.map(card=><Card card={card} handleclick={handleclick}></Card>)
            }
        
        </div>
    

        </>
    );
};

export default Cards;