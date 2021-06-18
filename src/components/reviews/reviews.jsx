import React from 'react';

const Reviews = ({handlerClick}) => {  

    return (
        <div className="review">
            <div className="review__comments">
                <p className="review__username">Борис Иванов</p>
                <div className="review__description">
                    <p className="review__dignities-title">Достоинства</p>
                    <p className="review__dignities">мощность, внешний вид</p>
                    <p className="review__disadvantages-title">Недостатки</p>
                    <p className="review__disadvantages">Слабые тормозные колодки (пришлось заменить)</p>
                </div>
                <p className="review__comment-title">Комментарий</p>
                <p className="review__comment">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</p>
                <div className="review__rating-wrapper">
                    <div className="review__rating" data-total-value="3">
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

            <div className="review__comments">
                <p className="review__username">Марсель Исмагилов</p>
                <div className="review__description">
                    <p className="review__dignities-title">Достоинства</p>
                    <p className="review__dignities">Cтиль, комфорт, управляемость</p>
                    <p className="review__disadvantages-title">Недостатки</p>
                    <p className="review__disadvantages">Дорогой ремонт и обслуживание</p>
                </div>
                <p className="review__comment-title">Комментарий</p>
                <p className="review__comment">Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.</p>
                <div className="review__rating-wrapper">
                    <div className="review__rating" data-total-value="3">
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

            <button className="reviews__btn" type="button" onClick={handlerClick}>Оставить отзыв</button>
            
        </div>
    );
};
export default Reviews;