import React from 'react';
import Navigation from './navigation';
import Box from '@material-ui/core/Box';
import {withStyles, createStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Project = (props) => {
    const classes = props.classes;
    return (
        <Box>
            <Navigation/>
            <Container className = {classes.section}>
                <Typography className={classes.header}>This is Project</Typography>
                <Typography className={classes.text}>This is an example of some text</Typography>
            </Container>
        </Box>
    );
}

const useStyles = createStyles({
    section: {
        display: 'flex',
    },
    text: {
        fontFamily: 'Open Sans',
        fontWeight: 300,
    },
    header: {
        fontFamily: 'Archivo',
        fontWeight: 500,
    }
})

export default withStyles(useStyles)(Project);