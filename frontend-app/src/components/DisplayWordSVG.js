import React from 'react';
import './DisplayWordSVG.css';

const DisplayWordSVG = ({word, handleSubmit, setWord, wordPoints, viewBoxScale}) => {
  
    const handleInputChange = (e) => {
        setWord(e.target.value);
    }

  return (
    <div className='word-svg-container'>
      <svg viewBox={viewBoxScale} xmlns="http://www.w3.org/2000/svg">
           <polygon points={wordPoints}
              fill="rgb(106, 255, 106)"  />
      </svg>
        <form onSubmit={handleSubmit}>
        <label>
          Word: 
          <input type="text" value={word} onChange={handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default DisplayWordSVG;