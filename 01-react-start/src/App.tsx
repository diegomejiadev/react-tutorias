import { useState } from 'react';
import './App.css';

import { Button } from './Button';
import { IHero, heroes } from './hero';
import { HeroItem } from './HeroItem';

function App() {
  const [name, setName] = useState<string>(''); //* Desestructuracion de un array
  const [superHeroes, setSuperHeroes] = useState<IHero[]>(heroes);

  const onHandleClick = () => {
    setName('Diego');
  };

  return (
    <>
      <h1>Mi primer proyecto en React</h1>
      <div className='card'>
        {/* <Button title='Mi boton personalizado' />
        <Button />
        <Button title='Un boton sencillo' /> */}

        <hr />
        <div>
          <h2>El nombre es: {name}</h2>
          <button onClick={onHandleClick}>Agregar nombre</button>
        </div>
        <hr />

        {/* 
            * .map recorre el array superHeroes y hero es el valor en cada iteracion. 
            * Ej: Iteracion 0:  {
            * name: 'Batman',
            * id: 1,
            }*/}
        {
          //* El key es una forma de identificar cada elemento en la iteracion
        }
        {
          //* El {hero.name} es para imprimir el nombre
        }

        <div className='hero_container'>
          {superHeroes.map((hero) => (
            <HeroItem key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
