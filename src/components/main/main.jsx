import React from 'react';

import Header from '../header/header';
import Promo from '../promo/promo';
import Tabs from '../tabs/tabs';
import Footer from '../footer/footer';

const Main = () => {

  return (
      <>
        <Header />
        <main className="main">
          <h1 className="main__title visually-hidden">Авто-мото</h1>
          <Promo />
          <Tabs />
          
        </main>
        <Footer />
    </>
  );
};

export default Main;