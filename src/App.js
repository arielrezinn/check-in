
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
import Profile from './components/profile';
import chartXkcd from 'chart.xkcd';
import { Pie } from "chart.xkcd-react";

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
            <Box align="center" justify="center" pad="medium" width="large">
              <Pie
                config={{
                  title: 'What Tim made of', // optional
                  data: {
                    labels: ['a', 'b', 'e', 'f', 'g'],
                    datasets: [{
                      data: [500, 200, 80, 90, 100],
                    }],
                  },
                  options: { // optional
                    innerRadius: 0.5,
                    legendPosition: chartXkcd.config.positionType.upRight,
                  },
                }}
              />
            </Box>
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