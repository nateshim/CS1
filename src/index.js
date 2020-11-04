import React from 'react';
import Home from './Home';
import Syllabus from './syllabus';
import Staff from './staff';
import Lab from './lab';
import HW00 from './hw00';
import HW01 from './hw01';
import HW02 from './hw02';
import HW03 from './hw03';
import Project from './project';
import './css/index.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import {ThemeProvider, unstable_createMuiStrictModeTheme} from '@material-ui/core/styles';
import ScrollToTop from './ScrollToTop';

const theme = unstable_createMuiStrictModeTheme();
function App() {
    return (
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Router>
            <ScrollToTop/>
            <div>
              <Switch>
                <Route exact path="/CS1" component={Home}/>
                <Route exact path="/CS1/syllabus" component={Syllabus}/>
                <Route exact path="/CS1/staff" component={Staff}/>
                <Route exact path="/CS1/lab00" component={Lab}/>
                <Route exact path="/CS1/hw00" component={HW00}/>
                <Route exact path="/CS1/hw01" component={HW01}/>
                <Route exact path="/CS1/hw02" component={HW02}/>
                <Route exact path="/CS1/hw03" component={HW03}/>
                <Route exact path="/CS1/project" component={Project}/>
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
      </React.StrictMode>
    );
}

render(<App/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
