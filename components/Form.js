import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input``;

const StyledTextarea = styled.textarea``;

const StyledLabel = styled.label``;

const StyledLegend = styled.legend``;

const StyledButtonSubmit = styled.button`
  background-color: var(--color-nemo);
`;

export default function Form({ handleNewEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataNewEntry = Object.fromEntries(formData);
    handleNewEntry(dataNewEntry);
    event.target.reset();
    event.target.formInput.focus();
  }
  return (
    <StyledForm onSubmit={handleSubmit} aria-labelledby="formLegend">
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
