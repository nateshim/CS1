import React from 'react';
import Navigation from './navigation';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {withStyles, createStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ScheduleRow from './ScheduleRow';
const Home = (props) => {
    const classes = props.classes;
    return (
        <Box className={classes.cs1}>
            <Navigation/>
            <Container className={classes.infoBox}>
                <Typography className={classes.header}>An Introduction to Computer Science</Typography>
                <Typography className={classes.subText}>Spring 2020</Typography>
                <Typography className={classes.subText}>Mon/Thurs 1:00 - 2:00 via Zoom</Typography>
            </Container>
            <Container>
                <Box m={1} className={classes.scheduleBar}>
                    <Grid 
                    className={classes.scheduleInputHeader}
                    container 
                    direction="row"
                    >
                        <Grid item xs={2} sm={2}>
                        <Typography className={classes.scheduleHeader}>Week</Typography>
                        </Grid>
                        <Grid item xs={2} sm={2}>
                        <Typography className={classes.scheduleHeader}>Date</Typography>
                        </Grid>
                        <Grid item xs={2} sm={2}>
                        <Typography className={classes.scheduleHeader}>Lecture</Typography>
                        </Grid>
                        <Grid item xs={2} sm={2}>
                        <Typography className={classes.scheduleHeader}>Textbook</Typography>
                        </Grid>
                        <Grid item xs={2} sm={2}>
                        <Typography className={classes.scheduleHeader}>Lab/Disc</Typography>
                        </Grid>
                        <Grid item xs={2} sm={2}>
                        <Typography className={classes.scheduleHeader}>HW</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <ScheduleRow 
                week={1} 
                date="5/11" 
                isLecture={true}
                lectureLink="https://docs.google.com/presentation/d/19dYPYBcnvfVhm4iW41axoF2cmviRyku2mAaMs8F_kXo/edit?usp=sharing"
                lectureTitle="Intro"
                textBookChapter="N/A"
                isLab={false}
                isDisc={false}
                labLink=""
                lab="Lab00"
                hwLink="/CS1/hw00"
                hw="HW00"
                />
                <ScheduleRow 
                week={1} 
                date="5/14" 
                isLecture={true}
                lectureLink="https://docs.google.com/presentation/d/1wkB1U5-_xLaHr-EjsLVbXb_9iWVOHGYALdSEwHbvKvU/edit?usp=sharing"
                lectureTitle="Expressions"
                textBookChapter="1.1,1.2"
                isLab={false}
                isDisc={true}
                labLink=""
                lab="Disc00"
                hwLink="/CS1/hw00"
                hw="HW00"
                />
                <ScheduleRow 
                week={2} 
                date="5/18" 
                isLecture={true}
                lectureLink="https://docs.google.com/presentation/d/1DbVvYiUTzfRjF2aqYGCAV4CYTeWd2N0AT1dAqwjl3Ug/edit?usp=sharing"
                lectureTitle="Names"
                textBookChapter="1.3,1.4"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/about-me"
                lab="Lab01a"
                hwLink="/CS1/hw01"
                hw="HW01"
                />
                <ScheduleRow 
                week={2} 
                date="5/21" 
                isLecture={false}
                lectureLink=""
                lectureTitle="N/A"
                textBookChapter="N/A"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/storytime"
                lab="Lab01b"
                hwLink="/CS1/hw01"
                hw="HW01"
                />
                <ScheduleRow 
                week={3} 
                date="5/25" 
                isLecture={true}
                lectureLink="https://docs.google.com/presentation/d/1wvuL1zSBO975Zl36n9WK4No29286FQLSn1S8ESY2M58/edit?usp=sharing"
                lectureTitle="Control"
                textBookChapter="1.5"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/rock-paper-scissors"
                lab="Lab02a"
                hwLink="/CS1/hw01"
                hw="HW01"
                />
                <ScheduleRow 
                week={3} 
                date="5/28" 
                isLecture={false}
                lectureLink=""
                lectureTitle="N/A"
                textBookChapter="N/A"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/cd-beginner-python-sushi"
                lab="Lab02b"
                hwLink="/CS1/hw01"
                hw="HW01"
                />
                <ScheduleRow 
                week={4} 
                date="6/1" 
                isLecture={true}
                lectureLink="https://docs.google.com/presentation/d/1stFUxE7DQkQKushGGo1UArxDQ1VXVfKL1_Kv41jYy_U/edit?usp=sharing"
                lectureTitle="Functions"
                textBookChapter="1.6"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/modern-art"
                lab="Lab03"
                hwLink="/CS1/hw02"
                hw="HW02"
                />
                <ScheduleRow 
                week={4} 
                date="6/4" 
                isLecture={false}
                lectureLink=""
                lectureTitle="N/A"
                textBookChapter="N/A"
                isLab={false}
                isDisc={true}
                labLink=""
                lab="Disc03"
                hwLink="/CS1/hw02"
                hw="HW02"
                />
                <ScheduleRow 
                week={5} 
                date="6/8" 
                isLecture={true}
                lectureLink="https://docs.google.com/presentation/d/1S_oChLY2fj1wPPBPS3zzgvCJfIPViZRCNyh771BdlSM/edit?usp=sharing"
                lectureTitle="Iteration"
                textBookChapter="1.7"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/turtle-race"
                lab="Lab04"
                hwLink="/CS1/hw02"
                hw="HW02"
                />
                <ScheduleRow 
                week={5} 
                date="6/11" 
                isLecture={false}
                lectureLink=""
                lectureTitle="N/A"
                textBookChapter="N/A"
                isLab={false}
                isDisc={true}
                labLink=""
                lab="Disc04"
                hwLink="/CS1/hw02"
                hw="HW02"
                />
                <ScheduleRow 
                week={6} 
                date="6/15" 
                isLecture={true}
                lectureLink="https://docs.google.com/presentation/d/1l2OCNH2w3hER8YvFe5J6dPCiZG-G2YUSEIWPEUaw7xM/edit?usp=sharing"
                lectureTitle="Design"
                textBookChapter="N/A"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/secret-messages"
                lab="Lab05"
                hwLink="/CS1/hw03"
                hw="HW03"
                />
                <ScheduleRow 
                week={6} 
                date="6/18" 
                isLecture={false}
                lectureLink=""
                lectureTitle="N/A"
                textBookChapter="N/A"
                isLab={false}
                isDisc={true}
                labLink=""
                lab="Disc05"
                hwLink="/CS1/hw03"
                hw="HW03"
                />
                <ScheduleRow 
                week={7} 
                date="6/22" 
                isLecture={true}
                lectureLink="https://docs.google.com/presentation/d/1Rja4GgIadVdC0JeRS7mJO4vN7n2tr0I_kIgZR96UyQo/edit?usp=sharing"
                lectureTitle="Lists"
                textBookChapter="N/A"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/team-chooser"
                lab="Lab06a"
                hwLink="/CS1/hw03"
                hw="HW03"
                />
                <ScheduleRow 
                week={7} 
                date="6/25" 
                isLecture={false}
                lectureLink=""
                lectureTitle="N/A"
                textBookChapter="N/A"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/colourful-creations"
                lab="Lab06b"
                hwLink="/CS1/hw03"
                hw="HW03"
                />
                <ScheduleRow 
                week={8} 
                date="6/29" 
                isLecture={true}
                lectureLink="https://docs.google.com/presentation/d/1Iuk3WhO7QB9tZdxOkQe-5nUTFNIOw1vVrTjjADu7U4I/edit?usp=sharing"
                lectureTitle="OOP1"
                textBookChapter="2.5"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/deck-of-cards"
                lab="Lab07a"
                hwLink="/CS1/project"
                hw="Project"
                />
                <ScheduleRow 
                week={8} 
                date="7/2" 
                isLecture={false}
                lectureLink=""
                lectureTitle="N/A"
                textBookChapter="N/A"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/robo-trumps"
                lab="Lab07b"
                hwLink="/CS1/project"
                hw="Project"
                />
                <ScheduleRow 
                week={9} 
                date="7/6" 
                isLecture={true}
                lectureLink="https://docs.google.com/presentation/d/1PcyIWLTgyWIJ3qjiniYpql2Ai1P8UKO9cZXpzQFvzMw/edit?usp=sharing"
                lectureTitle="OOP2"
                textBookChapter="2.5"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/team-chooser"
                lab="Lab08a"
                hwLink="/CS1/project"
                hw="Project"
                />
                <ScheduleRow 
                week={9} 
                date="7/9" 
                isLecture={false}
                lectureLink=""
                lectureTitle="N/A"
                textBookChapter="N/A"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/codecraft"
                lab="Lab08b"
                hwLink="/CS1/project"
                hw="Project"
                />
                <ScheduleRow 
                week={10} 
                date="7/13" 
                isLecture={true}
                lectureLink="https://docs.google.com/presentation/d/1PMy9T1Xb7R4snsh8ln8GX0t5Bs4YmUtYI_Kb6-GWdrk/edit?usp=sharing"
                lectureTitle="Debugging"
                textBookChapter="N/A"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/test-detectives"
                lab="Lab09a"
                hwLink="/CS1/project"
                hw="Project"
                />
                <ScheduleRow 
                week={10} 
                date="7/16" 
                isLecture={false}
                lectureLink=""
                lectureTitle="N/A"
                textBookChapter="N/A"
                isLab={true}
                isDisc={false}
                labLink="https://projects.raspberrypi.org/en/projects/documenting-your-code"
                lab="Lab09b"
                hwLink="/CS1/project"
                hw="Project"
                />
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
    infoBox: {
        padding: '2rem',
    },
    scheduleBar: {
        backgroundColor: '#52489C',
        display: 'flex',
    },
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
    scheduleInputHeader: {
        justifyContent: 'left',
        display: 'flex',
    },
    text: {
        fontFamily: 'Open Sans',
        fontWeight: 300,
        fontSize: '1.5rem',
    },
    subText: {
        fontFamily: 'Open Sans',
        fontSize: '1rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.75rem',
        },
    },
    header: {
        fontFamily: 'Archivo',
        fontWeight: 500,
        fontSize: '1rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.75rem',
        },
    }
})

export default withStyles(useStyles)(Home);