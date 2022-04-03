import React from 'react';

const DisplayWordSVG = ({word, handleSubmit, setWord}) => {
  
    const handleInputChange = (e) => {
        setWord(e.target.value);
    }

  return (
    <div className='word-svg-container'>
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