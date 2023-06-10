import styled from "styled-components";
import Container from "./Container";
import ButtonBookmark from "./ButtonBookmark";

const StyledArticle = styled.article`
  position: relative;
`;

export default function Entries({ entries, handleBookmark }) {
  return (
    <Container direction="column" align="center">
      {entries.map((entry) => (
        <StyledArticle key={entry.id}>
          <p>{entry.date}</p>
          <p>{entry.title}</p>
          <p>{entry.text}</p>
          <ButtonBookmark
            entry={entry}
            id={entry.id}
            handleBookmark={handleBookmark}
          />
        </StyledArticle>
      ))}
    </Container>
  );
}
