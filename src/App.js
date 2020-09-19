import React, { useState } from 'react';
import {
  Box,
  grommet,
  Grommet,
} from 'grommet';

import { TooltipsSidebar } from './components/sidebar';

function App() {
  return (
    <Grommet theme={grommet} themeMode="light" full>
      <Box direction="row" flex overflow={{ horizontal: 'hidden'}} fill>
        <TooltipsSidebar/>
        <Box flex align='center' justify='center'>
          app body
        </Box>
    </Box>
    </Grommet>
  );
}

export default App;
