import React from 'react';
import Navigation from './navigation';
import Box from '@material-ui/core/Box';
import {withStyles, createStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import project from './static/project.zip';

const Project = (props) => {
    const classes = props.classes;
    return (
        <Box className={classes.cs1}>
        <Navigation/>
        <Container className = {classes.section}>
            <Typography className={classes.header}>Project: Chess</Typography>
            <Divider className={classes.underline}/>
            <Typography className={classes.subText}>Due by Monday 7/16 11:59 PM PST</Typography>
        </Container>
        <Container className={classes.section}>
            <Typography className={classes.header}>Instructions</Typography>
            <Typography className={classes.text}>To start the homework, download <a href={project} download>project.zip</a>.</Typography>
            <Typography className={classes.boldText}>Note: This project is graded based on correctness. However, there will be partial credit given for partially finished solutions</Typography>
        </Container>
        <Container className={classes.section}>
            <Typography className={classes.header}>Project Overview</Typography>
            <Typography className={classes.textIndent}>For this project, you will be implementing a rudimentary version of Chess using Pygame. Pygame is a Python library that provides a lot of useful tools for rendering and implementing game mechanics.</Typography>
        </Container>
        <Container className={classes.section}>
            <Typography className={classes.header}>Setting Up</Typography>
            <Typography className={classes.textIndent}>First, after you download the zip file, open it and move it into a place you're comfortable accessing (ex. Desktop or your Documents folder on your local desktop). Then, using your terminal/command line, direct over to the folder and install Pygame by typing pip install pygame. (Note: If your version of Python is less than 3.7, this may not work for you. Make sure you have an updated version of Python3 installed.)</Typography>
        </Container>
        <Container className={classes.section}>
            <Typography className={classes.header}>Getting Familiar with the Files</Typography>
            <Typography className={classes.textIndent}>When you open the folder, you will notice that there are three main files being used: Board.py, chess.py, and Piece.py. You will not need to look at Board.py as it has already been implemented for you. Most of your coding will be done on chess.py. The rest will be done on Piece.py.</Typography>
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


export default withStyles(useStyles)(Project);