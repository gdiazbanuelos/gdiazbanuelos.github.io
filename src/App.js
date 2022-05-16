import { Helmet } from "react-helmet";
import './App.css';
import Top from './Top';

function App() {
  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #76C6B9; }"}</style>
      </Helmet>
      <div className='flex justify-center pt-44'>
        <Top />
      </div>
    </div>
  );
}

export default App;
