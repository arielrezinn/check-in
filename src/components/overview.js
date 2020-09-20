import React from 'react'
import { Grommet, Box } from 'grommet'



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
      <Box align="center" justify="center" direction="row" pad="medium" gap="large">
        <Box align="center" justify="center" pad="small" />
        <Box align="center" justify="center" pad="small">
        <svg class="line-chart"></svg>
        <script src="https://cdn.jsdelivr.net/npm/chart.xkcd@1/dist/chart.xkcd.min.js"></script>
        <script>
        const svg = document.querySelector('.line-chart')

        new chartXkcd.Line(svg, {
            title: 'Monthly income of an indie developer',
            xLabel: 'Month',
            yLabel: '$ Dollars',
            data: {
            labels:['1', '2', '3', '4', '5', '6','7', '8', '9', '10'],
            datasets: [{
                label: 'Plan',
                data: [30, 70, 200, 300, 500 ,800, 1500, 2900, 5000, 8000],
            }, {
                label: 'Reality',
                data: [0, 1, 30, 70, 80, 100, 50, 80, 40, 150],
            }]
            },
            options: {}
        });
        </script>
        </Box>
      </Box>
    </Grommet>
  )
}
