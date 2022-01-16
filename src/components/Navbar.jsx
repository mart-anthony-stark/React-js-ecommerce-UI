import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import styled from "styled-components/dist/styled-components.js";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const Container = styled.div`
  height: 60px;
  color: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  color: black;
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  color: black;
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  height: 100%;
  width: 100%;
`;

const Center = styled.div`
  color: black;
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  color: black;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input /> <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Mart.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
