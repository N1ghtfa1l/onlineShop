import React from "react";
import { Card, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Type } from "../../types/type";
import "./BrandBar.css";
import { setSelectedBrand } from "../../store/slices/SelectedSlices";

const BrandBar = () => {
  const deviceBrand = useSelector(
    (state: RootState) => state.deviceType.deviceBrand
  );
  const selectBrand = useSelector(
    (state: RootState) => state.selected.selectedBrand
  );
  const dispatch = useDispatch();

  return (
    <Row className="brandRow">
      {deviceBrand.map((brand: Type) => (
        <Card
          className={
            brand.id === selectBrand?.id
              ? "brandCard brandCardActive"
              : "brandCard"
          }
          onClick={() => dispatch(setSelectedBrand(brand))}
          key={brand.id}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
};

export default BrandBar;
