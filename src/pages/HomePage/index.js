import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/HeaderComponent";
import bannerHome from "../../assets/images/bannerHome.png";

export default function HomePage() {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([]);

  return (
    <>
      <Header />
      <Body>
        <Top>
          <img src={bannerHome} alt="" />
          <TextBanner></TextBanner>
        </Top>
      </Body>

      <Products></Products>
    </>
  );
}

const Products = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;
const Top = styled.div`
  width: 100%;
  height: 900px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
  }
`;

const TextBanner = styled.div`
  width: 60%;
  height: 16%;
  background-color: #fff;
  position: absolute;
  z-index: 1;
  top: 140px;
  right: 0px;

  @media screen and (max-width: 700px) {
    top: 100px;
    height: 13%;
  }

  img {
    width: 100%;
  }
`;
