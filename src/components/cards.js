import React from 'react';

import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Grid,
    Text,
} from 'grommet';

export const Cards = () => (
    <Box pad="large" height="100%">
        <Grid gap="medium" columns={{ count: 'fit', size: 'small' }}>
            <Card pad='medium'>
                <Card.CardTitle>
                    Card
                </Card.CardTitle>
                <Card.CardContent>
                    Some content
                </Card.CardContent>
            </Card>
        </Grid>
    </Box>
);