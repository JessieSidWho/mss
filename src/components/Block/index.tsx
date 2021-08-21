import { withTranslation } from "react-i18next";
import { Container, TextWrapper, Content } from "./styles";

interface Props {
  title: string;
  content: string;
  contenttwo: string;
  t: any;
}

const Block = ({ title, content, contenttwo, t }: Props) => {
  return (
    <Container>
      <h6>{t(title)}</h6>
      <TextWrapper>
        <Content>{t(content)}</Content>
        <Content>{t(contenttwo)}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
