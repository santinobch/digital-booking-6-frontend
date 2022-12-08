import "./select.module.scss";

import Select from "react-select";

export const SelectInput = ({name}) => {

  return (
        <Select 
          name={name}
          placeholder=""
          options=""
        />
  );
};
