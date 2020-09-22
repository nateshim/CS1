import React from 'react';
import Navigation from './navigation';
import Box from '@material-ui/core/Box';
import {withStyles, createStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const HW02 = (props) => {
    const classes = props.classes;
    return (
        <Box>
            <Navigation/>
            <Container className = {classes.section}>
                <Typography className={classes.header}>Homework 2: Recursion</Typography>
                <Divider className={classes.underline}/>
                <Typography className={classes.subText}>Due by Monday 6/15 11:59 PM PST</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Instructions</Typography>
                <Typography className={classes.textIndent}>To start the homework, download hw02.zip. Inside, you will find the hw02.py file and the test_hw02.py file. You will only need to edit the hw02.py file.</Typography>
                <Typography className={classes.boldText}>Note: Homework is graded based on effort, not correctness. However, there is no partial credit; you must show substantial effort on every problem to receive any points. This homework is out of 2 points.</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Homework Questions</Typography>
                <Typography className={classes.text}><b>Problem 1: Fibonnaci Recursive:</b> Return the nth number of the fibonacci sequence using recursion.</Typography>
                <Typography className={classes.text}><b>Problem 2: Product:</b> Return the product of the first n terms in a sequence where n is a positive integer and term is a function that takes one argument.</Typography>
                <Typography className={classes.text}><b>Problem 3: Repeated:</b> Return the function that computes the nth application of f.</Typography>
                <Typography className={classes.text}><b>Problem 4: Triangle:</b> We have a triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Testing and Submission</Typography>
                <Typography className={classes.textIndent}>Testing will be done locally but keep in mind that you should not change of mess with the test.py files.</Typography>
                <Typography className={classes.text}>To run the tests, go on your terminal/command line, navigate to the hw folder and input python3 test_hw02.py. The test will then run and output your score.</Typography>
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

export default withStyles(useStyles)(HW02);