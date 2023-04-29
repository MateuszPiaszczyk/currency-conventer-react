import { Form } from "./Form";
import { Clock } from "./Clock";
import { Wrapper } from "./styled";
import { Header } from "../../common/Header";
import { Container } from "../../common/Header/styled";

export const CurrencyConventerPage = () => {
  return (
    <Container>
      <Header title="💸 Przelicznik Walut/Currency Conventer" />
      <Wrapper>
        <Clock />
        <Form />
      </Wrapper>
    </Container>
  );
};
