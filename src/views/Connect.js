import React from 'react';
import { Grid, Segment,Container, Header, Responsive } from 'semantic-ui-react'
const Connect = () => {
    return(<Grid.Column stretched  largeScreen={12}  mobile={16} largeScreen={12}>
       <Segment  basic color="black">
          <Container fluid>
      <Header as='h1'>My Offer</Header>
     
      <p>

      </p>
    </Container>
    </Segment>
      </Grid.Column>)
}

export default Connect;