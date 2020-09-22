import React from 'react';
import Navigation from './navigation';
import Box from '@material-ui/core/Box';
import {withStyles, createStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const HW01 = (props) => {
    const classes = props.classes;
    return (
        <Box>
            <Navigation/>
            <Container className = {classes.section}>
                <Typography className={classes.header}>Homework 1: The Basics</Typography>
                <Divider className={classes.underline}/>
                <Typography className={classes.subText}>Due by Monday 6/01 11:59 PM PST</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Instructions</Typography>
                <Typography className={classes.textIndent}>To start the homework, download hw01.zip. Inside, you will find the hw01.py file and the test_hw01.py file. You will only need to edit the hw01.py file.</Typography>
                <Typography className={classes.boldText}>Note: Homework is graded based on effort, not correctness. However, there is no partial credit; you must show substantial effort on every problem to receive any points. This homework is out of 2 points.</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Homework Questions</Typography>
                <Typography className={classes.text}><b>Problem 1: Fibonacci:</b> Return the nth number in the fibonacci sequence using iteration. Feel free to google Fibonacci Sequence if you need a refresher on what it is.</Typography>
                <Typography className={classes.text}><b>Problem 2: Hailstone:</b> Print the hailstone sequence starting at n and return its length. The hailstone sequence is as follows: if n is even return n/2. If n is odd return (n*3) + 1. If n is 1, return n.</Typography>
                <Typography className={classes.text}><b>Problem 3: Largest Factor:</b> Return the largest factor of n*n-1 that is smaller than n.</Typography>
                <Typography className={classes.text}><b>Problem 4: Factorial:</b> Given an integer n, return factorial n (n!).</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Testing and Submission</Typography>
                <Typography className={classes.textIndent}>Testing will be done locally but keep in mind that you should not change of mess with the test.py files.</Typography>
                <Typography className={classes.text}>To run the tests, go on your terminal/command line, navigate to the hw folder and input python3 test_hw01.py. The test will then run and output your score.</Typography>
                <Typography className={classes.bottomText}> </Typography>
            </Container>
        </Box>
    );
}

const useStyles = createStyles({
    section: {
        display: 'block',
    },
    text: {
        fontFamily: 'Open Sans',
        fontWeight: 300,
        padding: '1rem',
        paddingBottom: '0rem',
        fontSize: '1.5rem',
    },
    boldText: {
        fontFamily: 'Open Sans',
        padding: '1rem',
        fontWeight: 'bold',
        paddingBottom: '0rem',
        fontSize: '1.5rem',
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
    subText: {
        fontFamily: 'Open Sans',
        fontStyle: 'italic',
        marginLeft: '2.5rem',
        paddingBottom: '2rem',
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
    },
})


export default withStyles(useStyles)(HW01);