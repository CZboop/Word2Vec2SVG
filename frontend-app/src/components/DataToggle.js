import React from 'react';
import './DataToggle.css';

const DataToggle = ({handleDataChange, text}) => {
  return (
    <div className="data-toggle-container">
        <button type="button" onClick={handleDataChange}>{text}</button>
    </div>
  )
}

export default DataToggle;