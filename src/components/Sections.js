import React from 'react'
import styled from "styled-components"
import Fade from "react-reveal/Fade"

function Sections({title, description, leftBtnText, rightBtnText, backgroundImg, midBtnText}) {
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
                    {leftBtnText &&
                        <LeftButton> 
                            {leftBtnText} 
                            </LeftButton>
                    }
                    </Fade>
                    {/*if right button exists then put it beside the left button */}
                    <Fade right delay={2}>
                        {rightBtnText && 
                        <RightButton > 
                            {rightBtnText}
                        </RightButton>
                        } 
                    </Fade>

                    {/*middle button for accessories*/}
                    <Fade right delay={2}>
                        {midBtnText && 
                        <MidButton > 
                            {midBtnText}
                        </MidButton>
                        } 
                    </Fade>
                </ButtonGroup>
            </Fade>

            </BottomContainer>

        </Wrap>
    )
}

export default Sections




/* Styled Componenets */
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;  //vertical
    align-items: center; 
    background-image: ${props => `url("images/${props.bgImage}")`} ; //pass in background image property
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

    h1{
        font-size: 42px;
        font-weight: 600;
    }

    p{
        font-size: 14px;
        font-weight: 500;
        color: #5E5C61;
    }
`

 /* Button components: display flex - left to right*/
const ButtonGroup = styled.div `
    display: flex;
    margin-bottom: 50px;
    //wrap buttons on smaller screen
    @media (max-width: 599px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div `
    background-color: rgba(23,26,30,0.9);
    height: 40px;
    width: 256px;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.9; 
    margin: 8px; 
    cursor: pointer;
    //background-color: ${props => props.btnColor || "black"} ;
`
/* Right Button inherit left button*/
const RightButton = styled(LeftButton) `
    background-color: rgba(255,255,255,0.7);
    color: black;
`

/*button for accessories black */
const MidButton = styled(LeftButton)`
    background-color: black;
    color: white;
    margin: 50px; 
    opacity: 1;
`

/* container to keep arrows and buttons closer together because the wrap is styles space-between */

const BottomContainer = styled.div `

`

