import React, { FC } from "react";
import { Col, Dropdown, Modal, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Type } from "../../types/type";
import "./CreateDeviceModal.css";
import { useState } from "react";
import { createDevice } from "../../http/deviceApI";
interface Props {
  show: boolean;
  onHide: () => void;
}
interface InfoItem {
  title: string;
  description: string;
  number: number;
}

const CreateDeviceModal: FC<Props> = ({ show, onHide }) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [file, setFile] = useState<any>(null);
  const [brand, setBrand] = useState<any>(null);
  const [type, setType] = useState<any>(null);
  const changeInfo = (key: any, value: any, number: any) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };
  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", brand?.id);
    formData.append("typeId", type?.id);
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((data) => onHide());
    console.log(formData);
  };
  const handleDeviceType = (selected: Type) => {
    setType(selected);
  };
  const handleDeviceBrand = (selected: Type) => {
    setBrand(selected);
  };
  const selectFile = (e: any) => {
    setFile(e.target.files[0]);
  };
  const deviceType = useSelector(
    (state: RootState) => state.deviceType.deviceType
  );
  const deviceBrand = useSelector(
    (state: RootState) => state.deviceType.deviceBrand
  );
  const [info, setInfo] = useState<InfoItem[]>([]);
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number: number) => {
    setInfo(info.filter((i: InfoItem) => i.number !== number));
  };

  return (
    <Modal show={show} size="lg" centered>
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="createDeviceForm">
          <Dropdown>
            <Dropdown.Toggle>{type?.name || "Выберите тип"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {deviceType.map((el: Type) => (
                <Dropdown.Item onClick={() => handleDeviceType(el)} key={el.id}>
                  {el.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>{brand?.name || "Выберите бренд"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {deviceBrand.map((el: Type) => (
                <Dropdown.Item
                  onClick={() => handleDeviceBrand(el)}
                  key={el.id}
                >
                  {el.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            placeholder="Введите название устройства"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            type="number"
            placeholder="Введите стоимость  устройства"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Form.Control type="file" onChange={selectFile} />
          <Button onClick={addInfo}>Добавить новое свойство</Button>
          {info.map((el: InfoItem) => (
            <Row key={el.number}>
              <Col md={4}>
                <Form.Control
                  value={el.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, el.number)
                  }
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={el.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, el.number)
                  }
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button onClick={() => removeInfo(el.number)}>Удалить</Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Закрыть
        </Button>
        <Button onClick={addDevice} variant="primary">
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDeviceModal;
