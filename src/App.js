import React from 'react';
import { Box, Grommet, Nav } from 'grommet';
import { Sidebar } from 'grommet-controls';

const theme = {
  global: {
    font: {
      family: 'Futura',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} themeMode="dark">
      <Sidebar title='My title'>

      </Sidebar>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Grommet>
  );
}

export default App;
