import { Dropdown } from "bootstrap";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Form from "./Form";

const App = () => {
  const [siparis, setSiparis] = useState([
    {
      isim: "",
      boyut: "",
      malzeme1: "false",
      malzeme2: "false",
      malzeme3: "false",
      malzeme4: "false",
      özel: "",
    },
  ]);
  function siparisEkle(eklenenSiparis) {
    const yeniSiparis = [...siparis, eklenenSiparis];
    setSiparis(yeniSiparis);
  }
  console.log(siparis);
  return (
    <BrowserRouter>
      <h1>Teknolojik Yemekler</h1>
      <Link to="/">
        <button id="order-pizza">Ana Sayfa</button>
      </Link>
      <Link to="/pizza">
        <button>Sipariş Formu</button>
      </Link>

      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/pizza">
          <Form handleSubmitCallBack={siparisEkle} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
