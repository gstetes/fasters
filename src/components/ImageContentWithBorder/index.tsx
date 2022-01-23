import { Container } from './styles';

interface ImageContentWithBorderProps {
  image: string;
};

export function ImageContentWithBorder({image}: ImageContentWithBorderProps) {
  return (
    <Container>
      <div />
      <img src={image} alt="Image" />
    </Container>
  );
};