import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [isAppear, setIsAppear] = useState(false);

  const toggleInfo = () => {
    setIsAppear(!isAppear);
  }

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={toggleInfo}>{isAppear ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </header>
     
      <p>{isAppear ? info : `${info.substring(0, 0)}`}</p>
      
    </article>
  );
};

export default Question;
