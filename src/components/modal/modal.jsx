import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Rating from '../rating/rating';

const ESC_PRESS = 27;

const reviews = [
    {
        userName: 'Борис Иванов',
        dignities: 'мощность, внешний вид',
        disadvantages: 'Слабые тормозные колодки (пришлось заменить)',
        rating: 3,
        feedback: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.'
    }, 
    {
        userName: 'Марсель Исмагилов',
        dignities: 'Cтиль, комфорт, управляемость',
        disadvantages: 'Дорогой ремонт и обслуживание',
        rating: 3,
        feedback: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.'
    }
];


const Modal = ({active, setActive}) => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('reviews')) || '[]')
    const [userName, setUserName] = useState ('')
    const [dignities, setDignities] = useState ('')
    const [disadvantages, setDisadvantages] = useState ('')
    const [rating, setRating]  = useState ('0')
    const [feedback, setFeedback]  = useState ('')

    const [userNameDirty, setUserNameDirty] = useState(false)
    const [feedbackDirty, setFeedbackDirty] = useState(false)

    const [userNameError, setUserNameError] = useState('Пожалуйста, заполните поле')
    const [feedbackError, setFeedbackError] = useState('Пожалуйста, заполните поле')

    const [formValid, setFormValid] = useState(false)
    
    useEffect(() => {
        if (userNameError || feedbackError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
     }, [userNameError, feedbackError]);

    useEffect(() => {
        setItems(reviews);
     }, []);

    useEffect(() => {
        localStorage.setItem('reviews', JSON.stringify(items))
     }, [items]);

    useEffect(() => {
        document.addEventListener('keydown', onClose)
        return () => document.removeEventListener('keydown', onClose)
    })

    const onBlur = (evt) => {
        // eslint-disable-next-line default-case
        switch(evt.target.name) {
            case 'userName':
                setUserNameDirty(true)
                break
            case 'feedback':
                setFeedbackDirty(true)
                break
        }
    }

    const onChangeUserName = (evt) => {
        setUserName(evt.target.value)
        if (evt.target.value.length < 2) {
            setUserNameError('Пожалуйста, заполните поле')
            if (!evt.target.value) {
                setUserNameError('Пожалуйста, заполните поле')
            }
        } else {
            setUserNameError('')
        }
    }
    const onChangeFeedback = (evt) => {
        setFeedback(evt.target.value)
        if (evt.target.value.length < 2) {
            setFeedbackError('Пожалуйста, заполните поле')
            if (!evt.target.value) {
                setUserNameError('Пожалуйста, заполните поле')
            }
        } else {
            setFeedbackError('')
        }
    }

    const onClose = (evt) => {
        if (evt.keyCode === ESC_PRESS) {
            setActive(false)
        }
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        setActive(false)
    }

    const resetInput = () => {
        setUserName('')
        setDisadvantages('')
        setDignities('')
        setRating('0')
        setFeedback('')
    }

    const onAddItemClick = () => {

        const newItem = {
            userName,
            dignities,
            disadvantages,
            rating,
            feedback
        }
        
        setItems([...items, newItem])
        resetInput();
    }
      
  return (
    <div className={active ? "modal modal--active" : "modal"} onClick={() => setActive(false)}>
        <section className={active ? "modal__callback modal__callback--active" : "modal__callback"} onClick={evt => evt.stopPropagation()}>
            <h2 className="modal__title">Оставить отзыв</h2>
            <form className="modal__callback-form" onSubmit={onSubmit} action="#">
                <div className="modal__left-column">
                  
                    <label className="modal__label modal__name">
                        {(userNameDirty && userNameError) && <span className="modal__error">{userNameError}</span>}
                        <input className="modal__input" type="text" name="userName" placeholder="Имя" value={userName} onBlur={(evt) => onBlur(evt)} onChange={(evt) => onChangeUserName(evt)} />
                    </label>
                    <label className="modal__label modal__dignities">
                        <input className="modal__input" type="text" name="dignities" placeholder="Достоинства" value={dignities} onChange={(evt) => setDignities(evt.target.value)}  />
                    </label>
                    <label className="modal__label modal__disadvantages">
                        <input className="modal__input" type="text" name="disadvantages" placeholder="Недостатки" value={disadvantages} onChange={(evt) => setDisadvantages(evt.target.value)} />
                    </label>
                </div>

                <div className="modal__right-column">
                    <div className="modal__rating-wrap">
                        <p className="modal__rating-info">Оцените товар:</p>
                       <Rating rating={rating} setRating={setRating} />
                    </div>

                    <label className="modal__label modal__feedback">
                        {(feedbackDirty && feedbackError) && <span className="modal__error">{feedbackError}</span>}
                        <textarea className="modal__input" placeholder="Комментарий" name="feedback" rows="5" cols="8" value={feedback} onBlur={(evt) => onBlur(evt)} onChange={(evt) => onChangeFeedback(evt)}/>
                    </label>
                </div>

                <button className="modal__submit" type="submit" onClick={onAddItemClick} disabled={!formValid}>Оставить отзыв</button>
            </form>
            <button className="modal__close" onClick={() => setActive(false)} type="button" aria-label="Закрыть"></button>
        </section>
  </div>
  );

};

Modal.prototype = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    rating: PropTypes.number.isRequired,
    setRating: PropTypes.func.isRequired
};

export default Modal;