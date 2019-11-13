import React, {useEffect} from 'react';
import  '../../dist/assets/css/index.css'
import { Grid, Segment, Header, Container, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom';


 const Home = () => {
    useEffect(() => {})
     return(<Grid.Column stretched className="home"  mobile={16} largeScreen={12}>
      <Segment className="home-container" basic color="black">
         <Container className="home-tagline" text>
            <Header className="tagline" as="h1">
               Hi, I'm Tanmay
               <Header.Content as="p">A Software Developer specialized in front-end and back-end web development</Header.Content>

            </Header>

         </Container>
        <Container as="div" className="home-tagline-button" text>
        
           <Button size={"big"} as={Link} to="/projects" inverted color='black'>Portfolio</Button>
           
           <Button as={Link} to="/myoffer" className={"home-my-offer-button"} size={"big"} inverted color='black'>My offer</Button>
        </Container>

      </Segment>
      </Grid.Column>
    )
 }


export default Home;