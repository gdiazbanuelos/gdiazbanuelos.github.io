import { Helmet } from "react-helmet";
import './App.css';
import logo from './assets/logo.svg'

function App() {
  return (
    <div className="w-[64em] max-w-[calc(100%-4em)] mx-auto my-0 p-0 b-0 align-baseline block">
      
      <Helmet>
        <title>Gus Diaz ・ Welcome!</title>
        <style>{"body { background-color: #76C6B9; }"}</style>
      </Helmet>

    <header className="block text-center pt-[7em] pr-[5em] pb-[4em] pl-[5em]">
      <span className="block text-center mx-0 mt-0 mb-[1.5em]">
        <img src={logo} alt="" className="mx-auto my-0 animate-bounce"/>
      </span>
      <p className="text-white text-6xl">Gustavo Diaz Banuelos</p>
      <p className="text-white text-2xl">
        Tools & Automation Engineer at Crate & Barrel
        <br/>
        <a href="mailto:gdiazbanuelos@gmail.com">gdiazbanuelos@gmail.com</a>
        <br/>
        <a href="https://github.com/gdiazbanuelos">github.com/gdiazbanuelos</a>
      </p>
    </header>


    </div>
  );
}

export default App;
