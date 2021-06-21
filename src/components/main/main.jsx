import React, {useState } from 'react';

import Header from '../header/header';
import Promo from '../promo/promo';
import Tabs from '../tabs/tabs';
import Footer from '../footer/footer';
import Modal from '../modal/modal';

const ESC_PRESS = 27;

const Main = () => {
  const [modalActive, setModalActive] = useState(false);

    const handleClickModal = () => {
      setModalActive(true)
    }

    const handleEscPress = (evt) => {
      evt.preventDefault();
      if (evt.key.kode === ESC_PRESS) {
        setModalActive(false)
      }
  }

  return (
      <>
        <Header />
        <main className="main">
          <h1 className="main__title visually-hidden">Авто-мото</h1>
          <Promo />
          <Tabs 
            handleClickModal={handleClickModal}
          />
          
        </main>
        <Footer />

        <Modal active={modalActive} setActive={setModalActive} handleEscPress={handleEscPress} />
    </>
  );
};

export default Main;