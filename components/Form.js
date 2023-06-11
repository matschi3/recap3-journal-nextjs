import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  margin: 0.2rem;
`;

const StyledTextarea = styled.textarea`
  margin: 0.2rem;
`;

const StyledLabel = styled.label`
  margin: 0.2rem;
`;

const StyledLegend = styled.legend`
  margin: 0.2rem;
`;

const StyledButtonSubmit = styled.button`
  margin: 0.2rem;
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
      <StyledLegend id="formLegend">Create new Entry here</StyledLegend>

      <StyledLabel htmlFor="formCategory">Category</StyledLabel>
      <StyledInput type="text" id="formCategory" name="formCategory" required />

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
