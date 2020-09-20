import React, {useState} from 'react'
import { Grommet, Box, Header, Heading, Text, TextInput, Button } from 'grommet'
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
function Login() {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };
  const [error, setError] = useState(null);
  /*const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithEmailAndPasswordHandler = (event,email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
    setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };*/

  return (
    <Grommet full theme={theme}>
      <Box fill="vertical" overflow="auto" align="center" flex="grow">
        <Header align="center" direction="row" flex={false} justify="between" gap="medium">
          <Box align="center" justify="center">
            <Heading level="2">
              sign in to mood map
            </Heading>
          </Box>
        </Header>
        <Box align="center" justify="center" gap="small">
          {error !== null && <Box align="center" justify="center" pad="small" background={{"color":"neutral-4"}} round="small">
            <Text>
              {error}
            </Text>
          </Box>}
          <Button label="sign in with Google" primary
            onClick={() => {signInWithGoogle();}}
          />
        </Box>
      </Box>
    </Grommet>
  )
}

export default Login;
