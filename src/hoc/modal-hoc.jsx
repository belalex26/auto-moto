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
        const [values, setValues] = useState({
            username: '',
            dignities: '',
            disadvantages: '',
            rating: '',
            feedback: ''
          });
        
          const [errors, setErrors] = useState({});
          const [formValid, setFormValid] = useState(false);
    
        useEffect(() => {
            setItems(reviews);
        }, []);

           useEffect(() => {
            const body = document.querySelector('body');
            body.style.overflow = props.modalActive ? 'hidden' : 'auto';
        }, [props.modalActive])

        useEffect(() => {
            if (errors) {
                setFormValid(false)
            } else {
                setFormValid(true)
            }
        }, [errors]);
    
            
        useEffect(() => {
            localStorage.setItem('reviews', JSON.stringify(items))
         }, [items]);
        

        return (
            <Component
                items={items} onSetItems={setItems}
                values={values} setValues={setValues}

                errors={errors} setErrors={setErrors}
                formValid={formValid} setFormValid={setFormValid}
               
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