import React, { useState, useEffect } from 'react'

import { Grid, Menu, Image ,Icon ,  Header, Responsive, Segment, Button ,Dropdown , List, Sidebar, Divider, GridColumn} from 'semantic-ui-react'
import profilepic from '../../assets/img/pro.jpg'

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
    var element = document.getElementById("nav");
    element.classList.toggle('on');
 }
  function handleItemClick(e, { name }){
    
    setActiveItem(name)
    return  history.push( name === ('home' || 'pro') ? "/" : "/" + name)
}

    return(<Grid.Column mobile={16}  className="header-mobile" >
        <Menu mobile={16} fluid vertical  >
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
               className="nav-menu-item"
               children={<Grid.Column>
                 <Icon onClick={myFunction} inverted color="black" name='bars' />
               <List link  relaxed="very" id="nav" >
       <List.Item className="nav-link">
         
         <List.Content floated="right" onClick={handleItemClick}>
           <List.Header  to="/aboutme" as={Link}>AboutMe</List.Header>
         </List.Content>
       </List.Item>
       <List.Item className="nav-link">
        
         <List.Content floated="right"   onClick={handleItemClick}>
           <List.Header to="/projects"  as={Link}>Projects</List.Header>
         </List.Content>
       </List.Item>
       <List.Item className="nav-link">
         <List.Content floated="right"   onClick={handleItemClick}>
           <List.Header to="/blog" as={Link}>Blog</List.Header>
         </List.Content>
       </List.Item>
       <List.Item className="nav-link">
         <List.Content floated="right"  onClick={handleItemClick}>
           <List.Header to="/connect" as={Link}>Connect</List.Header>
         </List.Content>
       </List.Item>
     </List></Grid.Column>
               }>
                 
                 
               </Menu.Item>
            
           </Menu></Grid.Column>)
}

export default HeaderMobile;