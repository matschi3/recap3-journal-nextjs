import styled from "styled-components";
import Container from "./Container";
import ButtonBookmark from "./ButtonBookmark";
import ButtonDelete from "./ButtonDelete";

const StyledArticle = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99vw;
`;

const StyledParagraph = styled.p`
  width: 75vw;
`;

export default function Entries({ entries, handleBookmark, handleDelete }) {
  return (
    <Container direction="column" align="center">
      {entries.map((entry) => (
        <StyledArticle key={entry.id}>
          <StyledParagraph>{entry.date}</StyledParagraph>
          <StyledParagraph>{entry.title}</StyledParagraph>
          <StyledParagraph>{entry.text}</StyledParagraph>
          <ButtonBookmark
            entry={entry}
            id={entry.id}
            handleBookmark={handleBookmark}
          />
          <ButtonDelete entry={entry} handleDelete={handleDelete} />
        </StyledArticle>
      ))}
    </Container>
  );
}
