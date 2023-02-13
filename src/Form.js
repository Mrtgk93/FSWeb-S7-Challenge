import { useState } from "react";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  isim: Yup.string()
    .required("İsim alanı zorunludur")
    .min(2, "İsim en az 2 karakter olmalıdır"),
});

export default function Form(props) {
  const { handleSubmitCallBack } = props;
  const [data, setData] = useState({
    isim: "",
    boyut: "",
    malzeme1: false,
    malzeme2: false,
    malzeme3: false,
    malzeme4: false,
    özel: "",
  });

  const [errors, setErrors] = useState({
    isim: "",
    boyut: "",
    malzeme1: false,
    malzeme2: false,
    malzeme3: false,
    malzeme4: false,
    özel: "",
  });

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

  function changeHandlerName(e) {
    let valueToUse =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    checkFormErrors(e.target.name, valueToUse);
    setData({
      ...data,
      [e.target.name]: valueToUse,
    });
    console.log(e.target.value);
  }
  console.log(errors);

  function handleSubmit(event) {
    event.preventDefault();
    return handleSubmitCallBack(data);
  }

  return (
    <div>
      <form id="pizza-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Siparişinizi Oluşturun</legend>
          <p>
            <label>
              İsim:
              <input
                onChange={changeHandlerName}
                type="text"
                name="isim"
                data-cy="dataisim"
                id="name-input"
              />
            </label>
          </p>
          {errors.isim !== "" && <div>{errors.isim}</div>}
          <p>
            <label>
              Pizza Boyutu:
              <select name="boyut" id="dropdown" onChange={changeHandlerName}>
                <option value={"Seciniz"}>Seciniz</option>
                <option name="max" value={data.value}>
                  Büyük
                </option>
                <option value={data.value}>Orta</option>
                <option value={data.value}>Küçük </option>
              </select>
            </label>
          </p>
          <p>
            <label>Sosis</label>
            <input
              onChange={changeHandlerName}
              type="checkbox"
              name="malzeme1"
            />
          </p>
          <p>
            <label>Sucuk</label>
            <input
              onChange={changeHandlerName}
              type="checkbox"
              name="malzeme2"
            />
          </p>
          <p>
            <label>Mantar</label>
            <input
              onChange={changeHandlerName}
              type="checkbox"
              name="malzeme3"
            />
          </p>
          <p>
            <label>Biber</label>
            <input
              onChange={changeHandlerName}
              type="checkbox"
              name="malzeme4"
            />
          </p>
          <p>
            <label>Özel Seçim:</label>
            <input
              onChange={changeHandlerName}
              type="text"
              id="special-text"
              name="özel"
            />
          </p>
          <button type="submit" data-cy="datasubmit" id="order-button">
            Siparişlere Ekle
          </button>
        </fieldset>
      </form>
    </div>
  );
}
