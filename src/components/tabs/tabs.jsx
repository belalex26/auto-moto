import React from 'react';

import Specifications from '../specifications/specifications';
import Review from '../review/review';
import Contacts from '../contacts/contacts';
import TabsHoc from '../../hoc/tabs-hoc';


const Tabs = ({...props}) => {
    
    const toggleTabs = (index) => {
        props.onActiveTabs(index)
    }

    return (
        <div className="tabs">
            <div className="tabs__container">
                <div className="tabs__triggers">
                    <a className={props.activeTabs === 1 ? "tabs__triggers-item tabs__triggers-item--active" : "tabs__triggers-item"} onClick={() => toggleTabs(1)} href="#specifications">Характеристики</a>
                    <a className={props.activeTabs === 2 ? "tabs__triggers-item tabs__triggers-item--active" : "tabs__triggers-item"} onClick={() => toggleTabs(2)} href="#reviews">Отзывы</a>
                    <a className={props.activeTabs === 3 ? "tabs__triggers-item tabs__triggers-item--active" : "tabs__triggers-item"} onClick={() => toggleTabs(3)} href="#contacts">Контакты</a>

                </div>
                <div className="tabs__content">
                    <div className={props.activeTabs === 1 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="specifications">
                        <Specifications/>
                    </div>
                    <div className={props.activeTabs === 2 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="reviews">
                        <Review />
                    </div>
                    <div className={props.activeTabs === 3 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="contacts">
                        <Contacts />
                    </div>

                </div>
            </div>
        </div>

    );
};


export default TabsHoc(Tabs);