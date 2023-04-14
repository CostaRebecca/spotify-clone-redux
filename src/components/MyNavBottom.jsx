import { Container, Nav } from "react-bootstrap"


const MyNavBottom = () => {
    return (


        <Container>
            <Nav className="justify-content-center fixed-bottom" activeKey="/home" style={{ zIndex: 0 }}>
            <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>

        </Container>


    );
}

export default MyNavBottom;