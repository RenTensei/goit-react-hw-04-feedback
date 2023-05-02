import styled from '@emotion/styled';

export const Wrapper = styled.main`
  display: block;
  max-width: fit-content;

  padding: 40px;
  margin: 40px auto;

  text-align: center;

  background-color: #e3e6f3;
  border-radius: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  * {
    margin: 8px;
  }

  button {
    background-color: #fff;
    border: 1px solid #d5d9d9;
    border-radius: 8px;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    box-sizing: border-box;

    cursor: pointer;

    font-size: 13px;

    padding: 8px 12px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    width: 100px;
  }

  button:hover {
    background-color: #f7fafa;
  }

  button:focus {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }
`;
