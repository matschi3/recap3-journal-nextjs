import styled from "styled-components";

const StyledContainerFlex = styled.section`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
`;

export default function Container() {
  return StyledContainerFlex;
}
