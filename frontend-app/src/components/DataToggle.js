import React from 'react';

const DataToggle = ({handleDataChange, text}) => {
    // if 
  return (
    <div>
        <button onClick={handleDataChange}>{text}</button>
    </div>
  )
}

export default DataToggle;