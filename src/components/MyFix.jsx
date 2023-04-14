import logo from '../Spotify_Logo.png'
import { Container, Button, Col, Form, FormControl } from "react-bootstrap";

const MyFix = () => {
    return (

        <Col sm={2} style={{ zIndex: 1 }}>
            <nav className="navbar-dark bg-black vh-100 sticky-sm-top py-3 px-3">
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
                    <FormControl type="search" placeholder="Search" aria-label="Search" className="" />
                    <Button variant="outline-light" type="submit">GO</Button>
                </Form>
            </nav>
            <div className='d-flex flex-column fixed-bottom py-3 px-3' style={{ width: 220 }}>
                
                <Button variant="light" type="submit">Sign up</Button>
               
                <Button variant="outline-light" type="submit">Login</Button>
                
               
                <div className='d-flex text-light'>
                    <div className="p-2">
                        <a className="nav-link" href="#">
                            Cookie Policy
                        </a>
                    </div>
                    <div className="p-2">
                    <a className="nav-link" href="#">
                            Privacy
                        </a>
                    </div>
                </div>

            </div>

        </Col>

    );
}
export default MyFix;
