import { useCallback, useEffect, useState } from 'react';
import { Datum, GIFResponse } from './gif-response.interface';
import { useDebounce } from 'use-debounce';

const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = '';

interface Props {
  emitList: (list: Datum[]) => void;
}

export const SearchInput = ({ emitList }: Props) => {
  const [searchText, setSearchText] = useState('');
  const [value] = useDebounce(searchText, 1000, { leading: true });

  const SEARCH_URL = `${GIPHY_API_URL}/search?api_key=${API_KEY}&q=${value}&limit=5`;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchGifs = useCallback(async () => {
    const response = await fetch(SEARCH_URL);
    const responseJson: GIFResponse = await response.json();

    const { data } = responseJson;

    emitList(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SEARCH_URL]);

  useEffect(() => {
    if (value.length >= 3) {
      fetchGifs();
    }
  }, [value, fetchGifs]);

  return (
    <div className='mt-6'>
      <input
        type='text'
        placeholder='Busque el gif que desee'
        className='border-[1px] border-white bg-transparent px-4 py-2 rounded-lg w-full text-white'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};
