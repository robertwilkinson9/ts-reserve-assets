import styled from "styled-components";
import { Label, Radio } from "./InputStyles";
import { RadioButtonOption } from "./InputInterface";

const Wrapper = styled.div`
   display: flex;
   gap: 0.5rem;
   align-items: center;
`;

const RadioButton = ({
   label, 
   disabled = false, 
   key = null,
}: RadioButtonOption) => {
   return (
       <Wrapper key={key}>
          <input 
             type="radio" 
             id={id} 
             disabled={disabled} 
          />
          <Label htmlFor={id} disabled={disabled}>{label}</Label>
       </Wrapper>
   );
};

export default RadioButton;
