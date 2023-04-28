import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 4px ${({ theme }) => theme.color.alto};
  margin: 10px 0;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const Body = styled.div`
  padding: 20px;
`;
