import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({setRating}) => {
  return (

    <div className="rating">
        <div className="rating-items">
            <input type="radio" className="rating-item" id="rating-5" name="rating" value="5" onChange={(e) => setRating(e.target.value)}/>
            <label htmlFor="rating-5" className="rating-label" />

            <input type="radio" className="rating-item" id="rating-4" name="rating" value="4" onChange={(e) => setRating(e.target.value)}/>
            <label htmlFor="rating-4" className="rating-label" />

            <input type="radio" className="rating-item" id="rating-3" name="rating" value="3" onChange={(e) => setRating(e.target.value)}/>
            <label htmlFor="rating-3" className="rating-label" />

            <input type="radio" className="rating-item" id="rating-2" name="rating" value="2" onChange={(e) => setRating(e.target.value)}/>
            <label htmlFor="rating-2" className="rating-label" />

            <input type="radio" className="rating-item" id="rating-1" name="rating" value="1" onChange={(e) => setRating(e.target.value)}/>
            <label htmlFor="rating-1" className="rating-label" />
        </div>
    </div>

  );
};

Rating.prototype = {
    setRating: PropTypes.func.isRequired,
};

export default Rating;