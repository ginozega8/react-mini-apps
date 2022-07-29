import styled from "styled-components"
import { NavLink as Link } from "react-router-dom" //React router dom for building UI with multiple different pages

export const Nav = styled.nav` 
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
` 

export const NavLink = styled(Link)` 
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 2rem;
height: 100%;
cursor: pointer;

&:active {
    color: #15cdfc;
}
` 
export const NavMenu = styled.div` 
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
` 

