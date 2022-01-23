import { Container, DepoimentContainer, Carousel } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { DecoratedTitle } from '../DecoratedTitle';

import williamImage from '../../assets/williamImage.png';
import domingosImage from '../../assets/domingosImage.png';
import joseImage from '../../assets/joseImage.png';
import custodioImage from '../../assets/custodioImage.png';
import { useState } from 'react';

const images = [
  williamImage,
  domingosImage,
  joseImage,
  custodioImage
];

const depoiments = [
  <>
    <p>
    “Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de meu pai, que já têm uma história de décadas com o querido Renee.
    </p>
    <p>
      O excelente atendimento antes e pós venda e a alta qualidade dos materiais usados colocam a Renee Trajar em um patamar acima dos demais do ramo.” 
    </p>
  </>,
  <>
    <p>
      “Seu corte tanto de camisas, bem como de ternos são impecáveis, muitos dos meus amigos tem elogiado a vestimenta.
    </p>
    <p>
      Recomendo para quem gosta de perfeição. Estamos nos servindo do trabalho do Renee Trajar há mais de vinte anos.”
    </p>
  </>,
  <>
    <p>
      “Tenho a honra de afirmar que enquanto nossas vidas perdurarem o meu conceito é sempre melhor em relação ao Renee Trajar, sua pessoa, ao profissional
    </p>
    <p>
      competente e idôneo, sempre pontual, atencioso e preocupado em atender da melhor maneira os anseios de seus clientes, incluindo este signatário.”
    </p>
  </>,
  <>
    <p>
      “Conheço o excelente e qualificado trabalho do Renee Trajar e sua equipe há décadas. Para camisas e ternos, o Renee é imbatível, sempre com preços justos, produtos de excelente
    </p>
    <p>
      qualidade e especialmente tudo é feito com muito cuidado e qualidade. Cumpre os prazos com atendimento de alto nível. O Renee trabalha com perfeição nos detalhes.”  
    </p>
  </>  
];

const names = [
  'William H. M. Garey',
  'Domingos Orestes Chiomento',
  'José Mauro Marques',
  'Custódio Pereira',
];

const jobs = [
  <h3>Advogado <div/> Nelson Garey Advogados Associados</h3>,
  <h3>DOC Contabilidade Empresarial</h3>,
  <h3>Advogado</h3>,
  <h3>Membro do CONSOCIAL - Conselho Superior de Responsabilidade Social da FIESP-SP</h3>,
];

export function DepoimentsCarousel() {
  const [current, setCurrent] = useState(0);

  function handleNextDepoiment() {
    setCurrent(current === 3 ? 0 : current + 1);
  };

  function handlePreviousDepoiment() {
    setCurrent(current === 0 ? 3 : current - 1);
  };

  return (
    <Container>
      <DecoratedTitle label='Depoimentos' white/>
      <Carousel>
        <FiChevronLeft
          color='#BE9667'
          size={40}
          onClick={handlePreviousDepoiment}
        />

        <DepoimentContainer>
          <img src={images[current]} alt="Image" />
          {depoiments[current]}
          <span>{names[current]}</span>
          {jobs[current]}
        </DepoimentContainer>

        <FiChevronRight
          color='#BE9667'
          size={40}
          onClick={handleNextDepoiment}
        />
      </Carousel>
      <div className="carousel-points">
        {names.map((_, index) => (
          <div className={index === current ? 'carousel-item active' : 'carousel-item'} />
        ))}
      </div>
      
    </Container>
  );
};