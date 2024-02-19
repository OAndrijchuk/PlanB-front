import { Container, Section, SectionTitle } from '@/components';
import { Accordion } from './components';

export default function Price() {
  return (
    <Section className="bg-price w-full py-[120px]">
      <Container>
        <SectionTitle className="mb-20 text-stone-900">Ціни</SectionTitle>
        <Accordion />
      </Container>
    </Section>
  );
}
