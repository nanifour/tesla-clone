import React, { useState } from 'react'
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';    //react hook

function Header() {

    //Create Use State for hamburger menu open and close
    const [burgerOpen, setburgerOpen] = useState(false); //status is closed
    const cars = useSelector(selectCars);
    console.log(cars);

    return (
        <div>
            <Container>
                {/*logo link */}
                <a>
                    <img src="./images/logo.svg" alt="logo" />
                </a>
                {/* menu */}
                <Menu>
                    {/* if cars and cars.map give it a car*/}
                    {cars && cars.map((car, index) =>(
                        <a key={index} href="#">{car}</a> 
                    ))}   
                    <a href="#">Solar Roof</a>
                    <a href="#">Solar Panels</a>
                    
                </Menu>

                {/* right menu */}
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Tesla Account</a> 

                    <CustomMenu onClick={()=>setburgerOpen(true)} />  
                </RightMenu>

                {/* burger nav menu */}
                <BurgerNav show={burgerOpen}>  {/* show if burger is open or not*/}

                    {/* custom div to push the close menu to the right */}
                    <CloseWrapper>
                        <CustomClose onClick={()=>setburgerOpen(false)}/> {/* when clicked, set burger to close */}
                    </ CloseWrapper>

                    <li><a href="#">Existing Inventory</a></li> 
                    <li><a href="#">Used Inventory</a></li> 
                    <li><a href="#">Trade-In</a></li> 
                    <li><a href="#">CyberTruck</a></li> 
                    <li><a href="#">Roadster</a></li> 
                    <li><a href="#">Semi</a></li> 
                    <li><a href="#">Existing Inventory</a></li> 
                    <li><a href="#">Charging</a></li> 
                    <li><a href="#">Powerwall</a></li> 
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">Utilities</a></li> 
                    <li><a href="#">Test Drive</a></li> 
                    <li><a href="#">Find Us</a></li> 
                    <li><a href="#">Support</a></li>  
                    <li><a href="#">United States</a></li> 
                </BurgerNav>


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
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        color: black;
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
        text-transform: uppercase;
        margin-right: 10px;
        color: black;

        @media (max-width: 1198px) {
        display: none;
    }
    }

`
//menu hamburger
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;

`


//close hambuger nav
const CustomClose = styled(CloseIcon)`
    cursor: pointer;

`

//burger nav original orientation
const BurgerNav = styled.div `
    font-weight: 500;
    list-style: none;
    background-color: white;
    position: fixed; //always on the top right side
    top: 0;
    bottom: 0;
    right: 0;
    width: 310px;
    z-index: 10;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    overflow-y: auto;

    transform: ${ props => props.show ? 'translateX(0)' : 'translateX(100%)' }; //if its false, movve menu to the right and if its true then do not move menu
    transition: transform 0.2s;

    ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
    }

    li{
        padding: 14px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        text-transform: uppercase;
    }

    a{
        color: black;
        font-size: 16px;
    }

`

//push burger menu x to the right
const CloseWrapper = styled.div `
    display: flex;
    justify-content: flex-end;
`


