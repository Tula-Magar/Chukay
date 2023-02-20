import React, {useState} from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  
  const [expanded, setExpanded] = useState(false);
  return (
    <> 
        <Navbar expand="md"  expanded={expanded}>
            <Container className='pt-3'>
                <Navbar.Brand className='text-white' as={NavLink} to="/">My Website</Navbar.Brand>
                <Navbar.Toggle className='bg-white' onClick={() => setExpanded(expanded ? false : true)} />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                    <Nav.Link className='text-white' as={NavLink} to="/Chukay" onClick={() => setExpanded(false)}>
                        Home
                    </Nav.Link>
                    <Nav.Link className='text-white' as={NavLink} to="/about" onClick={() => setExpanded(false)}>
                        About
                    </Nav.Link>
                    <Nav.Link className='text-white' as={NavLink} to="/contact" onClick={() => setExpanded(false)}>
                        Contact
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <hr/>
  </>
  )
}

export default NavBar;
