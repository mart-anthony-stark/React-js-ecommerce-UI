import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import styled from "styled-components/dist/styled-components.js";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "10px 0px",
  })}
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
  ${mobile({
    display: "none",
  })}
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
  ${mobile({
    width: "50px",
  })}
`;

const Center = styled.div`
  color: black;
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "24px",
  })}
`;

const Right = styled.div`
  color: black;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  ${mobile({
    flex: 2,
    justifyContent: "center",
    gap: "20px",
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    fontSize: "12px",
    marginLeft: "0px",
  })}
`;

export default function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Mart.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <Link to="/cart" style={{ color: "black" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}
