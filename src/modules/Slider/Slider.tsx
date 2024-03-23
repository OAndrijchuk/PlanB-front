import { Container, Section, SectionTitle } from '@/components';
import { SliderComponent } from './components';

export default function Slider() {
  return (
    <Section className="md:py-[144px] bg-[#202020] ">
      <Container>
        <SectionTitle className="md:mb-[72px]">Відгуки</SectionTitle>
        <SliderComponent />
      </Container>
    </Section>
  );
}
