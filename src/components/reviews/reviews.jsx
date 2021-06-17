import React from 'react';

const Reviews = ({handlerClick}) => {  

    return (
        <>
            <div className="reviews">
                <p className="reviews">Отзывы</p>
                <button className="reviews__btn" onClick={handlerClick}>Оставить отзыв</button>
            
            </div>
        </>
    );
};
export default Reviews;