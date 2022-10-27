import React from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./SearchBarStyles.scss"

const ciudades = [
  { label: "San Carlos de Bariloche", value: "San Carlos de Bariloche", country: "Argentina" },
  { label: "Buenos Aires", value: "Buenos Aires", country: "Argentina" },
  { label: "Mendoza", value: "Mendoza", country: "Argentina" },
  { label: "Córdoba", value: "Córdoba", country: "Argentina" }
];

const formatOptionLabel = ({label, country}) => (
  <div style={{ display: "flex", alignItems: "center" }}>
      <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: "4px" }}
                />
    <div style={{display: "flex", flexDirection:"column", gap:"4px"}}>
      <p style={{marginBottom: '0px'}}>{label}</p>
      <p style={{ color: "#ccc", marginBottom: '0px' }}>{country}</p>
    </div>
  </div>
);

export const SelectSearch = () => {
  const handleSelectChange = ({ value }) => {
    console.log(value);
  };

  return (
    <div className="placeholder-select">
      <Select
        placeholder={
          <div className="SearchBar-container">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ marginRight: "4px" }}
            />
            ¿A dónde vamos?
          </div>
        }
        options={ciudades}
        onChange={handleSelectChange}
        formatOptionLabel={formatOptionLabel}
        
      />
    </div>
  );
};

