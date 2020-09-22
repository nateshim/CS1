import React from 'react';
import Navigation from './navigation';
import Box from '@material-ui/core/Box';
import {withStyles, createStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const HW00 = (props) => {
    const classes = props.classes;
    return (
        <Box>
            <Navigation/>
            <Container className = {classes.section}>
                <Typography className={classes.header}>Homework 0: Getting Started</Typography>
                <Divider className={classes.underline}/>
                <Typography className={classes.subText}>Due by Monday 5/18 11:59 PM PST</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Instructions</Typography>
                <Typography className={classes.textIndent}>To start the homework, download hw00.zip. Inside, you will find the hw00.py file and the test_hw00.py file. You will only need to edit the hw00.py file.</Typography>
                <Typography className={classes.boldText}>Note: Homework is graded based on effort, not correctness. However, there is no partial credit; you must show substantial effort on every problem to receive any points. This homework is out of 2 points.</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Homework Questions</Typography>
                <Typography className={classes.text}><b>Problem 1: Basic Arithmetic Functions:</b> Fill in the missing code for the following functions: add(), sub(), mul(), and div().</Typography>
                <Typography className={classes.text}><b>Problem 2: Quick Maths:</b> Using the functions that you just implemented, fill in the missing blanks to solve the two following arithmetic equations quick_maths_one and quick_maths_two.</Typography>
                <Typography className={classes.text}><b>Problem 3: A Plus Abs B:</b> Fill in the blanks in the following function for adding a to the absolute value of b, without calling abs. You may not modify any of the provided code other than the two blanks.</Typography>
                <Typography className={classes.text}><b>Problem 4: Two of Three:</b> Write a function that takes three positive numbers and returns the sum of the squares of the two largest numbers. Use only a single line for the body of the function.</Typography>
                <Typography className={classes.text}><b>Problem 5: If Function:</b> Write a function that returns true_result if the condition is True and false_result if the condition is False.</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Testing and Submission</Typography>
                <Typography className={classes.textIndent}>Testing will be done locally but keep in mind that you should not change of mess with the test.py files. To run the tests, go on your terminal/command line, navigate to the hw folder and input python3 test_hw00.py. The test will then run and output your score.</Typography>
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
    textIndent: {
        fontFamily: 'Open Sans',
        fontWeight: 300,
        padding: '1rem',
        paddingBottom: '0rem',
        fontSize: '1.5rem',
        textIndent: '2rem',
    },
    boldText: {
        fontFamily: 'Open Sans',
        padding: '1rem',
        fontWeight: 'bold',
        paddingBottom: '0rem',
        fontSize: '1.5rem',
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

export default withStyles(useStyles)(HW00);