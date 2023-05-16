import styled from "styled-components";
import { InputElementProps } from "./InputInterface";
import { Label, Radio } from "./InputStyles";
// import { DisabledIcon } from "src/styled-components/Icons";

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const RadioButton = ({ label, id, disabled, ...rest }: InputElementProps) => {
  return (
    <Wrapper>
      <Radio id={id} type="radio" disabled={disabled} {...rest} />
      <Label htmlFor={id} disabled={disabled}>
        <span>{label}</span>
        {/* disabled && <DisabledIcon small /> */}
      </Label>
    </Wrapper>
  );
};

export default RadioButton;
