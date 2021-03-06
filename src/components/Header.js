import React, { useState } from 'react'
import styled from "styled-components";
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';    //react hook
import logo from '../assets/images/logo.svg';
import LanguageIcon from '@material-ui/icons/Language';


function Header() {

    //Create Use State for hamburger menu open and close
    const [menuOpen, setmenuOpen] = useState(false); //status is closed
    const cars = useSelector(selectCars);
    console.log(cars);

    return (
        <div>
            <Container>


                <a href="/Home">
                    <img alt="logo" src={logo}></img>
                </a> 
                {/* menu */}
                <Menu>
                    {/* if cars and cars.map give it a car*/}
                    {cars && cars.map((car, index) =>(
                        <a key={index} href="#/">{car}</a> 
                    ))}   
                    <a href="#/">Solar Roof</a>
                    <a href="#/">Solar Panels</a>
                    
                </Menu>

                {/* right menu */}
                <RightMenu>
                    
                    <a class="right-menu" href="#/">Shop</a>
                    <a class="right-menu" href="#/">Account</a> 

                    <CustomMenu onClick={()=>setmenuOpen(true)}>  
                        Menu
                    </CustomMenu>

                </RightMenu>

                {/* burger nav menu */}
                <MenuNav show={menuOpen}>  {/* show if burger is open or not*/}

                    {/* custom div to push the close menu to the right */}
                    <CloseWrapper>
                        <div class="close-button">
                            <CustomClose style={{ fontSize: 30 }} onClick={()=>setmenuOpen(false)}/> {/* when clicked, set burger to close */}
                        </div>
                    </ CloseWrapper>

                    <div className="toggleList">

                        <CarList>     
                        {/* if cars and cars.map give it a car*/}
                        {cars && cars.map((car, index) =>(
                            <li><a key={index} href="#/">{car}</a></li>
                        ))} 
                        <li><a href="#/">Solar Roof</a></li>
                        <li><a href="#/">Solar Panels</a></li>
                        </CarList>

                        <li><a href="#/">Existing Inventory</a></li> 
                        <li><a href="#/">Used Inventory</a></li> 
                        <li><a href="#/">Trade-In</a></li> 
                        <li><a href="#/">CyberTruck</a></li> 
                        <li><a href="#/">Roadster</a></li> 
                        <li><a href="#/">Semi</a></li> 
                        <li><a href="#/">Charging</a></li> 
                        <li><a href="#/">Powerwall</a></li> 
                        <li><a href="#/">Commercial Energy</a></li>
                        <li><a href="#/">Utilities</a></li> 
                        <li><a href="#/">Test Drive</a></li> 
                        <li><a href="#/">Find Us</a></li> 
                        <li><a href="#/">Support</a></li>  
                        <li><a href="#/"><LanguageIcon/>United States</a></li> 

                    </div>
                    
                </MenuNav>


            </Container>
        </div>
    )
}

export default Header


const Container = styled.div `
    min-height: 60px;
    z-index: 1;
    position: fixed; //put on top of backgroung image (always on top)
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0; //stick it to the top
    left: 0; //stick it to the left
    right: 0; //stick it to the right
    justify-content: space-between;
    img{
        cursor: pointer;
    }

`
//middle menu
const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1; //full weight
    margin-left: 100px;

    a{
        font-weight: 600;
        font-size: 15px;
        padding: 9px 18px;
        flex-wrap: nowrap;
        color: black;

        &:hover {
            background-color: rgba(23,26,30,0.07);
            border-radius: 15px;
        }
    }

    @media (max-width: 1200px) {
        display: none;
    }


`
//right menu
const RightMenu = styled.div `
    display: flex;
    align-items: center;

    a{
        color: black;
        font-weight: 600;
        font-size: 16px;
        margin-right: 13px;
        padding: 9px 13px;

        @media (max-width: 1199px) {
        display: none;
        }

        &:hover {
            background-color: rgba(23,26,30,0.07);
            border-radius: 13px;
        }

    }


`

//right opening menu
const CustomMenu = styled.div`
    color: black;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    padding: 9px 13px;  

    &:hover {
            background-color: rgba(23,26,30,0.07);
            border-radius: 15px;
        }

    @media (max-width: 1199px) {
        background-color: rgba(23,26,30,0.07);
        border-radius: 15px;
    }

`

//add cars as when screen size gets smaller
const CarList = styled.div`

    @media (min-width: 1199px) {
        display: none;
    }

`



//close hambuger nav
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    
    

`

//burger nav original orientation
const MenuNav = styled.div `
    font-weight: 600;
    list-style: none;
    background-color: white;
    position: fixed; //always on the top right side
    top: 0;
    bottom: 0;
    right: 0;
    width: 25rem;
    z-index: 10;
    padding: 10px;
    display: flex;
    flex-direction: column;
    text-align: start;
    overflow-y: auto;


    transform: ${ props => props.show ? 'translateX(0)' : 'translateX(100%)' }; //if its false, move menu to the right and if its true then do not move menu
    transition: transform 0.7s;


    .toggleList{
        margin-top: 20px;
        margin-left: 12px;
        margin-bottom: 100px;

    }

    li{
        padding: 9px 40px ;
        padding-left: 15px;

        &:hover {
            background-color: rgba(23,26,30,0.07);
            border-radius: 15px;
            transition: 1s ease-in;
        }

    }

    a{
        color: #3b3e43;
        font-size: 14px;

    }

    
 
  

`

//push burger menu x to the right
const CloseWrapper = styled.div `
    display: flex;
    justify-content: flex-end;

    .close-button{
        padding: 8px 8px 4px 8px;

        &:hover {
            background-color: rgba(23,26,30,0.07);
            border-radius: 50%;
        }
    }


`


