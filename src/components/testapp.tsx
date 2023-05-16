import { useState } from "react";

import RadioButtonGroup from "./inputs/RadioButtonGroup";

export const Testapp = () => {
  const drinks = [
     {
       label: "Coffee",
       name: "drink-types",
     },
     {
       label: "Tea",
       name: "drink-types",
     },
  ];

  const [selectedValue, setSelectedValue] = useState<String>(drinks[0].label); 
     
  function drinkSelectionHandler(event: React.ChangeEvent<HTMLInputElement>) {
     setSelectedValue(event.target.value);
  }
     
  console.log(`selected value is ${selectedValue}`);
   return (
      <RadioButtonGroup
         label="Select your drink:"
         options={drinks}
         onChange={drinkSelectionHandler}
      />
   );
};
    
export default Testapp;
