import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { callApi } from "../Utitlies/callAPI";

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry" },
];

const MultipleSelect = () => {
  const [tags, setTagsList] = useState([]);
  const [selected, setSelected] = useState([]);

  const getTags = async () => {
    const tagsData = await callApi("/tags", "get");
    setTagsList(tagsData);
  };
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
