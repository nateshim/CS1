import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {withStyles, createStyles} from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
const ScheduleRow = (props) => {
    const classes = props.classes;
    return (
        <Box m={1} display="flex">
            <Grid 
            className={classes.scheduleInput}
            container
            direction="row"
            >
                <Grid  
                item
                xs={2}
                >
                    <Typography className={classes.scheduleHeader}>{props.week}</Typography>
                </Grid>
                <Grid 
                item
                xs={2}
                >
                    <Typography className={classes.scheduleHeader}>{props.date}</Typography>
                </Grid>
                <Grid 
                item
                xs={2}
                >
                    {props.isLecture ? <a href={props.lectureLink} target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>{props.lectureTitle}</a> :
                    <Typography className={classes.scheduleHeader}>{props.lectureTitle}</Typography>
                    }
                </Grid>
                <Grid 
                item
                xs={2}
                >
                    <Typography className={classes.scheduleHeader}>{props.textBookChapter}</Typography>
                </Grid>
                <Grid
                item
                xs={2}
                >
                    {props.isLab ? <a href={props.labLink} target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>{props.lab}</a> :
                    props.isDisc ? <Typography className={classes.scheduleHeader}>{props.lab}</Typography> :
                    <Link to="/CS1/lab00"className={classes.scheduleHeaderLink}>{props.lab}</Link> 
                    }
                </Grid>
                <Grid
                item
                xs={2}
                >
                    <Link to={props.hwLink} className={classes.scheduleHeaderLink}>{props.hw}</Link>
                </Grid>      
            </Grid>
        </Box>
    );
}
const useStyles = (theme) => createStyles({
    scheduleInput: {
        marginTop: '0rem',
        backgroundColor: '#52489C',
        display: 'flex',
        opacity: '.75',
        justifyContent: 'left',
    },
    scheduleHeader: {
        color: '#EBEBEB',
        fontFamily: 'Archivo',
        fontWeight: 500,
        fontSize: '1.5rem',
        padding: '1rem',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.5rem',
        },
    },
    scheduleHeaderLink: {
        color: '#EBEBEB',
        fontFamily: 'Archivo',
        fontWeight: 500,
        fontSize: '1.5rem',
        marginTop: '.25rem',
        padding: '1rem',
        display: 'flex',
        textDecoration: 'none',
        textDecorationColor: '#52489C',
        '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: '#EBEBEB',
            transitionDuration: '.5s',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '.5rem',
            marginTop: '0rem',
        },
    },
})

export default withStyles(useStyles)(ScheduleRow);