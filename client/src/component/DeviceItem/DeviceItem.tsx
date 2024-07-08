import React, { FC } from "react";
import { Device } from "../../types/type";
import { Card, Col, Image } from "react-bootstrap";
import "./DeviceItem.css";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../utils/consts";

interface DeviceEl {
  device: Device;
}

const DeviceItem: FC<DeviceEl> = ({ device }) => {
  const navigate = useNavigate();
  return (
    <Col md={3} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
      <Card className="deviceCard">
        <Image className="deviceImg" src={process.env.REACT_APP_API_URL + device.img} />
        <div className="deviceDescr">
          <div>Samsung</div>
          <div>
            <div>Рейтинг: {device.rating}</div>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
