import { useState } from 'react';
import './App.css';

import { Button } from './Button';

function App() {
  return (
    <>
      <h1>Mi primer proyecto en React</h1>
      {/* class -> className */}
      <div className='card'>
        {/* {Array.from(Array(5).keys()).map((item) => {
          //* [0, 1, 2, 3, 4, 5... 100] -> map: for(int item = 0; item < [0,...,100].length; item++)
          return (
            <div>
              <Button title='' key={item} />
            </div>
          );
        })} */}

        <Button title='Mi boton personalizado' />
        <Button />
        <Button title='Un boton sencillo' />
      </div>
    </>
  );
}

export default App;
