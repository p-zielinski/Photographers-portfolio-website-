import { About, Description } from "../styles";
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
import { useEffect } from "react";

const FaqSection = () => {
  const [element, controls] = useScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial={"hidden"}
    >
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title={"What do we offer?"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, sit.
            </p>
          </div>
        </Toggle>
        <Toggle title={"Daily schedule"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, sit.
            </p>
          </div>
        </Toggle>
        <Toggle title={"How did we start"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, sit.
            </p>
          </div>
        </Toggle>

        <Toggle title={"Methods of payment"}>
          <div layout className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, sit.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 0.11rem 0;
    }
  }
  h4 {
    font-size: 2rem;
  }
`;

export default FaqSection;
