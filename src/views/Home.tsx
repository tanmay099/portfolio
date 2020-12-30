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
          {/* <Button
            size={"big"}
            as={Link}
            href="/projects"
            inverted
            color="black"
            children={}
          ></Button> */}
          <Link href="/projects">
            <a>Portfolio</a>
          </Link>
          <Link href="/myoffer">
            <a>My offer</a>
          </Link>

          {/* <Button
            as={Link}
            href="/myoffer"
            className={"home-my-offer-button"}
            size={"big"}
            inverted
            color="black"
            children={<a>My offer</a>}
          ></Button> */}
        </Container>
      </Segment>
    </Grid.Column>
  );
};

export default Home;
