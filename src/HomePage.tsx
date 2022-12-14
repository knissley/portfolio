import React, { FC, useEffect } from 'react';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import NavHeader from './Navigation/NavHeader';

interface Props {
  theme: string;
  setTheme: Function;
};

const HomePage:FC<Props> = ({ theme, setTheme }) => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <header>
        <NavHeader projectPage={false} theme={theme} setTheme={setTheme} />
      </header>

      <main>
        <Hero />
        <Projects />
        <AboutMe />
      </main>
    </>
  )
};

export default HomePage;