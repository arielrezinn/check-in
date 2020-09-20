import React from 'react'
import { Grommet, Box, Image, Text } from 'grommet'
import firebase from "firebase/app";
import "firebase/auth";


const theme = {
  "global": {
    "colors": {
      "background": {
        "light": "#ffffff",
        "dark": "#000000"
      }
    },
    "font": {
      "family": "-apple-system,\n         BlinkMacSystemFont, \n         \"Segoe UI\", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         \"Fira Sans\", \n         \"Droid Sans\",  \n         \"Helvetica Neue\", \n         Arial, sans-serif,  \n         \"Apple Color Emoji\", \n         \"Segoe UI Emoji\", \n         \"Segoe UI Symbol\""
    }
  },
  "button": {
    "extend": [
      null
    ]
  }
}
function Profile() {
  const auth = firebase.auth();
  var user = auth.currentUser;
  var photoURL = user.providerData[0].photoURL;
  return (
    <Grommet full theme={theme}>
      <Box align="center" justify="center" direction="row" pad="medium" gap="large">
        <Box align="center" justify="center">
          <div
            style={{
                background: `url(${photoURL || 'https://bethanychurch.org.uk/wp-content/uploads/2018/09/profile-icon-png-black-6.png'}) no-repeat center center`,
                backgroundSize: "cover",
                height: "200px",
                width: "200px"
            }}
          ></div>
        </Box>
        <Box align="center" justify="center">
          <Text>
            <b>name:</b> {user.providerData[0].displayName}
          </Text>
          <Text>
            <b>email:</b> {user.providerData[0].email}
          </Text>
        </Box>
      </Box>
    </Grommet>
  )
}

export default Profile;