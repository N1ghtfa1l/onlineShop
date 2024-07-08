import React from "react";
import { Row } from "react-bootstrap";
import "./DeviceList.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Device } from "../../types/type";
import DeviceItem from "../DeviceItem/DeviceItem";

const DeviceList = () => {
  const allDevice = useSelector(
    (state: RootState) => state.deviceType.allDevice
  );

  return (
    <Row className="deviceRow">
      {allDevice.map((device: Device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
};

export default DeviceList;
