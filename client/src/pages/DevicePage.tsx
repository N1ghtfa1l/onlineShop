import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "../css/DevicePage.css";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceApI";

const DevicePage = () => {
  const [device, setDevice] = useState({
    name: "",
    price: 0,
    rating: 0,
    img: "",
    info: [],
  });
  const { id } = useParams();
  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);
  return (
    <Container className="devicePageContainer">
      <Col md={4}>
        <Image
          className="devicePageImg"
          src={process.env.REACT_APP_API_URL + device.img}
        />
      </Col>
      <Col md={4}>
        <Row>
          <h2>{device.name}</h2>
        </Row>
      </Col>
      <Col md={4}>
        <Card className="devicePageCard">
          <h3>{device.price}</h3>
          <Button>Добавить в корзину</Button>
        </Card>
      </Col>
      <Row className="devicePageRow">
        <h1>Характеристики</h1>
        {device.info.map((info: any, index) => (
          <Row
            className="devicePageInfo"
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
