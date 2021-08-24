import { useState, useEffect } from 'react';

function UsePersistedState(key, initialState) {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

export default UsePersistedState;
