import React from 'react';

const Modal = ({active, setActive}) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <section className={active ? "modal__callback active" : "modal__callback"} onClick={evt => evt.stopPropagation()}>
            <h2 className="modal__title">Оставить отзыв</h2>
            <form className="modal__callback-form" name="callback" method="get" action="#">
                <div className="modal__left-column">
                    <label className="modal__label modal__name">
                        <input className="modal__input" type="text" placeholder="Имя" required />
                    </label>
                    <label className="modal__label modal__dignities">
                        <input className="modal__input" type="text" placeholder="Достоинства" />
                    </label>
                    <label className="modal__label modal__disadvantages">
                        <input className="modal__input" type="text" placeholder="Недостатки" />
                    </label>
                </div>

                <div className="modal__right-column">
                    <div className="modal__rating-wrap">
                        <p className="modal__rating-info">Оцените товар:</p>
                    </div>

                    <label className="modal__label modal__feedback">
                        <input className="modal__input" type="textarea" placeholder="Комментарий" rows="2" cols="80" required />
                    </label>
                </div>

                <button className="modal__submit" type="submit">Оставить отзыв</button>
            </form>
            <button className="modal__close" onClick={() => setActive(false)} type="button" aria-label="Закрыть"></button>
        </section>
  </div>
  );
};

export default Modal;