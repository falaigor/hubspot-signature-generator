import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: 0;
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0.7rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-700"]};
    transition: background-color 0.2s;
  }
`;
