import { useState } from 'react';

export const Button = ({ title }: { title?: string }) => {
  const [count, setCount] = useState(0); //* NAME - setNAME

  return (
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
      {title ? title : 'Mi contador'}: {count}
    </button>
  );
};
