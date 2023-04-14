import logo from '../Spotify_Logo.png'
import { Container, Button, Col, Form, FormControl } from "react-bootstrap";

const MyFix = () => {
    return (
       
        <Col sm={2} style={{zIndex:1}}>
            <nav className="navbar-dark bg-dark vh-100 sticky-sm-top">
                <a className="navbar-brand" href="#home">
                    <img src={logo} alt='Logo' style={{ width: "130px", height: "40px" }} />
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#link">
                            Your library
                        </a>
                    </li>
                </ul>
                <Form className="d-flex" role="search">
                    <FormControl type="search" placeholder="Search" aria-label="Search" className="me-2" />
                    <Button variant="outline-success" type="submit">Search</Button>
                </Form>
            </nav>
            <div className='d-flex flex-column sticky-bottom'>
                <Button variant="light" type="submit">Sign up</Button>
                <Button variant="dark" type="submit">Login</Button>
                <ul className="navbar-nav text-light">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Cookie Policy
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Privacy
                        </a>
                    </li>
                </ul>
            </div>
            
        </Col>
        
    );
}
export default MyFix;
