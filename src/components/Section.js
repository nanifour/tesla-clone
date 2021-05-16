import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

{ /* unpacking (object destructuring) the object by adding it to the function */}
function Section({title, description, leftBtnText, rightBtnText, backgroundImg, leftBtnColor}) {
    return (
        <Wrap bgImage = {backgroundImg} >  {/* pass in background image */}
            
            {/* fade text */}
            <Fade bottom delay={1}>
                <ItemText>
                    {/* was props.title before unpacking */}
                    <h1> {title} </h1>
                    <p> {description}</p>
                </ItemText>
            </Fade>

            <BottomContainer> 

            <Fade bottom>
                <ButtonGroup>
                    <Fade left delay={2}>
                        <LeftButton> {leftBtnText} </LeftButton>
                    </Fade>
                    {/*if right button exists then put it beside the left button */}
                    <Fade right delay={2}>
                        {rightBtnText && 
                        <RightButton> 
                            {rightBtnText}
                        </RightButton>
                        } 
                    </Fade>
                </ButtonGroup>
            </Fade>

            <Fade bottom>
                <DownArrow src ="/images/down-arrow.svg" />
            </Fade>
            </BottomContainer>

        </Wrap>
    )
}

export default Section


/* Styled Componenets */
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;  //vertical
    align-items: center; 
    background-image: ${props => `url("/images/${props.bgImage}")`} ; //pass in background image property
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

 /* Button components: display flex - left to right*/
const ButtonGroup = styled.div `
    display: flex;
    margin-bottom: 30px;
    //wrap buttons on smaller screen
    @media (max-width: 599px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div `
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.93; 
    margin: 8px; 
    cursor: pointer;
    //background-color: ${props => props.btnColor || "black"} ;
`
/* Right Button inherit left button*/
const RightButton = styled(LeftButton) `
    background-color: rgba(255,255,255,0.7);
    color: black;
`

/* Bouncing Down Arrow */
const DownArrow = styled.img `
    height: 25px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
` 

/* container to keep arrows and buttons closer together because the wrap is styles space-between */

const BottomContainer = styled.div `

`