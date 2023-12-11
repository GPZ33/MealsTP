import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    return (
        <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         <Link to ="/"><Navbar.Brand>Home</Navbar.Brand></Link> 
          <Nav className="me-auto">
            <Link to ='/meals' className="link"><Navbar>Tous nos recettes  </Navbar></Link>
            <Link to ='/category' className="link"><Navbar>Catégories des recettes  </Navbar></Link>
            <Link to ='/localisation' className="link"><Navbar>D'où viennent nos recettes  </Navbar></Link>
            <Link to ='/ingredient' className="link"><Navbar>Nos ingrédients </Navbar></Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
    );
    
};
export default Header;