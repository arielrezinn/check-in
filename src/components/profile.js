import React from 'react'
import { Avatar, Box, Text } from 'grommet'
import firebase from "firebase/app";
import "firebase/auth";

function Profile() {
  const auth = firebase.auth();
  var user = auth.currentUser;
  var photoURL = user.providerData[0].photoURL;
  return (
      <Box align="center" justify="center" direction="row" pad="medium" gap="large" fill>
        <Avatar src={photoURL} size='196px'/>
        <Box align="left" justify="center">
          <Text>
            <b>name:</b> {user.providerData[0].displayName}
          </Text>
          <Text>
            <b>email:</b> {user.providerData[0].email}
          </Text>
        </Box>
      </Box>
  )
}

export default Profile;