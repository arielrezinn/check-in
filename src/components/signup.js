import React from 'react'
import { Grommet, Box, Header, Heading, Text, TextInput, Button } from 'grommet'



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
export default () => {
    
  return (
    <Grommet full theme={theme}>
      <Box fill="vertical" overflow="auto" align="center" flex="grow">
        <Header align="center" direction="row" flex={false} justify="between" gap="medium">
          <Box align="center" justify="center">
            <Heading level="2">
              sign up for check-in
            </Heading>
          </Box>
        </Header>
        <Box align="center" justify="center" gap="small">
          <Box align="center" justify="center" pad="small" background={{"color":"neutral-4"}} round="small">
            <Text>
              error here
            </Text>
          </Box>
          <TextInput placeholder="display name" />
          <TextInput placeholder="email" />
          <TextInput placeholder="password" type="password" />
          <Button label="sign in" primary />
          <Button label="sign in with Google" primary />
          <Text>
            sign up
          </Text>
          <Text>
            forgot password?
          </Text>
        </Box>
      </Box>
    </Grommet>
  )
}
