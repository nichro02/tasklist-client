import { Fragment } from 'react';
import './App.css';

//components
import InputTodo from './components/Input'

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
      </div>
    </Fragment>
  );
}

export default App;
