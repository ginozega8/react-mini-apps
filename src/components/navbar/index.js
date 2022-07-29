import { Nav, NavLink, NavMenu} from "./NavbarElements";
import { AiFillDribbbleCircle } from "react-icons/ai";
function Navbar() {

  return (
    <>
        <Nav>
            <NavLink to="/">
                <AiFillDribbbleCircle className='nav-icon'/><h1 className='nav-title'>React mini-apps</h1>
            </NavLink>

            <NavMenu className={'nav-menu'}>
                <NavLink to="/palindrome" activeStyle>
                    Is a palindrome?
                </NavLink>
                <NavLink to="/cipher" activeStyle>
                    Rot13 Cipher
                </NavLink>
                <NavLink to="/roman_converter" activeStyle>
                    Roman Converter
                </NavLink>
                <NavLink to="/valid_cellphone" activeStyle>
                    Is a valid cellphone?
                </NavLink>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar