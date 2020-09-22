import React from 'react';
import Navigation from './navigation';
import Box from '@material-ui/core/Box';
import {withStyles, createStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const Lab = (props) => {
    const classes = props.classes;
    return (
        <Box>
            <Navigation/>
            <Container className = {classes.section}>
                <Typography className={classes.header}>Lab 0: Workflow and Python Basics</Typography>
                <Divider className={classes.underline}/>
                <Typography className={classes.bottomText}> </Typography>

            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Introduction</Typography>
                <Typography className={classes.textIndent}>This lab explains how to use your own computer to complete assignments for CS1, as well as introduce some of the basics of Python. If you are not using your own computer, we recommend creating a gitHub account to remotely store your files. This lab looks pretty long, but most of it is just setup and learning how to use essential tools for this class.</Typography>
                <Typography className={classes.bottomText}> </Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Setup</Typography>
                <Divider className={classes.underline}/>
                <Typography className={classes.bottomText}> </Typography>

            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Install a terminal</Typography>
                <Typography className={classes.textIndent}>The terminal is a program that allows you to interact with your computer by entering commands. No matter what operating system you use (Windows, macOS, Linux), the terminal will be an essential tool for coding.</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>macOS/Linux</Typography>
                <Typography className={classes.textIndent}>If you're on a Mac or are using a form of Linux (such as Ubuntu), you already have a program called Terminal or something similar on your computer. Open that up and you should be good to go.</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Windows</Typography>
                <Typography className={classes.textIndent}>For Windows users, we recommend a terminal called Git-Bash. To install it, download and run this automatic installer, and follow the displayed instructions.</Typography>
                <Typography className={classes.bottomText}> </Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Install Python3</Typography>
                <Divider className={classes.underline}/>
                <Typography className={classes.textIndent}>Python3 is the primary programming language used in this course. Use the instructions below to install the Python3 interpreter. (The instructions may feature older versions of Python3, but the steps are similar).</Typography>
                <Typography className={classes.bottomText}> </Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Linux</Typography>
                <Typography className={classes.textIndent}>Run sudo apt install python3 (Ubuntu), sudo pacman -S python3 (Arch), or the command for your distro.</Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>macOS/Windows</Typography>
                <Typography className={classes.textIndent}>Download and install Python <a href="https://www.python.org/downloads">here</a>.</Typography>
                <Typography className={classes.bottomText}> </Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Install a text editor</Typography>
                <Divider className={classes.underline}/>
                <Typography className={classes.textIndent}>The Python interpreter that you just installed allows you to run Python code. You will also need a text editor, where you will write Python code. There are many editors out there, each with its own set of features. We would recommend you use Sublime Text 3.</Typography>
                <Typography className={classes.bottomText}> </Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Using the terminal</Typography>
                <Divider className={classes.underline}/>
                <Typography className={classes.textIndent}>Once you have finished downloading your terminal, please let one of your instructors know so that we can walk you through basic terminal commands.</Typography>
                <Typography className={classes.bottomText}> </Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Python Interpreter</Typography>
                <Divider className={classes.underline}/>
                <Typography className={classes.textIndent}>Once you have finished downloading the Python interpreter, please let one of your instructors know so that we can walk you through how to run and use the Python interpreter.</Typography>
                <Typography className={classes.bottomText}> </Typography>
            </Container>
            <Container className={classes.section}>
                <Typography className={classes.header}>Conclusion</Typography>
                <Divider className={classes.underline}/>
                <Typography className={classes.textIndent}>Congratulations! You have officially setup your own personal coding environment! Now next time in class, we will go into learning more terminal commands and how to use the text editor with our terminal.</Typography>
            </Container>
            <Container>
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

export default withStyles(useStyles)(Lab);