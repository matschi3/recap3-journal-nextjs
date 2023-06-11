import { useRouter } from "next/router";
import Link from "next/link";
import Container from "./Container";
import ButtonBookmark from "./ButtonBookmark";
import ButtonDelete from "./ButtonDelete";
import StyledArticle from "./StyledArticle";
import StyledParagraph from "./StyledParagraph";

export default function CategoryPage({ entries }) {
  const router = useRouter();
  const { categorySlug } = router.query;

  const filteredEntries = entries.filter(
    (entry) => entry.category === categorySlug
  );

  return (
    <>
      <Link href="/">← back</Link>
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
    </>
  );
}
