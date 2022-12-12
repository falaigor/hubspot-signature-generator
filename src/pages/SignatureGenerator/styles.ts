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
    align-items: center;

    button {
      display: flex;
      align-items: center;
      text-align: center;
      font-size: 0.85rem;
      align-content: normal;
      background: transparent;
      border: 0;
      padding: 0.5rem;
      cursor: pointer;
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
