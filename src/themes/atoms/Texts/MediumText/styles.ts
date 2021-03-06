import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: ${(props) => props.theme.fontSize.middle}px;
  font-family: ${(props) => props.theme.fontFamily.medium};
  text-align: center;
  text-transform: ${(props) => (props.capitalize ? 'capitalize' : 'none')};
`;
