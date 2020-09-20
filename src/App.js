
import React, { useState } from 'react';
import {
  Box,
  grommet,
  Grommet,
  Tab,
  Tabs,
  Button
} from 'grommet';
import { CalendarWindow } from './components/calendar';
import { EmojiWindow } from './components/emojiview';
import firebase from "firebase/app";

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
          <Button label="sign out" primary 
            onClick={() => {
              firebase.auth().signOut()
              .catch(error => {
                  console.log(error.code);
                  console.log(error.message);
              });
            }}
            margin={{"left":"large"}}
          />
        </Tabs>
        
      </Box>
    </Grommet>
  );
}

export default App;