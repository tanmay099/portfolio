import React, { lazy, useState, useEffect, Suspense } from 'react'
import { Grid, Menu, Image ,Icon ,  Header, Responsive, Segment} from 'semantic-ui-react'
import '../../../public/assets/css/header.css'

import { useHistory} from 'react-router-dom'

export default  Headers = () => {
  const [activeItem , setActiveItem ] = useState('home')
  const [openM, setOpenM] = useState(false);
  

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
    console.log(name)
    setActiveItem(name)
    return  history.push( name ==='home' ? "/" : "/" + name)
}
function handleFile(){
  return <form action={cv}>
  <input className=" downloadcv" type="submit" value="DownloadCV"></input>
</form>
}
 

    return (
      <Grid.Column className={"header-desktop"} stretched mobile={0} largeScreen={4} widescreen={4}>
        <div className="header-class 
        ">
          <Menu fluid vertical tabular>
          <Menu.Item
              children={<div>
              <Image src={'https://i.pinimg.com/564x/dd/77/5c/dd775ced9dd88ed013acb09604582c80.jpg'} className="profilePic" centered size={"small"} circular/> 
              <Header className="myname" as='h2' textAlign="center">
             
              Tanmay Sharma
              <Header.Subheader>
                Full-Stack Developer
              </Header.Subheader>
            </Header>
            
            </div>}
              name='home'
              fitted="horizontally"
              active={activeItem === 'home'}
              onClick={handleItemClick}
            >
     
            </Menu.Item>
          {/* <Menu.Item
              name='aboutme'
              active={activeItem === 'aboutme'}
              onClick={handleItemClick}
            /> */}
            <Menu.Item
            className="menu_item_desk"
              name='projects'
              active={activeItem === 'projects'}
              onClick={handleItemClick}
            />
            <Menu.Item
            className="menu_item_desk"
              name='myoffer'
              active={activeItem === 'myoffer'}
              onClick={handleItemClick}
            />
            <Menu.Item
            className="menu_item_desk"
              name='connect'
              active={activeItem === 'connect'}
              onClick={handleItemClick}
            />
             <Menu.Item className="menu_item_desk" >
             <a href="https://drive.google.com/fileaction={cv}/d/1Re1slryhQeag1FucD2IIT3HrUnxA2Yt5/view?usp=sharing" className="downloadcv" >DownlandCV</a>
             </Menu.Item>
            
          </Menu>
          <Segment basic textAlign="left">
          <a href="https://www.facebook.com/tanmay09.sharma"><Icon  name="facebook" size='large'></Icon> </a>
                  <a  href="https://twitter.com/Tanmay099" >  <Icon name="twitter" size='large' ></Icon></a>
                  <a href="https://www.instagram.com/tanmay099/"> <Icon name="instagram" size='large' size='large'> </Icon></a>
                  <a href="https://github.com/tanmay099" >  <Icon name="github" size='large'></Icon></a>
                  <a href="https://www.linkedin.com/in/tanmay-sharma-5423a69b" > <Icon name="linkedin" size='large' > </Icon></a>

          </Segment>
          </div>
          
        </Grid.Column>
      
    
        
      

        
    
    )
  }
