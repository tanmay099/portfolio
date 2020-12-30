import React from "react";
import {
  Grid,
  Segment,
  Icon,
  Header,
  Container,
  Divider,
  List,
} from "semantic-ui-react";
const Connect = () => {
  return (
    <Grid.Column stretched largeScreen={12} mobile={16}>
      <Segment className="para-text" basic color="black">
        <Container textAlign="justified">
          <Header as="h1">
            <Icon name="terminal" />
            Let's Connect
          </Header>
          <Divider />
          <List>
            <List.Item>
              <Header as="a" href="https://www.instagram.com/tanmay099/">
                <Icon name="instagram" color="pink" />
                <Header.Content>tanmay099</Header.Content>
              </Header>
            </List.Item>
            <Divider />
            <List.Item>
              <Header as="a" href="https://github.com/tanmay099">
                <Icon name="github" color="grey" />
                <Header.Content>tanmay099</Header.Content>
              </Header>
            </List.Item>
            <Divider />

            <Header as="a" href="https://www.facebook.com/tanmay09.sharma">
              <Icon name="facebook" color="blue" />
              <Header.Content>Tanmay Sharma</Header.Content>
            </Header>
            <Divider />
            <Header as="h4">
              <Icon name="at" color="red" />
              <Header.Content>iam@tanmay099.com</Header.Content>
            </Header>
            <Divider />
            <Header as="a" href="https://twitter.com/Tanmay099">
              <Icon name="twitter" color="blue" />

              <Header.Content>tanmay099</Header.Content>
            </Header>
            <Divider />
            <Header
              as="a"
              href="https://www.linkedin.com/in/tanmay-sharma-5423a69b"
            >
              <Icon name="linkedin" />
              <Header.Content>Tanmay Sharma</Header.Content>
            </Header>
          </List>
        </Container>
      </Segment>
    </Grid.Column>
  );
};

export default Connect;
