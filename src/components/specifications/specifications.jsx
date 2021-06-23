import React from 'react';

const Specifications = () => {
    return (
        <table className="specifications">
            <thead className="visually-hidden">
                <tr className="specifications__table-title">
                    <th className="specifications__row-title">Параметр</th>
                    <td className="specifications__row-text">Значение</td>
                </tr>
            </thead>
            <tbody className="specifications__table">
                <tr className="specifications__table-row">
                    <th className="specifications__row-title">Трансмиссия</th>
                    <td className="specifications__row-text">Роботизированная</td>
                </tr>
                <tr className="specifications__table-row">
                    <th className="specifications__row-title">Мощность двигателя, л.с.</th>
                    <td className="specifications__row-text">249</td>
                </tr>
                <tr className="specifications__table-row">
                    <th className="specifications__row-title">Тип двигателя</th>
                    <td className="specifications__row-text">Бензиновый</td>
                </tr>
                <tr className="specifications__table-row">
                    <th className="specifications__row-title">Привод</th>
                    <td className="specifications__row-text">Полный</td>
                </tr>
                <tr className="specifications__table-row">
                    <th className="specifications__row-title">Объем двигателя, л</th>
                    <td className="specifications__row-text">2.4</td>
                </tr>
                <tr className="specifications__table-row">
                    <th className="specifications__row-title">Макс. крутящий момент</th>
                    <td className="specifications__row-text">370/4500</td>
                </tr>
                <tr className="specifications__table-row">
                    <th className="specifications__row-title">Количество цилиндров</th>
                    <td className="specifications__row-text">4</td>
                </tr>
            </tbody>
            
        </table>
    );
};
export default Specifications;