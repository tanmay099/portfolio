import React, { lazy, Suspense } from "react";
import dynamic from "next/dynamic";

import { Grid } from "semantic-ui-react";
// components with lazy
const Home = dynamic(() => import("../views/Home"));
// const MyOffer = lazy(() => import("../src/views/MyOffer.js"));
// const Projects = lazy(() => import("../src/views/Projects.js"));
// const Connect = lazy(() => import("../src/views/Connect.js"));
const Headers = dynamic(() => import("../components/Header/Headers"));
const HeaderMobile = dynamic(() => import("../components/Header/HeaderMobile"));

// import Home from "./views/Home.js"
// import MyOffer from "./views/MyOffer.js"
// import AboutMe from "./views/AboutMe.js"
// import Projects from "./views/Projects.js"

const App = () => {
  return (
    <Grid className="app-grid">
      <Grid.Row className="app-grid-row">
        <Headers />
        <HeaderMobile />
        <Home />
      </Grid.Row>
    </Grid>
  );
};

export default App;
