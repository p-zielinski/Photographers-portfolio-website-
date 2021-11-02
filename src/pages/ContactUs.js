//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      exit={"exit"}
      initial={"hidden"}
      animate={"show"}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium cupiditate deserunt minima neque nesciunt odit quia
            quisquam veritatis. Aliquid beatae dignissimos distinctio natus
            quidem, rerum totam vero. Animi, doloribus voluptates!5
          </motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send us a message</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  background: white;
  padding: 5rem 10rem;
  color: #363535;
  min-height: 90vh;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #363535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
