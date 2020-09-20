import React from 'react'
import { Box, Card, Header, Heading, Text } from 'grommet'
const emoji = require("emoji-dictionary");

export class EmojiWindow extends React.Component {
    constructor() {
        super();
        // todo
    }

    handleCardClick() {
      alert("Card clicked!")
    }

    render() {
        return (
          <Box fill="vertical" overflow="auto" align="center" flex="grow" direction="column">
            <Header align="center" direction="row" flex={false} justify="between" gap="medium">
                <Heading level="2">
                How are you doing today?
                </Heading>
            </Header>
            <Box align="center" justify="center" direction="row" gap='large'>
                <Card
                  pad='large'
                  onClick={() => this.handleCardClick()}>
                  <Text size="xxlarge">
                      {emoji.getUnicode('blush')}
                  </Text>
                </Card>
                <Card 
                  pad='large'
                  onClick={() => this.handleCardClick()}>
                  <Text size="xxlarge">
                    {emoji.getUnicode('expressionless')}
                  </Text>
                </Card>
                <Card 
                  pad='large'
                    onClick={() => this.handleCardClick()}>
                  <Text size="xxlarge">
                    {emoji.getUnicode('cry')}
                  </Text>
                </Card>
            </Box>
          </Box>
        )
    }
}
