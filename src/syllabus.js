import React from 'react';
import Navigation from './navigation';
import Box from '@material-ui/core/Box';
import {withStyles, createStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const Syllabus = (props) => {
    const classes = props.classes;
    return (
        <Box className={classes.cs1}>
            <Navigation/>
            <Container className = {classes.section}>
                <Typography className={classes.header}>Syllabus</Typography>
                <Divider className={classes.underline}/>
                <Typography className={classes.subText}>Note: This class is P/NP and therefore, final grades will not be counted towards your GPA. The purpose of this syllabus is to demonstrate the grading standard at most universities.</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Attendance/Participation (10%)</Typography>
                <Typography className={classes.textIndent}>Attending all classes is mandatory for a complete grade. if you are unable to attend a class, please notify the staff 24 hours before class time. We will keep track of participation in class and during lab times and reward credit as we see fit. This will only boost your grade, not bring it down.</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Homeworks (30%)</Typography>
                <Typography className={classes.textIndent}>Homework is graded based on effort, not correctness. However, there is no partial credit; you must show substantial effort on every problem to receive any points. This homework is out of 2 points.</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Labs (30%)</Typography>
                <Typography className={classes.textIndent}>Labs are based on correctness. Partial credit will not be rewarded for incomplete labs. Labs are graded by either receiving a 1 (complete) or a 0 (incomplete).</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Project (30%)</Typography>
                <Typography className={classes.textIndent}>The final project will be graded on completeness, although partial credit will be rewarded for incomplete projects. Make sure to review project specs for a complete rundown of point distribution.</Typography>
            </Container>
            <Container className={classes.bottomText}/>
        </Box>
    );
}

const useStyles = (theme) => createStyles({
    cs1: {
        width: '100%',
        height: '100%',
        margin: '0px',
        padding: '0px',
        overflowX: 'hidden',
    },
    section: {
        display: 'block',
    },
    text: {
        fontFamily: 'Open Sans',
        fontWeight: 300,
        padding: '1rem',
        paddingBottom: '0rem',
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
    },
    textIndent: {
        fontFamily: 'Open Sans',
        fontWeight: 300,
        padding: '1rem',
        paddingBottom: '0rem',
        fontSize: '1.5rem',
        textIndent: '2rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
    },
    boldText: {
        fontFamily: 'Open Sans',
        padding: '1rem',
        fontWeight: 'bold',
        paddingBottom: '0rem',
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
    },
    bottomText: {
        padding: '2rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
    },
    subText: {
        fontFamily: 'Open Sans',
        fontStyle: 'italic',
        marginLeft: '2.5rem',
        paddingBottom: '2rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
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
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem',
        },
    },
})


export default withStyles(useStyles)(Syllabus);