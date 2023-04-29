import Section from "./Section";
import { Description, Image, Strong, Title, Wrapper, Youcode } from "./styled";
import image from "./assets/profile.webp";
import { Header } from "../../common/Header";
import { Container } from "../../common/Header/styled";

export const AuthorPage = () => (
  <Container>
    <Header title="o Autorze" />
    <Section
      title="Mateusz Piaszczyk"
      body={
        <>
          <Wrapper>
            <Image src={image} alt="Mateusz Piaszczyk" />
            <Description>
              <Title>Opis/Doświadczenie:</Title>
              Jestem <Strong>grafikiem komputerowym</Strong>, a także mam
              nadzieje przyszłym <Strong>front-end developerem</Strong> 😊.
              Swoje <Strong>doświadczenie w projektowaniu</Strong> zdobyłem
              dzięki współpracy takimi podmiotami jak: <b>studia filmowe</b>,{" "}
              <b>fundacje</b>, <b>sklepy</b>,{" "}
              <b>salon wirtualnej rzeczywistości</b>{" "}
              <i>
                (w którym pracowałem w latach 2018-2020 jako grafik /
                webmaster).
              </i>
              <br />
              <Title>Obecnie:</Title>
              Nauke programowania w React.js, pod okiem ekipy{" "}
              <Youcode>Youcode Team</Youcode> zacząłem na początku roku 2023.
            </Description>
          </Wrapper>
        </>
      }
    />
  </Container>
);
