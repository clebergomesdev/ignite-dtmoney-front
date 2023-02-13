import styled, { css } from "styled-components";

export interface ContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: "outlined" | "contained" | "text";
  color?: "default" | "primary" | "secondary"
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  height: 50px;
  border: 0;
  padding: 0 1.25rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;

  ${(props) =>
    props.variant === "outlined"
      ? css`
          background: transparent;
          border: 1px solid ${(props) => props.theme["green-300"]};
          color: ${(props) => props.theme["green-300"]};

          &:hover {
            background: ${(props) => props.theme["green-500"]};
            border-color: ${(props) => props.theme["green-500"]};
            color: ${(props) => props.theme.white};
            transition: background-color 0.2s, border-color 0.2s, color 0.2s;
          }
        `
      : css`
          background: ${(_) => props.color === 'default' ? props.theme["gray-700"] : props.color === 'secondary' ? props.theme["red-500"] : props.theme["green-500"]};
          color: ${(props) => props.theme["white"]};

          &:hover {
            background-color: ${(_) => props.color === 'default' ? props.theme["gray-600"] :  props.color === 'secondary' ? props.theme["red-700"] : props.theme["green-700"]};
            transition: background-color 0.2s;
          }
        `}
`;
