import React, { useState, useEffect } from 'react';
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
        // borderColor: '#edf2f9',
        boxShadow: '0 0.75rem 1.5rem rgb(18 38 63 / 3%)',
        // border: '1px solid #edf2f9'
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();
    const [selectedTime, setSelectedTime] = React.useState('all');
    const [selectedLabel, setSelectedLabel] = React.useState('All');
   
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
                        <SelectTime setSelectedTime={setSelectedTime} selectedLabel={selectedLabel} setSelectedLabel={setSelectedLabel}/>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <ChartSection selectedTime={selectedTime} key={selectedTime} selectedLabel={selectedLabel}/>
                    </Paper>                    
                </Grid>
                
            </Grid>
        </div>
    );
}
