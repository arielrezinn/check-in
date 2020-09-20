import React, { useState } from 'react';
import {
  Box,
  grommet,
  Grommet,
  Tab,
  Tabs
} from 'grommet';
import { CalendarWindow } from './components/calendar'
import { EmojiWindow } from './components/emojiview'

function App() {
  return (
    <Grommet theme={grommet} themeMode="light" full>
      <Box direction="row" flex overflow={{ horizontal: 'hidden'}} pad="medium" fill>
        <Tabs flex>
          <Tab title='Check-In'>
            <EmojiWindow></EmojiWindow>
          </Tab>
          <Tab title='Overview'>
            <CalendarWindow></CalendarWindow>
          </Tab>
          <Tab title='Stats'>
            
          </Tab>
        </Tabs>
      </Box>
    </Grommet>
  );
}

export default App;
