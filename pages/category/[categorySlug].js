import { useRouter } from "next/router";
import Link from "next/link";
import Container from "@/components/Container";
import ButtonBookmark from "@/components/ButtonBookmark";
import ButtonDelete from "@/components/ButtonDelete";
import StyledArticle from "@/components/Entries";
import StyledParagraph from "@/components/Entries";

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
        {filteredEntries.map((entry) => (
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
