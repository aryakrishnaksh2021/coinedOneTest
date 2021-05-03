import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [selectedValue, setSelectedValue] = React.useState('all');
    // const [selectedLabel, setSelectedLabel] = React.useState('All');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setOpen(false); 
        props.setSelectedLabel(event.target.ariaLabel)
        props.setSelectedTime((event.target.value))
    };
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{borderRadius:'50rem'}}>
                {props.selectedLabel} <ArrowDropDownIcon/>
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Activities during which time is shown?"}</DialogTitle>
                <DialogContent style={{ background: '' }}>
                    
                    <Grid container spacing={2}>
                        <Grid item xs={11}>
                            <Typography variant="h6" gutterBottom style={{marginBottom:'0px', paddingBottom:'0px'}}>
                                All
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                               Activities during class-time, study-time, and play time are shown
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Radio
                                checked={selectedValue === 'all'}
                                onChange={handleChange}
                                value="all"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'All-screen-time' }}
                            />
                        </Grid>                            
                       
                    </Grid>
                    <hr style={{borderColor: '#fefefe3b'}}></hr>
                    <Grid container spacing={2}>   
                        <Grid item xs={11}>
                            <Typography variant="h6" gutterBottom style={{ marginBottom: '0px', paddingBottom: '0px' }}>
                               Class-time only
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Only the activities during the times you scheduled as class-time are shown
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Radio
                                checked={selectedValue === 'classTime'}
                                onChange={handleChange}
                                value="classTime"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'Class Time Only' }}
                            />
                        </Grid>
                    </Grid>
                    <hr style={{ borderColor: '#fefefe3b' }}></hr>
                    <Grid container spacing={2}>
                        <Grid item xs={11}>
                            <Typography variant="h6" gutterBottom style={{ marginBottom: '0px', paddingBottom: '0px' }}>
                                Study-time only
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                               Only the activities during the times you scheduled as study-time or when manually switched to study-mode from the mode page are shown
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Radio
                                checked={selectedValue === 'studyTime'}
                                onChange={handleChange}
                                value="studyTime"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'Study Time Only' }}
                            />
                        </Grid>
                    </Grid>
                    <hr style={{ borderColor: '#fefefe3b' }}></hr>
                    <Grid container spacing={2}>
                        <Grid item xs={11}>
                            <Typography variant="h6" gutterBottom style={{ marginBottom: '0px', paddingBottom: '0px' }}>
                                Free-time only
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Only the activities during the times you scheduled as free-time or when manually switched to free-mode from the mode page are shown.
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Radio
                                checked={selectedValue === 'freeTime'}
                                onChange={handleChange}
                                value="freeTime"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'Free Time Only' }}
                            />
                        </Grid>
                    </Grid>
                    
                </DialogContent>
               
            </Dialog>
        </div>
    );
}
