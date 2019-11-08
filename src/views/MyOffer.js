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
     
      <h4>A Full-Stack web developer with experience in developing full fleged applications</h4>
      <p >I had maintained, developed, and launched projects from scratch, with simultaneously carried both front-end and back-end stack</p>
      <p >My current stack includes Vue.js, React.js, Node.js, Redux, GraphQL and other various frameworks related to javascript</p>
      <p >Can help you following regarding a project:
</p>
<ul>
  <li>Creating tech stack from scratch</li>
  <li>Developing UI based on complex UX design</li>
  <li>Maintaining code or feature improvement on a particular project</li>
  <li>Optimizing code for better load time</li>
</ul>
<Divider/>
<Header as="h2">
  <Icon name="code" />
  <Header.Content>FRONT-END WEB DEVELOPMENT</Header.Content>
</Header>
<Divider/>
<p>I specialize in application written in both <strong>React</strong> and <strong>Vue.js</strong> with <strong>Webpack</strong>, Learning new technologies like Typescript</p>
<ul>
  <li>JavaScript development: bootstraping, refactoring, improving the structure, reliability, build setup</li>
  <li>Full integration of front-end development using tools like Webpack with features like automatic code reload, code minifications, multiple environments support, CI/CD, Storybook components library, automated testing of accessibility, server-side render and visual snapshots</li>
  <li>Good in designing components of complex UX</li>
  <li>Experience in SPA(single page application) load Optimization with technologies like Lazyload , tree shaking, SSR(server side rendering)</li>
</ul>
<Header as='h2' icon>
      <Header.Content>4</Header.Content>      
    <Header.Subheader>
     Applications
    </Header.Subheader>
  </Header>
  <Divider/>
  <Header as="h2">
  <Icon name="code" />
  <Header.Content>BACK-END WEB DEVELOPMENT</Header.Content>
</Header>
<Divider/>
<p>In back-end development im specialize in NodeJS and Spring mircoservices, Learning new framworkslike python dijango</p>
<ul>
  <li>splitting the back-end into separate domains and microservices,</li>
  <li>cooperation with APIs, remote data synchronizations, cloud servers, asynchronous workers</li>
  <li>using different types of databases (like PostgreSQL, MySQL,)</li>
  <li>Experience in SPA(single page application) load Optimization with concepts like Lazy loading , tree shaking, SSR(server side rendering)</li>
  <li>dividing the servers into different machine nodes / docker containers; database sharding; load balancing</li>
</ul>
<Header as='h2' icon>
      <Header.Content>4</Header.Content>      
    <Header.Subheader>
     Applications
    </Header.Subheader>
  </Header>
  <Divider/>
  <Header as="h2">
  <Icon name="code" />
  <Header.Content>DEV OPS</Header.Content>
</Header>
<Divider/>
<p>In Dev OPS , with good knowleadge of linux im specialize in configuring and deploying application</p>
<ul>
  <li>launching, deployment and monitoring the app after the release</li>
 <li>Used service like AWS, GCLOUD, Digital Ocean</li>
</ul>
<Header as='h2' icon>
      <Header.Content>4</Header.Content>      
    <Header.Subheader>
     Applications
    </Header.Subheader>
  </Header>
    </Container>
    </Segment>
      </Grid.Column>)
}

export default MyOffer;