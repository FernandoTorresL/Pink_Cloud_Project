import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [lista, setLista] = useState(
    {
      projects: [],
      employees: [],
    },
  );

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setLista(data));
  }, []);
  return lista;
};

export default useInitialState;
