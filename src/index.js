import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history'
import { Route ,HashRouter as Router , Switch ,} from 'react-router-dom'
import '../dist/assets/css/style.css'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Menu, Segment, Responsive, } from 'semantic-ui-react'

//components
import Home from "./views/Home.js"
import MyOffer from "./views/MyOffer.js"
import AboutMe from "./views/AboutMe.js"
import Projects from "./views/Projects.js"
import Connect from "./views/Connect.js"
import Headers from './components/Header/Headers';
import HeaderMobile  from './components/Header/HeaderMobile';
//history const 

const hist = createBrowserHistory();

 if (process.env.NODE_ENV !== 'production') {
       console.log('Looks like we are in development mode!');
 }
ReactDOM.render(
<Router history={hist}>
     <Grid  className="app-grid">
         <Grid.Row className="app-grid-row">
     <Responsive as={Headers} minWidth={767}/> 
 <Responsive as={HeaderMobile} maxWidth={766}/> 

    <Switch>
        <Route exact path="/" ><Home/></Route>
        <Route path="/aboutme"><AboutMe/></Route>
        <Route path="/connect"><Connect/></Route>
        <Route path="/myoffer"><MyOffer/></Route>
        <Route path="/projects" ><Projects/></Route>
    </Switch>
    </Grid.Row>
    </Grid>
</Router>,
    document.getElementById('app')
    );