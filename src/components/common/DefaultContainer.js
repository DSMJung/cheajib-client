import styled from "styled-components/native";

const DefaultContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  margin: 0 20px;
`;

export default DefaultContainer;
