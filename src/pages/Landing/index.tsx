import { Container } from './styles';
import { MainBanner } from '../../components/MainBanner';
import { Presentation } from '../../components/Presentation';
import { NelsonPresentation } from '../../components/NelsonPresentation';
import { Qualifications } from '../../components/Qualifications';

export function Landing() {
  return (
    <Container>
      <MainBanner />
      <Presentation /> 
      <NelsonPresentation />
      <Qualifications />
    </Container>
  )
};