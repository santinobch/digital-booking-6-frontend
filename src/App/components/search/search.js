import "./search.scss";

import Button from "../../components/button/button";
import Datepicker from "../datepicker/datepicker";
import { SelectSearch } from "../inputs/select/SearchBar";
import { useState } from "react";

const DATE_FORMAT = "YYYY-MM-DD";

const Search = ({ onChange }) => {
  const [inputValue, setInputValue] = useState({
    ciudad: "",
    category: "",
    fecha: [],
  });

  function handleChange(data = {}) {
    const { name, value } = data;
    setInputValue({ ...inputValue, [name]: value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const { fecha = [], ciudad } = inputValue;
    const [fechaInicio, fechaFin] = fecha;

    let data = { ciudad };

    if (fechaInicio && fechaFin) {
      data = {
        ...data,
        fechaInicio: fechaInicio.format(DATE_FORMAT),
        fechaFin: fechaFin.format(DATE_FORMAT),
      };
    }
    onChange(data);
  }

  return (
    <div className="mainSearch">
      <div>
        <h1>Busca ofertas en hoteles, casas y mucho más</h1>
      </div>
      <form className="formSearch" onSubmit={handleSubmit}>
        <SelectSearch onChange={handleChange} home={true} />
        <Datepicker value={inputValue.fecha} onChange={handleChange} />
        <Button className="btnSearch" type="Submit" styleBtn="dark">
          BUSCAR
        </Button>
      </form>
    </div>
  );
};

export default Search;
