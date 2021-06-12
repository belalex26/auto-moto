
import React from 'react';

import Header from '../header/header';
import Promo from '../promo/promo';
import Footer from '../footer/footer';

const Main = () => {
  return (
      <>
        <Header />
        <main className="main">
          <h1 className="main__title">Авто-мото</h1>
          <Promo />

        </main>
        <Footer />
    </>
  );
};

export default Main;