import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Rating from '../rating/rating';
import ModalHoc from '../../hoc/modal-hoc';

const ESC_PRESS = 27;

const Modal = (props) => {

    useEffect(() => {
        document.addEventListener('keydown', onClose, {passive: true})
        return () => document.removeEventListener('keydown', onClose)
    })

    const onBlur = (evt) => {
        // eslint-disable-next-line default-case
        switch(evt.target.name) {
            case 'userName':
                props.onSetUserNameDirty(true)
                break
            case 'feedback':
                props.onSetFeedbackDirty(true)
                break
        }
    }

    const onChangeUserName = (evt) => {
        props.onSetUserName(evt.target.value)
        if (evt.target.value.length < 2) {
            props.onSetUserNameError('Пожалуйста, заполните поле')
            if (!evt.target.value) {
                props.onSetUserNameError('Пожалуйста, заполните поле')
            }
        } else {
            props.onSetUserNameError('')
        }
    }
    const onChangeFeedback = (evt) => {
        props.onSetFeedback(evt.target.value)
        if (evt.target.value.length < 2) {
            props.onSetFeedbackError('Пожалуйста, заполните поле')
            if (!evt.target.value) {
                props.onSetUserNameError('Пожалуйста, заполните поле')
            }
        } else {
            props.onSetFeedbackError('')
        }
    }

    const onClose = (evt) => {
        if (evt.keyCode === ESC_PRESS) {
            props.onModalActive(false)
        }
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.onModalActive(false)
    }

    const resetInput = () => {
        props.onSetUserName('')
        props.onSetDisadvantages('')
        props.onSetDignities('')
        props.onSetRating('0')
        props.onSetFeedback('')
    }

    const onAddItemClick = () => {

        const newItem = {
            userName: props.userName,
            dignities:props.dignities,
            disadvantages: props.disadvantages,
            rating: props.rating,
            feedback: props.feedback
        }
        
        props.onSetItems([...props.items, newItem])
        resetInput();
    }
      
  return (
    <div className={props.modalActive ? "modal modal--active" : "modal"} onClick={() => props.onModalActive(false)}>
        <section className={props.modalActive ? "modal__callback modal__callback--active" : "modal__callback"} onClick={evt => evt.stopPropagation()}>
            <h2 className="modal__title">Оставить отзыв</h2>
            <form className="modal__callback-form" onSubmit={onSubmit} action="#">
                <div className="modal__left-column">
                  
                    <label className="modal__label modal__name">
                        {(props.userNameDirty && props.userNameError) && <span className="modal__error">{props.userNameError}</span>}
                        <input className="modal__input" type="text" name="userName" placeholder="Имя" value={props.userName} onBlur={(evt) => onBlur(evt)} onChange={(evt) => onChangeUserName(evt)} />
                    </label>
                    <label className="modal__label modal__dignities">
                        <input className="modal__input" type="text" name="dignities" placeholder="Достоинства" value={props.dignities} onChange={(evt) => props.onSetDignities(evt.target.value)}  />
                    </label>
                    <label className="modal__label modal__disadvantages">
                        <input className="modal__input" type="text" name="disadvantages" placeholder="Недостатки" value={props.disadvantages} onChange={(evt) => props.onSetDisadvantages(evt.target.value)} />
                    </label>
                </div>

                <div className="modal__right-column">
                    <div className="modal__rating-wrap">
                        <p className="modal__rating-info">Оцените товар:</p>
                       <Rating rating={props.rating} onSetRating={props.onSetRating} />
                    </div>

                    <label className="modal__label modal__feedback">
                        {(props.feedbackDirty && props.feedbackError) && <span className="modal__error">{props.feedbackError}</span>}
                        <textarea className="modal__input" placeholder="Комментарий" name="feedback" rows="5" cols="8" value={props.feedback} onBlur={(evt) => onBlur(evt)} onChange={(evt) => onChangeFeedback(evt)}/>
                    </label>
                </div>

                <button className="modal__submit" type="submit" onClick={onAddItemClick} disabled={!props.formValid}>Оставить отзыв</button>
            </form>
            <button className="modal__close" onClick={() => props.onModalActive(false)} type="button" aria-label="Закрыть"></button>
        </section>
  </div>
  );

};

Modal.prototype = {
    rating: PropTypes.number.isRequired,
    onSetRating: PropTypes.func.isRequired
};

export default ModalHoc(Modal);