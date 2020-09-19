import React from 'react';
import {
  Box,
  Calendar
} from 'grommet';

export class CalendarWindow extends React.Component {
    constructor() {
      super();
      this.state = { date: (new Date()).toISOString() };
    }
    render() {
      const { date } = this.state;
      return (
        <Box flex fill align='center' justify='center'>
            <Calendar
                date={date}
                onSelect={nextDate => this.setState({ date: nextDate })}
            />
        </Box>  
      );
    }
  }    