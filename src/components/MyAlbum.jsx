/*import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";



const MyAlbum = () => {
    const [rockAlbums, setRockAlbums] = useState("queen");

    const URL = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=r';

    const fetchAlbums = async () => {
        const response = await fetch(URL);
        try {
            if (response.ok) {
                const data = await response.json();
                console.log("data : ", data);
                //setLoading(false);

            } else {
                console.log("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAlbums();
    }, []);
    return (
        <>
            <h1>My Album</h1>


        </>


    );
}

export default MyAlbum; */

import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const MyAlbum = () => {

    const [albums, setAlbums] = useState([]);

    const URL = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=p';

    const fetchAlbums = async () => {
        const response = await fetch(URL);
        try {
            if (response.ok) {
                const albums = await response.json();
                console.log("data : ", albums);

                const newAlbumsArr = [...albums.data].slice(0, 4);
                setAlbums(newAlbumsArr);
                //setLoading(false);

            } else {
                console.log("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    return (
        <div>
         <h1>My album</h1>
            <Row className="p-0 m-0">
                {albums.map((album, index) => (
                    <Col sm={3} key={index}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{album.title}</Card.Title>
                                <Card.Subtitle>{album.summary}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))};
            </Row> 
        </div>
    );

}
export default MyAlbum;


