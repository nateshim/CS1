import React from 'react';
import Navigation from './navigation';
import Box from '@material-ui/core/Box';
import {withStyles, createStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import nateshim from './static/nateshim.jpg';
import augustine from './static/augustine.jpeg';

const Staff = (props) => {
    const classes = props.classes;
    return (
        <Box>
            <Navigation/>
            <Container className = {classes.section}>
                <Typography className={classes.header}>Staff</Typography>
                <Divider className={classes.underline}/>
            </Container>
            <Container className={classes.avatarSection}>
                <Box>
                    <Avatar className={classes.avatar} src={nateshim}/>
                    <Typography className={classes.header}>Nathanael Shim</Typography>
                </Box>
                <Typography className={classes.textIndent}>Hello, I am a recent graduate from UC Berkeley where I studied Music and Computer Science. In my spare time, I enjoy playing sports and hanging out with friends. I look forward to this semester that we'll have together, and I hope that we both can learn something new together! Please feel free to reach out to me if you have any questions at nateshim@gmail.com.</Typography>
            </Container>
            <Container className={classes.avatarSection}>
                <Box>
                    <Avatar className={classes.avatar} src={augustine}/>
                    <Typography className={classes.header}>Augustine Ng</Typography>
                </Box>
                <Typography className={classes.textIndent}>Hello, I graduated with a bachelor's degree in mechanical engineering from the University of California, Berkeley. I have a passion for robotics. I have seven years of competitive experience, including competing at the VEX Robotics World Championships four times. I had worked with a variety of classroom settings including English classes in Taiwan, summer robotics camps in public schools, and Sunday school at my local church. Outside of engineering and teaching, I enjoy good food with good company, clever games, and trying out things with funny names. If you have any questions throughout the course, you can contact me at augustinengusa@gmail.com</Typography>
            </Container>
            <Container className={classes.bottomText}/>
        </Box>
    );
}

const useStyles = createStyles({
    avatar: {
        width: '200px',
        height: '200px',
    },
    section: {
        display: 'block',
    },
    avatarSection: {
        display: 'flex',
        padding: '2rem',
        paddingTop: '4rem',
    },
    textIndent: {
        fontFamily: 'Open Sans',
        fontWeight: 300,
        padding: '1rem',
        paddingBottom: '0rem',
        fontSize: '1.5rem',
        textIndent: '2rem',
    },
    bottomText: {
        padding: '2rem',
    },
    underline: {
        backgroundColor: '#4062BB',
        marginLeft: '1rem',
        marginTop: '-1rem',
    },
    header: {
        color: '#4062BB',
        fontFamily: 'Archivo',
        fontWeight: 500,
        fontSize: '3rem',
        padding: '1rem',
    },
})

export default withStyles(useStyles)(Staff);
