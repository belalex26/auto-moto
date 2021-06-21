import React from 'react';

const Reviews = ({handleClickModal}) => {
    
    const reviewList =  JSON.parse(localStorage.getItem('reviews')) || []

    return (
        <div className="review">
            {
                reviewList.map((elem, id) => {
                    return (

                        <div className="review__comments" key={id}>
                        <p className="review__username">{elem.userName}</p>
                        <div className="review__description">
                            <p className="review__dignities-title">Достоинства</p>
                            <p className="review__dignities">{elem.dignities}</p>
                            <p className="review__disadvantages-title">Недостатки</p>
                            <p className="review__disadvantages">{elem.disadvantages}</p>
                        </div>
                        <p className="review__comment-title">Комментарий</p>
                        <p className="review__comment">{elem.feedback}</p>
                        <div className="review__rating-wrapper">
                            <div className="review__rating" data-total-value={elem.rating}>
                                <div className="review__rating-item" data-item-value="5">★</div>
                                <div className="review__rating-item" data-item-value="4">★</div>
                                <div className="review__rating-item" data-item-value="3">★</div>
                                <div className="review__rating-item" data-item-value="2">★</div>
                                <div className="review__rating-item" data-item-value="1">★</div>
                            </div>
                            <p className="review__rating-conclusion">Советует</p>
                        </div>
                        <div className="review__feedback">
                            <p className="review__time">1 минуту назад</p>
                            <button className="review__feedback-btn">Ответить</button>
                        </div>
                    </div>
                                        
                    )
                })
            }
            <button className="reviews__btn" type="button" onClick={handleClickModal}>Оставить отзыв</button>
        </div>
    );
};
export default Reviews;