import styled, { css } from "styled-components";

export const LabelText = styled.span`
  display: inline-block;
  width: 100%;
  max-width: 200px;
  border-radius: 15px;
  padding: 0;

  ${({ important }) =>
    important &&
    css`
     color: ${({ theme }) => theme.color.crimson};
     border: none;
     padding: 0;
    `}
`;

export const Field = styled.input`
  width: 100%;
  max-width: 620px;
  border: 1px solid #dadadae6;
  border-radius: 15px;
  padding: 15px;
`;

export const Info = styled.p`
    text-align: center;
    font-size: 12px;
`;

export const Button = styled.button`
    font-family: 'Roboto' sans-serif;
    width: 100%;
    padding: 15px;
    background-color: ${({ theme }) => theme.color.curiousBlue};
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
      filter: brightness(110%);
    }

    &:active {
      filter: brightness(120%);
    }
`;