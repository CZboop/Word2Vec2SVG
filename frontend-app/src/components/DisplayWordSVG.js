import React from 'react';


const DisplayWordSVG = ({word, handleSubmit, setWord}) => {
    

    const handleInputChange = (e) => {
        setWord(e.target.value);
    }

    // switch the dataset
    // add get the polygon for submitted word from data and add to svg
    // handle word not in dataset

    // potentially add word comparison and sentence drawer

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