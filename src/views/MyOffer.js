import React from 'react';
import { Grid, Segment,Container, Header, Responsive, Divider, Icon } from 'semantic-ui-react'
const MyOffer= () => {
    return(<Grid.Column stretched  largeScreen={12}  mobile={16} largeScreen={12}>
       <Segment  className="para-text" basic color="black">
          <Container fluid>
      
      <Header as='h1'>
        <Icon name="edit outline"/>
        <Header.Content>My Offer</Header.Content>
      </Header>
      <Divider/>
     
      <h4>A Full-Stack Web developer with experience in developing full fleged applications</h4>
      <p >I had maintained, developed, and launched projects from scratch, with simultaneously carried both front-end and back-end stack</p>
      <p >My current stack includes <strong>Vue JS</strong>, <strong>React JS</strong>, <strong>Node JS</strong>, Redux, GraphQL and other various frameworks related to javascript</p>
      <h5>Can help you following regarding a project:
</h5>
<ul>
  <li>Creating tech stack from scratch.</li>
  <li>Developing UI based on complex UX design.</li>
  <li>Maintaining code or feature improvement on a particular project.</li>
  <li>Optimizing code for better load time.</li>
</ul>
<Divider/>
<Header className="my_offer_header_mobile" as="h2">
  <Icon name="code" />
  <Header.Content>FRONT-END WEB AND ANDROID DEVELOPMENT</Header.Content>
</Header>
<Divider/>
<p>I'm specialize in application written in both <strong>React JS</strong> and <strong>Vue JS</strong> with <strong>Webpack</strong>, Learning new technologies like Typescript</p>
<ul>
  <li>JavaScript development: <strong>bootstraping, refactoring, improving the structure, reliability, build setup</strong></li>
  <li>Full integration of front-end development using tools like <strong>Webpack</strong> with features like automatic code reload, code minifications, multiple environments support, automated testing of accessibility, server-side render and visual snapshots</li>
  <li>Good in designing components of complex UX and analytics chart library like <strong>D3 JS</strong></li>
  <li>Experience in SPA(single page application) load Optimization with technologies like <strong>Lazy laoding</strong> , <strong>tree shaking</strong>, SSR(server side rendering)</li>
</ul>
<Header as='h2' icon>
      <Header.Content>5</Header.Content>      
    <Header.Subheader>
     Applications
    </Header.Subheader>
  </Header>
  <Divider/>
  <Header className="my_offer_header_mobile" as="h2">
  <Icon name="code" />
  <Header.Content>BACK-END WEB DEVELOPMENT</Header.Content>
</Header>
<Divider/>
<p>In back-end development im specialize in <strong>Node JS</strong> and <strong>SpringBoot</strong> mircoservices, Learning new framworkslike python dijango</p>
<ul>
  <li>Splitting the back-end into separate domains and microservices,</li>
  <li>Cooperation with APIs, remote data synchronizations, cloud servers, asynchronous workers</li>
  <li>Using different types of databases (like Mongo DB, MySQL,)</li>
  <li>Dividing the servers into different machine nodes / docker containers; database sharding; load balancing</li>
</ul>
<Header as='h1' icon>
      <Header.Content>2</Header.Content>      
    <Header.Subheader>
     Applications
    </Header.Subheader>
  </Header>
  <Divider/>
  <Header className="my_offer_header_mobile" as="h2">
  <Icon name="code" />
  <Header.Content>DEV OPS</Header.Content>
</Header>
<Divider/>
<p>In Dev OPS , with good knowleadge of linux im specialize in configuring and deploying application</p>
<ul>
  <li>launching, deployment and monitoring the app after the release</li>
 <li>Experience with cloud deployment technologies like <strong>AWS EC2</strong>, <strong>Gcloud</strong>, <strong>Digital Ocean</strong></li>
</ul>
<Header as='h1' icon>
      <Header.Content>3</Header.Content>      
    <Header.Subheader>
     Applications
    </Header.Subheader>
  </Header>
    </Container>
    </Segment>
      </Grid.Column>)
}

export default MyOffer;