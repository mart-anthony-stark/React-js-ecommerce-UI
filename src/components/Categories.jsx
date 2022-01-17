import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    padding: "0px",
    flexDirection: "column",
  })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => {
        return <CategoryItem item={category} key={category.title} />;
      })}
    </Container>
  );
};
export default Categories;
