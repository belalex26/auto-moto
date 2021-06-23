import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal/modal';

const Reviews = () => {

    const [modalActive, setModalActive] = useState(false);

    const onModalOpenClick = () => {
      setModalActive(true)
    }
    
    const reviewList =  JSON.parse(localStorage.getItem('reviews')) || []

    return (
        <>
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
                <button className="reviews__btn" type="button" onClick={onModalOpenClick}>Оставить отзыв</button>
            </div>
            <Modal active={modalActive} setActive={setModalActive} />
        </>
    );
};

Reviews.prototype = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
};

export default Reviews;