import { Container } from './styles';
import { MainBanner } from '../../components/MainBanner';
import { Presentation } from '../../components/Presentation';

export function Landing() {
  return (
    <Container>
      <MainBanner />
      <Presentation /> 
    </Container>
  )
};