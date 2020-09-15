import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import {withStyles, createStyles} from '@material-ui/styles';


const Navigation = (props) => {
    const classes = props.classes;
    return (
        <AppBar className={classes.appBar} position="sticky">
            <Container className={classes.navBar}>
                <Box display={{xs: 'block', lg: 'flex'}} className={classes.titleContainer}>
                    <Typography className={classes.text}>Richmond High: CS1</Typography>
                </Box>
                <Box className={classes.linkBox}>
                    <Link to="/CS1" className={classes.link}>Home</Link>
                    <Link to="/CS1/resources" className={classes.link}>Resources</Link>
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