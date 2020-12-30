import React, { useState, useEffect } from "react";
import { Grid, Menu, Image, Icon, Header, Responsive } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

const HeaderMobile = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [openM, setOpenM] = useState(false);
  const headerToggle = useState(false);

  useEffect(() => {
    console.log(screen.width);
    console.log(Responsive.onlyMobile.maxWidth > screen.width);
  });
  let history = useRouter();
  function toggleFunc() {
    console.log("open value", openM);
    return setOpenM(!openM);
  }

  function onlinkClick(link) {
    window.location.href = link;
  }
  function myFunction() {
    var element = document.getElementById("menu");
    element.classList.toggle("on");
  }
  function handleItemClick(e, { name }) {
    setActiveItem(name);
    return history.push(name === ("home" || "pro") ? "/" : "/" + name);
  }

  return (
    <Grid.Column mobile={16} className="header-mobile">
      <Menu mobile={16} fluid vertical className="menu-main">
        <Menu.Item
          children={
            <div className="menu-top-item">
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
          fitted="vertically"
          active={activeItem === "home"}
          onClick={handleItemClick}
        ></Menu.Item>
        <Menu.Item
          fitted="vertically"
          className="nav-menu-item"
          children={
            <div id="menu">
              <div className="mobile_nav_top">
                <div className="mobile_nav_left">
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
                </div>
                <div onClick={myFunction} className="mobile_nav_right">
                  <Icon name="bars" size="large" />
                </div>
              </div>
              <div id="list">
                <ul>
                  <li id="list_item_1" className="menu_list">
                    {/* <Link href="/myoffer">
                      <a>My offer</a>
                    </Link> */}
                  </li>
                  <li className="menu_list">
                    {/* <Link href="/projects">
                      <a>Projects</a>
                    </Link> */}
                  </li>
                  <li className="menu_list">
                    {/* <Link href="/connect">
                      <a>Connect</a>
                    </Link> */}
                  </li>
                  <li className="menu_list">
                    <a
                      href="https://drive.google.com/file/d/19nZLrD2H9XfAfWFG2ew2sZP-5JV_-O8Z/view?usp=sharing"
                      className="download_cv_form"
                    >
                      DownlandCV
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          }
        ></Menu.Item>
      </Menu>
    </Grid.Column>
  );
};

export default HeaderMobile;
