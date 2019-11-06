import React from 'react';
import { Grid, Segment, Label, Header ,Icon, Container,Divider, Button, Image, Responsive, GridRow} from 'semantic-ui-react'
import Spoyl from '../assets/img/spoyl.png'
import '../assets/css/index.css'
const Projects = () => {

  function getSteps() {
    return [
        { company: 'Cracker Digital Media',
        icon: Spoyl,
        duration: 'Mar 2019 to NOW',
        companyMoto: "Candian based company ",
       workDesc: [`Working on Reactjs - Creating data driven components.
       
    `, `Working On Node Js and Graphql-framework  for creating mutations and  model  and managing REST API s as backend development.`],
    link: 'http://actionable.in'
  
        },
        {
      company :'Unifygoals (Oficio Cloud Software)',
     companyMoto: "For each ad campaign that you create.",
  
     icon: Spoyl,
     duration: 'Mar 2019 to NOW',
     workDesc: [`Working On Spring- JAVA-framework for creating and managing REST API s as backend development.
     `, `Working on Reactjs - Creating data-driven components in Material-UI and used d3.js as chart ui for website, from csv files and APIs calls`
     ,`Reduced component rendering time by 80% by implementing Tree data structure while fetching data through API, leading to 7.20 sec reduction in data fetch time from server` ],
     link: 'http://unifygoals.in'
        }
        ,{
     company: 'FamsousEnuf',
     companyMoto: "For each ad campaign that you create.",
  
     icon: Spoyl,
     duration: 'Mar 2019 to NOW',
     workDesc: [`Worked on Reactjs and Nodejs -Created Responsive web pages for the landing screen of startup website and Deployed it and managed REST API for the website
    `],
    link: 'http://famousenuf.com'
        },
        {
      company :'Salk health care',
     companyMoto: "For each ad campaign that you create.",
  
     icon: Spoyl,
     duration: 'Mar 2019 to NOW',
     workDesc: [`Worked On the Android app- worked on material design UI for the app and maintained api call for data rendering in to the apps ui
     ` ],
     link: 'https://www.salk.healthcare/'
        }
        
      ]
  
  }
    return(  <Responsive  as={Grid.Column}  largeScreen={12}  mobile={16} largeScreen={12}>
      <Segment className={'container'} >
      <Grid divided>
      <Grid.Column >
      <Header as='h1'>
    <Icon name='code' />
    <Header.Content>Projects</Header.Content>
    
  </Header>
  
 </Grid.Column>
 </Grid>
 <Divider/>
          <Grid >
            {getSteps().map((label , index)=> (<Grid.Row divided key={index}>
              <Grid.Column className={Responsive.onlyMobile ? 'no-display': ''} width={3}>
  {label.duration}
  </Grid.Column>
  <Grid.Column  width={Responsive.onlyMobile ? 16 : 13}>
  <Header as='h2'>
    
    <Header.Content>{label.company}</Header.Content>
    
    <Header.Subheader>{label.companyMoto}</Header.Subheader>
    
  </Header>
 
  <Container textAlign='justified'>
      
     
      <ul>
      
      {label.workDesc.map(text => (
        <li>{text}</li>
      ))}
     </ul>
     <Button basic color="blue">
     <Icon name='linkify'/> {label.link}
    </Button>
    </Container>
    <Header as='h3'>
    
    <Header.Content>Technologies</Header.Content>
    </Header>
    <Segment basic>
    <Label>
    <Icon name='vuejs' color="green"/> Vue JS
  </Label> <Label>
    <Icon name='node' color="green" /> Node JS
  </Label> <Label>
    <Icon name='react' color="blue" /> React JS
  </Label> <Label>
    <Icon name='code'color="yellow" /> Javascript
  </Label>
  </Segment>
    
 
  </Grid.Column>
  
</Grid.Row>)

)}
  
  </Grid>
  </Segment>
      </Responsive>
    )
            }

export default Projects;