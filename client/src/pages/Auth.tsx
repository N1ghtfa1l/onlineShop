import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import "../css/Auth.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { registration } from "../http/userAPI";
import { login } from "../http/userAPI";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsAuth, setUser } from "../store/slices/AuthUserSlices";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        const data = await login(email, password);
      } else {
        const data = await registration(email, password);
      }
      dispatch(setIsAuth(true));
      dispatch(setUser("user"));
      navigate(SHOP_ROUTE);
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };
  return (
    <Container className="authContainer">
      <Card className="authCard">
        <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="authForm">
          <Form.Control
            className="authInput"
            placeholder="Введите ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="authInput"
            placeholder="Введите ваш пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="authRow">
            {isLogin ? (
              <div>
                <Link to={REGISTRATION_ROUTE}> Регистрация</Link>
              </div>
            ) : (
              <div>
                Есть аккаунт? <Link to={LOGIN_ROUTE}> Войдите</Link>
              </div>
            )}
            <Button className="authBtn" onClick={click}>
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
