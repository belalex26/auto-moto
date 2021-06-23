import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Specifications from '../specifications/specifications';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';


const Tabs = () => {

    const [activeTabs, setActiveTabs] = useState(1);

    const toggleTabs = (index) => {
        setActiveTabs(index)
    }


    return (
        <div className="tabs">
            <div className="tabs__container">
                <div className="tabs__triggers">
                    <a className={activeTabs === 1 ? "tabs__triggers-item tabs__triggers-item--active" : "tabs__triggers-item"} onClick={() => toggleTabs(1)} href="#specifications">Характеристики</a>
                    <a className={activeTabs === 2 ? "tabs__triggers-item tabs__triggers-item--active" : "tabs__triggers-item"} onClick={() => toggleTabs(2)} href="#reviews">Отзывы</a>
                    <a className={activeTabs === 3 ? "tabs__triggers-item tabs__triggers-item--active" : "tabs__triggers-item"} onClick={() => toggleTabs(3)} href="#contacts">Контакты</a>

                </div>
                <div className="tabs__content">
                    <div className={activeTabs === 1 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="specifications">
                        <Specifications/>
                    </div>
                    <div className={activeTabs === 2 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="reviews">
                        <Reviews
                            handleClickModal />
                    </div>
                    <div className={activeTabs === 3 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="contacts">
                        <Contacts />
                    </div>

                </div>
            </div>
        </div>

    );
};

Tabs.prototype = {
    handleClickModal: PropTypes.func,
};

export default Tabs;