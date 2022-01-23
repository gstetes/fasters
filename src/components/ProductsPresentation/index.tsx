import { ImageContentWithBorder } from '../ImageContentWithBorder';
import { Container, Content, TextContent } from './styles';

import productImage1 from '../../assets/productImage1.png';
import productImage2 from '../../assets/productImage2.png';

export function ProductsPresentation() {
  return (
    <Container>

      <Content>
        <ImageContentWithBorder image={productImage1}/>
        <TextContent>
          <div className='title'>
            <h1>CAMISARIA</h1>
            <span>- CONFECCIONADA ARTESANALMENTE</span>
          </div>

          <div className='list'>
            <ul>
              <li>100% Algodão</li>
              <li>Monograma</li>
              <li>Slim</li>
            </ul>
            <ul>
              <li>Nacionais e Importadas</li>
              <li>Tradicionais e Esportivas</li>
              <li>Casamentos</li>
            </ul>
          </div>

          <a href="/">
            <span>Quero um orçamento</span>
          </a>
            
        </TextContent>
      </Content>

      <Content>
        <TextContent revert>  
          <div className='title'>
            <h1>ALFAIATARIA</h1>
            <span>- TOTALMENTE FEITO A MÃO SOB MEDIDA</span>
          </div>

          <div className='list'>
            <ul>
              <li>Fio Super 120 e 130</li>
              <li>Lã fria Australiana</li>
              <li>Botões Importados</li>
            </ul>
            <ul>
              <li>Ternos e Calças</li>
              <li>Paletós e Smokings</li>
              <li>Sociais e Esportivos</li>
            </ul>
          </div>

          <a href="/">
            <span>Quero um orçamento</span>
          </a>
        </TextContent>
        <ImageContentWithBorder image={productImage2}/>
      </Content>

    </Container>
  );
};