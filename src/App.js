
import React, { useState } from 'react';
import {
  Box,
  grommet,
  Grommet,
  Tab,
  Tabs,
  Button,
  Image
} from 'grommet';
import { EmojiWindow } from './components/emojiview';
import { Stats } from './components/stats';
import firebase from "firebase/app";
import Profile from './components/profile';

function App() {
  return (
    <Grommet theme={grommet} themeMode="light" full>
      <Box direction="row" flex overflow={{ horizontal: 'hidden'}} pad="medium" fill>
        <Tabs flex>
          <Tab title='Check-In'>
            <EmojiWindow></EmojiWindow>
          </Tab>
          <Tab title='Stats'>
            <Stats></Stats>
          </Tab>
          <Tab title='Profile'>
            <Profile />
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