import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInput = styled.input`
  align-self: center;
`;

const StyledTextarea = styled.textarea`
  align-self: center;
`;

const StyledLabel = styled.label`
  align-self: center;
`;

const StyledLegend = styled.legend`
  align-self: center;
`;

const StyledButtonSubmit = styled.button`
  align-self: center;
  background-color: var(--color-nemo);
`;

export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataNewEntry = Object.fromEntries(formData);
    console.log(dataNewEntry);
    handleNewEntry(dataNewEntry);
    event.target.reset();
    event.target.formInput.focus();
  }
  return (
    <StyledForm aria-labelledby="formLegend">
      <StyledLegend id="formlegend">Create new Entry here</StyledLegend>

      <StyledLabel htmlFor="formInput">Motto</StyledLabel>
      <StyledInput type="text" id="formInput" name="formInput" required />

      <StyledLabel htmlFor="formTextarea">Notes</StyledLabel>
      <StyledTextarea
        id="formTextarea"
        name="formTextarea"
        rows="6"
        required
      ></StyledTextarea>

      <StyledButtonSubmit type="submit">Create</StyledButtonSubmit>
    </StyledForm>
  );
}
