import { QualificationItem } from '../QualificationItem';
import { Container } from './styles';

import machineImage from '../../assets/machineImage.svg';
import medalImage from '../../assets/medalImage.svg';
import expImage from '../../assets/expImage.svg';

export function Qualifications() {
  return (
    <Container>
      <QualificationItem
        image={machineImage}
        title="QUALIDADE"
        subtitle="Camisaria e Alfaiataria 100% artesanal."
      />

      <section>
        <span></span>
      </section>

      <QualificationItem
        image={medalImage}
        title="CONFIANÇA"
        subtitle="Atendimento personalizado no escritório ou residência."
      />

      <section>
        <span></span>
      </section>

      <QualificationItem
        image={expImage}
        title="EXPERIÊNCIA"
        subtitle="Tradição e modernidade proporcionando elegância."
      />
    </Container>
  );
};