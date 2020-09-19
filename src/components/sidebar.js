import React, { useRef, useState } from 'react';
import { Text } from 'grommet';
import { Sidebar } from 'grommet-controls';

import {
  Box,
  // Sidebar,
} from 'grommet';

export const Navbar = () => (
  <Box align='center'>
    <Sidebar
      title='Check-In'
      // border={{ size: 'small' }}
      width='medium'
      basis='small'
      collapsible={true}

    >
      <Text>Side item</Text>
    </Sidebar>
  </Box>  
);
