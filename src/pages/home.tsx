import React, { useEffect } from "react";

import { Grid, Segment, Header, Container, Button } from "semantic-ui-react";
import Link from "next/link";

const Home = () => {
  useEffect(() => {});
  return (
    <Grid.Column stretched className="home" mobile={16} largeScreen={12}>
      <Segment className="home-container" basic color="black">
        <Container className="home-tagline" text>
          <Header className="tagline" as="h1">
            Hi, I'm Tanmay
            <Header.Content as="p">
              A Software Developer specialized in front-end and back-end web
              development
            </Header.Content>
          </Header>
        </Container>
        <Container as="div" className="home-tagline-button" text>
          <Link href="/projects">
            <Button size={"big"} as="a" inverted color="black">
              Portfolio
            </Button>
          </Link>
          <Link href="/myoffer">
            <Button
              as={"a"}
              className={"home-my-offer-button"}
              size={"big"}
              inverted
              color="black"
            >
              My offer
            </Button>
          </Link>
        </Container>
      </Segment>
    </Grid.Column>
  );
};

export default Home;
