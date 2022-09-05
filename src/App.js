import React, {Suspense} from 'react'

import './App.css';
import {Helmet} from "react-helmet";
const Header = React.lazy(() => import("./components/Header.js"))
const Nav = React.lazy(() => import('./components/Nav.js'))
const Main = React.lazy(() => import('./components/Main.js'))
const Secondary = React.lazy(() => import('./components/Secondary.js'))
const Tertiary = React.lazy(() => import('./components/Tertiary.js'))
const Footer = React.lazy(() => import("./components/Footer.js"))


function App() {
  return (
    <div id="wrapper" className="block align-baseline max-w-[calc(100%-2em)] mx-auto 
    sm:w-[58em] lg:w-[64em] xl:w-[96em]">

      <Helmet>
        <title>Gus Diaz ・ Welcome!</title>
        <style>{"body {background: linear-gradient(#76C6B9, #C57786);}"}</style>
        <style></style>
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <Nav />
      <section className="bg-white rounded-md" id="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Main />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Secondary />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Tertiary />
        </Suspense>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
