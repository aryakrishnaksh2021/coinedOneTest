import React, { useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Menu from './components/Menu'
import Summary from './Summary'
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
     menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }, 
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    appBar:{
    backgroundColor: 'rgb(255, 255, 255)',
    backgroundImage: 'linear-gradient(90deg, rgba(48, 118, 222, 0.4) 0%, rgba(241, 108, 11, 0.13) 100%)',
    color:'#000'
    }
}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

   

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function BackToTop(props) {
    const classes = useStyles();
    const [darkStateIcon, setDarkStateIcon] = useState(false);
    const changeMode = () => {
        props.handleThemeChange()
        setDarkStateIcon(!darkStateIcon);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar className={classes.appBar}  style={{}}>
                <Toolbar>

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <AccountCircleIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        Aditya Prasad
                    </Typography>

                    <Hidden smDown>
                        <Button variant="contained" spacing={3}
                            color="default" startIcon={<PhoneIphoneIcon />}>Add Device</Button>
                    </Hidden>                    

                    <Box mx={1}>
                        <IconButton aria-label="darkmode" onClick={changeMode} style={{ color: '#000' }}>
                            {darkStateIcon ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Box>
                    
                    <Box mx={2}>
                        <Menu/>
                    </Box>                  
                   
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <Container>
                <Summary/>
            </Container>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
