import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history'
import { Route ,HashRouter as Router , Switch ,} from 'react-router-dom'
import '../public/assets/css/style.css'
import { Grid, Responsive, } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

//components with lazy 
// const Home = lazy(() => import("./views/Home.js"))
// const MyOffer = lazy(() => import("./views/MyOffer.js"))
// const Projects = lazy(() => import("./views/Projects.js"))
// const Connect = lazy(() => import("./views/Connect.js"))
// const Headers = lazy(() => import("./components/Header/Headers"))
// const HeaderMobile = lazy(() => import("./components/Header/HeaderMobile"))

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
     <Responsive as={Headers} minWidth={768}/> 
 <Responsive as={HeaderMobile} maxWidth={767}/> 
 
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/connect"component={Connect} />
   <Route path="/myoffer" component={MyOffer} />
    <Route path="/projects"component={Projects} />
    </Switch>

    </Grid.Row>
    </Grid>
</Router>,
    document.getElementById('app')
    );