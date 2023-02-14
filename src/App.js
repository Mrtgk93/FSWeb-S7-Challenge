import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Form from "./Form";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100vw;
  background-color: black;
  color: white;
`;
const FDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const ScButton = styled.button`
  background-color: azure;
  border-radius: 16px;
  width: 100px;
  height: 30px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

const FooterButton = styled.button`
  margin-top: 5vh;
  width: 30vw;
  height: 50px;
  background-color: white;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;
const ScFooter = styled.footer`
  background-color: black;
  height: 15vh;
`;
const divStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
};
const FP1 = styled.p`
  font-size: 20px;
  margin: 0;
`;

const Sch1 = styled.h1`
  width: 500px;
`;
const DivCard = styled.div`
  height: 40vh;
  width: 21vw;
  background-color: white;
  color: black;
  border-radius: 30px;
  margin-top: 2vh;
`;
const A = styled.a`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const CImg = styled.img`
  box-sizing: border-box;
  width: 21vw;
  height: 20vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const CardButton = styled.button`
  width: 160px;
  height: 30px;
  border-radius: 20px;
  &:hover {
    background-color: #505061;
    color: white;
  }
  cursor: pointer;
`;

const App = () => {
  const [siparis, setSiparis] = useState([
    /*  {
      isim: "",
      boyut: "",
      malzeme1: "false",
      malzeme2: "false",
      malzeme3: "false",
      malzeme4: "false",
      özel: "",
    }, */
  ]);
  function siparisEkle(eklenenSiparis) {
    const yeniSiparis = [...siparis, eklenenSiparis];
    setSiparis(yeniSiparis);
  }
  console.log(siparis);
  return (
    <Div>
      <BrowserRouter>
        <div style={divStyle}>
          <img
            src="	https://cdn-icons-png.flaticon.com/256/5965/5965340.png"
            height="70px"
            width="70px"
          />
          <Sch1>Teknolojik Yemekler</Sch1>
          <div>
            <Link to="/">
              <ScButton id="order-pizza">Ana Sayfa</ScButton>
            </Link>

            <Link to="/pizza">
              <ScButton>Sipariş Formu</ScButton>
            </Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <main>
              <div>
                <A>
                  <DivCard>
                    <div>
                      <CImg src="	https://cdn.dpeurasia.com/dms/images/product/TR__T611_434x404.jpg" />
                    </div>
                    <br />
                    Orta Boy Pizzalar
                    <div>
                      <br />
                      124 TL <br />
                      <br />
                      "den başlayan fiyatlarla
                      <br />
                      <br />
                      <CardButton>Sipariş Ver</CardButton>
                    </div>
                  </DivCard>
                  <DivCard>
                    <div>
                      <CImg src="https://cdn.dpeurasia.com/dms/images/product/TR__T0425_434x404.jpg" />
                    </div>
                    <br />
                    Büyük Boy Bol Malzemos
                    <div>
                      <br />
                      129 TL <br />
                      <br />
                      "den başlayan fiyatlarla
                      <br />
                      <br />
                      <CardButton>Sipariş Ver</CardButton>
                    </div>
                  </DivCard>
                  <DivCard>
                    <div>
                      <CImg src="https://cdn.dpeurasia.com/dms/images/product/TR__T0442_434x404.jpg" />
                    </div>
                    <br />2 Adet Pizetta
                    <div>
                      <br />
                      59 TL <br />
                      <br />
                      "den başlayan fiyatlarla
                      <br />
                      <br />
                      <CardButton>Sipariş Ver</CardButton>
                    </div>
                  </DivCard>
                  <DivCard>
                    <div>
                      <CImg src="https://cdn.dpeurasia.com/dms/images/product/TR__T0353_434x404.jpg" />
                    </div>
                    <br />2 Orta Boy Pizza
                    <div>
                      <br />
                      150 TL <br />
                      <br />
                      "den başlayan fiyatlarla
                      <br />
                      <br />
                      <CardButton>Sipariş Ver</CardButton>
                    </div>
                  </DivCard>
                  <DivCard>
                    <div>
                      <CImg src="https://cdn.dpeurasia.com/dms/images/product/TR__T0475_434x404.jpg" />
                    </div>
                    <br />3 Orta Boy Bol Malzemos
                    <div>
                      <br />
                      240 TL <br />
                      <br />
                      "den başlayan fiyatlarla
                      <br />
                      <br />
                      <CardButton>Sipariş Ver</CardButton>
                    </div>
                  </DivCard>
                  <DivCard>
                    <div>
                      <CImg src="https://cdn.dpeurasia.com/dms/images/product/TR__T0406_434x404.jpg" />
                    </div>
                    <br />
                    Coca Cola Mucize Menü
                    <div>
                      <br />
                      269 TL <br />
                      <br />
                      "den başlayan fiyatlarla
                      <br />
                      <br />
                      <CardButton>Sipariş Ver</CardButton>
                    </div>
                  </DivCard>
                  <DivCard>
                    <div>
                      <CImg src="https://cdn.dpeurasia.com/dms/images/product/TR__T0446_434x404.jpg" />
                    </div>
                    <br />
                    Pizetta + Bol <br /> Peynirli Ekmek
                    <div>
                      74 TL <br />
                      <br />
                      "den başlayan fiyatlarla
                      <br />
                      <br />
                      <CardButton>Sipariş Ver</CardButton>
                    </div>
                  </DivCard>
                  <DivCard>
                    <div>
                      <CImg src="	https://cdn.dpeurasia.com/dms/images/product/TR__T882_434x404.jpg" />
                    </div>
                    <br />
                    2 Adet Çikolatalı <br /> Sufle
                    <div>
                      74 TL <br />
                      <br />
                      "den başlayan fiyatlarla
                      <br />
                      <br />
                      <CardButton>Sipariş Ver</CardButton>
                    </div>
                  </DivCard>
                </A>
              </div>
            </main>
          </Route>

          <Route exact path="/pizza">
            <Form handleSubmitCallBack={siparisEkle} />
          </Route>
        </Switch>
      </BrowserRouter>

      <ScFooter>
        <FDiv>
          <FooterButton>
            <FP1>Promosyon Kodu</FP1>
          </FooterButton>
          <FooterButton>
            <FP1>Pizza Takip</FP1>
          </FooterButton>
          <FooterButton>
            <FP1>Kampanyalar</FP1>
          </FooterButton>
        </FDiv>
      </ScFooter>
    </Div>
  );
};
export default App;
