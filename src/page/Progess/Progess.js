import React from 'react';

const Progess = () => {
    return (
      <div>
        <div>
          <input
            type="range"
            min="0"
            max="100"
            value="40"
            className="range #ef4444"
          />
        </div>
        <div className='my-3'>
          <div className="bg-base-100 shadow-xl p-1 rounded">
            <input type="checkbox" className="" /> Possible bargaining
          </div>
          <div className="bg-base-100 shadow-xl p-1 my-3 rounded">
            <input type="checkbox" className="" /> Exchange for real estate
          </div>
          <div className="bg-base-100 shadow-xl p-1 rounded">
            <input type="checkbox" className="" /> Car exchange
          </div>
        </div>
      </div>
    );
};

export default Progess;