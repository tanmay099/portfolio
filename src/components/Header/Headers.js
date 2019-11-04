import React, { useState } from 'react'
import { Grid, Menu, Image ,Icon ,  Header, Responsive, Segment, Button ,Dropdown , List} from 'semantic-ui-react'
import '../Header/header.css'
import profilepic from '../../assets/img/pro.jpg'

import { useHistory} from 'react-router-dom'
import {
 
  Link
 
} from "react-router-dom";

export default  Headers = () => {
  const [activeItem , setActiveItem ] = useState('home')
  const [openM, setOpenM] = useState(false);
  let history = useHistory();
   function toggleFunc(){  
     console.log('open value',openM);
     return setOpenM(!openM)
     
   }
  function handleItemClick(e, { name }){
    
    setActiveItem(name)
    return  history.push( name === ('home' || 'pro') ? "/" : "/" + name)
}

 

    return (
      <Responsive as={Grid.Row} stretched  maxWidth={767} width={16}>
 <Menu attached='top' fluid vertical>
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
             
            <Menu.Item>
              
              
            </Menu.Item>
         
        </Menu>
      
      <Responsive as={Grid.Column} className="header-desktop"  minWidth={768} stretched width={4}>
        <div className="header-class">
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
          </Responsive>
          </Responsive>
      

        
    
    )
  }
