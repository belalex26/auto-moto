import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

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

const ModalHoc = (Component) => {
    
    const ModalState = (props) => {

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
    
        

        return (
            <Component
                items={items} onSetItems={setItems}
                userName={userName} onSetUserName={setUserName}
                dignities={dignities} onSetDignities={setDignities}
                disadvantages={disadvantages} onSetDisadvantages={setDisadvantages}
                rating={rating} onSetRating={setRating}
                feedback={feedback} onSetFeedback={setFeedback}

                userNameDirty={userNameDirty} onSetUserNameDirty={setUserNameDirty}
                feedbackDirty={feedbackDirty} onSetFeedbackDirty={setFeedbackDirty}
                userNameError={userNameError} onSetUserNameError={setUserNameError}
                feedbackError={feedbackError} onSetFeedbackError={setFeedbackError}

                formValid={formValid} onSetFormValid={setFormValid}

                modalActive={props.modalActive} onModalActive={props.onModalActive}
            />
        );
    
    }
    return ModalState;
}

ModalHoc.prototype = {
    modalActive: PropTypes.bool.isRequired,
    onModalActive: PropTypes.func.isRequired,
};

export default ModalHoc