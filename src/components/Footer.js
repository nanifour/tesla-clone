import React from 'react';
import styled from "styled-components";

function Footer() {
    return (
        <div>
            <Container>
            <Menu>
                    {/* footer menu*/}
                    <a href="#">Tesla © 2021</a>
                    <a href="#">Privacy & Legal</a>
                    <a href="#">Contact</a>
                    <a href="#">Careers</a>
                    <a href="#">Get Newsletter</a>
                    <a href="#">News</a>
                    <a href="#">Forums</a>
                    <a href="#">Locations</a>
                    
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

    a{
        font-weight: 500;
        font-size: 13px;
        padding: 0 10px;
        flex-wrap: nowrap;

    }

`



