import React from 'react';
import { Grid, Segment, Label, Header ,Icon, Container,Divider, Button, Image, Responsive, GridRow, Message} from 'semantic-ui-react'
import '../../dist/assets/css/index.css'
const Projects = () => {

  function getSteps() {
    return [
      { company: 'Spoyl',
      icon: '',
      duration: 'Mar 2019 to NOW',
      companyMoto: "Spoyl, India's largest influencer-led fashion e-commerce platform",
      companydesc: "Influencers curated cloth and beauty collection",
     workDesc: [`Working on Vue JS - Creating data driven templates with the concepts of lazy loading.
     
  `, `Developing PWA(progressive web app) with NUXT framwork for web platform. with optimized one way data flow`],
  link: 'https://spoyl.in',
  technologies: ['vue js', 'node js', 'PWA', 'nuxt' , 'webpack' ]


      },
        { company: 'Cracker Digital Media',
        icon: '',
        duration: 'Aug 2018 to Jan 1 2019',
        companyMoto: "Serivce based company. Worked for candian company actionable.co ",
        companydesc: "The Actionable Platform provides three key components that are essential for turning learning into new behaviors to drive business outcomes",
       workDesc: [`Worked on Reactjs - Creating data driven components.
       
    `, `Worked On Node Js and Graphql-framework  for creating mutations and  model  and managing REST API s as backend development.`],
    link: 'http://actionable.co',
    technologies: ['react', 'node', 'redux', 'graphql' , 'relay', 'loopback' ]

  
        },
        {
      company :'Unifygoals (Oficio Cloud Software)',
     companyMoto: "Product based on Google OKR (Objective Key Result)",
     companydesc: 'Align Teams to Business Objectives',
  
     icon: '',
     duration: 'Feb 2018 to Aug 2018',
     workDesc: [`Worked On Spring- JAVA-framework for creating and managing REST API s as backend development.
     `, `Worked on Reactjs - Creating data-driven components in Material-UI and used d3.js as chart ui for website, from csv files and APIs calls`
     ,`Reduced component rendering time by 80% by implementing Tree data structure while fetching data through API, leading to 7.20 sec reduction in data fetch time from server` ],
     link: 'http://unifygoals.in',
     technologies: ['react', 'node', 'Spring boot', 'mysql' , 'D3 js', 'MUi' ]
        }
        ,{
     company: 'FamsousEnuf',
     companyMoto: "Funded By Facebook thorugh FB Start program,",
     companydesc: 'World of mouth marketing at scale through facebook microfiluencers',
     icon: '',   
     duration: 'Aug 2017 to Feb 2018',
     workDesc: [`Worked on Reactjs and Nodejs -Created Responsive web pages for the landing screen of startup website and Deployed it and managed REST API for the website
    `],
    link: 'http://famousenuf.com',
    technologies: ['react', 'node', 'Spring boot', 'mysql' , 'D3 js', 'MUI' ]
        },
        {
      company :'Salk health care',
     companyMoto: "Product to create individual healthcare client's digital platform",
     companydesc: 'Create your Healthcare Brand Tools to digitize your Medical Practice',
     icon: '',
     duration: 'Mar 2019 to NOW',
     workDesc: [`Worked On the Android app- worked on material design UI for the app and maintained api call for data rendering in to the apps ui
     ` ],
     link: 'https://www.salk.healthcare/',
        
        technologies: ['java', 'andorid studio',  ]
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
              <Grid.Column  largeScreen={3}  mobile={16} largeScreen={3}>
                <Container className="timeline-time" text>
                <Responsive as={Divider} horizontal {...Responsive.onlyMobile}>
      <Header as='h4'>
        {/* <Icon name='bar chart' /> */}
        {label.duration}
      </Header>
      </Responsive>
      <Responsive {...Responsive.onlyComputer} as={Label} color="black" >{label.duration}</Responsive>
    
  
  </Container>
  </Grid.Column>
  <Grid.Column  largeScreen={13}  mobile={16} largeScreen={13}>
  <Header as='h2'>
    
    <Header.Content>{label.company}</Header.Content>
    
    <Header.Subheader>{label.companyMoto}</Header.Subheader>
    
  </Header>
 
  <Container textAlign='justified'>
  <Message>
    
    <p>{label.companydesc}</p>
  </Message>
     
      <ul>
      
      {label.workDesc.map(text => (
        <li className={"workdesc"}>{text}</li>
      ))}
     </ul>
     <Button basic color="blue">
     <Icon name='linkify'/> {label.link}
    </Button>
    </Container>
    <Header as='h3'>
    
    <Header.Content>Technologies</Header.Content>
    </Header>
    <Segment basic >
      {label.technologies.map((tech,index)  => (
        <Label className="tech-tile">
        <Icon name='code' color="black"/>{tech.toUpperCase()}
        </Label> 
        ))

      }
   
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