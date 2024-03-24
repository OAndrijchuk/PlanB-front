import React from 'react';
import { ButtonAppointment, Container, Section } from '@/components';

const Hero = () => {
  return (
    <Section
      id="hero"
      className="bg-hero pt-36 pb-6  text-stone-900  
      md:pt-[294px] md:pb-[198px]
      xl:pt-32 xl:pb-28"
    >
      <Container className="">
        <h1
          className="mb-2 text-[2rem] font-semibold leading-8 
        md:mb-8 md:max-w-[35rem] md:text-[4rem] md:leading-[3.5rem]"
        >
          Лазерна та електро епіляція
        </h1>
        <p
          className="mb-[8.5rem] leading-5 
        md:mb-[7.38rem] md:max-w-[26rem] md:text-[1.75rem] md:leading-8
        xl:mb-[10.5rem]"
        >
          Видалення не бажаного волосся ефективно та без болю
        </p>
        <ButtonAppointment type="button">Записатися</ButtonAppointment>
      </Container>
    </Section>
  );
};

export default Hero;
