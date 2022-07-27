import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome!
        </SectionTitle>
        <SectionText>
        Enthusiastic and hard-working person with excellent problem solving skills and always interested in learning the latest technologies available. I excel working in collaborative and fast paced environments. Motivated to constantly improve my skills and grow professionally.
        </SectionText>
        <a  download href="../resources/VICTORMCORREA.pdf" > <Button >CV</Button> </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;