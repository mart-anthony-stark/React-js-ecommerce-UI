import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import fashionImg from "../assets/fashion-girl1.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  width: 50px;
  height: 50px;
  background: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #${(props) => props.background};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 80px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide background="f5fafd">
          <ImgContainer>
            <Image src={fashionImg} />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>
              Don't compromise on style! Get flat 30% off for new arrivals.
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide background="fcf1ed">
          <ImgContainer>
            <Image src={fashionImg} />
          </ImgContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>
              Don't compromise on style! Get flat 30% off for new arrivals.
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide background="fbf0f4">
          <ImgContainer>
            <Image src={fashionImg} />
          </ImgContainer>
          <InfoContainer>
            <Title>POPULAR SALE</Title>
            <Desc>
              Don't compromise on style! Get flat 30% off for new arrivals.
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
