import { Container, Section, SectionTitle } from '@/components';

import React from 'react';
import { Principles } from './components/Principles';
import { aboutData } from './helpers/data';

const AboutUs = () => {
  return (
    <Section className="bg-neutral-800 text-stone-50">
      <Container>
        <SectionTitle className="mb-12 md:mb-[72px]">Про нас</SectionTitle>
        <p
          className="mb-12 text-base font-medium
        md:text-xl md:font-normal"
        >
          Студія PlanB - це команда фахівців, які знають, наскільки важлива для
          вас гладка та доглянута шкіра. Наша студія створена, щоб ви відчували
          себе комфортно та впевнено, отримуючи найвищу якість послуг.
        </p>
        {aboutData.map((item, index) =>
          item.principles ? (
            <li key={index}>
              <Principles items={item.principles} />
            </li>
          ) : null
        )}
      </Container>
    </Section>
  );
};

export default AboutUs;
