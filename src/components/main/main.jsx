
import React, { useEffect, useState } from 'react';

import Header from '../header/header';
import Promo from '../promo/promo';
import Tabs from '../tabs/tabs';
import Footer from '../footer/footer';
import Modal from '../modal/modal';

const Main = () => {
  const [modalActive, setModalActive] = useState(false);
  //const [review, setReview] = useState('');
  /*const [reviewItems, setReviewItems] = useState(
    JSON.parse(localStorage.getReview('reviewItems')) || []
  )

  useEffect(() => {
    localStorage.setReview('reviewItems', JSON.stringify(reviewItems))
  }, [reviewItems])

  const handleClickModal = () => {
    setModalActive(true)
  }

  const newReview = () => {
    console.log(review)
  }*/

    const handleClickModal = () => {
    setModalActive(true)
  }

  return (
      <>
        <Header />
        <main className="main">
          <h1 className="main__title visually-hidden">Авто-мото</h1>
          <Promo />
          <Tabs 
            handleClick={handleClickModal}
          />
          
        </main>
        <Footer />

        <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default Main;