import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 20,
        borderRadius: '50rem',
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: '50rem',
        backgroundColor: '#1de9b6',
    },
}))(LinearProgress);


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CustomizedProgressBars(props) {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} style={{ textAlign: 'left' }}>
                <Typography variant="caption" display="block" gutterBottom>
                    Used
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {props.data.freeTimeString}
                </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
                <Typography variant="caption" display="block" gutterBottom>
                    Max
                </Typography>
                <Typography variant="h6" gutterBottom>                    
                    {props.data.maxHourString}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.root}>
                    <BorderLinearProgress variant="determinate" value={props.data.freeTime} />
                </div>
            </Grid>
        </Grid>       
    );
}
