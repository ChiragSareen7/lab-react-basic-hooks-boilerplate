
import React, { useState } from 'react';
import UseContext from './components/UseState.jsx';

export const ToggleTheme = React.createContext();

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState(prevState => !prevState);
  };

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext />
    </ToggleTheme.Provider>
  );
}

export default App;
