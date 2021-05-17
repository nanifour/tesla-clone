import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import Footer from "./Footer"

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            {/* Model Y Section*/}
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"      
            /> 
            {/* Model 3 Section*/}
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"            
            /> 
            {/* Model X Section*/}
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"              
            /> 
            {/* Solar Panel Section*/}
            <Section 
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"              
            /> 
            {/* Solar Roof Section*/}
            <Section 
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"             
            /> 
            {/* Accessories Section*/} 
            <Section 
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            /> 
            <Footer />
            
        </Container>
    )
}

export default Home

{/* Style this specific div in js instead of css*/}

const Container = styled.div`
    height: 100vh;

`

