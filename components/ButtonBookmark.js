import styled from "styled-components";
import Bookmark from "./svg/Bookmark.js";
import Bookmarked from "./svg/Bookmarked.js";

const StyledButtonBookmark = styled.button`
  position: absolute; //to relative entrysArticle
  top: 3px;
  right: 1px;
`;

export default function ButtonBookmark({ entry }) {
  console.log(entry);
  return (
    <StyledButtonBookmark>
      {entry.isFavorite ? <Bookmarked /> : <Bookmark />}
    </StyledButtonBookmark>
  );
}
