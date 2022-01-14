import styled from "styled-components";
import { Facebook, Twitter, Instagram, Pinterest } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p``;
const SocialContainer = styled.div``;
const SocialIcon = styled.div``;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Mart.</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quas dolorem qui inventore, beatae ipsa officia ipsum quos nesciunt
          tenetur quibusdam veniam nemo hic.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
    </Container>
  );
};

export default Footer;
