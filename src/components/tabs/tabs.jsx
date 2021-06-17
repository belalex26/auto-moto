import React from 'react';

import Specifications from '../specifications/specifications';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';


const Tabs = ({handlerClick}) => {

    const activateTabs = () => {
        document.querySelector('.tabs__triggers-item').click();
    };

    document.querySelectorAll('.tabs__triggers-item').forEach((item) =>
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');

            document.querySelectorAll('.tabs__triggers-item').forEach(
                (child) => child.classList.remove('tabs__triggers-item--active')
            );

            document.querySelectorAll('.tabs__content-item').forEach(
                (child) => child.classList.remove('tabs__content-item--active')
            );

            item.classList.add('tabs__triggers-item--active');
            document.getElementById(id).classList.add('tabs__content-item--active');

        })
    );

    return (
        <div className="tabs">
            <div className="tabs__triggers">
                <a className="tabs__triggers-item" href="#specifications" ref={activateTabs}>Характеристики</a>
                <a className="tabs__triggers-item" href="#reviews">Отзывы</a>
                <a className="tabs__triggers-item" href="#contacts">Контакты</a>

            </div>
            <div className="tabs__content">
                <div className="tabs__content-item" id="specifications">
                    <Specifications />
                </div>
                <div className="tabs__content-item" id="reviews">
                    <Reviews handleClick={handlerClick}/>
                </div>
                <div className="tabs__content-item" id="contacts">
                    <Contacts />
                </div>

            </div>
        </div>

    );
};
export default Tabs;