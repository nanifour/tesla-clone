import React from 'react';
import styled from "styled-components";

function Footer() {
    return (
        <div>
            <Container>

                <Menu>
                    <ul>
                        {/* footer menu*/}
                        <li><a href="#/">Tesla © 2021</a></li>
                        <li><a href="#/">Privacy & Legal</a></li>
                        <li><a href="#/">Contact</a></li>
                        <li><a href="#/">Careers</a></li>
                        <li><a href="#/">Get Newsletter</a></li>
                        <li><a href="#/">Forums</a></li>
                        <li><a href="#/">Locations</a></li>
                    </ul>
                </Menu>

            </Container>
            
        </div>
    )
}

export default Footer

const Container = styled.div `
    min-height: 10px;
    z-index: 20;
    display: flex;
    align-items: center;
    //padding: 0 20px;
    bottom: 0; //stick it to the bottom
    left: 0; //stick it to the left
    right: 0; //stick it to the right
    justify-content: space-between;
    img{
        cursor: pointer;
    }

`

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1; 
    margin-top: -103px;

    ul{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }


    a{
        font-weight: 500;
        font-size: 13px;
        padding: 0 10px;
        //flex-wrap: nowrap;

    }

`



