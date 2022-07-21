import styled from "styled-components/native";

const DefaultButton = ({
  disable = false,
  onPress,
  title = "",
  isFill = false,
}) => {
  return (
    <ButtonContainer onPress={onPress} disable={disable} isFill={isFill}>
      <Title isFill={isFill}>{title}</Title>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme, isFill }) =>
    isFill ? theme.main : theme.white};
  border: 1px solid ${({ theme }) => theme.main};
  width: 100%;
  height: 49px;
  padding: 0 20px;
  align-items: center;
  border-radius: 8px;
  opacity: ${({ disable }) => (disable ? 0.5 : 1)};
  display: flex;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme, isFill }) => (isFill ? theme.white : theme.main)};
`;

export default DefaultButton;
