import styled from "styled-components";
import Bookmark from "./svg/Bookmark.js";
import Bookmarked from "./svg/Bookmarked.js";

const StyledButtonBookmark = styled.button`
  position: absolute; //to relative entrysArticle
  top: 3px;
  right: 1px;
`;

export default function ButtonBookmark({ entry, handleBookmark }) {
  return (
    <StyledButtonBookmark
      onClick={() => {
        handleBookmark(entry.id);
        console.log(entry.id);
      }}
    >
      {entry.isFavorite ? <Bookmarked /> : <Bookmark />}
    </StyledButtonBookmark>
  );
}
