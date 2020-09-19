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
            <Cards></Cards>
          </Tab>
        </Tabs>
      </Box>
    </Grommet>
  );
}

export default App;
