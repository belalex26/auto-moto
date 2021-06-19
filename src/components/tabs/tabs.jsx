import React from 'react';

import Specifications from '../specifications/specifications';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';


const Tabs = ({handleClickModal}) => {


    document.querySelectorAll('.tabs__triggers-item').forEach((item) =>
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');

            document.querySelectorAll('.tabs__triggers-item').forEach(
                (child) => child.classList.remove('tabs__triggers-item--def')
            );

            document.querySelectorAll('.tabs__content-item').forEach(
                (child) => child.classList.remove('tabs__content-item--def')
            );


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
            <div className="tabs__container">
                <div className="tabs__triggers">
                    <a className="tabs__triggers-item tabs__triggers-item--def" href="#specifications">Характеристики</a>
                    <a className="tabs__triggers-item" href="#reviews">Отзывы</a>
                    <a className="tabs__triggers-item" href="#contacts">Контакты</a>

                </div>
                <div className="tabs__content">
                    <div className="tabs__content-item tabs__content-item--def" id="specifications">
                        <Specifications/>
                    </div>
                    <div className="tabs__content-item" id="reviews">
                        <Reviews
                            handleClickModal={handleClickModal}
                        />
                    </div>
                    <div className="tabs__content-item" id="contacts">
                        <Contacts />
                    </div>

                </div>
            </div>
        </div>

    );
};
export default Tabs;