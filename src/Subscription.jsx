import React from "react";
import styled from "styled-components";
import { device } from "./device";

const Article = styled.article`
  box-shadow: 2px 4px 24px rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  @media ${device.mobileL} {
    max-width: 61.8vw;
    margin: auto;
  }
  @media ${device.laptopL} {
    margin: auto;
  }
`;

const Section = styled.section`
  height: auto;
  background-color: #fff;
  padding: 2rem 1rem;

  &#Community {
    border-radius: 0.5rem 0.5rem 0 0;
  }
  &#Payment {
    background-color: #252627;
    @media ${device.mobileL} {
      flex-grow: 1;
      @media ${device.mobileL} {
        border-radius: 0 0 0 0.5rem;
      }
    }
  }
  &#Why {
    background-color: #39aff4;
    border-radius: 0 0 0.5rem 0.5rem;
    @media ${device.mobileL} {
      border-radius: 0 0 0.5rem 0;
      flex-grow: 1;
    }
  }
`;

const Div = styled.div`
  @media ${device.mobileL} {
    display: flex;
  }
`;

const H1 = styled.h1`
  font-weight: 900;
  color: #39aff4;
  font-size: 3rem;
  margin: 0 0 1rem;
`;

const DollarPer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 1rem;
`;
const Dollar = styled.h2`
  font-weight: 500;
  font-size: 2rem;
  display: inline;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0.5rem 0 0;
`;
const Per = styled.span`
  color: rgba(255, 255, 255, 0.75);
`;

const Button = styled.button`
  background: linear-gradient(90deg, #00fff0 0%, #0083fe 100%);
  box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.35);
  border-radius: 8px;
  border: none;
  width: 100%;
  height: 2.5rem;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  font-weight: 600;
`;

const Ul = styled.ul`
  padding: 0;
`;
const Li = styled.li`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  list-style: none;
  margin-bottom: 0.5rem;
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) =>
    props.primary ? "#0083FE" : " rgba(255, 255, 255, 0.90)"};
  margin: 0 0 1rem 0;
`;

const P = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${(props) =>
    props.primary ? "#888b8e" : " rgba(255, 255, 255, 0.90)"};
`;

const Subscription = () => {
  return (
    <Article>
      <Section id="Community">
        <H1>Join our community</H1>
        <H3 primary>30 day, hassle-free money back guaranteee</H3>
        <P primary>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for a any developer who are serious about honing
          their skills
        </P>
      </Section>
      <Div>
        <Section id="Payment">
          <H3>Monthly Subscriptions</H3>
          <DollarPer>
            <Dollar>$29</Dollar>
            <Per>per month</Per>
          </DollarPer>
          <P>Full access for less than $1 a day</P>
          <Button>sign up</Button>
        </Section>
        <Section id="Why">
          <H3>Why Us</H3>
          <Ul>
            <Li>Tutorials by industry experets</Li>
            <Li>Peer & expert code review</Li>
            <Li>Coding exercises</Li>
            <Li>access to our GitHub repos</Li>
            <Li>Community forum</Li>
            <Li>Flashcard decks</Li>
            <Li>New videos every week</Li>
          </Ul>
        </Section>
      </Div>
    </Article>
  );
};

export default Subscription;
