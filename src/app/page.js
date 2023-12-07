// Components
import Button from '@/components/Button';
import Container from '@/components/Container';

export default function Home() {
  return (
    <Container>
      <h1>Homepage</h1>
      <Button label="Go to Contact Page" href="/contact" />
    </Container>
  );
}
