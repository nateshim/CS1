import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {withStyles, createStyles} from '@material-ui/styles';


const Navigation = (props) => {
    const classes = props.classes;
    return (
        <Container className={classes.navBar}>
            <Box display={{xs: 'block', lg: 'flex'}}>
                <Typography>Richmond High: CS1</Typography>
                <Link>Home</Link>
                <Link>Resources</Link>
                <Link>Syllabus</Link>
                <Link>Staff</Link>
            </Box>
        </Container>
    );
}

const useStyles = createStyles({
    navBar: {
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',
    },
});

export default withStyles(useStyles)(Navigation);