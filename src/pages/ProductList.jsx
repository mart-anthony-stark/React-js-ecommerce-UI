import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const Container = styled.div``;
const Title = styled.h1`
  padding: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({
    margin: "0 10px",
    display: "flex",
    flexDirection: "column",
  })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  ${mobile({
    marginRight: "0px",
  })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
  ${mobile({
    margin: "10px 0px",
  })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const category = location.pathname.split("/")[2];

  const handleFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled selected>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>pink</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest" selected>
              Newest
            </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
