import React from 'react'
import { Box, Card, Header, Heading, Text } from 'grommet'
const emoji = require("emoji-dictionary");

var alreadyClicked = false;

class PosButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '',
      emote: 'blush'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (!alreadyClicked && !this.state.background) {
      this.setState({
        background: 'status-ok'
      });
      console.log('toggled state!');
      alreadyClicked = true;
    }
  }
  render() {
    return (
      <Card
        pad='large'
        onClick={() => this.handleClick()}
        background={this.state.background}
        align="center"
        justify="center"
        gap="xsmall"
        elevation='medium'
      >
        <Text size="xxlarge">
            {emoji.getUnicode(this.state.emote)}
        </Text>
        {this.state.background && <Text>
          <b>31%</b> of users selected this today.
        </Text>}
      </Card>
    )
  }
}
class NeuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '',
      emote: 'expressionless'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (!alreadyClicked && !this.state.background) {
      this.setState({
        background: 'status-warning'
      });
      console.log('toggled state!');
      alreadyClicked = true;
    }
  }
  render() {
    return (
      <Card
        pad='large'
        onClick={() => this.handleClick()}
        background={this.state.background}
        align="center"
        justify="center"
        gap="xsmall"
        elevation='medium'
      >
        <Text size="xxlarge">
            {emoji.getUnicode(this.state.emote)}
        </Text>
        {this.state.background && <Text>
          <b>47%</b> of users selected this today.
        </Text>}
      </Card>
    )
  }
}
class NegButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '',
      emote: 'cry'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (!alreadyClicked && !this.state.background) {
      this.setState({
        background: 'status-error'
      });
      console.log('toggled state!');
      alreadyClicked = true;
    }
  }
  render() {
    return (
      <Card
        pad='large'
        onClick={() => this.handleClick()}
        background={this.state.background}
        align="center"
        justify="center"
        gap="xsmall"
        elevation='medium'
      >
        <Text size="xxlarge">
            {emoji.getUnicode(this.state.emote)}
        </Text>
        {this.state.background && <Text>
          <b>22%</b> of users selected this today.
        </Text>}
      </Card>
    )
  }
}

export class EmojiWindow extends React.Component {
    constructor() {
        super();
        // todo
    }

    handleCardClick() {
      alert("Card clicked!");
    }

    render() {
        return (
          <Box fill="vertical" overflow="auto" align="center" justify='center' flex="grow" direction="column">
            <Header align="center" direction="row" flex={false} justify="between" gap="medium">
                <Heading level="2">
                How are you doing today?
                </Heading>
            </Header>
            <Box align="center" justify="center" direction="row-responsive" gap='large'>
                <PosButton />
                <NeuButton />
                <NegButton />
            </Box>
          </Box>
        )
    }
}
