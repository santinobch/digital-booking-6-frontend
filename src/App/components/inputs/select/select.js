import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

const ciudades = [
    { label: "San Carlos de Bariloche", value: "San Carlos de Bariloche" },
    { label: "Buenos Aires", value: "Buenos Aires" },
    { label: "Mendoza", value: "Mendoza" },
    { label: "Córdoba", value: "Córdoba" }
  ];

export const select = () => {
    const handleSelectChange = ({ value }) => {
      console.log(value);
    };
  
    return (
      <div>
        <Select
          placeholder={
            <div >
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
  