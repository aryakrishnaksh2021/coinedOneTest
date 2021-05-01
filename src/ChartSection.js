import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
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

export default function CenteredGrid(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} lg={4}>
                    
                        <Typography variant="h6" className={classes.title}>
                            {props.selectedTime.toUpperCase()}
                        </Typography>                        
                   
                </Grid>
                <Grid item xs={12} lg={4}>
                    
                        <Grid container style={{textAlign:'left'}}>
                            <Grid item xs={12}>Free time Usage</Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12} style={{ textAlign: 'right' }}>
                                <Button variant="outlined" color="primary">Extend Free-time</Button>
                            </Grid>
                            <Grid item xs={12}>Change Time Restrictions</Grid>
                        </Grid>

                        
                        

                </Grid>
                <Grid item xs={12} lg={4}>
                        <Grid container style={{ textAlign: 'left' }}>
                            <Grid item xs={6}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="100" height="100"
                                    viewBox="0 0 172 172"
                                    style={{fill:"#000000"}}><g transform="translate(-6.02,-6.02) scale(1.07,1.07)">
                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" 
                                        stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" 
                                        font-size="none" text-anchor="none" 
                                        style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000">
                                            <path d="M51.6,6.88c-9.45834,0 -17.2,7.74166 -17.2,17.2v123.84c0,9.45834 7.74166,17.2 17.2,17.2h68.8c9.45834,
                                            0 17.2,-7.74166 17.2,-17.2v-123.84c0,-9.45834 -7.74166,-17.2 -17.2,-17.2zM59.22578,13.76h53.54844c-0.81382,
                                            1.40094 -1.42005,2.9441 -1.69985,4.61578l-1.0414,6.26859c0,0.00224 0,0.00448 0,0.00672c-0.27873,1.67936 -1.68651,
                                            2.86891 -3.39297,2.86891h-41.28c-1.70646,0 -3.11208,-1.19377 -3.39297,-2.87562l-1.04813,-6.26187v-0.00672c-0.27903,
                                            -1.67238 -0.87996,-3.2154 -1.69312,-4.61578zM49.28875,14.03547c0.04446,0.0166 0.08926,0.03228 0.13438,0.04703c2.40537,
                                            0.76514 4.27367,2.80713 4.70984,5.42875l1.04813,6.26859c0.82679,4.95047 5.15673,8.62016 10.1789,8.62016h41.28c5.02012,
                                            0 9.35429,-3.67028 10.1789,-8.62016v-0.00672l1.04141,-6.26188c0.44864,-2.6805 2.39953,-4.74958 4.87781,-5.46906c4.59144,1.05086 7.98187,5.10725 7.98187,10.03781v123.84c0,5.73958 -4.58042,10.32 -10.32,10.32h-68.8c-5.73958,0 -10.32,-4.58042 -10.32,-10.32v-123.84c0,-4.94033 3.40341,-9.0036 8.00875,-10.04453zM75.68,17.2c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h10.32c1.24059,0.01754 2.39452,-0.63425 3.01993,-1.7058c0.62541,-1.07155 0.62541,-2.39684 0,-3.46839c-0.62541,-1.07155 -1.77935,-1.72335 -3.01993,-1.7058zM96.32,17.2c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44z"></path></g><path d="" fill="none"></path><path d="" fill="none"></path></g></g></svg>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1" gutterBottom>Adi's phone</Typography>
                                <Typography variant="body1" gutterBottom>40m</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="100" height="100"
                                    viewBox="0 0 172 172"
                                    style={{fill:"#000000"}}><g transform="translate(-6.02,-6.02) scale(1.07,1.07)"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M13.76,17.2c-3.78937,0 -6.88,3.09063 -6.88,6.88v99.76c0,3.78938 3.09063,6.88 6.88,6.88h51.6v10.32h-10.32c-5.68406,0 -10.32,4.63594 -10.32,10.32v6.88h82.56v-6.88c0,-5.68406 -4.63594,-10.32 -10.32,-10.32h-10.32v-10.32h51.6c3.78938,0 6.88,-3.09062 6.88,-6.88v-99.76c0,-3.78937 -3.09062,-6.88 -6.88,-6.88zM13.76,24.08h144.48v99.76h-144.48v-13.76h144.48v-6.88h-144.48zM141.04,113.52v6.88h6.88v-6.88zM72.24,130.72h27.52v10.32h-27.52zM55.04,147.92h61.92c1.89469,0 3.44,1.54531 3.44,3.44h-68.8c0,-1.89469 1.54531,-3.44 3.44,-3.44z"></path></g></g></g></svg>
                            </Grid>
                            <Grid item xs={6}>

                                <Typography variant="body1" gutterBottom>Adi's Laptop</Typography>
                                <Typography variant="body1" gutterBottom>1h 30m</Typography>
                            </Grid>
                        </Grid>

                </Grid>
               
            </Grid>
        </div>
    );
}
