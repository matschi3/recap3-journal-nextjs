import styled from "styled-components";

const StyledButtonDelete = styled.button`
  position: absolute; //to relative entrysArticle
  top: 35px;
  right: 1px;
`;

export default function ButtonDelete({ entry, handleDelete }) {
  return (
    <StyledButtonDelete
      onClick={() => {
        handleDelete(entry.id);
        console.log("delete?", entry.id);
      }}
    >
      Delete!
    </StyledButtonDelete>
  );
}
