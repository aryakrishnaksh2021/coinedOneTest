import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import Chart from './components/Chart'
import axios from 'axios';

import BarChart from './components/BarChart'

import CButton from './components/CButton'
import Doughnut from './components/Doughnut'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // borderColor: '#edf2f9',
        boxShadow: '0 0.75rem 1.5rem rgb(18 38 63 / 3%)',
        // border: '1px solid #edf2f9'
        // padding: theme.spacing(2),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid(props) {
    const classes = useStyles();
    const [data, setData] = React.useState({});
    const [selectedTime, setSelectedTime] = React.useState(props.selectedTime);
    const [freeTimeUsage, setFreeTimeUsage] = React.useState({});
    const [deviceUsage, setDeviceUsage] = React.useState({});
 
    function timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours + "h " + rminutes + "m";
    }

    useEffect(() => {
        axios.get(`https://api.mocklets.com/mock68182/screentime`)
            .then(res => {
                var deviceUsageJson = res.data[0].deviceUsage;
                if (selectedTime == 'all') {
                    var deviceUsageData = {
                        mobile: timeConvert(deviceUsageJson.totalTime.mobile),
                        laptop: timeConvert(deviceUsageJson.totalTime.laptop),
                    };
                }
                else{
                    var deviceUsageData = {
                        mobile: timeConvert(deviceUsageJson[selectedTime].mobile),
                        laptop: timeConvert(deviceUsageJson[selectedTime].laptop),
                    };
                }
                setDeviceUsage(deviceUsageData)
                var response = res.data[0].chartData
                if (selectedTime=='all'){
                    var dataArr = [response.classTime.total, response.studyTime.total, response.freeTime.total]
                    var labelArr = ['Class\n' + timeConvert(response.classTime.total), 'Study\n' + timeConvert(response.studyTime.total), 'Free\n' + timeConvert(response.freeTime.total)]
                    var colorArr = [
                        '#2979ff',
                        '#1de9b6',
                        '#ff9100',
                    ]
                
                } else if (selectedTime == 'classTime'){
                    var dataArr = [response.classTime.total, response.totalTime.total]
                    var labelArr = ['Class\n' + timeConvert(response.classTime.total), 'Total\n' + timeConvert(response.totalTime.total)]
                    var colorArr = [
                        '#2979ff',
                        '#90a4ae'
                    ]
                } else if (selectedTime == 'studyTime') {
                    var dataArr = [response.studyTime.total, response.totalTime.total]
                    var labelArr = ['Class\n' + timeConvert(response.studyTime.total), 'Total\n' + timeConvert(response.totalTime.total)]
                    var colorArr = [
                        '#1de9b6',
                        '#90a4ae'
                    ]
                } else if (selectedTime == 'freeTime') {
                    var dataArr = [response.freeTime.total, response.totalTime.total]
                    var labelArr = ['Class\n' + timeConvert(response.freeTime.total), 'Total\n' + timeConvert(response.totalTime.total)]
                    var colorArr = [
                        '#ff9100',
                        '#90a4ae'
                    ]
                }
                
                var resData = {
                    labels: labelArr ,
                    datasets: [
                        {
                            label: 'Activities Summary',
                            data: dataArr ,
                            backgroundColor: colorArr,
                            hoverOffset: 0,
                            width:'300px',
                            height:'300px'
                        },
                    ],
                }; 
                setData(resData)
                var freeTime = {
                    freeTimeString: timeConvert(response.freeTime.total),
                    maxHourString: timeConvert(res.data[0].freeTimeMaxUsage),
                    freeTime: response.freeTime.total, 
                    maxHour: res.data[0].freeTimeMaxUsage
                }
                setFreeTimeUsage(freeTime)
            })
    }, [selectedTime]);

    return (
        <div className={classes.root}>
       
            <Grid container spacing={10}>
                
                
                    <Grid item xs={12} lg={4} >                    
                        <Doughnut data={data} selectedLabel={props.selectedLabel} selectedTime={selectedTime} />
                    </Grid>
               
                



                {(selectedTime=='all')?
                    <Grid item xs={12} lg={4}>
                        <Grid container spacing={4} >
                            <Grid item xs={12}>
                                <div className='header'>
                                    <h1 className='title'>Free Time Usage</h1>
                                </div>
                            </Grid>
                        </Grid>
                        <Box mx={5} my={10}>
                            <Grid container spacing={4} >
                                {/* <Grid item xs={12}>
                                    <div className='header'>
                                        <h1 className='title'>Free Time Usage</h1>
                                    </div>
                                </Grid> */}
                                <Grid item xs={12}>
                                    <BarChart data={freeTimeUsage} key={freeTimeUsage} />
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: 'right' }}>
                                    <CButton color="red">Extend Free-time</CButton>
                                    {/* <Button variant="outlined" color="primary">Extend Free-time</Button> */}
                                </Grid>
                                <Grid item xs={12} mt={5} style={{ textAlign: 'right' }}>
                                    
                                    <Link href="#" variant="body2">
                                        {'Change Time Restrictions'}
                                    </Link>
                                    
                                    </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                
            :null}
               




                <Grid item xs={12} lg={4}>
                    <Grid container spacing={4} >
                        <Grid item xs={12}>
                            <div className='header'>
                                <h1 className='title'>By Devices</h1>
                            </div>
                        </Grid>
                    </Grid>
                    <Box mx={5} my={10} >
                        <Grid container style={{ textAlign: 'left' }} spacing={2}>
                            <Grid item xs={6} >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="100" height="100"
                                    viewBox="0 0 172 172"
                                    style={{ fill: "#ddd" }}><g transform="translate(-6.02,-6.02) scale(1.07,1.07)">
                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"
                                            stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                            font-size="none" text-anchor="none"
                                            style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#777">
                                                <path d="M51.6,6.88c-9.45834,0 -17.2,7.74166 -17.2,17.2v123.84c0,9.45834 7.74166,17.2 17.2,17.2h68.8c9.45834,
                                            0 17.2,-7.74166 17.2,-17.2v-123.84c0,-9.45834 -7.74166,-17.2 -17.2,-17.2zM59.22578,13.76h53.54844c-0.81382,
                                            1.40094 -1.42005,2.9441 -1.69985,4.61578l-1.0414,6.26859c0,0.00224 0,0.00448 0,0.00672c-0.27873,1.67936 -1.68651,
                                            2.86891 -3.39297,2.86891h-41.28c-1.70646,0 -3.11208,-1.19377 -3.39297,-2.87562l-1.04813,-6.26187v-0.00672c-0.27903,
                                            -1.67238 -0.87996,-3.2154 -1.69312,-4.61578zM49.28875,14.03547c0.04446,0.0166 0.08926,0.03228 0.13438,0.04703c2.40537,
                                            0.76514 4.27367,2.80713 4.70984,5.42875l1.04813,6.26859c0.82679,4.95047 5.15673,8.62016 10.1789,8.62016h41.28c5.02012,
                                            0 9.35429,-3.67028 10.1789,-8.62016v-0.00672l1.04141,-6.26188c0.44864,-2.6805 2.39953,-4.74958 4.87781,-5.46906c4.59144,1.05086 7.98187,5.10725 7.98187,10.03781v123.84c0,5.73958 -4.58042,10.32 -10.32,10.32h-68.8c-5.73958,0 -10.32,-4.58042 -10.32,-10.32v-123.84c0,-4.94033 3.40341,-9.0036 8.00875,-10.04453zM75.68,17.2c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h10.32c1.24059,0.01754 2.39452,-0.63425 3.01993,-1.7058c0.62541,-1.07155 0.62541,-2.39684 0,-3.46839c-0.62541,-1.07155 -1.77935,-1.72335 -3.01993,-1.7058zM96.32,17.2c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44z"></path></g><path d="" fill="none"></path><path d="" fill="none"></path></g></g></svg>
                            </Grid>
                            <Grid item xs={6}>
                                <Box py={2} >
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Adi's phone
                                        </Typography>
                                    <Typography variant="h6" gutterBottom>
                                        {deviceUsage.mobile}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="100" height="100"
                                    viewBox="0 0 172 172"
                                    style={{ fill: "#000000" }}><g transform="translate(-6.02,-6.02) scale(1.07,1.07)">
                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" 
                                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" 
                                        font-family="none" font-weight="none" font-size="none" text-anchor="none" 
                                        style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#777"><path d="M13.76,17.2c-3.78937,0 -6.88,3.09063 -6.88,6.88v99.76c0,3.78938 3.09063,6.88 6.88,6.88h51.6v10.32h-10.32c-5.68406,0 -10.32,4.63594 -10.32,10.32v6.88h82.56v-6.88c0,-5.68406 -4.63594,-10.32 -10.32,-10.32h-10.32v-10.32h51.6c3.78938,0 6.88,-3.09062 6.88,-6.88v-99.76c0,-3.78937 -3.09062,-6.88 -6.88,-6.88zM13.76,24.08h144.48v99.76h-144.48v-13.76h144.48v-6.88h-144.48zM141.04,113.52v6.88h6.88v-6.88zM72.24,130.72h27.52v10.32h-27.52zM55.04,147.92h61.92c1.89469,0 3.44,1.54531 3.44,3.44h-68.8c0,-1.89469 1.54531,-3.44 3.44,-3.44z"></path></g></g></g></svg>
                            </Grid>
                            <Grid item xs={6}>
                                <Box py={2} >
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Adi's Laptop
                                        </Typography>
                                    <Typography variant="h6" gutterBottom >
                                        {deviceUsage.laptop}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} mt={5} style={{ textAlign: 'right' }}>
                            <Link href="#" variant="body2">
                                {'See all devices'}
                            </Link>
                            
                            </Grid>
                    </Box>
                    

                </Grid>
               
            </Grid>
      
        </div>
    );
}
