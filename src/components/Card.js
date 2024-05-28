import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({data}) => {
  return (
    <>
    {/* <div className='card'>
    <h1>Guys</h1>
    </div> */}

    {data.map((card, index) => (
      <div key={index} className='card'>
        <h1>{card.title}</h1>
        <p>{card.diskription}</p>
        <Link to={`/card/${card.title}`}>View more</Link>

      </div>
   ) )} 

  </>
  );
}
 
export default Card;