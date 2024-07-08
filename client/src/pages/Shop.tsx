import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TypeBar from "../component/TypeBar/TypeBar";
import "../css/Shop.css";
import BrandBar from "../component/BrandBar/BrandBar";
import DeviceList from "../component/DeviceList/DeviceList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceApI";
import {
  setAllDevice,
  setDeviceBrand,
  setDeviceType,
  clearDevices,
} from "../store/slices/ShopCollection";
import { Device, Type } from "../types/type";
import PaginationPage from "../component/Pagination/PaginationPage";
import { setCurrentPageTotalCount } from "../store/slices/pageSlices";

const Shop = () => {
  const deviceType = useSelector(
    (state: RootState) => state.deviceType.deviceType
  );
  const deviceBrand = useSelector(
    (state: RootState) => state.deviceType.deviceBrand
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (deviceType.length === 0) {
      fetchTypes().then((data) => {
        data.forEach((type: Type) => {
          dispatch(setDeviceType(type));
        });
      });
    }
  }, [deviceType, dispatch]);
  
  useEffect(() => {
    if (deviceBrand.length === 0) {
      fetchBrands().then((data) => {
        data.forEach((brand: Type) => {
          dispatch(setDeviceBrand(brand));
        });
      });
    }
  }, [deviceBrand, dispatch]);

  const currentPage = useSelector(
    (state: RootState) => state.currentPage.currentPage
  );

  const limit = useSelector(
    (state: RootState) => state.currentPage.currentPageLimit
  );
  const selectedType = useSelector(
    (state: RootState) => state.selected.selectedType
  );
  const selectedBrand = useSelector(
    (state: RootState) => state.selected.selectedBrand
  );

  useEffect(() => {
    dispatch(clearDevices());
    fetchDevices(
      selectedType ? selectedType.id : null,
      selectedBrand ? selectedBrand.id : null,
      currentPage,
      limit
    ).then((data) => {
      data.rows.forEach((device: Device) => {
        dispatch(setAllDevice(device));
      });
      dispatch(setCurrentPageTotalCount(data.count));
    });
  }, [selectedType, selectedBrand, limit, currentPage, dispatch]);

  return (
    <Container>
      <Row className="shopRow">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <PaginationPage />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
