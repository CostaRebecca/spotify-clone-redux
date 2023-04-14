import { Container, Nav } from "react-bootstrap"


const MyNav = () => {
    return (
        
        <Container>
            <Nav className="justify-content-center fixed-top bg-dark" activeKey="/home" style={{zIndex:0}}>
                <Nav.Item>
                    <Nav.Link href="/home">TRENDING</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">PODCAST</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">MOODS AND GENRES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">NEW RELEASES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">DISCOVER</Nav.Link>
                </Nav.Item>
            </Nav>
            
        </Container>
       
        
    );
}
export default MyNav;