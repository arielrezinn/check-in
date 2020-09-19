import React, { useState } from 'react';
import {
  Box,
  grommet,
  Grommet,
  Tab,
  Tabs
} from 'grommet';
import { CalendarWindow } from './components/calendar'
import { Cards } from './components/cards'

function App() {
  return (
    <Grommet theme={grommet} themeMode="light" full>
      <Box pad="medium" fill>
        <Tabs flex>
          <Tab title='Check-In'>

          </Tab>
          <Tab title='Overview'>
            <CalendarWindow></CalendarWindow>
          </Tab>
          <Tab title='Stats'>
          </Tab>
        </Tabs>
      </Box>
      <Box direction="row" flex overflow={{ horizontal: 'hidden'}} fill>
        <Box flex align='center' justify='center'>
          app body
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
