import styled from "styled-components";
import { Legend } from "./InputStyles";
import { IOptionGroup, IOption } from "./InputInterface";
import RadioButton from "./RadioButton";

const Fieldset = styled.fieldset`
  border: none;
`;

const Wrapper = styled.div`
   display: grid;
   gap: 1rem;
   padding: 0.5rem;
`;

{ /*
               value={label}
               label={label} 
               key={id}
*/ }

const RadioButtonGroup = ({ label, options, onChange }: IOptionGroup) => {

   function renderOptions(){
      return options.map(({label, value, name, disabled }: IOption, index) => {
         const shortenedOptionLabel = label.replace(/\s+/g, "");
         const optionId = `radio-option-${shortenedOptionLabel}`;
         console.log(`label is ${label}, name is ${name}, value is ${value}`);
         return (         
            <RadioButton
               value={value}
               label={label} 
               key={optionId}
               id={optionId}
               name={name}
               disabled={disabled}
               defaultChecked={index === 0}
               onChange={onChange}
            />
         );
      });
   }
   return (
      <Fieldset>
         <Legend>{label}</Legend>
         <Wrapper>
            {renderOptions()}
         </Wrapper>         
      </Fieldset>
   );
};

export default RadioButtonGroup;
