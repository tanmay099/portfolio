import React, { useState, useEffect } from 'react'

import { Grid, Menu, Image ,Icon ,  Header, Responsive, Segment, Button ,Dropdown , List, Sidebar, Divider, GridColumn} from 'semantic-ui-react'
import profilepic from '../../../dist/assets/img/pro.jpg'

import { useHistory} from 'react-router-dom'
import { Link } from "react-router-dom";


const HeaderMobile = () => {
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
    var element = document.getElementById("menu");
    element.classList.toggle('on');
 }
  function handleItemClick(e, { name }){
    
    setActiveItem(name)
    return  history.push( name === ('home' || 'pro') ? "/" : "/" + name)
}

    return(<Grid.Column mobile={16}  className="header-mobile" >
        <Menu mobile={16} fluid vertical  >
    <Menu.Item
                 children={<div>
                   
                   <Image src={profilepic} className="profilePic" centered size={"small"} circular/>
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
               className="nav-menu-item"
               children={
                <div id="menu">
                <div className="mobile_nav_top" onClick={myFunction}>
                  <div className="mobile_nav_left">
                  <Icon  name="facebook" size='large'/> 
           <Icon  name="twitter" size='large'/> 
           <Icon  name="instagram" size='large'/> 
           <Icon  name="github" size='large'/> 
           <Icon  name="linkedin" size='large'/> 
                  </div>
                  <div className="mobile_nav_right">
                    <Icon name="bars" size="large" /></div>
                </div>
                <ul id="list">
                    <li className="menu_list" to="/aboutme" as={Link}>AboutMe
                   
                    </li>
                     <li className="menu_list" to="/projects" as={Link}>Projects
                     
                     </li>
                     <li className="menu_list" to="/connect" as={Link}>Connect
                    
                     </li>
                </ul>
            </div>
              }>

               </Menu.Item>
               </Menu>
     </Grid.Column>
           
           )
}

export default HeaderMobile;