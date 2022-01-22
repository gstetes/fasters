import { Container, Content, ImageContainer, TextContent, ImageContent } from './styles';

import photo1 from '../../assets/photo1.jpeg';
import photo2 from '../../assets/photo2.png';

export function NelsonPresentation() {
  return (
    <Container>
      <Content>
        <TextContent>
          <p>
            "Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é impecável em todos os detalhes, desde a costura ao caimento. O Renee tem uma equipe de mestre!"
          </p>
          <h3>Nelson Garey</h3>
          <span>
            Advogado
            <div />
            Nelson Garey Advogados Associados
          </span>
        </TextContent>

        <ImageContent>
          <div/>
          <img src={photo2} alt="Photo 2" />
        </ImageContent>
      </Content>
      <ImageContainer>
        <img src={photo1} alt="Photo 1" />
      </ImageContainer>
    </Container>
  );
};