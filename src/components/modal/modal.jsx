import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {ESC_PRESS, reviews} from '../../const';
import Rating from '../rating/rating';

const Modal = ({active, setActive}) => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('reviews')) || '[]')
    const [userName, setUserName] = useState('')
    const [dignities, setDignities] = useState('')
    const [disadvantages, setDisadvantages] = useState('')
    const [rating, setRating] = useState(3)
    const [feedback, setFeedback] = useState('')

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

    const onClose = (evt) => {
        if (evt.keyCode === ESC_PRESS) {
            setActive(false)
        }
    }

    const onCloseModal = () => {
        setActive(false)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        onCloseModal();
    }

    const onChangeUserName = (e) => {
        setUserName(e.target.value)
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
    } 
      
  return (
    <div className={active ? "modal modal--active" : "modal"} onClick={() => setActive(false)}>
        <section className={active ? "modal__callback modal__callback--active" : "modal__callback"} onClick={evt => evt.stopPropagation()}>
            <h2 className="modal__title">Оставить отзыв</h2>
            <form className="modal__callback-form" name="callback" method="get" action="#" onSubmit={onSubmit}>
                <div className="modal__left-column">
                    <label className="modal__label modal__name">
                        <input className="modal__input" type="text" name="userName" placeholder="Имя" required autoFocus minLength="2" onChange={(e) => setUserName(e.target.value)} />
                    </label>
                    <label className="modal__label modal__dignities">
                        <input className="modal__input" type="text" name="dignities" placeholder="Достоинства" onChange={(e) => setDignities(e.target.value)} />
                    </label>
                    <label className="modal__label modal__disadvantages">
                        <input className="modal__input" type="text" name="disadvantages" placeholder="Недостатки" onChange={(e) => setDisadvantages(e.target.value)} />
                    </label>
                </div>

                <div className="modal__right-column">
                    <div className="modal__rating-wrap">
                        <p className="modal__rating-info">Оцените товар:</p>
                        <Rating setRating={setRating} />
                    </div>

                    <label className="modal__label modal__feedback">
                        <textarea className="modal__input" placeholder="Комментарий" name="feedback" rows="5" cols="8" required minLength="5" onChange={(e) => setFeedback(e.target.value)} />
                    </label>
                </div>

                <button className="modal__submit" type="submit" onClick={onAddItemClick}>Оставить отзыв</button>
            </form>
            <button className="modal__close" onClick={() => setActive(false)} type="button" aria-label="Закрыть"></button>
        </section>
  </div>
  );

};

Modal.prototype = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    setRating: PropTypes.func.isRequired
};

export default Modal;