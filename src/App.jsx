import { createContext} from 'react'
import React, { useState } from 'react';
import UseContext from './components/UseState.jsx';
import Toggle from './components/Toggle';


export const ToggleTheme = createContext();

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState(prevState => !prevState);
  };

  return (
    <div>
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <Toggle/>
    </ToggleTheme.Provider>
    <UseContext />
    </div>
  );
}

export default App;
