import React from 'react'
import { Grommet, Box, Header, Heading, Text } from 'grommet'

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

export class EmojiWindow extends React.Component {
    constructor() {
        super();
        // todo
    }
    render() {
        return (
            <Box fill="vertical" overflow="auto" align="center" flex="grow" direction="column">
            <Header align="center" direction="row" flex={false} justify="between" gap="medium">
                <Heading level="2">
                How are you doing today?
                </Heading>
            </Header>
            <Box align="center" justify="center" direction="row">
                <Box align="center" justify="center" pad="large">
                <Text size="xxlarge">
                    😊
                </Text>
                </Box>
                <Box align="center" justify="center" pad="large">
                <Text size="xxlarge">
                    😑
                </Text>
                </Box>
                <Box align="center" justify="center" pad="large">
                <Text size="xxlarge">
                    😢
                </Text>
                </Box>
            </Box>
            </Box>
        )
    }
}
