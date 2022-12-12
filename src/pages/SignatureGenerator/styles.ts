import styled from "styled-components";

export const SignatureContainer = styled.section`
  max-width: 40rem;
  width: 100%;
  margin: 0 auto;
  padding: 4rem;

  header {
    font-weight: 800;
  }

  .propertie {
    display: flex;
    justify-content: space-between;

    .button_add_propertie {
      display: flex;
      align-items: center;
      text-align: center;
      font-size: 0.85rem;
      align-content: normal;

      color: ${(props) => props.theme["green-300"]};
    }
  }

  .clipboard_copy {
    display: flex;
    margin-top: 1rem;
    background: ${(props) => props.theme["gray-900"]};
    padding: 1rem;
    border-radius: 6px;

    input {
      width: 100%;
      border: 0;
      background: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }
  }

  button {
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
  }

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input,
    select,
    textarea {
      width: 100%;
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};
      padding: 1rem;
      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }
  }
`;
