import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import SelectTime from './components/SelectTime';
import ChartSection from './ChartSection';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();
    const [selectedTime, setSelectedTime] = React.useState('all');
    return (
        <div className={classes.root}>
            <Box my={4}>
                <Grid container>

                    <Grid item xs={11} sm={4}>
                        <Typography variant="h6" className={classes.title}>
                            Active Summary
                            </Typography>
                    </Grid>
                    

                </Grid>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{ textAlign: 'left' }}>
                        <SelectTime setSelectedTime={setSelectedTime}/>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <ChartSection selectedTime={selectedTime} />
                    </Paper>                    
                </Grid>
                
            </Grid>
        </div>
    );
}
