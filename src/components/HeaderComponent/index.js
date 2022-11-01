import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logoEBA from "../../assets/images/logoEBA.jpg";

export default function Header() {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([]);

  return (
    <HeaderBody>
      <img src={logoEBA} alt="logoEBA" />
      <Menu>
        <MenuButton>HOME</MenuButton>
        <MenuButton>SOBRE</MenuButton>
        <MenuButton>PORTIFÓLIO</MenuButton>
        <MenuButton>BLOG</MenuButton>
        <MenuButton>CONTATOS</MenuButton>
      </Menu>
    </HeaderBody>
  );
}

const HeaderBody = styled.div`
  width: 100%;
  height: 60px;
  justify-content: space-between;
  display: flex;
  background-color: #000;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0px;
  left: 0px;

  h2 {
    font-family: "Trocchi", serif;
    font-size: 40px;
    color: rgba(255, 255, 255, 1);
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  height: 100%;
`;
const MenuButton = styled.button`
  color: #ffffff;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-family: "Trocchi", serif;
  font-size: 12px;
  width: 100px;
  border: none;
  background-color: #000;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  :hover {
    background-color: #e50b8a;
  }

  :after {
    content: "";
    background: #fff;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  :active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;
