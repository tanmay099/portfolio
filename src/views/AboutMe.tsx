import React from "react";
import { Grid, Segment, Header, Container } from "semantic-ui-react";

const AboutMe = () => {
  return (
    <Grid.Column stretched width={12}>
      <Segment className="para-text" basic color="black">
        <Container textAlign="center">
          <Header as="h1">
            <Header.Content></Header.Content>
          </Header>
        </Container>
      </Segment>
    </Grid.Column>
  );
};

export default AboutMe;
