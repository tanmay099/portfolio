import React, { useState, useEffect } from "react";
import {
  Grid,
  Menu,
  Image,
  Icon,
  Header,
  Responsive,
  Segment,
} from "semantic-ui-react";

import { useRouter } from "next/router";

const Headers = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [openM, setOpenM] = useState(false);

  useEffect(() => {
    console.log(screen.width);
    console.log(Responsive.onlyMobile.maxWidth > screen.width);
  });
  let history = useRouter();
  function toggleFunc() {
    console.log("open value", openM);
    return setOpenM(!openM);
  }
  function myFunction() {
    var element = document.getElementById("nav");
    element.classList.toggle("on");
  }
  function handleItemClick(e, { name }) {
    console.log(name);
    setActiveItem(name);
    return history.push(name === "home" ? "/" : "/" + name);
  }
  function handleFile() {
    return (
      <form>
        <input className=" downloadcv" type="submit" value="DownloadCV"></input>
      </form>
    );
  }

  return (
    <Grid.Column
      className={"header-desktop"}
      stretched
      //@ts-ignore
      mobile={0}
      largeScreen={4}
      widescreen={4}
    >
      <div
        className="header-class 
        "
      >
        <Menu fluid vertical tabular>
          <Menu.Item
            children={
              <div>
                <Image
                  src={
                    "https://i.pinimg.com/564x/dd/77/5c/dd775ced9dd88ed013acb09604582c80.jpg"
                  }
                  className="profilePic"
                  centered
                  size={"small"}
                  circular
                />
                <Header className="myname" as="h2" textAlign="center">
                  Tanmay Sharma
                  <Header.Subheader>Full-Stack Developer</Header.Subheader>
                </Header>
              </div>
            }
            name="home"
            fitted="horizontally"
            active={activeItem === "home"}
            onClick={handleItemClick}
          ></Menu.Item>
          {/* <Menu.Item
              name='aboutme'
              active={activeItem === 'aboutme'}
              onClick={handleItemClick}
            /> */}
          <Menu.Item
            className="menu_item_desk"
            name="projects"
            active={activeItem === "projects"}
            onClick={handleItemClick}
          />
          <Menu.Item
            className="menu_item_desk"
            name="myoffer"
            active={activeItem === "myoffer"}
            onClick={handleItemClick}
          />
          <Menu.Item
            className="menu_item_desk"
            name="connect"
            active={activeItem === "connect"}
            onClick={handleItemClick}
          />
          <Menu.Item className="menu_item_desk">
            <a
              href="https://drive.google.com/file/d/19nZLrD2H9XfAfWFG2ew2sZP-5JV_-O8Z/view?usp=sharing"
              className="downloadcv"
            >
              DownlandCV
            </a>
          </Menu.Item>
        </Menu>
        <Segment basic textAlign="left">
          <a href="https://www.facebook.com/tanmay09.sharma">
            <Icon name="facebook" size="large"></Icon>{" "}
          </a>
          <a href="https://twitter.com/Tanmay099">
            {" "}
            <Icon name="twitter" size="large"></Icon>
          </a>
          <a href="https://www.instagram.com/tanmay099/">
            {" "}
            <Icon name="instagram" size="large">
              {" "}
            </Icon>
          </a>
          <a href="https://github.com/tanmay099">
            {" "}
            <Icon name="github" size="large"></Icon>
          </a>
          <a href="https://www.linkedin.com/in/tanmay-sharma-5423a69b">
            {" "}
            <Icon name="linkedin" size="large">
              {" "}
            </Icon>
          </a>
        </Segment>
      </div>
    </Grid.Column>
  );
};
export default Headers;
