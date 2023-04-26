import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 620px;
  padding: 0 20px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 5px 0px 50px 0px ${({ theme }) => theme.color.clairvoyant};
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.color.clairvoyant};
`;
