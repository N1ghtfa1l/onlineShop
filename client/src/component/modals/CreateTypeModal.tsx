import React, { FC, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { createType } from "../../http/deviceApI";
import { useDispatch } from "react-redux";
import { setDeviceType } from "../../store/slices/ShopCollection";

interface Props {
  show: boolean;
  onHide: () => void;
}

const CreateTypeModal: FC<Props> = ({ show, onHide }) => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue("");
      dispatch(setDeviceType(data));
      onHide();
    });
  };

  return (
    <Modal show={show} size="lg" centered>
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder="Введите название типа..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={addType}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateTypeModal;
