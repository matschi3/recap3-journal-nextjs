import Head from "next/head";
import styled from "styled-components";

const StyledHeaderStandard = styled.header`
  display: flex;
  justify-content: center;
  background-color: var(--color-foam);
`;

const StyledParagraphHeader = styled.p`
  color: var(--color-granite);
`;

export default function Header({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledHeaderStandard>
        <StyledParagraphHeader>{title}</StyledParagraphHeader>
      </StyledHeaderStandard>
    </>
  );
}
