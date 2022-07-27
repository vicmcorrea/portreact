import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiBarbarian } from "react-icons/gi";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <GiBarbarian size="3rem" /> <span>Victor M. Correa</span>
        </a>
      </Link>
    </Div1>
    
      <Div3>
        <SocialIcons href="https://github.com/vicmcorrea">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/jvictormarinhocorrea/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        
      </Div3>
    </Container>
);
export default Header;
