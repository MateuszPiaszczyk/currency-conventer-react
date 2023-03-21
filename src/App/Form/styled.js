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

export const Fieldset = styled.fieldset`
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.color.clairvoyant};
  border-style: none;
`;

export const Field = styled.input`
  width: 100%;
  max-width: 620px;
  border: 1px solid ${({ theme }) => theme.color.alto};
  border-radius: 15px;
  padding: 15px;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.color.black};
  text-align: center;
`;

export const Loading = styled.p`
  color: ${({ theme }) => theme.color.black};
`;

export const Failure = styled.p`
  color: ${({ theme }) => theme.color.crimson};
`;

export const Info = styled.p`
  text-align: center;
  font-size: 12px;
`;

export const Button = styled.button`
  font-family: "Roboto" sans-serif;
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
    transition: 0.2s linear;
  }

  &:active {
    filter: brightness(120%);
    transform: scale(0.95);
  }
`;

export const Legend = styled.legend`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.clairvoyant};
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  border-radius: 15px;
  font-weight: normal;
  font-size: 24px;
`;
