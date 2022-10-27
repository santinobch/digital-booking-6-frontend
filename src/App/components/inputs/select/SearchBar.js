import React from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ciudades = [
  { label: "San Carlos de Bariloche", value: "San Carlos de Bariloche" },
  { label: "Buenos Aires", value: "Buenos Aires" },
  { label: "Mendoza", value: "Mendoza" },
  { label: "Córdoba", value: "Córdoba" }
];

export const SearchBar = () => {
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
      />
    </div>
  );
};

