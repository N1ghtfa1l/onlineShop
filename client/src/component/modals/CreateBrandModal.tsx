import React, { FC } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBrand } from "../../http/deviceApI";
import { setDeviceBrand } from "../../store/slices/ShopCollection";

interface Props {
  show: boolean;
  onHide: () => void;
}

const CreateBrandModal: FC<Props> = ({ show, onHide }) => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  const addBrand = () => {
    createBrand({ name: value }).then((data) => {
      setValue("");
      dispatch(setDeviceBrand(data));
      onHide();
    });
  };
  return (
    <Modal show={show} size="lg" centered>
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Введите название бренда..."
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Закрыть
        </Button>
        <Button onClick={addBrand} variant="primary">
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrandModal;
