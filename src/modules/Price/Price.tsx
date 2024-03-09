import { Container, Section, SectionTitle } from '@/components';
import { Accordion } from './components';

export default function Price() {
  return (
    <Section className="bg-price w-full py-[120px] md:py-[144px]">
      <Container>
        <SectionTitle className="mb-20 md:mb-[72px] text-stone-900">
          Ціни
        </SectionTitle>
        <Accordion />
      </Container>
    </Section>
  );
}
