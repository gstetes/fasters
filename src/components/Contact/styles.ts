import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 3rem;
  padding-bottom: 3rem;

  border-bottom: 1px solid #BE9667;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  margin-top: 2rem;
`;

export const ContactContent = styled.div` 
  display: flex;
  flex-direction: column;

  height: 200px;

  h3 {
      font-size: 18px;
      font-family: 'Lato', sans-serif;

      color: #1c86a4;
  };

  .contact-items {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: none;

    height: 100px;
    
    span {
      font-size: 16px;
      font-family: 'Lato', sans-serif;
      margin-bottom: 1rem;

      color: #828282;
    };
  }

  .contact-button {
    margin-top: 5.5rem;

    h3 {
      margin-top: 2rem;
    };

    button {
      width: 270px;
      height: 50px;

      background: transparent;
      border: 1px solid #1c86a4;
      border-radius: 2px;

      cursor: pointer;

      margin-top: 1rem;

      transition: 0.3s;

      &:hover {
        border: 1px solid #BE9667;

        span {
          color: #BE9667;
        };
      };

      span {
        font-size: 18px;
        font-family: 'Lato', sans-serif;

        color: #014561;

        transition: 0.3s;
      };
    }
  };
`;

export const ContactForm = styled.form`
  flex: 1;
  margin-left: 6rem;
  display: flex;
  flex-direction: column;
  

  div {
    display: flex;
    flex-direction: column;

    margin-bottom: 1rem;

    &:focus-within {
      label {
        color: #1c86a4
      };

      input {
        border: 1px solid #e0e0e0;

        &::placeholder {
          color: #FFF;
        };
      };
    };

    label {
      font-size: 12px;
      font-family: 'Lato', sans-serif;

      color: #FFF;

      transition: 0.5s;
    };

    input {
      width: 460px;
      height: 42px;

      border-radius: 3px;
      border: 1px solid #1c86a4;

      background: transparent;

      padding-left: 1rem;

      font-size: 14px;
      font-family: 'Lato', sans-serif;

      outline: none;

      transition: all 0.3s;

      &::placeholder {
        color: #c4c4c4;
      };
    };

    textarea {
      width: 460px;
      height: 84px;

      border-radius: 3px;
      border: 1px solid #1c86a4;

      background: transparent;

      padding: 0.5rem 1rem;

      font-size: 14px;
      font-family: 'Lato', sans-serif;

      resize: none;

      outline: none;

      &::placeholder {
        color: #c4c4c4;
      };
    };
  };

  button {
    width: 460px;
    height: 50px;

    border-radius: 2px;

    background: #014561;

    color: #e5e5e5;

    font-size: 18px;
    font-family: 'Lato', sans-serif;

    cursor: pointer;

    transition: 0.3s;

    &:hover {
      background: #00648C;
      border: 1px solid #70B0C4;
    };
  };
`;