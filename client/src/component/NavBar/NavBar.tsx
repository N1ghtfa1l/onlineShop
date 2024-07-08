import React, { useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth, setUser } from "../../store/slices/AuthUserSlices";
import { useNavigate } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.authUser.auth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setIsAuth(true));
      dispatch(setUser("user"));
    }
  }, [dispatch]);

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(setUser(""));
    dispatch(setIsAuth(false));
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={SHOP_ROUTE}>
          <Navbar.Brand>На главную</Navbar.Brand>
        </Link>
        {isAuth ? (
          <div>
            <Button onClick={() => navigate(ADMIN_ROUTE)} className="adminPanel">
              Админ панель
            </Button>
            <Button onClick={logOut}>Выйти</Button>
          </div>
        ) : (
          <Button onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
