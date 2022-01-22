import { ReactNode } from 'react';
import { Container } from './styles';

interface QualificationItemProps {
  image: string;
  title: string;
  subtitle: string;
};

export function QualificationItem({ image, title, subtitle }: QualificationItemProps) {
  return (
    <Container>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </Container>
  );
};