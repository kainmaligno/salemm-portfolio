import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.jpg";
import iron from "../images/iron.jpg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-53 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Salemm.
        </BigTitle>
        <Subtitle>
          I'm a fullstack web developer, I focus on creating web applications
          that are functional and provide a pleasant user experience for its
          clients.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Vampires"
            link="https://kainmaligno.github.io/Vampires/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is my entry to code at IronHack where we were expected
            to create a full game from scratch. #JavaScript, #Canvas. You use
            vampire Demitri to defeat a horde of mummies and zombies.
          </ProjectCard>
          <ProjectCard
            title="Guerra de puestos"
            link=" https://github.com/kainmaligno/guerra"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            App Node.js, JavaScript, Handlebars, Express, MongoDb. Users get to
            share and recommend a food stand to others with a description,
            photo, and location on the map
          </ProjectCard>
          <ProjectCard
            title="Poder Mexico"
            link=" https://github.com/kainmaligno/PoderMexico"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            MERN. A tool to present small businesses to the digital world, fight
            large corporations, and let the customer decide #Mongo #Express
            #React #Node #JavaScript
          </ProjectCard>
          <ProjectCard
            title="Rick and morty"
            link="https://bitbucket.org/salemm2407/back-test/src/master/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            This Rick and Morty app will let you view all characters and keep
            some for yourself. #Mongo #Express #React #Node #JavaScript
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={iron} alt="second chance" />
          <AboutSub>Why did you do Ironhack?</AboutSub>
        </AboutHero>
        <AboutDesc>
        I joined Ironhack to explore my interest in problem-solving and to develop technical skills that I could apply to tangible projects. My soft skills: Communication, Self-Starter, Transparency, Time Management, Organization
        </AboutDesc>
        <br />
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
          There is a saying that mentions that the only way to be immortal is to leave a mark

          </AboutSub>
        </AboutHero>
        <AboutDesc>
        I would like to continue learning until I'm asleep. I have the best superpower of all...the will! I was born to motivate and make others grow. If I could, I would be an anti-hero, kind of Wolverine or Ghostrider. I'm a software engineer based in Mexico City. I enjoy web development, video games, eclectic music, and keeping up with technology. You know the way you feel when you see a picture of 300 spartans and feel powerful? That's how you must feel every day!
        </AboutDesc>
        <br />
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> in{" "}
            <a>s.e.jugr@gmail.com</a> or find me on other platforms:
            <br />{" "}
            <a href="https://www.linkedin.com/in/salvador-emmanuel-ju%C3%A1rez-granados-13604a117/">
              Linkedin
            </a>{" "}
            {" "}
            {/* <a href="https://www.instagram.com/salemm_king/?hl=es-la">
              Instagram
            </a>{" "} */}
            {/* & <a href="http://www.facebook.com/tylerkain.nomine">Facebook</a> */}
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{" "}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
            Github Repository
          </a>
          . Made by <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
