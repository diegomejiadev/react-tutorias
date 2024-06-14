import { useEffect, useState } from 'react';
import './App.css';
import { SearchInput } from './SearchInput';
import { PrevSearch } from './PrevSearch';
import { GifList } from './GifList';
import { Datum } from './gif-response.interface';

function App() {
  const [gifList, setGifList] = useState<Datum[]>([]);

  return (
    <div className='h-screen w-full bg-slate-900 py-10 px-6'>
      {/* Titulo */}
      <div className='text-center'>
        <h1 className='text-white text-3xl'>Listado de Gifs</h1>
      </div>

      {/* Buscador */}
      <SearchInput
        emitList={(list) => {
          setGifList(list);
        }}
      />

      {/* Busquedas anteriores */}
      <PrevSearch />

      {/* Listado */}
      <GifList />
    </div>
  );
}

export default App;
