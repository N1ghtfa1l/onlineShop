import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "../css/Admin.css";
import CreateBrandModal from "../component/modals/CreateBrandModal";
import CreateDeviceModal from "../component/modals/CreateDeviceModal";
import CreateTypeModal from "../component/modals/CreateTypeModal";

const Admin = () => {
const [brandVisible, setBrandVisible]= useState<boolean>(false)
const [typeVisible, setTypeVisible]= useState<boolean>(false)
const [deviceVisible, setDeviceVisible]= useState<boolean>(false)


  return (
    <Container className="adminContainer">
      <Button onClick={()=> setTypeVisible(true)}>Добавить тип</Button>
      <Button onClick={()=> setBrandVisible(true)}>Добавить бренд</Button>
      <Button onClick={()=> setDeviceVisible(true)}>Добавить устройство</Button>
      <CreateBrandModal show={brandVisible} onHide={()=>setBrandVisible(false)} />
      <CreateDeviceModal show={deviceVisible} onHide={()=>setDeviceVisible(false)} />
      <CreateTypeModal show={typeVisible} onHide={()=>setTypeVisible(false)} />
    </Container>
  );
};

export default Admin;
