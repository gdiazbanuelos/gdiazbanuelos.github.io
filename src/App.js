import { Helmet } from "react-helmet";
import './App.css';
import Header from './Header';

function App() {
  return (
    <div>
      <Helmet>
        <title>Gus Diaz ・ Welcome!</title>
        <style>{"body { background-color: #76C6B9; }"}</style>
      </Helmet>

      <div className='flex justify-center pt-24 mb-6'>
        <Header />
      </div>

      <div className="flex flex-col justify-center items-center mb-28">
        <p className="text-white text-5xl font-bold mb-4">Gustavo Diaz Banuelos</p>
        <p className="text-white text-lg">Tools & Automation Engineer at Crate & Barrel</p>
        <p className="text-white text-lg">gdiazbanuelos@gmail.com</p>
        <p className="text-white text-lg">github.com/gdiazbanuelos</p>
      </div>

      <div className="flex justify-center items-center bg-[#F7F7F7]">
        <div className="">
          <p>Hello</p>
        </div>
      </div>

    </div>
  );
}

export default App;
