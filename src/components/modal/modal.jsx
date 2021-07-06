import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Rating from '../rating/rating';
import ModalHoc from '../../hoc/modal-hoc';
import validate from '../../validateInfo';

const body = document.querySelector('.body');

const ESC_PRESS = 27;

const Modal = (props) => {

    useEffect(() => {
        document.addEventListener('keydown', onClose, {passive: true})
        return () => document.removeEventListener('keydown', onClose)
    })

    const onChangeForm = (evt) => {
        const target = evt.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        props.setValues({
            ...props.values,
            [name]: value,
        })

      };

    const bodyScroll = () => {
        if (props.onModalActive === true) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = 'auto'
        }
    }

    const onClose = (evt) => {
        if (evt.keyCode === ESC_PRESS) {
            props.onModalActive(false)
            bodyScroll()
        }
    }


    const onAddItemClick = () => {
        if (props.values.userName && props.values.feedback) {
            let newItem = {}

            newItem = props.values
            props.onSetItems([...props.items, newItem])

            resetInput()
        }
    }

    const onSubmitForm = (evt) => {
        evt.preventDefault();
        props.setErrors(validate(props.values))
        bodyScroll()

        onAddItemClick()
    }

    const resetInput = () => {

        props.setValues({
            userName: '',
            dignities: '',
            disadvantages: '',
            rating: '',
            feedback: ''
        })
    }
      
  return (
    <div className={props.modalActive ? "modal modal--active" : "modal"} onClick={() => props.onModalActive(false)} role="dialog" tabIndex="-1" >
        <section className={props.modalActive ? "modal__callback modal__callback--active" : "modal__callback"} onClick={evt => evt.stopPropagation()}>
            <h2 className="modal__title">Оставить отзыв</h2>
            <form className="modal__callback-form" action="#" onSubmit={onSubmitForm}>
                <div className="modal__left-column">
                  
                    <label className="modal__label modal__name">
                        {props.errors.userName && <span className="modal__error">{props.errors.userName}</span>}
                        <input className="modal__input" type="text" name="userName" placeholder="Имя" value={props.values.userName} onChange={onChangeForm} />
                    </label>
                    <label className="modal__label modal__dignities">
                        <input className="modal__input" type="text" name="dignities" placeholder="Достоинства" value={props.values.dignities} onChange={onChangeForm} />
                   
                    </label>
                    <label className="modal__label modal__disadvantages">
                        <input className="modal__input" type="text" name="disadvantages" placeholder="Недостатки" value={props.values.disadvantages} onChange={onChangeForm}  />
                    </label>
                </div>

                <div className="modal__right-column">
                    <div className="modal__rating-wrap">
                        <p className="modal__rating-info">Оцените товар:</p>
                       <Rating rating={props.values.rating} onChangeForm={onChangeForm} />
                    </div>

                    <label className="modal__label modal__feedback">
                    {props.errors.feedback && <span className="modal__error">{props.errors.feedback}</span>}
                        <textarea className="modal__input" placeholder="Комментарий" name="feedback" rows="5" cols="8" value={props.values.feedback} onChange={onChangeForm} />
                    </label>
                </div>

                <button className="modal__submit" type="submit" >Оставить отзыв</button>
            </form>
            <button className="modal__close" onClick={() => props.onModalActive(false)} type="button" aria-label="Закрыть"></button>
        </section>
  </div>
  );

};

Modal.prototype = {
    rating: PropTypes.number.isRequired,
    onChangeForm: PropTypes.func.isRequired
};

export default ModalHoc(Modal);