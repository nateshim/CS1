import React from 'react';
import Navigation from './navigation';
import Box from '@material-ui/core/Box';
import {withStyles, createStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const Home = (props) => {
    const classes = props.classes;
    return (
        <Box>
            <Navigation/>
            <Container className={classes.infoBox}>
                <Typography className={classes.header}>An Introduction to Computer Science</Typography>
                <Typography className={classes.subText}>Spring 2020</Typography>
                <Typography className={classes.subText}>Mon/Thurs 1:00 - 2:00 via Zoom</Typography>
            </Container>
            <Container>
                <Box m={1} className={classes.scheduleBar}>
                    <Box m={1} width = {1} className={classes.scheduleInputHeader}>
                        <Typography className={classes.scheduleHeader}>Week</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInputHeader}>
                        <Typography className={classes.scheduleHeader}>Date</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInputHeader}>
                        <Typography className={classes.scheduleHeader}>Lecture</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInputHeader}>
                        <Typography className={classes.scheduleHeader}>Textbook</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInputHeader}>
                        <Typography className={classes.scheduleHeader}>Lab/Discussion</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInputHeader}>
                        <Typography className={classes.scheduleHeader}>HW/Project</Typography>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>1</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>5/11</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://docs.google.com/presentation/d/19dYPYBcnvfVhm4iW41axoF2cmviRyku2mAaMs8F_kXo/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Introduction</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>N/A</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/lab00"className={classes.scheduleHeaderLink}>Lab00</Link>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/hw00" className={classes.scheduleHeaderLink}>HW00</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>1</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>5/14</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a 
                        href="https://docs.google.com/presentation/d/1wkB1U5-_xLaHr-EjsLVbXb_9iWVOHGYALdSEwHbvKvU/edit?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={classes.scheduleHeaderLink}>
                            Expressions
                        </a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>1.1,1.2</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>Disc00</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/hw00" className={classes.scheduleHeaderLink}>HW00</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>2</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>5/18</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a 
                        href="https://docs.google.com/presentation/d/1DbVvYiUTzfRjF2aqYGCAV4CYTeWd2N0AT1dAqwjl3Ug/edit?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={classes.scheduleHeaderLink}>
                            Names
                        </a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>1.3,1.4</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/about-me" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab01a</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/hw01" className={classes.scheduleHeaderLink}>HW01</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>2</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>5/21</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography 
                        className={classes.scheduleHeader}>
                            N/A
                        </Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>N/A</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/storytime" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab01b</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/hw01" className={classes.scheduleHeaderLink}>HW01</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>3</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>5/25</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a 
                        href="https://docs.google.com/presentation/d/1wvuL1zSBO975Zl36n9WK4No29286FQLSn1S8ESY2M58/edit?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={classes.scheduleHeaderLink}>
                            Control
                        </a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>1.5</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/rock-paper-scissors" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab02a</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/hw01" className={classes.scheduleHeaderLink}>HW01</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>3</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>5/28</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography 
                        className={classes.scheduleHeader}>
                            N/A
                        </Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>N/A</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/cd-beginner-python-sushi" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab02b</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/hw01" className={classes.scheduleHeaderLink}>HW01</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>4</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>6/1</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a 
                        href="https://docs.google.com/presentation/d/1stFUxE7DQkQKushGGo1UArxDQ1VXVfKL1_Kv41jYy_U/edit?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={classes.scheduleHeaderLink}>
                            Functions
                        </a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>1.6</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/modern-art" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab03</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/hw02" className={classes.scheduleHeaderLink}>HW02</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>4</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>6/4</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography 
                        className={classes.scheduleHeader}>
                            N/A
                        </Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>N/A</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>Disc03</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/hw02" className={classes.scheduleHeaderLink}>HW02</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>5</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>6/8</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a 
                        href="https://docs.google.com/presentation/d/1S_oChLY2fj1wPPBPS3zzgvCJfIPViZRCNyh771BdlSM/edit?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={classes.scheduleHeaderLink}>
                            Iteration
                        </a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>1.7</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/turtle-race" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab04</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/hw02" className={classes.scheduleHeaderLink}>HW02</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>5</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>6/11</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography 
                        className={classes.scheduleHeader}>
                            N/A
                        </Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>N/A</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>Disc04</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/hw02" className={classes.scheduleHeaderLink}>HW02</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>6</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>6/15</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a 
                        href="https://docs.google.com/presentation/d/1l2OCNH2w3hER8YvFe5J6dPCiZG-G2YUSEIWPEUaw7xM/edit?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={classes.scheduleHeaderLink}>
                            Design
                        </a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>N/A</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/secret-messages" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab05</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/hw03" className={classes.scheduleHeaderLink}>HW03</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>6</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>6/18</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography 
                        className={classes.scheduleHeader}>
                            N/A
                        </Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>N/A</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>Disc05</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/hw03" className={classes.scheduleHeaderLink}>HW03</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>7</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>6/22</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a 
                        href="https://docs.google.com/presentation/d/1Rja4GgIadVdC0JeRS7mJO4vN7n2tr0I_kIgZR96UyQo/edit?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={classes.scheduleHeaderLink}>
                            Lists
                        </a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>N/A</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/team-chooser" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab06a</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/hw03" className={classes.scheduleHeaderLink}>HW03</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>7</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>6/25</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography 
                        className={classes.scheduleHeader}>
                            N/A
                        </Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>N/A</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/colourful-creations" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab06b</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/hw03" className={classes.scheduleHeaderLink}>HW03</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>8</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>6/29</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a 
                        href="https://docs.google.com/presentation/d/1Iuk3WhO7QB9tZdxOkQe-5nUTFNIOw1vVrTjjADu7U4I/edit?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={classes.scheduleHeaderLink}>
                            OOP1
                        </a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>2.5</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/deck-of-cards" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab07a</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/project" className={classes.scheduleHeaderLink}>Project</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>8</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>7/2</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography 
                        className={classes.scheduleHeader}>
                            N/A
                        </Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>N/A</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/robo-trumps" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab07b</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/project" className={classes.scheduleHeaderLink}>Project</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>9</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>7/6</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a 
                        href="https://docs.google.com/presentation/d/1PcyIWLTgyWIJ3qjiniYpql2Ai1P8UKO9cZXpzQFvzMw/edit?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={classes.scheduleHeaderLink}>
                            OOP2
                        </a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>2.5</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/team-chooser" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab08a</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/project" className={classes.scheduleHeaderLink}>Project</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>9</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>7/9</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography 
                        className={classes.scheduleHeader}>
                            N/A
                        </Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>N/A</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/codecraft" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab08b</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/project" className={classes.scheduleHeaderLink}>Project</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>10</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>7/13</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a 
                        href="https://docs.google.com/presentation/d/1PMy9T1Xb7R4snsh8ln8GX0t5Bs4YmUtYI_Kb6-GWdrk/edit?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={classes.scheduleHeaderLink}>
                            Debugging
                        </a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>N/A</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/test-detectives" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab09a</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/project" className={classes.scheduleHeaderLink}>Project</Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>10</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>7/16</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography 
                        className={classes.scheduleHeader}>
                            N/A
                        </Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Typography className={classes.scheduleHeader}>N/A</Typography>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <a href="https://projects.raspberrypi.org/en/projects/documenting-your-code" target="_blank" rel="noopener noreferrer" className={classes.scheduleHeaderLink}>Lab09b</a>
                    </Box>
                    <Box m={1} width = {1} className={classes.scheduleInput}>
                        <Link to="/CS1/project" className={classes.scheduleHeaderLink}>Project</Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

const useStyles = createStyles({
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
        justifyContent: 'center',
    },
    scheduleHeader: {
        color: '#EBEBEB',
        fontFamily: 'Archivo',
        fontWeight: 500,
        fontSize: '1.5rem',
        padding: '1rem',
        wordSpacing: '5rem',
        display: 'flex',
    },
    scheduleHeaderLink: {
        color: '#EBEBEB',
        fontFamily: 'Archivo',
        fontWeight: 500,
        fontSize: '1.5rem',
        marginTop: '.25rem',
        padding: '1rem',
        wordSpacing: '5rem',
        display: 'flex',
        textDecoration: 'none',
        textDecorationColor: '#52489C',
        '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: '#EBEBEB',
            transitionDuration: '.5s',
        }
    },
    scheduleInputHeader: {
        justifyContent: 'center',
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
    },
    header: {
        fontFamily: 'Archivo',
        fontWeight: 500,
    }
})

export default withStyles(useStyles)(Home);