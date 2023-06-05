{ /*

I think that this should work as in the demo at 
https://codesandbox.io/s/custom-radio-button-group-cu5f4l?file=/src/components/inputs/RadioButtonGroup.tsx

However, my buttons do not work - I think it is something to do with 

create-react-app -> vite change??

I changed src/main.tsx to use this instead of App ands it did not work either ... :-(

I will look at another way to sort out my buttons

*/ }

import { useEffect, useState } from "react";
import styled from "styled-components";
import RadioButtonGroup from "./inputs/RadioButtonGroup.tsx";

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  min-height: 10vh;
`;

export const Testapp = () => {
  const drinks = [
    {
      label: "Coffee",
      name: "button-types"
    },
    {
      label: "Tea",
      name: "button-types"
    }
  ];

  const [selectedValue, setSelectedValue] = useState<string>(drinks[0].label);

  function radioGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
  }

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  return (
    <PageLayout>
      <RadioButtonGroup
        label="Select your drink:"
        options={drinks}
        onChange={radioGroupHandler}
      />
    </PageLayout>
  );
};

export default Testapp;
