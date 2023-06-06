import styled from "styled-components";

const StyledContainerFlex = styled.section`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
`;

export default function Container({ direction, align, children }) {
  return (
    <StyledContainerFlex direction={direction} align={align}>
      {children}
    </StyledContainerFlex>
  );
}
