import { Wrapper, Header, Title, Body } from "./styled";

const Section = ({ title, body, additionalHeaderContent }) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
      {additionalHeaderContent}
    </Header>

    <Body>{body}</Body>
  </Wrapper>
);

export default Section;
