import './App.css';
import {Helmet} from "react-helmet";
import Header from './components/Header.js';
import Nav from './components/Nav.js'
import Main from './components/Main.js';
import Secondary from './components/Secondary.js';
import Teriary from './components/Tertiary.js';
import Footer from './components/Footer.js';

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
