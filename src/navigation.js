import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import {withStyles, createStyles} from '@material-ui/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const Navigation = (props) => {
    const classes = props.classes;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar className={classes.appBar} position="sticky">
            <Container className={classes.navBar}>
                <Box display={{xs: 'block', lg: 'flex'}} className={classes.titleContainer}>
                    <Typography className={classes.text}>Richmond High: CS1</Typography>
                </Box>
                <Box className={classes.linkBox}>
                    <Link to="/CS1" className={classes.link}>Home</Link>
                    <Link className={classes.link} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Resources
                    </Link>
                    <Menu   
                        classes={{paper: classes.appBar}}
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        elevation={0}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem style={{backgroundColor: '#4062BB'}}>
                            <a href="https://composingprograms.com/" target="_blank" rel="noopener noreferrer" onClick={handleClose} className={classes.link}>Textbook</a>
                        </MenuItem>
                        <MenuItem style={{backgroundColor: '#4062BB'}}>
                            <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer" onClick={handleClose} className={classes.link}>Learn HTML</a>
                        </MenuItem>
                        <MenuItem style={{backgroundColor: '#4062BB'}}>
                            <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer" onClick={handleClose} className={classes.link}>Codeacademy</a>
                        </MenuItem>
                    </Menu>
                    <Link to="/CS1/syllabus" className={classes.link}>Syllabus</Link>
                    <Link to="/CS1/staff" className={classes.link}>Staff</Link>
                </Box>
            </Container>
        </AppBar>
    );
}

const useStyles = createStyles({
    appBar: {
        backgroundColor: '#4062BB',
    },
    navBar: {
        display: 'flex',
        alignItems: 'center',
    },
    titleContainer: {
        display: 'flex',
        padding: '1rem',
        textOverflow: 'ellipsis',
        overlow: 'hidden',
        whiteSpace: 'nowrap',
        flexGrow: 1,
    },
    text: {
        fontFamily: 'Archivo',
        color: '#EBEBEB',
        fontSize: '1.5rem',
        padding: '1rem',
        textDecoration: 'none',
    },
    link: {
        fontFamily: 'Archivo',
        color: '#EBEBEB',
        fontSize: '1.5rem',
        padding: '1rem',
        textDecoration: 'none',
        textDecorationColor: '#4062BB',
        '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: '#EBEBEB',
            transitionDuration: '.5s',
        }
    },
    linkBox: {
        textOverflow: 'ellipsis',
        overlow: 'hidden',
        whiteSpace: 'nowrap',
    }
});

export default withStyles(useStyles)(Navigation);