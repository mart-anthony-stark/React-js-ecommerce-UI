import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background: teal;
  color: white;\
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export default function Announcement() {
  return <Container>Super Deal!</Container>;
}
