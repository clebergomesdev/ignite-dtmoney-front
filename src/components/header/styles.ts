import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem 0;
`;

export const Content = styled.header`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
