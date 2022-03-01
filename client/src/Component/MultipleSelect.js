import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { callApi } from "../Utitlies/callAPI";

const MultipleSelect = () => {
  const [tags, setTagsList] = useState([]);
  const [selected, setSelected] = useState([]);

  let options = [];

  tags.forEach((item) => {
    options.push({ label: item.name, value: item.name });
  });
  const getTags = async () => {
    const { metalist } = await callApi("/tag", "get");
    setTagsList(metalist);
    console.log(metalist);
  };
  useEffect(() => {
    getTags();
  }, []);

  return (
    <div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select Tags"
      />
    </div>
  );
};

export default MultipleSelect;
