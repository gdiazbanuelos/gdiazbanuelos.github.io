import './App.css';
import {Helmet} from "react-helmet";
import Header from './Header.js';
import Nav from './Nav.js'
import Main from './Main.js';
import Secondary from './Secondary.js';
import Teriary from './Tertiary.js';
import Footer from './Footer.js';

function App() {
  return (
    <div id="wrapper" className="block align-baseline max-w-[calc(100%-2em)] mx-auto 
    sm:w-[58em] lg:w-[64em] xl:w-[96em]">

      <Helmet>
        <title>Gus Diaz ・ Welcome!</title>
        <style>{"body {background: linear-gradient(#76C6B9, #C57786);}"}</style>
        <style></style>
      </Helmet>

      <Header />
      <Nav />
      <section className="bg-white rounded-md" id="content">
        <Main />
        <Secondary />
        <Teriary />
      </section>
      <Footer />
    </div>
  );
}

export default App;
