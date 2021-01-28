import styled from 'styled-components/native';
import { SafeAreaView, TouchableOpacity, TextInput, FlatList, Text, Image, View} from 'react-native';

const theme = {
  colors: {
    white: "#FFFAFF",
    offWhite: "#eff1f3",
    grey: "#303036",
    black: "#050401",
    orange: "#FC5130",
    blue: "#30BCED",
  }
}
/****** End All Sites Styles */
const Container = styled(SafeAreaView)`
  background-color: ${theme.colors.white};
  align-items: center;
  height: 100%;
`;
const HomeImage = styled(Image)`
  height: 40%;
`;
const StyledList = styled(FlatList)`
  margin-top: 30px;
`;
const Card = styled(TouchableOpacity)`
  width: 300px;
  margin: 5px auto;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
`;
const CardTitle = styled(Text)`
  font-size: 24px;

`;
const CardText = styled(Text)`
  font-size: 18px;
  color: ${theme.colors.grey};
`;
/****** End All Sites Styles */

/****** New Site Styles */
const NewSiteContainer = styled(SafeAreaView)`
  background-color: ${theme.colors.offWhite};
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const SiteInput = styled(TextInput)`
  margin: 2% 10%;
  height: 30px;
  border-width: 1px;
  border-color: black;
  background-color: rgb(250,250,250);
  padding: 5px;
`;
const NewSiteInputFields = styled(SafeAreaView)`
  width: 350px;
  border-radius: 5px;
`;
/****** End New Site Styles */

/****** Site Details Styles */
const SiteDetailsHeader = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
`;
const SiteDetailsHeaderText = styled(Text)`
  font-size: 18px;
`;
const SiteDetailsCard = styled(View)`
  border: 1px solid ${theme.colors.grey};
  width: 80%;
  margin: 20px auto;
  padding: 10px;
  border-radius: 5px;
`;
const SiteDetailsCardTitle = styled(Text)`
  font-size: 20px;
  margin: 5px auto;
`;
const SiteDetailsInfoLine = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
const SiteDetailsInfoText = styled(Text)`
  font-size: 16px;
  margin-top: 3px;
`
/****** End Site Details Styles */

export {
	NewSiteContainer,
	Container,
	HomeImage,
	theme,
	Card,
	CardText,
	CardTitle,
	SiteInput,
	StyledList,
	NewSiteInputFields,
	SiteDetailsHeader,
	SiteDetailsHeaderText,
	SiteDetailsCard,
	SiteDetailsCardTitle,
	SiteDetailsInfoLine,
	SiteDetailsInfoText
};
