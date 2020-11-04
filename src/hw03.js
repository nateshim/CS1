import React from 'react';
import Navigation from './navigation';
import Box from '@material-ui/core/Box';
import {withStyles, createStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import hw03 from './static/hw_zips/hw03.zip';

const HW03 = (props) => {
    const classes = props.classes;
    return (
        <Box className={classes.cs1}>
        <Navigation/>
        <Container className = {classes.section}>
            <Typography className={classes.header}>Homework 3: Potpourri</Typography>
            <Divider className={classes.underline}/>
            <Typography className={classes.subText}>Due by Monday 6/29 11:59 PM PST</Typography>
        </Container>
        <Container className={classes.section}>
            <Typography className={classes.header}>Instructions</Typography>
            <Typography className={classes.textIndent}>To start the homework, download <a href={hw03} download>hw03.zip</a>. Inside, you will find the hw03.py file and the test_hw03.py file. You will only need to edit the hw03.py file.</Typography>
            <Typography className={classes.boldText}>Note: Homework is graded based on effort, not correctness. However, there is no partial credit; you must show substantial effort on every problem to receive any points. This homework is out of 2 points.</Typography>
        </Container>
        <Container className={classes.section}>
            <Typography className={classes.header}>Homework Questions</Typography>
            <Typography className={classes.text}><b>Problem 1: G:</b> Return the value of g(n), computed recursively.</Typography>
            <Typography className={classes.text}><b>Problem 2: Has Seven:</b> Given a list of integers, return whether or not the list contains a 7 in it.</Typography>
            <Typography className={classes.text}><b>Problem 3: Is Palindrome:</b> Given a number in the form of a string, return whether or not the number's value is the same in reverse.</Typography>
            <Typography className={classes.text}><b>Problem 4: Count Change:</b> Assume that the denomination of every coin is a power of 2: 1-cent, 2-cent, 4-cent, etc. There is no limit to how much a coin can be worth. 
            A set of coins makes changes for n if the sum of the values of the coin is n. For example, 
            the following sets make change for 7: 7 1-cent coins, 5 1-cent and 1 2-cent coins, 3 1-cent and 
            1 4-cent coins, etc. There are a total of 6 different ways. Write a function count_change that takes 
            a positive integer n and returns the number of ways to make change from using these coins described 
            earlier.</Typography>
        </Container>
        <Container className={classes.section}>
            <Typography className={classes.header}>Testing and Submission</Typography>
            <Typography className={classes.textIndent}>Testing will be done locally but keep in mind that you should not change of mess with the test.py files.</Typography>
            <Typography className={classes.text}>To run the tests, go on your terminal/command line, navigate to the hw folder and input python3 test_hw00.py. The test will then run and output your score.</Typography>
            <Typography className={classes.bottomText}> </Typography>
        </Container>
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

export default withStyles(useStyles)(HW03);