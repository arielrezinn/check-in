import React from 'react'
import { Box } from 'grommet'
import chartXkcd from 'chart.xkcd';
import { Pie } from "chart.xkcd-react";
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css';

export class Stats extends React.Component {
    constructor() {
        super();
        // todo
    }

    render() {
        return (
            <Box align="center" justify="center" direction='row-responsive' gap="medium" fill>
                <Box align='center' width='large' margin={{"right":"large"}}>
                    <Pie
                        config={{
                            title: 'How are people doing today?', // optional
                            data: {
                                labels: ['well', 'okay', 'not well'],
                                datasets: [{
                                    data: [31, 47, 22],
                                }],
                            },
                            options: { // optional
                                innerRadius: 0.5,
                                legendPosition: chartXkcd.config.positionType.upRight,
                                dataColors: ['#00C781', '#FFAA15', '#FF4040']
                            },
                        }}
                    />
                </Box>
                <Box align='center' width='large' margin={{"left":"large"}}>
                    <CalendarHeatmap
                        startDate={new Date('2020-01-01')}
                        endDate={new Date('2020-04-01')}
                        values={[
                            { date: '2020-01-01', count: 53 },
                            { date: '2020-01-22', count: 122 },
                            { date: '2020-02-13', count: 38 },
                            { date: '2020-02-19', count: 38 },
                            { date: '2020-03-07', count: 69 },
                            { date: '2020-03-20', count: 122 },
                            { date: '2020-04-29', count: 49 },
                            { date: '2020-04-16', count: 98 },
                            // ...and so on
                        ]}
                    />
                </Box>
            </Box>
        )
    }
}
