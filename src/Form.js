import { useEffect, useState } from "react";
import * as Yup from "yup";
import styled from "styled-components";

const SiparisButton = styled.button`
  width: 40vw;
  height: 40px;
  background-color: #14b351;
  color: white;
  cursor: pointer;
  border-radius: 50px;
  font-size: 18px;

  &:hover {
    background-color: lightblue;
  }
`;
const IconImg = styled.img`
  margin-right: 5px;
`;
const inputStyle = {
  width: "15vw",
};

const fieldStyle = {
  width: "50vw",
  height: 680,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "black",
  color: "white",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const formSchema = Yup.object().shape({
  isim: Yup.string()
    .required("İsim alanı zorunludur")
    .min(2, "İsim en az 2 karakter olmalıdır"),
  boyut: Yup.string().required("lütfen seçiniz"),
  kenar: Yup.string(),
  hamur: Yup.string(),
  /*  malzeme1: Yup.bool(),
  malzeme2: Yup.bool(),
  malzeme3: Yup.bool(),
  malzeme4: Yup.bool(), */
  özel: Yup.string(),
});

export default function Form(props) {
  const { handleSubmitCallBack } = props;
  const [data, setData] = useState({
    isim: "",
    boyut: "",
    kenar: "",
    hamur: "",
    malzeme1: [],
    /*  malzeme2: false,
    malzeme3: false,
    malzeme4: false, */
    özel: "",
  });

  const [errors, setErrors] = useState({
    isim: "",
    boyut: "",
    kenar: "",
    hamur: "",
    malzeme1: false,
    /*   malzeme2: false,
    malzeme3: false,
    malzeme4: false, */
    özel: "",
  });

  const [dismi, setDismi] = useState(true);
  useEffect(() => {
    setDismi(
      errors.isim !== "" || errors.boyut !== "" || errors.malzeme1 !== ""
    );
  }, [data]);

  const checkFormErrors = (name, value) => {
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  };

  function handleTextChange(e) {
    const { name, value } = e.target;

    checkFormErrors(name, value);
    setData({
      ...data,
      [name]: value,
    });
  }

  function changeHandlerName(e) {
    const { value } = e.target;
    let yeniMalzeme = null;
    if (data.malzeme1.includes(value)) {
      yeniMalzeme = data.malzeme1.filter((d) => d !== value);
    } else {
      yeniMalzeme = [...data.malzeme1, value];
      /*  console.log(e.target.value); */
    }
    /* console.log(errors); */

    if (yeniMalzeme.length < 2) {
      setErrors({
        ...errors,
        malzeme1: "en az 2 adet seçmelisiniz",
      });
    } else {
      setErrors({
        ...errors,
        malzeme1: "",
      });
    }
    setData({
      ...data,
      malzeme1: yeniMalzeme,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    /*  let input1 = document.getElementById("name-input").value;
    let input2 = document.getElementById("dropdown").value;

    if (input1 == "" || input2 == "Seciniz") {
      alert("Lütfen tüm alanları doldurun.");
      return false; // Formu gönderme
    } else {
      
    } */
    return handleSubmitCallBack(data);
  }

  return (
    <div>
      <form style={formStyle} id="pizza-form" onSubmit={handleSubmit}>
        <fieldset style={fieldStyle}>
          <legend>Siparişinizi Oluşturun</legend>
          <p>
            <label>
              İsim:
              <input
                style={inputStyle}
                onChange={handleTextChange}
                type="text"
                name="isim"
                data-cy="dataisim"
                id="name-input"
              />
            </label>
          </p>
          {errors.isim !== "" && (
            <div style={{ color: "red" }}>{errors.isim}</div>
          )}
          <p>
            <IconImg
              className="boyut-icon"
              src="	https://cdn.dpeurasia.com/dms/images/icon/sizes.png"
              alt="sizes"
              width="20"
            />
            <label>
              Pizza Boyutu:
              <select name="boyut" id="dropdown" onChange={handleTextChange}>
                <option value={"Seciniz"}>Seciniz</option>
                <option name="max" id="1" value={"Büyük"}>
                  Büyük
                </option>
                <option id="2" value={"Orta"}>
                  Orta
                </option>
                <option id="3" value={"Küçük"}>
                  Küçük{" "}
                </option>
              </select>
            </label>
          </p>
          {errors.boyut !== "" && <div>{errors.boyut}</div>}
          <p>
            <IconImg
              className="kenar-icon"
              src="https://cdn.dpeurasia.com/dms/images/icon/sides.png"
              alt="sizes"
              width="20"
            />
            <label>
              Kenar Tipi:
              <select name="kenar" id="kenar" onChange={handleTextChange}>
                <option value={data.value}>Klasik Kenar</option>
                <option name="max" value={data.value}>
                  Sarımsak Kenar
                </option>
                <option value={data.value}>Sucuk Kenar</option>
              </select>
            </label>
          </p>
          <p>
            <IconImg
              className="hamur-icon"
              src="	https://cdn.dpeurasia.com/dms/images/icon/doughs.png"
              alt="sizes"
              width="20"
            />
            <label>
              Hamur Tipi:
              <select name="hamur" id="hamur" onChange={handleTextChange}>
                <option value={data.value}>Klasik Hamur</option>
                <option name="max" value={data.value}>
                  İnce Hamur
                </option>
              </select>
            </label>
          </p>
          Ekstra Malzeme:
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80px",
              height: "200px",
              alignItems: "flex-start",
              marginTop: "5px",
              marginLeft: "10px",
            }}
          >
            <p>
              <label>
                <input
                  onChange={changeHandlerName}
                  type="checkbox"
                  name="malzeme1"
                  checked={data.malzeme1.includes("sosis")}
                  value="sosis"
                  id="malzemeler"
                />
                Sosis
              </label>
            </p>

            <p>
              <label>
                <input
                  onChange={changeHandlerName}
                  type="checkbox"
                  name="malzeme1"
                  value="sucuk"
                  checked={data.malzeme1.includes("sucuk")}
                  data-cy="datasucuk"
                  id="malzemeler"
                />
                Sucuk
              </label>
            </p>

            <p>
              <label>
                <input
                  onChange={changeHandlerName}
                  type="checkbox"
                  name="malzeme1"
                  value="mantar"
                  checked={data.malzeme1.includes("mantar")}
                  data-cy="datamantar"
                  id="malzemeler"
                />
                Mantar
              </label>
            </p>
            <p>
              <label>
                <input
                  onChange={changeHandlerName}
                  type="checkbox"
                  name="malzeme1"
                  value="biber"
                  id="malzemeler"
                  checked={data.malzeme1.includes("biber")}
                />
                Biber
              </label>
            </p>
          </div>
          {errors.malzeme1 && (
            <span style={{ color: "red" }}>{errors.malzeme1}</span>
          )}
          <p>
            <label>
              Özel Seçim:
              <br />
              <textarea
                onChange={handleTextChange}
                rows="8"
                cols="30"
                type="text"
                id="special-text"
                name="özel"
              />
            </label>
          </p>
          <SiparisButton
            disabled={dismi}
            type="submit"
            data-cy="datasubmit"
            id="order-button"
          >
            Siparişlere Ekle
          </SiparisButton>
        </fieldset>
      </form>
    </div>
  );
}
