import styled from 'styled-components/native';
import { SafeAreaView, View } from 'react-native';

const theme = {
  colors: {
    white: "#FFFAFF",
    grey: "#303036",
    black: "#050401",
    orange: "#FC5130",
    blue: "#30BCED",
  }
}
const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.blue};
`;
const Card = styled(View)`
  width: 80%;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 5px;

`;



export {Container, theme, Card};
