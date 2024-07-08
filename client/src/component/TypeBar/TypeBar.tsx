import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Type } from "../../types/type";
import { setSelectedType } from "../../store/slices/SelectedSlices";

const TypeBar = () => {
  const deviceType = useSelector(
    (state: RootState) => state.deviceType.deviceType
  );
  const selectedType = useSelector(
    (state: RootState) => state.selected.selectedType
  );
  const dispatch = useDispatch();

  return (
    <ListGroup>
      {deviceType.map((el: Type) => (
        <ListGroup.Item className="selectBtn"
          onClick={() => dispatch(setSelectedType(el))}
          active={el.id === selectedType?.id}
          key={el.id}
        >
          {el.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TypeBar;
