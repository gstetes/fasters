import { Container } from './styles';

interface DecoratedTitleProps {
  label: string;
  white?: boolean;
};

export function DecoratedTitle({label, white = false}: DecoratedTitleProps) {
  return (
    <Container white={white}>
      <h2>{label}</h2>
      <div/>
    </Container>
  );
};