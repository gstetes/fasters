import { Container } from './styles';
import { MainBanner } from '../../components/MainBanner';
import { Presentation } from '../../components/Presentation';
import { NelsonPresentation } from '../../components/NelsonPresentation';
import { Qualifications } from '../../components/Qualifications';
import { Conditions } from '../../components/Conditions';
import { ProductsPresentation } from '../../components/ProductsPresentation';

export function Landing() {
  return (
    <Container>
      <MainBanner />
      <Presentation /> 
      <NelsonPresentation />
      <Qualifications />
      <Conditions />
      <ProductsPresentation />
    </Container>
  )
};