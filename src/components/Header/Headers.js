import React, { useState, useEffect } from 'react'
import { Grid, Menu, Image ,Icon ,  Header, Responsive, Segment, Button ,Dropdown , List, Sidebar, Divider, GridColumn} from 'semantic-ui-react'
import '../Header/header.css'
import profilepic from '../../assets/img/pro.jpg'

import { useHistory} from 'react-router-dom'
import { Link } from "react-router-dom";

export default  Headers = () => {
  const [activeItem , setActiveItem ] = useState('home')
  const [openM, setOpenM] = useState(false);
  const headerToggle = useState(false);

  useEffect(() => {
    console.log(screen.width)
    console.log(Responsive.onlyMobile.maxWidth > screen.width)
    
  });
  let history = useHistory();
   function toggleFunc(){  
     console.log('open value',openM);
     return setOpenM(!openM)
     
   }
   function myFunction() {
    var element = document.getElementById("nav");
    element.classList.toggle('on');
 }
  function handleItemClick(e, { name }){
    
    setActiveItem(name)
    return  history.push( name === ('home' || 'pro') ? "/" : "/" + name)
}

 

    return (
      <Grid.Column className={"header-desktop"} stretched  largeScreen={4} widescreen={4}>
        <div className="header-class 
        ">
          <Menu fluid vertical tabular>
          <Menu.Item
              children={<div><Image src={profilepic} className="profilePic" centered size={"small"} circular/>
              <Header as='h2' textAlign="center">
             
              Tanmay Sharma
              <Header.Subheader>
                Full-Stack Developer
              </Header.Subheader>
            </Header></div>}
              name='home'
              fitted="horizontally"
              active={activeItem === 'home'}
              onClick={handleItemClick}
            >
     
            </Menu.Item>
          <Menu.Item
              name='aboutme'
              active={activeItem === 'aboutme'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='projects'
              active={activeItem === 'projects'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='blog'
              active={activeItem === 'blog'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='connect'
              active={activeItem === 'connect'}
              onClick={handleItemClick}
            />
          </Menu>
          </div>
        </Grid.Column>
      
    
        
      

        
    
    )
  }
