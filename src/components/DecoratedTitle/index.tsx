import { Container } from './styles';

interface DecoratedTitleProps {
  label: string;
};

export function DecoratedTitle({label}: DecoratedTitleProps) {
  return (
    <Container>
      <h2>{label}</h2>
      <div/>
    </Container>
  );
};