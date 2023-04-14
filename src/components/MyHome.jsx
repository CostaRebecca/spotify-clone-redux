import MyAlbum from "./MyAlbum";
import {Col } from "react-bootstrap";

const MyHome = () => {
  return (
    <>
    <Col sm={10} className="pt-5">
    <MyAlbum/>
    <MyAlbum/>
    <MyAlbum/>
    </Col>
</>
  );
}

export default MyHome; 

